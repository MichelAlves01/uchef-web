import "./ListCreation.scss";
import ShoppingListPage from "../shopping-list/ShoppingList";
import DoubledDynamicContainer from "../../shared/components/container/DoubledDynamicContainer";
import RecipeList from "../recipe/RecipeList";

function ListCreation() {
  return (
    <DoubledDynamicContainer
      leftContainer={<RecipeList onRecipeSelection={function (): void {}} />}
      rightContainer={<ShoppingListPage />}
      displayRightContainer={false}
    ></DoubledDynamicContainer>
  );
}

export default ListCreation;
