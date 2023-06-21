import { Card, Image, Text, Badge, Button, Group, Flex } from '@mantine/core'
const NewsCard = (news)=> {
    return  <Card shadow="sm" padding="lg" radius="md" withBorder>
    <Card.Section>
      <Image
       // src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
       src={news.cover} 
       height={160}
        alt={news.title}
      />
    </Card.Section>
    <Flex direction = {'column'}>
        <Title order ={3}>{news.title}</Title>
        <Text key={index}>{details}</Text>
    </Flex>
    </Card>
}

export default NewsCard