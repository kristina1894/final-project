import React, { useEffect, useState } from "react"
import { Card } from "@mantine/core"
import { Link } from "react-router-dom"

const NewsCard = () => {
  const [newsData, setNewsData] = useState([])
  const [dataIsFetched, setDataIsFetched] = useState(false)

  const API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY
  const SEARCH_TERM = "news"
  const URL = `https://content.guardianapis.com/search?q=${SEARCH_TERM}&api-key=${API_KEY}&page-size=30&show-fields=thumbnail&show-blocks=all`

  const fetchNewsHandler = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setNewsData(data.response.results)
    setDataIsFetched(true)
  }

  useEffect(() => {
    fetchNewsHandler()
    console.log("yes")
  }, [])

  return (
    dataIsFetched && (
      <div className="section-news">
        <h3 className="section-header" align="left">
          All News
        </h3>
        <div className="news-grid">
          {newsData.map((each, index) => (
            <Link to={`/news/${index}`} key={index}>
              <Card className="each-news-grid" padding="lg" radius="sm">
                <img
                  src={each.fields.thumbnail}
                  height={160}
                  alt={each.webTitle}
                />
                <span>
                  <h4>{each.webTitle} </h4>
                  <small className="small-text">
                    {each.blocks.body[0].bodyTextSummary.substring(0, 124) +
                      "..."}
                  </small>
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    )
  )
}

export default NewsCard
