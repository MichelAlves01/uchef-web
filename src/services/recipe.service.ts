import { useCallback } from "react";
import { useApi } from "../shared/hooks/http.util";
import type { Recipe } from "../model/Recipe";

export function RecipeService() {
  const { get } = useApi();
  const getAllRecipes = useCallback(async (): Promise<Recipe[]> => {
    return await get("/api/recipes");
  }, [get]);

  return {
    getAllRecipes,
  };
}
