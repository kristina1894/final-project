import React, { useEffect, useState } from "react"
import { Card } from "@mantine/core"
import { useParams } from "react-router-dom"

const LifestyleNewsDetails = () => {
  const [newsData, setNewsData] = useState({})
  const { index } = useParams()

  useEffect(() => {
    const fetchNewsDetails = async () => {
      const API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY
      const SEARCH_TERM = "lifestyle"
      const URL = `https://content.guardianapis.com/search?q=${SEARCH_TERM}&api-key=${API_KEY}&page-size=30&show-fields=thumbnail&show-blocks=all`
      const response = await fetch(URL)
      const data = await response.json()
      setNewsData(data.response.results[index])
    }

    fetchNewsDetails()
  }, [index])

  if (!newsData || Object.keys(newsData).length === 0) {
    return <div>Loading...</div>
  }

  const publicationDate = new Date(newsData.webPublicationDate)
  const formattedDate = publicationDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="news-details-grid">
      <Card shadow="sm" padding="lg" radius="md">
        <h5>{formattedDate}</h5>
        <h4>{newsData.webTitle}</h4>
        <img
          src={newsData.fields.thumbnail}
          height={400}
          alt={newsData.webTitle}
        />
        <p>{newsData.blocks.body[0].bodyTextSummary}</p>
      </Card>
    </div>
  )
}

export default LifestyleNewsDetails
