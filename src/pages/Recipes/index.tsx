import { FaCarrot } from "react-icons/fa";
import styled from "styled-components";
import RecipeComponent from "../../components/RecipeComponent";


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

const RecipesContainer = styled.div`
 display: flex;
 justify-content: center;
 gap: 12rem;
  align-items: center;
 font-family: sans-serif;
 margin-top: 80px;

`;


const Recipes = () => {
    return (
      <>
       
        <HeaderRecipe>
          <FaCarrot className="icon-carrot" />
          <RecipeTitle> Receitas</RecipeTitle>
        </HeaderRecipe>
        <RecipesContainer>
          <RecipeComponent />
          <RecipeComponent />
          <RecipeComponent />
        </RecipesContainer>
      </>
    );

}


export default Recipes