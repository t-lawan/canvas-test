import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import HeaderLinkModel from "../models/HeaderLinkModel";

const HeaderWrapper = styled.header`
  overflow: hidden;
`

const HeaderLink = styled(Link)`
  font-size: 1.62671rem;

`
let headerLinks = [
  new HeaderLinkModel('Home', ''),
  new HeaderLinkModel('Market', 'art-market'),
  new HeaderLinkModel('Booth', 'photo-booth')
]
const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    {headerLinks.map((headerLink, index) => (
      <HeaderLink key={index} to={headerLink.url}> {headerLink.title}</HeaderLink>
    ))}
  </HeaderWrapper>
)



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
