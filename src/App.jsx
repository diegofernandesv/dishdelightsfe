import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomeView from "./views/HomeView";
import ContactView from "./views/ContactView";
import FavouritesView from "./views/FavouritesView";
import RecipesView from "./views/RecipesView";
import AboutView from "./views/AboutView";
import DetailPage from "./views/DetailPage";

const router = createBrowserRouter([
  {
    path: "/dishdelightsfe/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: "FavouritesView",
        element: <FavouritesView/>
      },
      {
        path: "ContactView",
        element: <ContactView />
      },
      {
        path: "RecipesView",
        element: <RecipesView/>
      },
      {
        path: "AboutView",
        element: <AboutView/>
      },
      {
        path: "/dishdelightsfe/detailpage/:recipeId",
        element: <DetailPage/>
      }
      
    ]
  }
])

export default function App() {
  return <RouterProvider router={router}/>
}