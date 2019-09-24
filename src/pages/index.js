import React from "react"
import { Link } from "gatsby"
import moment from "moment"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function daysRemaining() {
    var eventdate = moment("2019-11-24");
    var todaysdate = moment();
    return eventdate.diff(todaysdate, 'days');
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>When can Josh climb?</h1>
    <h1>Maybe in {daysRemaining()} days...</h1>
  </Layout>
)

export default IndexPage
