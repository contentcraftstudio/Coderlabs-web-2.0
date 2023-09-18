import React, { useState, useEffect, useRef } from 'react'
import { Button, Form, Input, Skeleton, Typography } from 'antd'
import { motion } from 'framer-motion'
import { useRequest } from 'ahooks'
import HTMLRenderer from 'react-html-renderer'
import axios from 'axios'

function ChatAssistant () {
  const [form] = Form.useForm()
  const [responses, setResponses] = useState()
  // const [data, setData] = useState([])
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

  const { loading, run } = useRequest(
    async params =>
      await axios.post('https://cors-anywhere.herokuapp.com/https://node-ai-9d3892bd650a.herokuapp.com/ai', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        }
      }),
    {
      manual: true,
      onError (e) {
        const mgs = e.response?.data
        console.log(mgs)
      },
      onSuccess: ({ data }) => {
        console.log('🚀 ~ file: ChatAssistant.tsx:29 ~ ChatAssistant ~ data:', data)
        setResponses(data?.choices[0]?.message?.content)
      }
    }
  )

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

  const onFinish = (values: any) => {
    console.log('Success:', values)
    run({
      about: values.about,
      link: values.link,
      cta: values.cta
    })
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeOut', duration: 3 }}
        style={{ display: 'flex', height: screenSize.width <= 700 ? '90vh' : '98vh', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: screenSize.width <= 700 ? 40 : 10 }}
      >
        <div className='chat-messages-container' style={{ flex: 1, overflowY: 'auto', padding: '6px 12px' }}>
          <div>
            {/* Web View */}
            {loading ? <Skeleton active style={{ marginBlockEnd: 100, width: '90%' }} /> : <HTMLRenderer html={responses} />}
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <Form
            layout='inline'
            form={form}
            onFinish={onFinish}
            style={{ maxWidth: 'none', flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Form.Item name='about'>
              <Input placeholder='about' style={{ width: (screenSize.width / 2) / 3.8 }} />
            </Form.Item>
            <Form.Item name='link'>
              <Input placeholder='link ' style={{ width: (screenSize.width / 2) / 3.8 }} />
            </Form.Item>
            <Form.Item name='cta'>
              <Input placeholder='input placeholder' style={{ width: (screenSize.width / 2) / 4 }} />
            </Form.Item>
            <Form.Item>
              <Button htmlType='submit' color='#F3A44D'>Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </motion.div>
    </>
  )
}

export default ChatAssistant
