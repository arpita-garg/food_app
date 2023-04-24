import styled from "styled-components";

export const StyledLayout = styled.div`
  margin-top: 40px;
`;

export const StyledLayoutNavbar = styled.div`
  .top-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: black;
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
  }

  img {
    width: 100%;
    height: 320px;
  }

  .name{
    text-align: center;
  }

  a.active {
    text-decoration: none;
    color: black;
  }
`;
