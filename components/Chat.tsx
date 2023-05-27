import React, { useState, useEffect, useRef } from 'react'
import { List, Skeleton } from 'antd'
import ChatBox from './ChatBox'
import { motion } from 'framer-motion'
import { CardPop } from './CardPop'

function Chat () {
  const [responses, setResponses] = useState([])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

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

  useEffect(() => {
    function handleResize () {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleChatResponse = (item: any) => {
    setResponses((): any[] => [...item])
  }

  const loadingQuery = (item: boolean): void => {
    setLoading(item)
  }

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [responses])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeOut', duration: 3 }}
        style={{ display: 'flex', height: screenSize.width <= 700 ? '90vh' : '98vh', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: screenSize.width <= 700 ? 40 : 10 }}
      >
        <div className='chat-messages-container' style={{ flex: 1, overflowY: 'auto', padding: '6px 12px' }} ref={listRef}>
          <div>
            <List
              split={false}
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
            {loading ? <Skeleton active /> : null}
          </div>
        </div>
        <ChatBox selection={data[0]?.fields} onResponse={handleChatResponse} onLoading={loadingQuery} />
      </motion.div>
    </>
  )
}

export default Chat
