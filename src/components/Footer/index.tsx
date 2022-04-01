import Image from "next/image"
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
    
   .footer-text{
         display: flex;
            align-items: center;
            color: white;
            font-size: 20pt;
            font-weight: 600;
            font-family: 'Popins', sans-serif;
            text-transform: uppercase;
   }
  `

const Footer = () => {
    return (
     
        <FooterContainer backgroundImage="/images/footer.svg">
            <Image  src="/images/logo.svg"  className="footer" alt="footer" width={150} height={150}/>
            <div className="footer-text">

                <p> © 2022 Food Health</p>
            </div>
            <Image  src="/images/cook.svg"  className="footer" alt="footer" width={'250px'} height={'190px'}/>
                

        </FooterContainer>
          
    
    );


}



export default Footer

