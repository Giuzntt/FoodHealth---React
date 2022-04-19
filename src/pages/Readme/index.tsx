import Image from "next/image"
import styled from "styled-components"
import CarrouselComponent from "../../components/Carrousel";

interface ReadMeContentProps {
    backgroundImage: string
}
const ReadMeContainer = styled.div<ReadMeContentProps>`
  padding: 20px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: calc(100vh - 140px);
  margin-bottom: -20vh;

  .container {
    display: flex;
    margin: 0;
    align-items: center;
    justify-content: center;
  }

  .imagem-logo {
    margin-top: 20px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    margin: 0 auto;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }
  .decription {
    color: #fff;
    //font poppins
    font-family: "Poppins", sans-serif;
    font-size: 2.5ch;
    width: 300px;
    margin: 20px auto;
    text-align: center;
    font-weight: bold;
    text-justify: distribute;

    a {
      display: grid;
      margin: 20px 20px;
      text-decoration: none;
      color: #fff;
      text-align: center;
      text-transform: uppercase;
      font-family: "Poppins", sans-serif;
      text-align: center;

      :hover {
        color: #8dff5c;
        transition: 0.2s;
        transform: scaleX(1.05);
      }
    }
  }
`;

const ReadmePage = () => {
    return (
      <ReadMeContainer backgroundImage="/images/readme/background.png">
        <div className="container">
        <Image
          src="/images/readme/giu-logo.png"
          alt=""
          className="imagem-logo"
          width={"272px"}
          height={"249px"}
          />
          </div>
       
          <h1 className="readme-title">Giulianno Zanetti</h1>
          <div className="decription">
           <p>
           Projetos desenvolvidos:
           </p>
          
            <a href="">
              Ocean App
            </a>
            <a href="">
              Food Health Kotlin
            </a>
          </div>
          

      </ReadMeContainer>
    );

}


export default ReadmePage