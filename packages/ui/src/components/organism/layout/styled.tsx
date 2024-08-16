import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: grid;
  grid-template-areas:
    "menu header"
    "menu main";
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1.5fr 10.5fr;
  grid-template-rows: 1fr 11fr;

  /* Medias */
  @media (max-width: 600px) {
    grid-template-areas:
      "header"
      "main";
    grid-template-columns: 12fr;
    grid-template-rows: 0.5fr 11.5fr;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    grid-template-areas:
      "menu header"
      "menu main";
    grid-template-columns: 1fr 11fr;
    grid-template-rows: 1fr 11fr;

    .hover-menu:hover {
      .con {
        grid-template-columns: 5fr 5fr;
        background-color: purple;
      }
    }
  }
`;

export const HeaderDiv = styled.div`
  grid-area: header;
  background-color: red;
`;

export const MenuDiv = styled.div`
  grid-area: menu;
  background-color: pink;

  /* Medias */
  @media (max-width: 600px) {
    display: none;
  }
`;

export const MainDiv = styled.div`
  grid-area: main;
  background-color: violet;
  @media (min-width: 600px) and (max-width: 800px) {
    background-color: yellow;
  }
`;

export const FooterDiv = styled.div`
  grid-area: footer;
  background-color: blueviolet;
`;
