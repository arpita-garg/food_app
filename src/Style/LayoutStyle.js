import styled from "styled-components";

export const StyledLayout = styled.div`
  .home {
    background-image: url("https://momato-1.web.app/static/media/headerImage2.bec85f60.jpg");
    width: 100%;
    background-repeat: no-repeat;
  }

  h1.location-head {
    font-size: 65px;
    text-align: center;
  }

  span.location-span {
    font-size: 30px;
    color: rgba(255, 68, 0, 0.822);
  }

  ul.citiesMenu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    gap: 20px;
    margin-top: 25px;
    text-align: center;
  }

  li {
    list-style-type: none;
  }

  li.ciies {
    font-size: 25px;
    list-style: none;
    font-weight: 100;
    font-style: italic;
    color: hsla(0, 0%, 50.2%, 0.726);
  }

  h1.top-restraunts-head {
    padding: 20px;
    font-size: 30px;
    color: rgba(255, 68, 0, 0.822);
    text-align: center;
  }

  span.top-restraunt-span {
    font-size: 65px;
    color: #000;
  }

  ul.top-chains {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    gap: 20px;
    text-align: center;
  }

  li.chain-name {
    font-size: 25px;
    list-style: none;
    font-weight: 100;
    font-style: italic;
    color: hsla(0, 0%, 50.2%, 0.726);
  }

  div.footer {
    background-color: black;
  }

  h1.food-app {
    color: white;
    text-align: end;
    font-size: 90px;
    padding: 10px;
    font-family: cursive;
  }

  .footer-burger {
    display: flex;
    flex-direction: row;
    color: white;
  }

  .footer-company {
    font-size: 35px;
    padding: 10px;
    margin: 50px 10px 2px 30px;
    list-style: none;
    color: #aaa9a9;
  }

  li.footer-item1 {
    font-size: 18px;
    padding: 10px 0 0 25px;
    color: rgba(68, 68, 68, 0.774);
    text-align: center;
  }

  .footer-last {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: end;
    width: 70%;
    margin: auto;
  }

  h1.footer-lastLine {
    padding: 0;
    margin: 0;
    color: rgba(245, 222, 179, 0.678);
    letter-spacing: 5px;
    font-family: "Raleway", sans-serif;
  }

  .social-media-icons {
    color: white;
  }

  svg.svg-inline--fa.fa-square-instagram.fa-2xl,
  svg.svg-inline--fa.fa-facebook.fa-2xl,
  svg.svg-inline--fa.fa-twitter.fa-2xl {
    padding: 10px;
  }
`;

export const StyledLayoutNavbar = styled.div`
  .top-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  h1.banner-content-head {
    text-align: center;
    font-size: 90px;
    color: white;
    font-family: cursive;
    margin: 70px 0 10px 10px;
  }

  p.banner-content-para {
    font-size: 35px;
    margin: 10px;
    padding: 5px;
    color: #fff;
    text-align: center;
  }

  input.search {
    width: 90%;
    padding: 0 0 5px 20px;
    margin: 30px 0 70px;
    height: 55px;
    text-align: center;
    border-style: none;
    border-radius: 10px;
    font-size: 20px;
    font-family: "M PLUS 1", sans-serif;
    -webkit-text-decoration: grey;
    text-decoration: grey;
    outline-color: hsla(0, 0%, 50.2%, 0.637);
  }
`;

export const StyledLayoutCard = styled.div`
  .cards {
    display: grid;
    /* grid-auto-flow: column; */
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    grid-column-gap: 30px;
    grid-row-gap: 23px;
  }
  .card {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
      rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  }

  img {
    width: 100%;
    height: 320px;
  }

  .name {
    text-align: center;
  }

  a.active {
    text-decoration: none;
    color: black;
  }

  p.tagLine {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
