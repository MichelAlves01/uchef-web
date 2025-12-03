import { useState } from "react";
import { Grid } from "@mui/material";

import "./Recipe.scss";

import RecipeList from "./RecipeList";
import DoubledDynamicContainer from "../../shared/components/container/DoubledDynamicContainer";
import CreateRecipe from "./CreateRecipe";

function RecipePage() {
  const [displayCreationPage, setDisplayCreationPage] = useState(false);

  return (
    <Grid container direction={"column"} size={10}>
      <DoubledDynamicContainer
        leftContainer={
          <RecipeList
            isCreatingOrEditing={displayCreationPage}
            onRecipeSelection={() => setDisplayCreationPage(true)}
          ></RecipeList>
        }
        rightContainer={<CreateRecipe id={undefined} />}
        displayRightContainer={displayCreationPage}
      ></DoubledDynamicContainer>
    </Grid>
  );
}

export default RecipePage;
