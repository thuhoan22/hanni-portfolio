import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import BlogSwiperAndSlick from "./components/Pages/BlogDetail/BlogSwiperAndSlick";
import BlogGoogleSearchTips from "./components/Pages/BlogDetail/BlogGoogleSearchTips";
import Contact from "./pages/Contact";
import "./assets/scss/global.scss";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetail />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog-detail/1",
        element: <BlogSwiperAndSlick />,
      },
      {
        path: "/blog-detail/2",
        element: <BlogGoogleSearchTips />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;

// https://ivo-culic.medium.com/13-useful-google-search-tips-for-web-developers-bca00ec13f63
// https://viblo.asia/p/cac-trick-search-google-ma-developer-nen-biet-Ljy5VQv9lra
// https://www.theguardian.com/technology/2016/jan/15/how-to-use-search-like-a-pro-10-tips-and-tricks-for-google-and-beyond
