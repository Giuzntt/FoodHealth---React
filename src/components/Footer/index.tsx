import Image from "next/image"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styled from "styled-components"

interface FooterContainerProps {
        backgroundImage: string;
}

const FooterContainer = styled.footer<FooterContainerProps>`
  position: absolute;
  bottom: 0;
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

const Footer = () => {
    return (
      <FooterContainer backgroundImage="/images/footer.svg">
        <Image
          src="/images/logo.svg"
          className="footer"
          alt="footer"
          width={150}
          height={150}
        />
        <div className="footer-text">
          <p> © 2022 Food Health </p>
          <a href="https://github.com/Giuzntt/">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/giulianno-zanetti/">
            <FaLinkedin />
          </a>
        </div>
        <Image
          src="/images/cook.svg"
          className="footer"
          alt="footer"
          width={"250px"}
          height={"190px"}
        />
      </FooterContainer>
    );


}



export default Footer

