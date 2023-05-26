import React, { useState, useEffect, useRef } from 'react'
import { List, Typography } from 'antd'
import ChatBox from './ChatBox'

import { CardPop } from './CardPop'

function Chat () {
  const [responses, setResponses] = useState([])
  const [data, setData] = useState([])
  console.log('🚀 ~ file: Chat.tsx:10 ~ Chat ~ data:', data)
  const listRef = useRef(null)
  useEffect(() => {
    fetch('https://cdn.contentful.com/spaces/8rxe1sxxuabo/environments/master/entries?content_type=coderlabs', {
      headers: {
        Authorization: 'Bearer wIvUEV88zWPT7HNKdiSEfLFWlOgq8i5Uvpp8LdxNv5s'
      }
    })
      .then((response) => response.json())
      .then((result) => setData(result.items))
      .catch((error) => console.error(error))
  }, [])

  const handleChatResponse = (item: any) => {
    setResponses((prevResponses): any[] => [ ...item])
  }

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [responses])

  return (
    <>
      <div style={{ display: 'flex', height: '98vh', flexDirection: 'column', justifyContent: 'space-around' }}>
        <div className='chat-messages-container' style={{ flex: 1, overflowY: 'auto', padding: '6px 12px' }} ref={listRef}>
          <div>
            <List
              split={false}
              header={
                <div style={{ position: 'fixed', zIndex: 2, backgroundColor: 'white', top: 0, paddingTop: 16, width: '100%' }}>
                  <Typography.Title style={{ paddingInline: 16 }}> Coderlabs Ai</Typography.Title>
                </div>

              }
              locale={{ emptyText: ' ' }}
              style={{ paddingTop: '5%' }}
              key={responses.length}
              dataSource={responses.filter((msg) => msg?.role !== 'system')}
              renderItem={(item) => (
                <List.Item
                  style={{
                    flexDirection: 'row',
                    justifyContent: item.role === 'assistant' ? 'flex-start' : 'flex-end'
                  }}
                >
                  <CardPop
                    role={item?.role}
                    content={item?.content}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
        <ChatBox selection={data[0]?.fields.prompt} onResponse={handleChatResponse} />
      </div>
    </>
  )
}

export default Chat
