/* eslint-disable no-undef */
import { useState, useRef } from 'react'
import { Input, message } from 'antd'
import axios from 'axios'

interface props {
  selection: any
  onResponse: () => void
}

function ChatBox ({ selection, onResponse }: props): JSX.Element {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const responsesRef = useRef([])

  const sendMessage = (role: string, content: string): void => {
    const newMessage = {
      role,
      content,
      timestamp: Date.now()
    }

    responsesRef.current.push(newMessage)

    setInputValue('')

    if (role === 'user') {
      const userMessages = responsesRef.current.filter((msg) => msg.role === 'user').map((msg) => ({
        role: msg.role,
        content: msg.content
      }))

      const fields = selection
      console.log("🚀 ~ file: ChatBox.tsx:35 ~ sendMessage ~ fields:", fields)
      const messages = [{ role: 'system', content: fields }, ...userMessages]
      setLoading(true)
      axios
        .post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization:
                'Bearer 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'
            }
          }
        )
        .then((response) => {
          console.log(response.data)
          const newResponse = response.data.choices[0].message.content
          responsesRef.current.push({
            role: 'assistant',
            content: newResponse,
            timestamp: Date.now()
          })
          onResponse(responsesRef.current)
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
          setLoading(false)
          setError(error.message)
          message.error(`Something went wrong. Please try again. Error message: ${error.message}`)
        })
    }
  }

  return (
    <div style={{ paddingInline: 16, marginTop: 8 }}>
      <>
        <Input.Search
          placeholder='Type your message here'
          enterButton='send'
          loading={loading}
          style={{ backgroundColor: '#5EA496', borderRadius: '12px 0 0 12px' }}
          inputMode='search'
          allowClear
          size='large'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSearch={(value) => sendMessage('user', value)}
        />
        {error && <div className='error'>{error}</div>}
      </>
    </div>
  )
}

export default ChatBox
