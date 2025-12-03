import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ListCreation from "./pages/list-creation/ListCreation.tsx";
import ShoppingListPage from "./pages/shopping-list/ShoppingList.tsx";
import Layout from "./pages/Layout/Layout.tsx";
import RecipePage from "./pages/recipe/RecipePage.tsx";
import UserPage from "./pages/user/UserPage.tsx";
import RecipeContextProvider from "./shared/context/RecipeContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/recipes" element={<RecipeContextProvider />}>
            <Route path="list-creation" element={<ListCreation />}></Route>
            <Route path="" element={<RecipePage />}></Route>
          </Route>
          <Route path="/shopping-list" element={<ShoppingListPage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
