import Countdown from "react-countdown-now"
import React from "react"
import moment from "moment"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './index.css'

const labelStyle = {
  fontSize: "2em",
  fontWeight: "500",
  verticalAlign: "bottom",
}

const numberStyle = {
  height: "60px",
  fontSize: "6em",
  fontWeight: "800",
}

const containerStyle = {
  alignItems: "flex-end",
  display: "flex",
  height: "10em",
  width: "auto",
  margin: "8px",
}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>Should be sorta good by now.. Text him!</span>
  } else {
    return (
      <div>
        <div className="timer-container">
          <div className="number-container">
            <span className="number">
              {days}
            </span>
            <span className="label">
              D
            </span>
          </div>
          <div className="number-container">
            <span className="number">
              {hours}
            </span>
            <span className="label">
              H
            </span>
          </div>
          <div className="number-container">
            <span className="number">
              {minutes}
            </span>
            <span className="label">
              M
            </span>
          </div>
          <div className="number-container">
            <span className="number">
              {seconds}
            </span>
            <span className="label">
              S
            </span>
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
