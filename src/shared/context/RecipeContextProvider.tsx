import { useEffect, useState, type PropsWithChildren } from "react";
import { RecipeService } from "../../services/recipe.service";
import { Outlet } from "react-router-dom";
import type { Recipe } from "../../model/Recipe";
import RecipeContext from "./RecipeContext";

function RecipeContextProvider({ children }: Readonly<PropsWithChildren>) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const service = RecipeService();

  const fetchData = async () => {
    const recipes = await service.getAllRecipes();
    setRecipes(recipes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <RecipeContext.Provider
      value={{ recipes: recipes, setRecipes: setRecipes }}
    >
      {children}
      <Outlet />
    </RecipeContext.Provider>
  );
}

export default RecipeContextProvider;
