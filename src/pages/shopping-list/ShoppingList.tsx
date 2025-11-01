import { Card, Grid } from "@mui/material";
import { RecipeService } from "../../services/recipe.service";
import { useCallback, useEffect, useState } from "react";
import type { Recipe } from "../../model/Recipe";

export interface ShoppingListPageProps {
  gridSize?: number;
}

function ShoppingListPage({ gridSize = 10 }: Readonly<ShoppingListPageProps>) {
  const [recipes, setRecipes] = useState<Recipe[]>();
  const service = RecipeService();

  const fetchData = useCallback(async () => {
    const recipes = await service.getAllRecipes();
    setRecipes(recipes);
  }, [service]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid
      direction={"column"}
      className="shopping-list-container"
      size={gridSize}
    >
      <h3>Shopping List</h3>
      <Grid container direction={"row"}>
        {recipes?.map((recipe) => (
          <Card className="recipe-card">{recipe.name}</Card>
        ))}
      </Grid>
    </Grid>
  );
}

export default ShoppingListPage;
