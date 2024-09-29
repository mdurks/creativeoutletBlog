import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { ProjectListTitle } from "../components/page.styles"
import { ProjectList } from "../components/ProjectList/ProjectList"
import { ThreeJSCanvas } from "../components/ThreeJSCanvas/ThreeJSCanvas"

const IndexPage = () => {
  return (
    <Layout>
      <div className="heroBlock">
        <div className="grid"></div>
        <div className="centralColumn">
          <div className="introBanner">
            <p className="heroBannerText">
              Hi, my name's Michael and welcome to my blog where I share my
              passion for web development, 3D and other digital pursuits. With
              over two decades of expertise, I'm passionate about crafting
              outstanding digital experiences.
            </p>
            <div className="heroBannerTreehouseLogo">
              <StaticImage
                src="../images/avatarLarge.png"
                loading="eager"
                quality={100}
                objectFit="contain"
                alt="Creative Outlet Treehouse"
              />
            </div>
          </div>
        </div>
        <ThreeJSCanvas cubesCount={100} techIcons={[]} />
      </div>

      <div className="contentBlock">
        <div className="centralColumn">
          <ProjectListTitle>My Projects:</ProjectListTitle>
          <ProjectList />
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
