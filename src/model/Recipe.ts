export class Recipe {
  name: string;
  description: string;
  category: string;
  cookingTime: number;

  constructor(
    name: string,
    description: string,
    category: string,
    cookingTime: number
  ) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.cookingTime = cookingTime;
  }
}
