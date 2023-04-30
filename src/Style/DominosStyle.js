import styled from "styled-components";

export const StyledDominos = styled.div`
  .header-content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 7px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .searchBar {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(255, 255, 255);
    border-radius: 0.8rem;
    height: 3rem;
    box-shadow: rgba(28, 28, 28, 0.08) 0px 2px 8px;
    border: 1px solid rgb(232, 232, 232);
    width: 45%;
  }

  .location {
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    height: 100%;
    /* width: 24rem; */
    border-radius: 0.8rem;
    padding: 0px 1rem;
    -webkit-box-align: center;
    align-items: center;
  }

  svg.svg-inline--fa.fa-location-dot.fa-xl {
    color: #ff4400d2;
  }

  .search {
    display: flex;
    flex-direction: row;
  }

  input {
    border: 1px solid white;
    font-size: 16px;
  }

  h3.food-app {
    font-size: 40px;
    text-align: start;
    font-family: cursive;
  }

  .separator {
    color: gray;
    margin-right: 30px;
  }

  svg.svg-inline--fa.fa-magnifying-glass {
    color: gray;
  }

  .login-signup {
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .login {
    margin-right: 15px;
  }

  .hrLine {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  hr {
    width: 90%;
    margin: auto;
  }

  button.banner-btn {
    display: flex;
    flex-direction: row;
    background: white;
    border: 3px solid #ff4400d2;
    padding: 5px;
    border-radius: 12px;
    color: #ff4400d2;
  }

  h2.btn-para {
    color: #ff4400d2;
  }

  .banner-para {
    margin-top: 20px;
  }

  p.banner-para {
    font-size: 20px;
  }

  .banner-head {
    text-align: center;
    margin-top: 20px;
  }

  .restaurant-info-card {
    margin-top: 30px;
    padding: 20px;
  }

  .restaurant-card {
    border: 5px solid #fa642d;
    width: 23%;
    margin: auto;
    padding: 10px;
    height: 245px;
    border-radius: 5px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  }

  .restaurant-card:hover {
  /* visibility: visible; */
  height: 525px;
  .card-description {
    visibility: visible;
  }
  }

  .restaurant-img {
    display: flex;
    align-items: center;
    margin-left: 10px;
    position: relative;
    top: -45px;
  }

  img#hotel {
    height: 215px;
    width: 215px;
  }

  .card-description {
    visibility: hidden;
    text-align: center;
  }

  .rating-card {
    text-align: center;
  }

  .rating-card {
    text-align: center;
    background: #24963f;
}

.timings {
    margin-top: 10px;
}

.restaurant-name{
  margin-top: 20px;
}

.tagline {
    margin-top: 10px;
}

.restaurant-variety {
    text-align: left;
    margin-top: 15px;
}

.order-btn {
  margin-top: 15px;
}

button.orderNow {
    background: #fa642d;
    color: white;
    border: 1px solid transparent;
    padding: 3px;
    border-radius: 5px;
}

`;

