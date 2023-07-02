import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import "./index.css"
import Header from "./components/Header"
import NewsCard from "./components/NewsCard/NewsCard"
import LifestyleNewsCard from "./components/NewsCard/LifestyleNewsCard"
import CultureNewsCard from "./components/NewsCard/CultureNewsCard"
import SportsNewsCard from "./components/NewsCard/SportsNewsCard"
import PoliticsNewsCard from "./components/NewsCard/PoliticsNewsCard"
import NewsDetails from "./components/NewsCard/NewsDetails"
import LifestyleNewsDetails from "./components/NewsCard/LifestyleNewsDetails"
import CultureNewsDetails from "./components/NewsCard/CultureNewsDetails"
import SportsNewsDetails from "./components/NewsCard/SportsNewsDetails"
import PoliticsNewsDetails from "./components/NewsCard/PoliticsNewsDetails"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <NewsCard />
      </>
    ),
  },
  {
    path: "/news/:index",
    element: (
      <>
        <Header />
        <NewsDetails />
      </>
    ),
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
    path: "/lifestyle/:index",
    element: (
      <>
        <Header />
        <LifestyleNewsDetails />
      </>
    ),
  },
  {
    path: "/sport",
    element: (
      <>
        <Header />
        <SportsNewsCard />
      </>
    ),
  },
  {
    path: "/sport/:index",
    element: (
      <>
        <Header />
        <SportsNewsDetails />
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
    path: "/culture/:index",
    element: (
      <>
        <Header />
        <CultureNewsDetails />
      </>
    ),
  },
  {
    path: "/opinion",
    element: (
      <>
        <Header />
        <PoliticsNewsCard />
      </>
    ),
  },
  {
    path: "/opinion/:index",
    element: (
      <>
        <Header />
        <PoliticsNewsDetails />
      </>
    ),
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
