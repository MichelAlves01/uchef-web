import { Box, Button, Card, Grid, Toolbar } from "@mui/material";
import type { Recipe } from "../../model/Recipe";
import "./RecipeList.scss";
import SearchComponent from "../../shared/components/search/SearchComponent";
import { useContext, useEffect, useState } from "react";
import RecipeContext from "../../shared/context/RecipeContext";

export interface RecipeListProps {
  isCreatingOrEditing: boolean;
  onRecipeSelection: () => void;
}
function RecipeList({
  isCreatingOrEditing,
  onRecipeSelection,
}: Readonly<RecipeListProps>) {
  const context = useContext(RecipeContext);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(
    context?.recipes || []
  );

  useEffect(() => {
    setFilteredRecipes(context?.recipes || []);
  }, [context?.recipes]);

  function handleFilterRecipes(value: string) {
    if (context?.recipes) {
      const filteredRecipes = context?.recipes.filter((r) =>
        r.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredRecipes(filteredRecipes);
    }
  }

  return (
    <>
      <Toolbar>
        <SearchComponent
          onInputChange={(value) => handleFilterRecipes(value)}
        ></SearchComponent>
        {!isCreatingOrEditing && (
          <Button onClick={onRecipeSelection}>CREATE</Button>
        )}
      </Toolbar>
      <Grid
        container
        direction={"row"}
        spacing={2}
        className="recipe-container"
      >
        {filteredRecipes.map((recipe) => (
          <Card className="recipe-card" onClick={onRecipeSelection}>
            <Box className={"recipe-img"}>
              <img src="/src/assets/default_food_image.jpeg" alt="" />
            </Box>
            <span>{recipe.name}</span>
          </Card>
        ))}
      </Grid>
    </>
  );
}

export default RecipeList;
