import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import "./index.css"
import Header from "./components/Header"
import NewsCard from "./components/NewsCard/NewsCard"
import LifestyleNewsCard from "./components/NewsCard/LifestyleNewsCard"
import CultureNewsCard from "./components/NewsCard/EntertaimentNewsCard"
import SportsNewsCard from "./components/NewsCard/SportsNewsCard"
import PoliticsNewsCard from "./components/NewsCard/PoliticsNewsCard"
import NewsDetails from "./components/NewsCard/NewsDetails"

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <>
        <Header />
        <NewsCard />
      </>
    ),},
{ 
      path: "/news/:index", 
      element:(
      <>
      <Header />
      <NewsDetails/> 
      </> ),
  },
  {
    path: "/lifestyle",
    element: (
      <>
        <Header />
        <LifestyleNewsCard />
      </>
    ),
  },
  {
    path: "/sports",
    element: (
      <>
        <Header />
        <SportsNewsCard />
      </>
    ),
  },
  {
    path: "/culture",
    element: (
      <>
        <Header />
        <CultureNewsCard />
      </>
    ),
  },
  {
    path: "/politics",
    element: (
      <>
        <Header />
        <PoliticsNewsCard />
      </>
    ),
  },
  
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
