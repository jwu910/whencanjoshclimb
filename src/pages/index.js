import Countdown from "react-countdown-now"
import React from "react"
import moment from "moment"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>Ankle's pretty good.. Text him!</span>
  } else {
    return (
      <div>
        <div className="timer-container">
          <div className="number-container">
            <span className="number">{days}</span>
            <span className="label">D</span>
          </div>
          <div className="number-container">
            <span className="number">{hours}</span>
            <span className="label">H</span>
          </div>
          <div className="number-container">
            <span className="number">{minutes}</span>
            <span className="label">M</span>
          </div>
          <div className="number-container">
            <span className="number">{seconds}</span>
            <span className="label">S</span>
          </div>
        </div>
      </div>
    )
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Climb timer" />
    <Countdown date={moment("2019-11-24").valueOf()} renderer={renderer} />
  </Layout>
)

export default IndexPage
