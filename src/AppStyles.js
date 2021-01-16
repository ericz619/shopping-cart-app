import styled from "styled-components";

export const NavBar = styled.div`
  padding: 20px 50px;
  background: #30475e;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export const MainContainer = styled.div`
  position: relative;
`;

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 500;
`;

export const ProductList = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  height: 75px;
  line-height: 75px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;
