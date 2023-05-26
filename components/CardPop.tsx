import { Card } from 'antd'

interface CardProps {
  role: string
  content: string
}

export function CardPop (props:CardProps) {
  const { content, role } = props
  return (
    <Card
      style={{
        backgroundColor: role === 'assistant' ? '#C7C7C7' : '#C1DCD7',
        fontSize: 14,
        fontWeight: 400,
        color: role === 'assistant' ? '#444444' : '#4C7B72'
      }}
    >
      {content}
    </Card>
  )
}
