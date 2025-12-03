import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Recipe } from "../../model/Recipe";

interface RecipeContextProps {
  recipes: Recipe[];
  setRecipes: Dispatch<SetStateAction<Recipe[]>>;
}

const RecipeContext = createContext<RecipeContextProps | undefined>(undefined);

export default RecipeContext;
