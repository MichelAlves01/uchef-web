import type { Ingredient } from "../model/Ingredient";
import { useApi } from "../shared/hooks/http.util";

export function IngredientService() {
  const { get } = useApi();

  async function getIngredients(): Promise<Ingredient[]> {
    return get<Ingredient[]>("/api/ingredient");
  }

  return {
    getIngredients,
  };
}

export default IngredientService;
