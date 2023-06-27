import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import NewsCard from './components/NewsCard/NewsCard';
import LifestyleNewsCard from './components/NewsCard/LifestyleNewsCard';
import CultureNewsCard from './components/NewsCard/EntertaimentNewsCard';
import SportsNewsCard from './components/NewsCard/SportsNewsCard';
import PoliticsNewsCard from './components/NewsCard/PoliticsNewsCard';
import NewsDetails from "./components/NewsCard/NewsDetails";

const router = createBrowserRouter([
  { path: '/', 
  element: <Header />,
  children:[
    { path: '/home', 
    element: <NewsCard />,
  },
    { path: '/lifestyle', 
    element: <LifestyleNewsCard />, 
  },
    { path: '/sports', 
    element: <SportsNewsCard />, 
  },
    { path: '/culture', 
    element: <CultureNewsCard />, 
  },
    { path: '/politics', 
    element: <PoliticsNewsCard />,
   },
   { path: '/news/:id', 
    element: <NewsDetails />,
   },
  ]
},
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


