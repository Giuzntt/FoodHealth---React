import Image from "next/image";
import Link from "next/link";
import { NavBar } from "./styles";





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