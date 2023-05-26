import { useState, useEffect } from 'react'
import { List, Radio } from 'antd'

function ContentfulList ({ onSelect }): JSX.Element {
  const [data, setData] = useState([])
  console.log(data)
  const [selectedItem, setSelectedItem] = useState(null)

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

  const handleSelect = ({ item }: { item: any }) => {
    setSelectedItem(item)
    onSelect(item)
  }

  return (
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          onClick={() => handleSelect({ item })}
          style={{ backgroundColor: selectedItem === item ? '#f0f0f0' : 'transparent' }}
        >
          <Radio checked={selectedItem === item} />
          <List.Item.Meta title={item.fields.name} description={item.fields.about} />
        </List.Item>
      )}
    />
  )
}

export default ContentfulList
