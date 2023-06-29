import React, { useEffect, useState } from 'react';
import { Card } from '@mantine/core';
import { useParams } from 'react-router-dom';

const PoliticsNewsDetails = () => {
  const [newsData, setNewsData] = useState({});
  const { index } = useParams();

  useEffect(() => {
    const fetchNewsDetails = async () => {
      const API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY;
      const SEARCH_TERM = 'politics';
      const URL = `https://content.guardianapis.com/search?q=${SEARCH_TERM}&api-key=${API_KEY}&page-size=30&show-fields=thumbnail&show-blocks=all`;
      const response = await fetch(URL);
      const data = await response.json();
      setNewsData(data.response.results[index]);
    };

    fetchNewsDetails();
  }, [index]);

  if (!newsData || Object.keys(newsData).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3 className="section-header" align="left">
        Lifestyle News Details
      </h3>
      <Card shadow="sm" padding="lg" radius="md">
        <img src={newsData.fields.thumbnail} height={160} alt={newsData.webTitle} />
        <h4>{newsData.webTitle}</h4>
        <p>{newsData.blocks.body[0].bodyTextSummary}</p>
      </Card>
    </div>
  );
};

export default PoliticsNewsDetails;
