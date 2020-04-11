import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import VideoMixerSketch from "../components/sketches/video-mixer-sketch";

const VideoMixer = () => (
  <Layout>
    <SEO title="Video Mixer" />
    <VideoMixerSketch />

  </Layout>
)

export default VideoMixer