import { useApi } from "../shared/hooks/http.util";
import type { Recipe } from "../model/Recipe";

export function RecipeService() {
  const { get } = useApi();
  const getAllRecipes = async (): Promise<Recipe[]> => {
    return await get("/api/recipe");
  };

  return {
    getAllRecipes,
  };
}
