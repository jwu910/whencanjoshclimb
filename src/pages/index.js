import React from "react"
import { Link } from "gatsby"
import moment from "moment"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const daysRemaining = () => {
  const eventdate = moment("2019-11-24")
  const todaysdate = moment()

  return eventdate.diff(todaysdate, "days")
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Maybe in {daysRemaining()} days...</h1>
  </Layout>
)

export default IndexPage
