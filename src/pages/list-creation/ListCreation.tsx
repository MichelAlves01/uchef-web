import "./ListCreation.scss";
import RecipePage from "../recipe/Recipe";
import ShoppingListPage from "../shopping-list/ShoppingList";

function ListCreation() {
  return (
    <>
      <RecipePage gridSize={5}></RecipePage>
      <ShoppingListPage gridSize={5}></ShoppingListPage>
    </>
  );
}

export default ListCreation;
