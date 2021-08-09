import { Fragment } from "react";
import Hero from "../components/home-page/hero"
import FeaturedPost from "../components/home-page/featured-posts";
const DUMMY_POSTS=[
    {
        slug :"Getting-started-with-next-js",
        title:"Getting Started with Next Js",
        image:"getting-started-nextjs.png",
        excerpt:"NextJs is the react framework for production - it makes building fullstack React apps and sites a breeze and shops with built in SSR",
        date:"2021-07-10"
    },
    {
        slug :"Getting-started-with-next-js2",
        title:"Getting Started with Next Js",
        image:"getting-started-nextjs.png",
        excerpt:"NextJs is the react framework for production - it makes building fullstack React apps and sites a breeze and shops with built in SSR",
        date:"2021-07-10"
    },
    {
        slug :"Getting-started-with-next-js3",
        title:"Getting Started with Next Js",
        image:"getting-started-nextjs.png",
        excerpt:"NextJs is the react framework for production - it makes building fullstack React apps and sites a breeze and shops with built in SSR",
        date:"2021-07-10"
    },
    {
        slug :"Getting-started-with-next-js4",
        title:"Getting Started with Next Js",
        image:"getting-started-nextjs.png",
        excerpt:"NextJs is the react framework for production - it makes building fullstack React apps and sites a breeze and shops with built in SSR",
        date:"2021-07-10"
    }
]
function HomePage(){
  return <Fragment>
      <Hero/>
      <FeaturedPost posts={DUMMY_POSTS}/>
  </Fragment>
}

export default HomePage;

//1) Hero =>Present hero