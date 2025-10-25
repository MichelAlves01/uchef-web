import { useCallback, useEffect, useState } from "react";
import { RecipeService } from "../../services/recipe.service";
import { Recipe } from "../../model/Recipe";
import { Button, Card, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import "./recipe.scss";
import { LeftMenuButton } from "../../shared/components/LeftMenuButton";

function RecipePage() {
  const [recipes, setRecipes] = useState<Recipe[]>();
  const service = RecipeService();

  const fetchData = useCallback(async () => {
    const recipes = await service.getAllRecipes();
    setRecipes(recipes);
  }, [service]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Grid container className="recipe-page">
      <Grid container className="left-menu" direction={"column"}>
        <div className="app-title">
          <span>Chef Shop</span>
        </div>
        <LeftMenuButton text="Home Page" icon={<HomeIcon />}></LeftMenuButton>
        <LeftMenuButton text="Recipes" icon={<HomeIcon />}></LeftMenuButton>
        <LeftMenuButton
          text="Shopping Lists"
          icon={<HomeIcon />}
        ></LeftMenuButton>
        <LeftMenuButton text="User" icon={<HomeIcon />}></LeftMenuButton>
      </Grid>
      <Grid
        container
        size={9}
        direction={"row"}
        spacing={2}
        className="recipe-container"
      >
        {recipes?.map((recipe) => (
          <Card className="recipe-card">{recipe.name}</Card>
        ))}
      </Grid>
    </Grid>
  );
}

export default RecipePage;
