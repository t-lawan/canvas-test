import styled,  { createGlobalStyle } from "styled-components"

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const Color = {
    blue: '#50BFE6',
    purple: '#5074e6',
    green: '#96f0da'
}

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lora:400,700&display=swap');
    * {
  box-sizing: border-box;
  ::-webkit-scrollbar {
  width: 10px;
  @media (max-width: ${size.tablet}) {
    width: 7px;
  }
}

/* Track */
::-webkit-scrollbar-track {
  /*  box-shadow: inset 0 0 5px grey;  */
  /* border-radius: 10px; */
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(54,54,82); 
}
}
html,
body {
  font-family: 'Lora', serif;
  width: 100vw;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-style: normal; 
  background: ${Color.blue}; 
  }
  h1,h2,h3,h4,h5,h6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    color: 	${Color.purple};
    }
  a {
    text-decoration: none;
    color: ${Color.purple};
  }
  h1 {
  margin-bottom: 1.45rem;
  font-size: 2.5rem;
  line-height: 1.1;
}
h2 {
  margin-bottom: 1.45rem;
  font-size: 1.62671rem;
  line-height: 1.1;
}
h3 {
  margin-bottom: 1.45rem;
  font-size: 1.38316rem;
  line-height: 1.1;
}
h4 {
  margin-bottom: 1.45rem;
  font-size: 1rem;
  line-height: 1.1;
}
h5 {
  margin-bottom: 1.45rem;
  font-size: 0.85028rem;
  line-height: 1.1;
}
h6 {
  margin-bottom: 1.45rem;
  font-size: 0.78405rem;
}
img {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
p{
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  font-size: 1rem;
  color: ${Color.purple};
}
li {
  list-style-type: lower-roman;
}

.active {
  font-style: italic;
  font-weight: bold;
}
`

export const TextBlock = styled.div`
  padding-top: 1rem;
`


