import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Header from "../header/header";
import { GlobalStyle } from "../../index.styles";
const LayoutWrapper = styled.div`
  padding: 1em;
`
const Layout = ({ children }) => {

  return (
    <LayoutWrapper>
      <Header/>
      <GlobalStyle/>
        {children}
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
