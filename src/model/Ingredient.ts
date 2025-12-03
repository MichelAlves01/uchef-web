export interface Ingredient {
  id: number;
  name: string;
  category: string;
  defaultUnit: string;
  quantity: number | undefined;
}
