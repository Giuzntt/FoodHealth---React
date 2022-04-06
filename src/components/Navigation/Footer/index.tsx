import Image from "next/image"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FooterContainer } from "./styles";



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

