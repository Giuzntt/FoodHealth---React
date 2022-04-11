import styled from "styled-components";


interface FooterContainerProps {
  backgroundImage: string;
}

export const FooterContainer = styled.footer<FooterContainerProps>`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20vh;
  background: url(${(props) => props.backgroundImage});
  background-size: cover;
  
  .footer-text {
    display: flex;
    align-items: center;
    color: white;
    font-size: 20pt;
    font-weight: 600;
    font-family: "Popins", sans-serif;
    text-transform: uppercase;
  }

  .footer-text a {
    color: white;
    text-decoration: none;
    display: flex;
    margin: 0 8px;
    justify-content: space-between;

    &:hover {
      color: #ff5c5c;
    }
  }
`;