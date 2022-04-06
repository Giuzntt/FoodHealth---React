import Link from "next/link";
import { Card, CardBody, CardContainer, CardNavigation } from "./styles";
import {  FaArrowRight } from "react-icons/fa";



const CardComponent = () => {
    return (
      <CardContainer>
        <Card>
          <CardBody backgroundImage={"/images/card/1.jpg"}>
            Frutas saudáveis
            <CardNavigation>
              <Link href={"./Recipes"} passHref>
                <FaArrowRight className="" />
              </Link>
            </CardNavigation>
          </CardBody>
        </Card>
        <Card>
          <CardBody backgroundImage={"/images/card/2.jpg"}>
            Cereais Saudáveis
            <CardNavigation>
              <Link href={"./Recipes"} passHref>
                <FaArrowRight />
              </Link>
            </CardNavigation>
          </CardBody>
        </Card>
        <Card>
          <CardBody backgroundImage={"/images/card/3.jpg"}>
            Sucos saudáveis
            <CardNavigation>
              <Link href={"./Recipes"} passHref>
                <FaArrowRight />
              </Link>
            </CardNavigation>
          </CardBody>
        </Card>
      </CardContainer>
    );



}

export default CardComponent;