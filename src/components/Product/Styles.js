import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
`;

export const CardImage = styled.img`
  height: 200px;
  width: 120px;
`;

export const CardBody = styled.div`
  padding: 15px;
  margin-top: 25px;
`;

export const CardTitle = styled.span`
  font-size: 14px;
  font-weight: 700;
  margin: 5px;
`;

export const CardPrice = styled.span`
  font-size: 14px;
  font-weight: 300;
  margin: 5px;
  background: #bee5d3;
  padding: 3px 9px;
`;

export const OverlayWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: all ease-in-out 0.3s;
  z-index: 100;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 65px;
  color: #ffffff;
`;
