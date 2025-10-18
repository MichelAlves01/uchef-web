## Recipe Requirements

**BE**

_Get all recipes_

> `[GET] api/recipe/`

return

```json
	{
		"name": "Pancakes",
		"description": "Fluffy pancakes made with eggs, milk, and flour.",
		"category": "breakfast",
		"cookingTime": 10
        // user
        // ingredients
	},
```

**FE**

- Create responsive cards component to list recipes
- service to request all recipes
