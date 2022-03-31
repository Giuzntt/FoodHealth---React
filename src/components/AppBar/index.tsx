import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";


const NavBar = styled.nav`
  background: linear-gradient(90deg, #0fd850 0%, #3feb76 100%);
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  transition: 0.6s;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  .logo {
    margin-top: 15px;
    font-size: 24px;
    font-weight: bold;
    color: #000;
    transition: 0.6s;
    transition: 0.6s;
  }
  .nav-link {
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    list-style: none;
    font-size: 14px;
    font-weight: bold;
    color: #000;
    text-transform: uppercase;
    padding: 0 10px;
    text-decoration: none;
  }
  .nav-link li {
    cursor: pointer;

    position: relative;
    margin: 0 30px;
    width: max-content;
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 3ch;

    // criar  hover com transition
    &:hover {
      color: #ff5c5c;
      transition: 0.2s;
      transform: scaleX(1.05);
    }
  }
`;





//criar uma navigation bar com styled components

 const AppBar = () => {
    return (
      <NavBar>
        <div className="logo">
          <Image src="/images/logo.svg" alt="" width={150} height={150} />
        </div>
        <ul className="nav-link">
          <Link href={"../"} passHref>
              
           
            <li>Inicio</li>
           
            
          </Link>
          <Link href={"./Recipes"} passHref>
            <li>Receitas</li>
          </Link>
          <Link href={"./Readme"} passHref>
            <li>Sobre o criador</li>
          </Link>
        </ul>
      </NavBar>
    );



}

export default AppBar