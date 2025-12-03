import { useContext, useState } from "react";
import type { Recipe } from "../../model/Recipe";
import RecipeContext from "../../shared/context/RecipeContext";
import {
  Autocomplete,
  IconButton,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import "./CreateRecipe.scss";
import type { Ingredient } from "../../model/Ingredient";
import IngredientService from "../../services/ingredient.service";
import AlertMessage from "../../shared/components/AlertMessage";
import IngredientTable from "../../shared/components/table/IngredientTable";
import { Add } from "@mui/icons-material";

interface CreateRecipeProps {
  id: number | undefined;
}

function CreateRecipe({ id }: Readonly<CreateRecipeProps>) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [recipe, setRecipe] = useState<Recipe>();
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(
    null
  );
  const context = useContext(RecipeContext);
  const ingredientService = IngredientService();

  async function getIngredients() {
    const data = await ingredientService.getIngredients().catch(() => {
      AlertMessage("Fail to request ingredients", "error");
    });
    if (data) {
      setIngredients(data);
    }
  }

  useState(() => {
    if (!id && id !== 0) {
      setRecipe(createNewRecipe());
    }
  });

  function createNewRecipe() {
    const recipe: Recipe = {
      id: undefined,
      name: "",
      category: "",
      cookingTime: 0,
      description: "",
      makingMethod: "",
      ingredients: new Set(),
    };

    context?.recipes.unshift(recipe);
    context?.setRecipes(context.recipes);

    getIngredients();

    return recipe;
  }

  function addIngredient(value: string | null) {
    const newIngredient = ingredients?.find(
      (ingredient) => ingredient?.name === value
    );
    if (newIngredient) {
      recipe?.ingredients.add(newIngredient);
      setRecipe({ ...recipe });
    }
  }

  return (
    <Stack gap={3} className="create-recipe">
      <div className="recipe-img">
        <Paper elevation={0}>
          <img src="/src/assets/default_food_image.jpeg" alt="" />
        </Paper>
      </div>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={recipe?.name}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Description"
        multiline
        maxRows={4}
        rows={2}
        value={recipe?.description}
      />

      <div>
        <Stack direction={"row"}>
          <Autocomplete
            fullWidth
            options={ingredients
              .sort((a, b) => {
                if (a.name < b.name) {
                  return -1;
                } else if (a.name > b.name) {
                  return 1;
                }
                return 0;
              })
              .map(
                (i) => i.name + (recipe?.ingredients.has(i) ? " (added)" : "")
              )}
            onChange={(event, value) => setSelectedIngredient(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search new ingredients"
                slotProps={{
                  input: {
                    ...params.InputProps,
                  },
                }}
              ></TextField>
            )}
          ></Autocomplete>
          <IconButton onClick={() => addIngredient(selectedIngredient)}>
            <Add />
          </IconButton>
        </Stack>
        <IngredientTable ingredients={recipe?.ingredients}></IngredientTable>
      </div>
      <TextField
        id="makeSteps"
        label="How to Make"
        multiline
        rows={4}
        value={recipe?.makingMethod}
      ></TextField>
    </Stack>
  );
}

export default CreateRecipe;
