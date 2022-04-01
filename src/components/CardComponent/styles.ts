import styled from "styled-components";

interface CardBodyProps {
    backgroundImage: string;
}

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
`;

export const Card = styled.div`
  margin: 20px 120px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 321px;
  height: 227px;
  background-color: #fff;
`;
export const CardBody = styled.div<CardBodyProps>`
  font-family: "Poppins", sans-serif;
  background-image: url(${(props: CardBodyProps) => props.backgroundImage});
  display: flex;
  font-weight: 500;
  color: white;
  border-radius: 10px;
  font-size: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  text-transform: uppercase;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const CardNavigation = styled.div`
margin-top: 15px;
  &:hover {
    cursor: pointer;
    color: #ff5c5c;
    transform: scale(1.2);
    transition: transform 600ms ease-in;
    transform: translateX(40%);
  }
`;
