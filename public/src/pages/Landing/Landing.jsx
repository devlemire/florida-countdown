import React from 'react'
import moment from 'moment'
import countdown from 'countdown'
import beach from './beach.jpg'

import './Landing.css'

export default class Landing extends React.Component {
  state = {
    leavingDate: moment('2019-01-19'),
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  componentDidMount() {
    const { leavingDate } = this.state
    const countdownObj = countdown(leavingDate.toDate())

    this.setState({
      days: countdownObj.days,
      hours: countdownObj.hours,
      minutes: countdownObj.minutes,
      seconds: countdownObj.seconds
    })

    this.tick()
  }

  tick() {
    setInterval(() => {
      const { leavingDate } = this.state
      const countdownObj = countdown(leavingDate.toDate())

      this.setState({
        days: countdownObj.days,
        hours: countdownObj.hours,
        minutes: countdownObj.minutes,
        seconds: countdownObj.seconds
      })
    }, 1000)
  }

  render() {
    return (
      <section
        id="Landing-container"
        style={{ backgroundImage: `url(${beach})` }}
      >
        <div id="card">
          <header>
            <h1>Hey, I'm James!</h1>
            <h5>So yeah... this is when I leave for Florida.</h5>

            <br />

            <audio src="/music/music.mp4" controls autoPlay />
          </header>

          <section id="time-container">
            <div className="time-display">
              <h1>Days</h1>
              <p>{this.state.days}</p>
            </div>

            <div className="time-display">
              <h1>Hours</h1>
              <p>{this.state.hours}</p>
            </div>

            <div className="time-display">
              <h1>Minutes</h1>
              <p>{this.state.minutes}</p>
            </div>

            <div className="time-display">
              <h1>Seconds</h1>
              <p>{this.state.seconds}</p>
            </div>
          </section>
        </div>
      </section>
    )
  }
}
