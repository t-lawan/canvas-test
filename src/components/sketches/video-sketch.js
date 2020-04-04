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
class PhotoBoothSketch extends React.Component {
  canvas
  capture
  canvasColumnRef
  p5
  constructor(props) {
    super(props)
    this.canvasColumnRef = React.createRef()
    this.state = {
      started: false,
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
    }
  }

  start = () => {
    this.setState({
      started: true,
    })
  }

  stop = () => {
    this.setState({
      started: false,
    })
  }

  play = () => {
    if (this.state.started) {
      this.setState({
        paused: false,
      })
    }
  }

  pause = () => {
    if (this.state.started) {
      this.setState({
        paused: true,
      })
    }
  }

  saveImage = () => {
    this.p5.saveCanvas("photo_booth", "jpg")
    this.pause()
  }

  setup = (p5, canvasParentRef) => {
    let canvasColumn = this.canvasColumnRef.current
    this.p5 = p5;
    this.canvas = p5
      .createCanvas(
        window.innerWidth * 0.9 * (10 / 11),
        window.innerHeight * 0.8 * (10 / 11)
      )
      .parent(canvasParentRef)
    this.capture = p5.createCapture(p5.VIDEO)
    this.capture.hide()
  }

  renderFilters = p5 => {
    if (this.state.filter.threshold) {
      p5.filter(p5.THRESHOLD)
    }

    if (this.state.filter.gray) {
      p5.filter(p5.GRAY)
    }

    if (this.state.filter.opaque) {
      p5.filter(p5.OPAQUE)
    }

    if (this.state.filter.invert) {
      p5.filter(p5.INVERT)
    }

    if (this.state.filter.posterize) {
      p5.filter(p5.POSTERIZE, 3)
    }

    if (this.state.filter.dilate) {
      p5.filter(p5.DILATE)
    }

    if (this.state.filter.blur) {
      p5.filter(p5.BLUR, 3)
    }

    if (this.state.filter.erode) {
      p5.filter(p5.ERODE)
    }
  }

  toggleFilter = fil => {
    if (this.state.started) {
      this.setState({
        filter: {
          ...this.state.filter,
          [fil]: !this.state.filter[`${fil}`],
        },
      })
    }
  }

  draw = p5 => {
    if (!this.state.paused) {
      p5.image(
        this.capture,
        0,
        0,
        p5.width,
        (p5.width * this.capture.height) / this.capture.width
      )
      this.renderFilters(p5)
    }
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
          {this.state.started ? (
            <Sketch
              setup={this.setup}
              draw={this.draw}
              windowResized={this.windowResized}
            />
          ) : null}
        </ColumnWrapper>
        <ColumnWrapper>
          <Button
            onClick={() => (this.state.started ? this.stop() : this.start())}
          >
            {" "}
            {this.state.started ? "stop" : "start"}{" "}
          </Button>
          <Button
            onClick={() => (this.state.paused ? this.play() : this.pause())}
          >
            {" "}
            {this.state.paused ? "play" : "pause"}{" "}
          </Button>
          {Object.keys(this.state.filter).map((fil, index) => (
            <Button
              onClick={() => this.toggleFilter(fil)}
              key={index}
              isOn={this.state.filter[`${fil}`]}
            >
              {" "}
              {fil}{" "}
            </Button>
          ))}
          {this.state.started ? <Button
            onClick={() => (this.saveImage())}
          >
            save image
          </Button> : null }
        </ColumnWrapper>
      </ColumnsWrapper>
    )
  }
}

export default PhotoBoothSketch
