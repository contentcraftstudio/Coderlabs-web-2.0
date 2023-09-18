/* eslint-disable no-undef */
import { useState, useRef } from 'react'
import { Input, message, ConfigProvider } from 'antd'
import axios from 'axios'

interface selction {
  model: string
  prompt: string
  temperature: number
  max_tokens: number
}
interface props {
  selection: selction
  onResponse: () => void
  onLoading: (item: boolean) => void
}

function ChatBox ({ selection, onResponse, onLoading }: props): JSX.Element {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const responsesRef = useRef([])

  function buildLastQuery (content: string, response: string) {
    const postData = {
      fields: {
        content: { 'en-US': content },
        response: { 'en-US': response }
      },
      metadata: {
        tags: []
      }
    }

    const config = {
      headers: {
        'Content-Type': 'application/vnd.contentful.management.v1+json',
        Authorization: 'Bearer CFPAT-fKiWMmszBuloITj0wuE2LZH2c46tGaLtswEXsJulQFU',
        'X-Contentful-Content-Type': 'aiQuery'
      }
    }

    // Make the request using axios
    axios.post('https://api.contentful.com/spaces/8rxe1sxxuabo/environments/master/entries', postData, config)
      .then(response => {
        // Handle successful response
        console.log(response.data)
      })
      .catch(error => {
        // Handle error
        console.error(error)
      })
  }

  const sendMessage = (role: string, content: string): void => {
    const newMessage = {
      role,
      content,
      timestamp: Date.now()
    }
    onLoading(true)
    responsesRef.current.push(newMessage)

    setInputValue('')

    if (role === 'user') {
      const userMessages = responsesRef.current.filter((msg) => msg.role === 'user').map((msg) => ({
        role: msg.role,
        content: msg.content
      }))
      // onResponse([...userMessages])

      const fields = selection?.prompt
      const messages = [{ role: 'system', content: fields }, ...userMessages]
      setLoading(true)
      axios
        .post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: selection.model,
            messages,
            temperature: selection?.temperature,
            max_tokens: selection?.max_tokens
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
          buildLastQuery(content, newResponse)
          onResponse(responsesRef.current)
          setLoading(false)
          onLoading(false)
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
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#5EA496'
        },
        components: {
          Input: {
            colorBgContainer: '#FAFAFA'
          }
        }
      }}
    >
      <div style={{ paddingInline: 16, marginTop: 8 }}>
        <>
          <Input.Search
            id='ai__coderlabs'
            placeholder='Type your message here'
            enterButton='Send'
            loading={loading}
            style={{ backgroundColor: '#5EA496', borderRadius: '12px 0 0 12px' }}
            inputMode='text'
            allowClear
            size='large'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onSearch={(value) => sendMessage('user', value)}
          />
          {error && <div className='error'>{error}</div>}
        </>
      </div>
    </ConfigProvider>
  )
}

export default ChatBox
