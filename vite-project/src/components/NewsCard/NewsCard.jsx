import { Card, Image, Text, Badge, Button, Group, Flex, Title } from '@mantine/core'
import React, { useEffect, useState } from 'react'

function NewsCard() {
    const [newsData, setNewsData] = useState([])
    const [dataIsFetched, setDataIsFetched] = useState(false)

    const API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY
    const SEARCH_TERM = 'news'
    const URL = `https://content.guardianapis.com/search?q=${SEARCH_TERM}&api-key=${API_KEY}&page-size=30&show-fields=thumbnail&show-blocks=all`


    const fetchNewsHandler = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setNewsData(data.response.results)
        setDataIsFetched(true)
    }

    useEffect(() => {
        fetchNewsHandler()
    }, [])

    return (
        dataIsFetched && (
         
            <div>
                <h3 className='section-header' align="center">All News</h3>
                <div className="news-grid" >
                    {newsData.map((each) => {
                        return (
                          
                                <Card className="each-news-grid" shadow="sm" padding="lg" radius="md">
                                
                                   <Card.Section gap="lg" >  
                                    <img src={each.fields.thumbnail} height={160} />
                                    </Card.Section>
                                    <span>
                                        <h4>{each.webTitle}</h4>
                                        <small className="small-text">
                                            {each.blocks.body[0].bodyTextSummary.substring(0, 124) +
                                                "..."}
                                        </small>
                                    </span>
                                </Card>
                              
                        );
                    })}
                </div>
            </div>
           
        )
    )
}

export default NewsCard
