import React from "react"
import Sketch from "react-p5"
import styled from "styled-components"
import { Color } from "../../index.styles"

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 10fr 1fr;
`

const ColumnWrapper = styled.div``

const Button = styled.button`
  background: ${Color.purple};
  border: none;
  color: ${props => (props.isOn ? `${Color.green}` : `${Color.blue}`)};
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  text-align: center;
  text-decoration: none;
  display: block;
`
class VideoMixerSketch extends React.Component {
  canvas
  video_one
  video_two
  p5
  constructor(props) {
    super(props)
    this.canvasColumnRef = React.createRef()
    this.state = {
      video_one: {
        started: true,
        paused: true,
        filter: {
          threshold: false,
          gray: false,
          opaque: false,
          invert: true,
          posterize: false,
          dilate: false,
          blur: false,
          erode: false,
        },
      },
    }
  }

  preLoad = (p5) => {

  }

  setup = (p5, canvasParentRef) => {
    this.canvas = p5
      .createCanvas(
        window.innerWidth * 0.9 * (10 / 11),
        window.innerHeight * 0.8 * (10 / 11)
      )
      .parent(canvasParentRef)
    this.video_one = p5.createVideo(["../../images/video_one.mp4"])
    this.video_one.hide()
  }

  draw = p5 => {
    p5.background(0)
    p5.image(this.video_one, 0, 0)
  }

  keyPressed = p5 => {
    this.video_one.loop()
    console.log('HELLO')
  }

  windowResized = p5 => {
    p5.resizeCanvas(
      window.innerWidth * 0.9 * (10 / 11),
      window.innerHeight * 0.8 * (10 / 11)
    )
  }

  render() {
    return (
      <ColumnsWrapper>
        <ColumnWrapper ref={this.canvasColumnRef}>
          {this.state.video_one.started ? (
            <Sketch
              setup={this.setup}
              draw={this.draw}
              windowResized={this.windowResized}
              keyPressed={this.keyPressed}
            />
          ) : null}
        </ColumnWrapper>
        <ColumnWrapper>
          <p> Buttons </p>
        </ColumnWrapper>
      </ColumnsWrapper>
    )
  }
}

export default VideoMixerSketch
