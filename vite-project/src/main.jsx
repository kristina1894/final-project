import React from 'react';
import { Route, ReactDOM, RouterProvider } from 'react-router-dom';
import NewsCard from './components/NewsCard/NewsCard';
import LifestyleNewsCard from './components/NewsCard/LifestyleNewsCard';
import EntertaimentNewsCard from './components/NewsCard/EntertaimentNewsCard';
import SportsNewsCard from './components/NewsCard/SportsNewsCard';
import PoliticsNewsCard from './components/NewsCard/PoliticsNewsCard';

const routes = [
  { path: '/', element: <NewsCard /> },
  { path: '/lifestyle', element: <LifestyleNewsCard /> },
  { path: '/sports', element: <SportsNewsCard /> },
  { path: '/entertainment', element: <EntertaimentNewsCard /> },
  { path: '/politics', element: <PoliticsNewsCard /> },
];


const Main = () => {
  return (
    <>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </>
  );
};

export default Main;
