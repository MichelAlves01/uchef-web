import type { Ingredient } from "./Ingredient";

export interface Recipe {
  name: string;
  description: string;
  category: string;
  cookingTime: number;
  id: number | undefined;
  makingMethod: string;
  ingredients: Set<Ingredient>;
}
