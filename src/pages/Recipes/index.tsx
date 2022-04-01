import { FaCarrot } from "react-icons/fa";
import styled from "styled-components";


const RecipeTitle = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 0.3vw;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  text-align: center;
  text-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  padding: 20px 20px;
`;

const RecipesContainer = styled.div`
  width: 100%;
  margin-top: 15px;

  
`;
const RecipeCard = styled.div`
  display: block;
  margin: auto;
    width: 750px;
    height: 250px;
    background-color: #F4f4f4;
  border-radius: 10px;
  .image-card{

      width: 50%;
      height:90%;
    }
    `
  
const HeaderRecipe = styled.div`
  display: flex;
  margin: 0 auto;
  background-color: #ff5c5c;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  .icon-carrot {
    font-size: 40px;
    color: #fff;
  }
`;


const Recipes = () => {
    return (
<>      <HeaderRecipe>
        <FaCarrot className="icon-carrot"/>
        <RecipeTitle> Receitas</RecipeTitle>
        </HeaderRecipe>


        <RecipesContainer>
            <RecipeCard>
               {/* RECEBER API */
                //requisitar uma api de receita
                //renderizar a receita
                //renderizar a imagem
                //renderizar o nome da receita
                //renderizar o tempo de preparo
                //renderizar a quantidade de pessoas
                //renderizar a categoria
                //renderizar a descrição
                //renderizar a quantidade de ingredientes
                //renderizar os ingredientes
                
               }
                
            </RecipeCard>

        </RecipesContainer>
</>
        

    );

}


export default Recipes