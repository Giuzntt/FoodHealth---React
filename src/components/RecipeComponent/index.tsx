import { Card } from "./styles";





// 28:15
const RecipeComponent = () => {
    return (
      <>
        <Card backgroundImage="/images/card/1.jpg" >
          <div className="card-content">
            <h2 className="card-title">Meu titulo</h2>
            <p className="card-body">
              
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              aspernatur animi ad accusantium minus omnis incidunt eos eaque
              fugit. Unde, quos exercitationem?
            </p>
            <a href="#" className="button">
              Saiba mais...
            </a>
          </div>
        </Card>
      </>
    );

}


export default RecipeComponent;