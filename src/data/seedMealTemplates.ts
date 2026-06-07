import type { SeedMealTemplate } from '../types';

export const seedMealTemplates: SeedMealTemplate[] = [
  {
    "slug": "gochujang-chicken-bowl",
    "name": "Gochujang chicken bowl, rice, quick cucumber, sesame slaw",
    "category": "Grain and protein bowls",
    "description": "Sticky gochujang chicken over rice with cold cucumber and sesame cabbage crunch.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Creamy, spicy, cozy",
      "Crispy, saucy, crunchy"
    ],
    "cuisineInfluence": [
      "Korean-ish"
    ],
    "format": "bowl",
    "timeMinutes": 30,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "gochujang",
      "rice bowl",
      "spicy",
      "crunchy",
      "weeknight"
    ],
    "chefNote": "Taste gochujang before serving. It should be bold enough to season the chicken thighs and rice, not just sit on top.",
    "whyItWorks": "Sticky gochujang chicken over rice with cold cucumber and sesame cabbage crunch.",
    "ingredients": [
      {
        "rawName": "chicken thighs",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "cabbage",
        "canonicalName": "cabbage",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "3 cups",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "gochujang",
        "canonicalName": "gochujang",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 6,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "sesame seeds",
        "canonicalName": "sesame seed",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "kimchi",
        "canonicalName": "kimchi",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chicken thighs and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, scallions, kimchi after warming.",
    "recipe": {
      "activeTimeMinutes": 25,
      "totalTimeMinutes": 30,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains or noodles should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir gochujang with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken thighs",
          "body": "Cook chicken thighs over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss cucumber, cabbage. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste chicken thighs, rice, and gochujang separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice into bowls, add chicken thighs, tuck in cucumber, cabbage, then drizzle with gochujang.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Gochujang chicken bowl with cucumber, scallions, kimchi and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "teriyaki-salmon-bowl-edamame-avocado-furikake",
    "name": "Teriyaki salmon bowl, edamame, avocado, furikake",
    "category": "Grain and protein bowls",
    "description": "Glossy salmon over rice with edamame, creamy avocado, and furikake crunch.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Japanese-ish"
    ],
    "format": "bowl",
    "timeMinutes": 25,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "teriyaki",
      "salmon",
      "rice bowl",
      "avocado",
      "furikake"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the salmon and rice, not just sit on top.",
    "whyItWorks": "Glossy salmon over rice with edamame, creamy avocado, and furikake crunch.",
    "ingredients": [
      {
        "rawName": "salmon",
        "canonicalName": "salmon",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "edamame",
        "canonicalName": "edamame",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 3,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "core"
      },
      {
        "rawName": "furikake",
        "canonicalName": "furikake",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 5,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "pickled ginger",
        "canonicalName": "pickled ginger",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "brown sugar",
        "canonicalName": "brown sugar",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "rice vinegar",
        "canonicalName": "rice vinegar",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover salmon and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add avocado, scallions, cucumber after warming.",
    "recipe": {
      "activeTimeMinutes": 20,
      "totalTimeMinutes": 25,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss the vegetables with oil, salt, pepper, and the main seasoning from Teriyaki salmon bowl. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the salmon",
          "body": "Pat salmon dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until salmon is cooked through and the vegetables is browned at the edges.",
          "timeMinutes": 18,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir the sauce with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook rice so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with avocado, scallions, cucumber and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Teriyaki salmon bowl over or alongside rice, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "harissa-chicken-bowl-couscous-roasted-carrots-herby-yogurt",
    "name": "Harissa chicken bowl, couscous, roasted carrots, herby yogurt",
    "category": "Grain and protein bowls",
    "description": "Spiced chicken, sweet roasted carrots, couscous, cucumber, lemony yogurt.",
    "dinnerLanes": [
      "Charred, citrusy, herby",
      "Rice bowl energy",
      "Mediterranean home cooking"
    ],
    "cuisineInfluence": [
      "North African-ish"
    ],
    "format": "bowl",
    "timeMinutes": 30,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "harissa",
      "herby",
      "couscous",
      "yogurt",
      "weeknight"
    ],
    "chefNote": "Taste Greek yogurt, harissa before serving. It should be bold enough to season the chicken and couscous, not just sit on top.",
    "whyItWorks": "Spiced chicken, sweet roasted carrots, couscous, cucumber, lemony yogurt.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "carrots",
        "canonicalName": "carrot",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "4 medium",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "couscous",
        "canonicalName": "couscou",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 4,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "harissa",
        "canonicalName": "harissa",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 6,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "pickled onion",
        "canonicalName": "pickled onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "toasted almonds",
        "canonicalName": "almond",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 10,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      },
      {
        "rawName": "pepper",
        "canonicalName": "pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 13,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chicken and couscous separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, parsley, pickled onion after warming.",
    "recipe": {
      "activeTimeMinutes": 25,
      "totalTimeMinutes": 30,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss carrots with oil, salt, pepper, and the main seasoning from Harissa chicken bowl. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the chicken",
          "body": "Pat chicken dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until chicken is cooked through and carrots is browned at the edges.",
          "timeMinutes": 22,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir Greek yogurt, harissa with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook couscous so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with lemon, parsley, pickled onion and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Harissa chicken bowl over or alongside couscous, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "carne-asada-bowl-cilantro-lime-rice-black-beans-pico",
    "name": "Carne asada bowl, cilantro lime rice, black beans, pico",
    "category": "Grain and protein bowls",
    "description": "Charred steak over lime rice with black beans, pico, crema, and cilantro.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Mexican-ish"
    ],
    "format": "bowl",
    "timeMinutes": 35,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "steak",
      "lime",
      "rice bowl",
      "beans",
      "charred"
    ],
    "chefNote": "Taste crema before serving. It should be bold enough to season the steak and rice, black beans, not just sit on top.",
    "whyItWorks": "Charred steak over lime rice with black beans, pico, crema, and cilantro.",
    "ingredients": [
      {
        "rawName": "steak",
        "canonicalName": "steak",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "black beans",
        "canonicalName": "black bean",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "red onion",
        "canonicalName": "red onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "crema",
        "canonicalName": "crema",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 9,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "jalapeno",
        "canonicalName": "jalapeno",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 13,
        "displayQuantity": "as needed",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "large skillet",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover steak and rice, black beans separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cilantro, lime, avocado after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 35,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice, black beans first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir crema with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the steak",
          "body": "Cook steak over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss tomatoes. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste steak, rice, black beans, and crema separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice, black beans into bowls, add steak, tuck in tomatoes, then drizzle with crema.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Carne asada bowl with cilantro, lime, avocado and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "crispy-tofu-bibimbap-bowl-gochujang-fried-egg",
    "name": "Crispy tofu bibimbap bowl, gochujang, fried egg",
    "category": "Grain and protein bowls",
    "description": "Crisp tofu, rice, vegetables, fried egg, and gochujang sauce.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Crispy, saucy, crunchy"
    ],
    "cuisineInfluence": [
      "Korean-ish"
    ],
    "format": "bowl",
    "timeMinutes": 32,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "tofu",
      "bibimbap",
      "gochujang",
      "crispy",
      "egg"
    ],
    "chefNote": "Taste gochujang before serving. It should be bold enough to season the tofu and rice, not just sit on top.",
    "whyItWorks": "Crisp tofu, rice, vegetables, fried egg, and gochujang sauce.",
    "ingredients": [
      {
        "rawName": "tofu",
        "canonicalName": "tofu",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "14 oz",
        "prep": "pressed and cubed",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "eggs",
        "canonicalName": "egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 3,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "core"
      },
      {
        "rawName": "spinach",
        "canonicalName": "spinach",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "carrots",
        "canonicalName": "carrot",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "4 medium",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "gochujang",
        "canonicalName": "gochujang",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 7,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "kimchi",
        "canonicalName": "kimchi",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "sesame seeds",
        "canonicalName": "sesame seed",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "mushrooms",
        "canonicalName": "mushroom",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 10,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "rice vinegar",
        "canonicalName": "rice vinegar",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 13,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 14,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "large skillet"
    ],
    "leftoversNote": "Store leftover tofu and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, kimchi after warming.",
    "recipe": {
      "activeTimeMinutes": 27,
      "totalTimeMinutes": 32,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains or noodles should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir gochujang with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the tofu",
          "body": "Cook tofu over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss spinach, carrots, cucumber. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste tofu, rice, and gochujang separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice into bowls, add tofu, tuck in spinach, carrots, cucumber, then drizzle with gochujang.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Crispy tofu bibimbap bowl with cucumber, kimchi and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "lemon-pepper-chicken-bowl-orzo-charred-broccolini",
    "name": "Lemon pepper chicken bowl, orzo, charred broccolini",
    "category": "Grain and protein bowls",
    "description": "Peppery chicken with lemony orzo and charred broccolini.",
    "dinnerLanes": [
      "Charred, citrusy, herby",
      "Rice bowl energy"
    ],
    "cuisineInfluence": [
      "Simple healthy weeknight"
    ],
    "format": "bowl",
    "timeMinutes": 28,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "lemon pepper",
      "orzo",
      "chicken",
      "broccolini",
      "bright"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the chicken and orzo, not just sit on top.",
    "whyItWorks": "Peppery chicken with lemony orzo and charred broccolini.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "orzo",
        "canonicalName": "orzo",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "broccolini",
        "canonicalName": "broccolini",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "feta",
        "canonicalName": "feta",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 6,
        "displayQuantity": "4 oz",
        "importance": "optional"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 7,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "black pepper",
        "canonicalName": "black pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large pot",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover chicken and orzo separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 23,
      "totalTimeMinutes": 28,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Boil the base",
          "body": "Bring salted water to a boil. Cook orzo until just shy of tender, then save 1 cup of the cooking water.",
          "timeMinutes": 10,
          "component": "base",
          "visualCue": "It should still have a little bite."
        },
        {
          "stepNumber": 2,
          "title": "Brown the chicken",
          "body": "Cook chicken in a wide skillet over medium-high heat until browned in spots and nearly cooked through.",
          "timeMinutes": 6,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "You want browning, not steaming."
        },
        {
          "stepNumber": 3,
          "title": "Add vegetables",
          "body": "Add broccolini and cook until hot, glossy, and still colorful.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "Greens should wilt; sturdy vegetables should soften at the edges."
        },
        {
          "stepNumber": 4,
          "title": "Build the sauce",
          "body": "Lower the heat and stir in Greek yogurt. Add splashes of pasta water until glossy.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should slide, not clump."
        },
        {
          "stepNumber": 5,
          "title": "Toss together",
          "body": "Add orzo to the skillet and toss hard for 1 to 2 minutes so every piece is coated.",
          "timeMinutes": 2,
          "component": "assembly",
          "visualCue": "The pasta should look shiny."
        },
        {
          "stepNumber": 6,
          "title": "Finish bright",
          "body": "Turn off the heat. Add lemon, parsley, more pasta water if needed, and a final drizzle of olive oil.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve now",
          "body": "Plate Lemon pepper chicken bowl while hot. Add the optional upgrade at the table.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "bulgogi-beef-bowl-rice-kimchi-scallion",
    "name": "Bulgogi beef bowl, rice, kimchi, scallion",
    "category": "Grain and protein bowls",
    "description": "Sweet soy beef over rice with kimchi and sharp scallions.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "Korean-ish"
    ],
    "format": "bowl",
    "timeMinutes": 25,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "bulgogi",
      "beef",
      "kimchi",
      "rice bowl",
      "scallion"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the thin sliced beef and rice, not just sit on top.",
    "whyItWorks": "Sweet soy beef over rice with kimchi and sharp scallions.",
    "ingredients": [
      {
        "rawName": "thin sliced beef",
        "canonicalName": "thin beef",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "kimchi",
        "canonicalName": "kimchi",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 3,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "fried egg",
        "canonicalName": "fried egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 6,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "optional"
      },
      {
        "rawName": "sesame seeds",
        "canonicalName": "sesame seed",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "brown sugar",
        "canonicalName": "brown sugar",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 10,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover thin sliced beef and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add kimchi, scallions after warming.",
    "recipe": {
      "activeTimeMinutes": 20,
      "totalTimeMinutes": 25,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir the sauce with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the thin sliced beef",
          "body": "Cook thin sliced beef over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss onion. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste thin sliced beef, rice, and the sauce separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice into bowls, add thin sliced beef, tuck in onion, then drizzle with the sauce.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Bulgogi beef bowl with kimchi, scallions and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "falafel-bowl-hummus-tahini-chopped-israeli-salad",
    "name": "Falafel bowl, hummus, tahini, chopped Israeli salad",
    "category": "Grain and protein bowls",
    "description": "Falafel, hummus, tahini, crunchy chopped salad, herbs, and pita.",
    "dinnerLanes": [
      "Big platter dinner",
      "Mediterranean home cooking",
      "Crispy, saucy, crunchy"
    ],
    "cuisineInfluence": [
      "Israeli-ish"
    ],
    "format": "bowl",
    "timeMinutes": 30,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "falafel",
      "hummus",
      "tahini",
      "chopped salad",
      "crispy"
    ],
    "chefNote": "Thin the tahini with cold water slowly. It may seize first, then turn glossy and pourable.",
    "whyItWorks": "Falafel, hummus, tahini, crunchy chopped salad, herbs, and pita.",
    "ingredients": [
      {
        "rawName": "falafel",
        "canonicalName": "falafel",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 1,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "hummus",
        "canonicalName": "hummu",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 2,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "tahini",
        "canonicalName": "tahini",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "pita",
        "canonicalName": "pita",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 7,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "pickled onion",
        "canonicalName": "pickled onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "feta",
        "canonicalName": "feta",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 9,
        "displayQuantity": "4 oz",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 11,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store falafel, chopped salad, pita, and sauces separately for up to 3 days. Rewarm falafel in a skillet or oven so it crisps back up.",
    "recipe": {
      "activeTimeMinutes": 25,
      "totalTimeMinutes": 30,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Warm the falafel",
          "body": "Heat oven to 400°F or warm a skillet over medium heat. Cook falafel until hot in the center and crisp at the edges.",
          "timeMinutes": 10,
          "temperature": "400°F",
          "component": "protein",
          "visualCue": "The outside should feel dry and crisp, not soft or steamy."
        },
        {
          "stepNumber": 2,
          "title": "Make the tahini sauce",
          "body": "Whisk tahini with lemon juice, salt, and cold water a spoonful at a time until it turns pale and pourable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 3,
          "title": "Season the hummus",
          "body": "Spoon hummus into a bowl and loosen it with a little olive oil and lemon. Taste for salt before plating.",
          "timeMinutes": 2,
          "component": "sauce"
        },
        {
          "stepNumber": 4,
          "title": "Chop the salad",
          "body": "Dice cucumber and tomatoes, then toss with parsley, lemon, olive oil, and salt.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The salad should be juicy and sharp, but not watery."
        },
        {
          "stepNumber": 5,
          "title": "Warm the pita",
          "body": "Warm pita in a dry skillet or low oven until soft and flexible. Tear or cut it into pieces for scooping.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend easily without cracking."
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Swipe hummus into the bowl first, add hot falafel, spoon chopped salad around it, then drizzle tahini over the top.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish with contrast",
          "body": "Add pickled onion or feta if using. Finish with olive oil, lemon, and herbs right before eating.",
          "component": "finish",
          "visualCue": "Every bite should have creamy, crisp, fresh, and tangy."
        }
      ]
    }
  },
  {
    "slug": "blackened-shrimp-bowl-dirty-rice-charred-corn",
    "name": "Blackened shrimp bowl, dirty rice, charred corn",
    "category": "Grain and protein bowls",
    "description": "Spiced shrimp, dirty rice, sweet charred corn, lime, and crema.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Cajun-ish"
    ],
    "format": "bowl",
    "timeMinutes": 24,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "shrimp",
      "dirty rice",
      "charred corn",
      "spicy",
      "lime"
    ],
    "chefNote": "Taste crema before serving. It should be bold enough to season the shrimp and rice, green beans, not just sit on top.",
    "whyItWorks": "Spiced shrimp, dirty rice, sweet charred corn, lime, and crema.",
    "ingredients": [
      {
        "rawName": "shrimp",
        "canonicalName": "shrimp",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "corn",
        "canonicalName": "corn",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "green beans",
        "canonicalName": "green bean",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "crema",
        "canonicalName": "crema",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 7,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "cajun seasoning",
        "canonicalName": "cajun seasoning",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover shrimp and rice, green beans separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lime, scallions, avocado after warming.",
    "recipe": {
      "activeTimeMinutes": 19,
      "totalTimeMinutes": 24,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice, green beans first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir crema with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the shrimp",
          "body": "Cook shrimp over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss corn, green beans. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste shrimp, rice, green beans, and crema separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice, green beans into bowls, add shrimp, tuck in corn, green beans, then drizzle with crema.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Blackened shrimp bowl with lime, scallions, avocado and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "miso-glazed-cod-bowl-jasmine-rice-bok-choy",
    "name": "Miso-glazed cod bowl, jasmine rice, bok choy",
    "category": "Grain and protein bowls",
    "description": "Miso-glazed cod with jasmine rice, bok choy, and ginger scallion oil.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Japanese-ish"
    ],
    "format": "bowl",
    "timeMinutes": 26,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "miso",
      "cod",
      "jasmine rice",
      "bok choy",
      "ginger"
    ],
    "chefNote": "Taste miso before serving. It should be bold enough to season the cod and jasmine rice, not just sit on top.",
    "whyItWorks": "Miso-glazed cod with jasmine rice, bok choy, and ginger scallion oil.",
    "ingredients": [
      {
        "rawName": "cod",
        "canonicalName": "cod",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "jasmine rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "bok choy",
        "canonicalName": "bok choy",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "miso",
        "canonicalName": "miso",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 5,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "sesame seeds",
        "canonicalName": "sesame seed",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 6,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "ginger",
        "canonicalName": "ginger",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "rice vinegar",
        "canonicalName": "rice vinegar",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover cod and jasmine rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add scallions, cucumber after warming.",
    "recipe": {
      "activeTimeMinutes": 21,
      "totalTimeMinutes": 26,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start jasmine rice first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir miso with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the cod",
          "body": "Cook cod over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss bok choy. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste cod, jasmine rice, and miso separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon jasmine rice into bowls, add cod, tuck in bok choy, then drizzle with miso.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Miso-glazed cod bowl with scallions, cucumber and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "chipotle-steak-bowl-lime-rice-roasted-peppers-crema",
    "name": "Chipotle steak bowl, lime rice, roasted peppers, crema",
    "category": "Grain and protein bowls",
    "description": "Smoky steak with lime rice, roasted peppers, crema, and cilantro.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Mexican-ish"
    ],
    "format": "bowl",
    "timeMinutes": 32,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "chipotle",
      "steak",
      "lime rice",
      "roasted peppers",
      "crema"
    ],
    "chefNote": "Taste crema, chipotle powder before serving. It should be bold enough to season the steak and rice, not just sit on top.",
    "whyItWorks": "Smoky steak with lime rice, roasted peppers, crema, and cilantro.",
    "ingredients": [
      {
        "rawName": "steak",
        "canonicalName": "steak",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "bell peppers",
        "canonicalName": "bell pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "crema",
        "canonicalName": "crema",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 6,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "pico",
        "canonicalName": "pico",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "chipotle powder",
        "canonicalName": "chipotle powder",
        "quantity": null,
        "unit": null,
        "section": "Snacks",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Snacks",
        "sortOrder": 9,
        "displayQuantity": "1/3 cup",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan",
      "large skillet"
    ],
    "leftoversNote": "Store leftover steak and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cilantro, lime, avocado after warming.",
    "recipe": {
      "activeTimeMinutes": 27,
      "totalTimeMinutes": 32,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss bell peppers with oil, salt, pepper, and the main seasoning from Chipotle steak bowl. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the steak",
          "body": "Pat steak dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until steak is cooked through and bell peppers is browned at the edges.",
          "timeMinutes": 24,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir crema, chipotle powder with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook rice so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with cilantro, lime, avocado and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Chipotle steak bowl over or alongside rice, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "peanut-chicken-bowl-rice-noodles-cabbage-lime",
    "name": "Peanut chicken bowl, rice noodles, cabbage, lime",
    "category": "Grain and protein bowls",
    "description": "Chicken and rice noodles with crunchy cabbage and a salty lime peanut sauce.",
    "dinnerLanes": [
      "Creamy, spicy, cozy",
      "Crispy, saucy, crunchy"
    ],
    "cuisineInfluence": [
      "Thai-ish"
    ],
    "format": "noodle bowl",
    "timeMinutes": 25,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "peanut sauce",
      "chicken",
      "noodles",
      "cabbage",
      "lime"
    ],
    "chefNote": "Taste peanut butter before serving. It should be bold enough to season the chicken and rice noodles, not just sit on top.",
    "whyItWorks": "Chicken and rice noodles with crunchy cabbage and a salty lime peanut sauce.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice noodles",
        "canonicalName": "rice noodl",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "cabbage",
        "canonicalName": "cabbage",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "3 cups",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "peanut butter",
        "canonicalName": "peanut butter",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "chili crisp",
        "canonicalName": "chili crisp",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "rice vinegar",
        "canonicalName": "rice vinegar",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 13,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large pot",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chicken and rice noodles separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lime, scallions, cilantro after warming.",
    "recipe": {
      "activeTimeMinutes": 20,
      "totalTimeMinutes": 25,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice noodles first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains or noodles should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir peanut butter with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken",
          "body": "Cook chicken over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss cabbage. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste chicken, rice noodles, and peanut butter separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice noodles into bowls, add chicken, tuck in cabbage, then drizzle with peanut butter.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Peanut chicken bowl with lime, scallions, cilantro and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "tandoori-chicken-bowl-basmati-cucumber-raita-mint",
    "name": "Tandoori chicken bowl, basmati, cucumber raita, mint",
    "category": "Grain and protein bowls",
    "description": "Tandoori-spiced chicken over basmati with cucumber raita and mint.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Indian-ish"
    ],
    "format": "bowl",
    "timeMinutes": 35,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "tandoori",
      "chicken",
      "basmati",
      "raita",
      "mint"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the chicken and basmati rice, not just sit on top.",
    "whyItWorks": "Tandoori-spiced chicken over basmati with cucumber raita and mint.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "basmati rice",
        "canonicalName": "basmati rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 4,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "mint",
        "canonicalName": "mint",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "naan",
        "canonicalName": "naan",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 7,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "pickled onion",
        "canonicalName": "pickled onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "tandoori spice",
        "canonicalName": "tandoori spice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover chicken and basmati rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, mint, lime after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 35,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start basmati rice first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir Greek yogurt with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken",
          "body": "Cook chicken over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss cucumber. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste chicken, basmati rice, and Greek yogurt separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon basmati rice into bowls, add chicken, tuck in cucumber, then drizzle with Greek yogurt.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Tandoori chicken bowl with cucumber, mint, lime and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "garlic-ginger-pork-bowl-rice-snap-peas-chili-crisp",
    "name": "Garlic ginger pork bowl, rice, snap peas, chili crisp",
    "category": "Grain and protein bowls",
    "description": "Garlic ginger pork over rice with snap peas and chili crisp heat.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Pantry sauce magic"
    ],
    "cuisineInfluence": [
      "Chinese-ish"
    ],
    "format": "bowl",
    "timeMinutes": 22,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "pork",
      "garlic ginger",
      "snap peas",
      "chili crisp",
      "rice bowl"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the ground pork and rice, not just sit on top.",
    "whyItWorks": "Garlic ginger pork over rice with snap peas and chili crisp heat.",
    "ingredients": [
      {
        "rawName": "ground pork",
        "canonicalName": "ground pork",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "snap peas",
        "canonicalName": "snap pea",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "chili crisp",
        "canonicalName": "chili crisp",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 4,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "fried egg",
        "canonicalName": "fried egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 6,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "optional"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "ginger",
        "canonicalName": "ginger",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 10,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover ground pork and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add scallions, cucumber after warming.",
    "recipe": {
      "activeTimeMinutes": 17,
      "totalTimeMinutes": 22,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Soften aromatics",
          "body": "Warm oil in a heavy pot over medium heat. Cook onion, garlic, or the listed aromatics until soft and fragrant.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "They should look glossy, not scorched."
        },
        {
          "stepNumber": 2,
          "title": "Bloom the seasoning",
          "body": "Stir in the sauce and the dry spices for 30 to 60 seconds so the fat takes on color.",
          "timeMinutes": 1,
          "component": "sauce",
          "visualCue": "The paste should darken slightly and smell toasted."
        },
        {
          "stepNumber": 3,
          "title": "Brown the ground pork",
          "body": "Add ground pork with a pinch of salt. Brown the outside before adding the simmering liquid.",
          "timeMinutes": 6,
          "component": "protein",
          "visualCue": "The outside should no longer look raw."
        },
        {
          "stepNumber": 4,
          "title": "Simmer gently",
          "body": "Add the liquid for the dish, then fold in snap peas. Cover partly and simmer until tender and saucy.",
          "timeMinutes": 12,
          "component": "vegetables",
          "visualCue": "The sauce should coat a spoon."
        },
        {
          "stepNumber": 5,
          "title": "Cook the base",
          "body": "Cook rice while the sauce simmers. Season it lightly.",
          "timeMinutes": 15,
          "component": "base"
        },
        {
          "stepNumber": 6,
          "title": "Balance the pot",
          "body": "Taste for salt, heat, and acid. Add a splash of water if the sauce gets too tight.",
          "component": "finish",
          "visualCue": "It should taste rounded first, then bright."
        },
        {
          "stepNumber": 7,
          "title": "Serve with contrast",
          "body": "Spoon Garlic ginger pork bowl over rice. Finish with scallions, cucumber right before eating.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "greek-chicken-bowl-lemon-rice-tzatziki-tomato-cucumber",
    "name": "Greek chicken bowl, lemon rice, tzatziki, tomato cucumber",
    "category": "Grain and protein bowls",
    "description": "Lemon chicken, lemon rice, tzatziki, tomato, cucumber, and herbs.",
    "dinnerLanes": [
      "Mediterranean home cooking",
      "Rice bowl energy",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Greek-ish"
    ],
    "format": "bowl",
    "timeMinutes": 30,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "greek",
      "lemon rice",
      "tzatziki",
      "chicken",
      "cucumber"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the chicken and rice, not just sit on top.",
    "whyItWorks": "Lemon chicken, lemon rice, tzatziki, tomato, cucumber, and herbs.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "dill",
        "canonicalName": "dill",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 7,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "feta",
        "canonicalName": "feta",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 8,
        "displayQuantity": "4 oz",
        "importance": "optional"
      },
      {
        "rawName": "pita",
        "canonicalName": "pita",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 9,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 11,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover chicken and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, lemon after warming.",
    "recipe": {
      "activeTimeMinutes": 25,
      "totalTimeMinutes": 30,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir Greek yogurt with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken",
          "body": "Cook chicken over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss cucumber, tomatoes. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste chicken, rice, and Greek yogurt separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice into bowls, add chicken, tuck in cucumber, tomatoes, then drizzle with Greek yogurt.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Greek chicken bowl with cucumber, lemon and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "cajun-salmon-bowl-cheddar-grits-blistered-green-beans",
    "name": "Cajun salmon bowl, cheddar grits, blistered green beans",
    "category": "Grain and protein bowls",
    "description": "Cajun salmon over creamy cheddar grits with blistered green beans.",
    "dinnerLanes": [
      "Creamy, spicy, cozy",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Southern-ish"
    ],
    "format": "bowl",
    "timeMinutes": 30,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "cajun",
      "salmon",
      "grits",
      "green beans",
      "creamy"
    ],
    "chefNote": "Taste butter before serving. It should be bold enough to season the salmon and grits, green beans, not just sit on top.",
    "whyItWorks": "Cajun salmon over creamy cheddar grits with blistered green beans.",
    "ingredients": [
      {
        "rawName": "salmon",
        "canonicalName": "salmon",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "grits",
        "canonicalName": "grit",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 2,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "cheddar",
        "canonicalName": "cheddar",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 3,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "green beans",
        "canonicalName": "green bean",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "hot sauce",
        "canonicalName": "hot sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "cajun seasoning",
        "canonicalName": "cajun seasoning",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "butter",
        "canonicalName": "butter",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "1/3 cup",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover salmon and grits, green beans separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, scallions after warming.",
    "recipe": {
      "activeTimeMinutes": 25,
      "totalTimeMinutes": 30,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss green beans with oil, salt, pepper, and the main seasoning from Cajun salmon bowl. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the salmon",
          "body": "Pat salmon dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until salmon is cooked through and green beans is browned at the edges.",
          "timeMinutes": 22,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir butter with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook grits, green beans so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with lemon, scallions and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Cajun salmon bowl over or alongside grits, green beans, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "chicken-katsu-curry-over-rice",
    "name": "Chicken katsu curry over rice",
    "category": "Korean and Japanese",
    "description": "Crispy chicken cutlet over rice with cozy Japanese curry sauce.",
    "dinnerLanes": [
      "Crispy, saucy, crunchy",
      "Curry night",
      "Rice bowl energy"
    ],
    "cuisineInfluence": [
      "Japanese-ish"
    ],
    "format": "curry bowl",
    "timeMinutes": 40,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "katsu",
      "curry",
      "crispy",
      "rice",
      "comfort"
    ],
    "chefNote": "Taste curry blocks before serving. It should be bold enough to season the chicken cutlets and rice, not just sit on top.",
    "whyItWorks": "Crispy chicken cutlet over rice with cozy Japanese curry sauce.",
    "ingredients": [
      {
        "rawName": "chicken cutlets",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "curry blocks",
        "canonicalName": "curry block",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "carrots",
        "canonicalName": "carrot",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "4 medium",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "breadcrumbs",
        "canonicalName": "breadcrumb",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 6,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "cabbage",
        "canonicalName": "cabbage",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "3 cups",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "pickled ginger",
        "canonicalName": "pickled ginger",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "flour",
        "canonicalName": "flour",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Pantry",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "egg",
        "canonicalName": "egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Dairy",
        "sortOrder": 10,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "medium saucepan",
      "large skillet"
    ],
    "leftoversNote": "Store leftover chicken cutlets and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add pickled ginger after warming.",
    "recipe": {
      "activeTimeMinutes": 35,
      "totalTimeMinutes": 40,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Set up the coating",
          "body": "Season chicken cutlets with salt and pepper. Put flour or starch, beaten egg, and breadcrumbs or the listed coating in separate shallow bowls.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "Each bowl should be seasoned so the crust tastes good on its own."
        },
        {
          "stepNumber": 2,
          "title": "Make the fresh side",
          "body": "Toss onion, carrots with citrus, salt, and a little oil. Keep it cold while the crispy piece cooks.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The side should taste sharper than you think; it has to cut the fried crust."
        },
        {
          "stepNumber": 3,
          "title": "Coat firmly",
          "body": "Dredge chicken cutlets, pressing the coating on with your hands. Rest it for 5 minutes so the crust sticks.",
          "timeMinutes": 5,
          "component": "protein",
          "visualCue": "No wet patches should show through."
        },
        {
          "stepNumber": 4,
          "title": "Cook until crisp",
          "body": "Heat a thin layer of oil over medium-high heat. Fry chicken cutlets until deeply golden on both sides and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "The crust should sound crisp when tapped."
        },
        {
          "stepNumber": 5,
          "title": "Drain and salt",
          "body": "Move chicken cutlets to a rack or paper towel and salt it immediately.",
          "timeMinutes": 2,
          "component": "finish",
          "visualCue": "Steam should escape instead of softening the crust."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Serve with hot rice. If there is sauce, keep it spoonable and hot.",
          "timeMinutes": 5,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Plate for crunch",
          "body": "Spoon curry blocks beside or under the crispy chicken cutlets, then finish with pickled ginger.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "spicy-pork-bulgogi-lettuce-wraps-rice",
    "name": "Spicy pork bulgogi lettuce wraps, rice",
    "category": "Korean and Japanese",
    "description": "Spicy-sweet pork tucked into lettuce with rice and scallions.",
    "dinnerLanes": [
      "Tacos, wraps, and things in bread",
      "Rice bowl energy",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "Korean-ish"
    ],
    "format": "wraps",
    "timeMinutes": 25,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "bulgogi",
      "pork",
      "lettuce wraps",
      "spicy",
      "rice"
    ],
    "chefNote": "Taste gochujang before serving. It should be bold enough to season the pork and rice, not just sit on top.",
    "whyItWorks": "Spicy-sweet pork tucked into lettuce with rice and scallions.",
    "ingredients": [
      {
        "rawName": "pork",
        "canonicalName": "pork",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "lettuce",
        "canonicalName": "lettuce",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "gochujang",
        "canonicalName": "gochujang",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 5,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "kimchi",
        "canonicalName": "kimchi",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "sesame seeds",
        "canonicalName": "sesame seed",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "brown sugar",
        "canonicalName": "brown sugar",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 11,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "large skillet"
    ],
    "leftoversNote": "Store leftover pork and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lettuce, scallions, cucumber after warming.",
    "recipe": {
      "activeTimeMinutes": 20,
      "totalTimeMinutes": 25,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice lettuce, cucumber and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir gochujang with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the pork",
          "body": "Cook pork in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm rice in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then lettuce, cucumber, then gochujang. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add lettuce, scallions, cucumber right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Spicy pork bulgogi lettuce wraps with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "salmon-teriyaki-sesame-green-beans-rice",
    "name": "Salmon teriyaki, sesame green beans, rice",
    "category": "Korean and Japanese",
    "description": "Teriyaki salmon with sesame green beans and steamed rice.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Japanese-ish"
    ],
    "format": "plate",
    "timeMinutes": 25,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "teriyaki",
      "salmon",
      "green beans",
      "sesame",
      "rice"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the salmon and green beans, rice, not just sit on top.",
    "whyItWorks": "Teriyaki salmon with sesame green beans and steamed rice.",
    "ingredients": [
      {
        "rawName": "salmon",
        "canonicalName": "salmon",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "green beans",
        "canonicalName": "green bean",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "sesame seeds",
        "canonicalName": "sesame seed",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 5,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 7,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "brown sugar",
        "canonicalName": "brown sugar",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "rice vinegar",
        "canonicalName": "rice vinegar",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover salmon and green beans, rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add scallions, cucumber after warming.",
    "recipe": {
      "activeTimeMinutes": 20,
      "totalTimeMinutes": 25,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss green beans with oil, salt, pepper, and the main seasoning from Salmon teriyaki. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the salmon",
          "body": "Pat salmon dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until salmon is cooked through and green beans is browned at the edges.",
          "timeMinutes": 18,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir the sauce with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook green beans, rice so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with scallions, cucumber and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Salmon teriyaki over or alongside green beans, rice, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "beef-yakiniku-rice-bowl-onion-scallion",
    "name": "Beef yakiniku rice bowl, onion, scallion",
    "category": "Korean and Japanese",
    "description": "Sweet soy grilled beef with onion, scallion, and rice.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Japanese-ish"
    ],
    "format": "bowl",
    "timeMinutes": 24,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "yakiniku",
      "beef",
      "rice bowl",
      "scallion",
      "soy"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the thin sliced beef and rice, not just sit on top.",
    "whyItWorks": "Sweet soy grilled beef with onion, scallion, and rice.",
    "ingredients": [
      {
        "rawName": "thin sliced beef",
        "canonicalName": "thin beef",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "fried egg",
        "canonicalName": "fried egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 5,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "optional"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 7,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "mirin",
        "canonicalName": "mirin",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "sugar",
        "canonicalName": "sugar",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover thin sliced beef and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add scallions, cucumber after warming.",
    "recipe": {
      "activeTimeMinutes": 19,
      "totalTimeMinutes": 24,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir the sauce with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the thin sliced beef",
          "body": "Cook thin sliced beef over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss onion. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste thin sliced beef, rice, and the sauce separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice into bowls, add thin sliced beef, tuck in onion, then drizzle with the sauce.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Beef yakiniku rice bowl with scallions, cucumber and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "karaage-fried-chicken-kewpie-slaw-rice",
    "name": "Karaage fried chicken, kewpie slaw, rice",
    "category": "Korean and Japanese",
    "description": "Crispy ginger chicken with creamy slaw and rice.",
    "dinnerLanes": [
      "Crispy, saucy, crunchy",
      "Rice bowl energy"
    ],
    "cuisineInfluence": [
      "Japanese-ish"
    ],
    "format": "plate",
    "timeMinutes": 40,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "karaage",
      "fried chicken",
      "slaw",
      "crispy",
      "rice"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the chicken thighs and rice, not just sit on top.",
    "whyItWorks": "Crispy ginger chicken with creamy slaw and rice.",
    "ingredients": [
      {
        "rawName": "chicken thighs",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "cabbage",
        "canonicalName": "cabbage",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "3 cups",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "kewpie mayo",
        "canonicalName": "kewpie mayo",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 4,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "ginger",
        "canonicalName": "ginger",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "optional"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "cornstarch",
        "canonicalName": "cornstarch",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "large skillet",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chicken thighs and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, scallions after warming.",
    "recipe": {
      "activeTimeMinutes": 35,
      "totalTimeMinutes": 40,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Set up the coating",
          "body": "Season chicken thighs with salt and pepper. Put flour or starch, beaten egg, and breadcrumbs or the listed coating in separate shallow bowls.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "Each bowl should be seasoned so the crust tastes good on its own."
        },
        {
          "stepNumber": 2,
          "title": "Make the fresh side",
          "body": "Toss cabbage with citrus, salt, and a little oil. Keep it cold while the crispy piece cooks.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The side should taste sharper than you think; it has to cut the fried crust."
        },
        {
          "stepNumber": 3,
          "title": "Coat firmly",
          "body": "Dredge chicken thighs, pressing the coating on with your hands. Rest it for 5 minutes so the crust sticks.",
          "timeMinutes": 5,
          "component": "protein",
          "visualCue": "No wet patches should show through."
        },
        {
          "stepNumber": 4,
          "title": "Cook until crisp",
          "body": "Heat a thin layer of oil over medium-high heat. Fry chicken thighs until deeply golden on both sides and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "The crust should sound crisp when tapped."
        },
        {
          "stepNumber": 5,
          "title": "Drain and salt",
          "body": "Move chicken thighs to a rack or paper towel and salt it immediately.",
          "timeMinutes": 2,
          "component": "finish",
          "visualCue": "Steam should escape instead of softening the crust."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Serve with hot rice. If there is sauce, keep it spoonable and hot.",
          "timeMinutes": 5,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Plate for crunch",
          "body": "Spoon the sauce beside or under the crispy chicken thighs, then finish with lemon, scallions.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "dak-galbi-spicy-chicken-rice-cakes-melty-cheese",
    "name": "Dak galbi spicy chicken, rice cakes, melty cheese",
    "category": "Korean and Japanese",
    "description": "Spicy saucy chicken and rice cakes with cabbage and melty cheese.",
    "dinnerLanes": [
      "Creamy, spicy, cozy",
      "Big platter dinner"
    ],
    "cuisineInfluence": [
      "Korean-ish"
    ],
    "format": "skillet",
    "timeMinutes": 35,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "dak galbi",
      "spicy",
      "rice cakes",
      "cheesy",
      "skillet"
    ],
    "chefNote": "Taste gochujang before serving. It should be bold enough to season the chicken thighs and rice cakes, not just sit on top.",
    "whyItWorks": "Spicy saucy chicken and rice cakes with cabbage and melty cheese.",
    "ingredients": [
      {
        "rawName": "chicken thighs",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice cakes",
        "canonicalName": "rice cak",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "cabbage",
        "canonicalName": "cabbage",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "3 cups",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "mozzarella",
        "canonicalName": "mozzarella",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 4,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "gochujang",
        "canonicalName": "gochujang",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 5,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "perilla leaves",
        "canonicalName": "perilla leav",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "sesame seeds",
        "canonicalName": "sesame seed",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "sugar",
        "canonicalName": "sugar",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 11,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover chicken thighs and rice cakes separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add scallions after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 35,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Season the chicken thighs",
          "body": "Coat chicken thighs with oil, salt, pepper, and the main spice profile from Dak galbi spicy chicken. Let it sit while you prep the sides.",
          "timeMinutes": 5,
          "component": "protein",
          "visualCue": "The seasoning should cling, not pool."
        },
        {
          "stepNumber": 2,
          "title": "Make the cool sauce",
          "body": "Stir gochujang with lemon, salt, and a small splash of water until creamy and spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should taste tangy enough to wake up the plate."
        },
        {
          "stepNumber": 3,
          "title": "Prepare the base",
          "body": "Cook or warm rice cakes. Keep it covered so it stays soft.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 4,
          "title": "Cook the chicken thighs",
          "body": "Sear, grill, or roast chicken thighs until browned outside and cooked through.",
          "timeMinutes": 10,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Edges should be browned and juices should run clear for chicken."
        },
        {
          "stepNumber": 5,
          "title": "Make the salad",
          "body": "Toss cabbage with scallions, olive oil, and salt.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "The salad should be bright and crisp."
        },
        {
          "stepNumber": 6,
          "title": "Rest before slicing",
          "body": "Rest chicken thighs for 5 minutes so the juices settle.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Build the plate",
          "body": "Serve Dak galbi spicy chicken with rice cakes, gochujang, the salad, and any optional pickles or herbs.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "oyakodon-chicken-and-egg-over-rice",
    "name": "Oyakodon, chicken and egg over rice",
    "category": "Korean and Japanese",
    "description": "Chicken and soft egg simmered in sweet soy broth over rice.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "Japanese"
    ],
    "format": "rice bowl",
    "timeMinutes": 20,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "oyakodon",
      "chicken",
      "egg",
      "rice",
      "comfort"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the chicken thighs and rice, not just sit on top.",
    "whyItWorks": "Chicken and soft egg simmered in sweet soy broth over rice.",
    "ingredients": [
      {
        "rawName": "chicken thighs",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "eggs",
        "canonicalName": "egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 2,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "nori",
        "canonicalName": "nori",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 6,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "mushrooms",
        "canonicalName": "mushroom",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "sugar",
        "canonicalName": "sugar",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "stock",
        "canonicalName": "stock",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "large skillet"
    ],
    "leftoversNote": "Store leftover chicken thighs and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add scallions after warming.",
    "recipe": {
      "activeTimeMinutes": 15,
      "totalTimeMinutes": 20,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir the sauce with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken thighs",
          "body": "Cook chicken thighs over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss onion. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste chicken thighs, rice, and the sauce separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice into bowls, add chicken thighs, tuck in onion, then drizzle with the sauce.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Oyakodon with scallions and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "gyudon-sweet-soy-beef-and-onion-over-rice",
    "name": "Gyudon, sweet soy beef and onion over rice",
    "category": "Korean and Japanese",
    "description": "Thin beef and onions simmered sweet-savory over rice.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Pantry sauce magic"
    ],
    "cuisineInfluence": [
      "Japanese"
    ],
    "format": "rice bowl",
    "timeMinutes": 18,
    "effort": "Very easy",
    "servings": 4,
    "tags": [
      "gyudon",
      "beef",
      "onion",
      "rice",
      "soy"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the thin sliced beef and rice, not just sit on top.",
    "whyItWorks": "Thin beef and onions simmered sweet-savory over rice.",
    "ingredients": [
      {
        "rawName": "thin sliced beef",
        "canonicalName": "thin beef",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "soft egg",
        "canonicalName": "soft egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 5,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "optional"
      },
      {
        "rawName": "pickled ginger",
        "canonicalName": "pickled ginger",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 7,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "sugar",
        "canonicalName": "sugar",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "stock",
        "canonicalName": "stock",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover thin sliced beef and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add scallions, pickled ginger after warming.",
    "recipe": {
      "activeTimeMinutes": 15,
      "totalTimeMinutes": 18,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir the sauce with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the thin sliced beef",
          "body": "Cook thin sliced beef over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss onion. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste thin sliced beef, rice, and the sauce separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice into bowls, add thin sliced beef, tuck in onion, then drizzle with the sauce.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Gyudon with scallions, pickled ginger and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "galbi-short-ribs-rice-ssamjang-lettuce",
    "name": "Galbi short ribs, rice, ssamjang, lettuce",
    "category": "Korean and Japanese",
    "description": "Charred short ribs with rice, lettuce wraps, and ssamjang.",
    "dinnerLanes": [
      "Big platter dinner",
      "Charred, citrusy, herby",
      "Rice bowl energy"
    ],
    "cuisineInfluence": [
      "Korean-ish"
    ],
    "format": "platter",
    "timeMinutes": 35,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "galbi",
      "short ribs",
      "lettuce wraps",
      "ssamjang",
      "grilled"
    ],
    "chefNote": "Taste ssamjang before serving. It should be bold enough to season the the main ingredient and rice, not just sit on top.",
    "whyItWorks": "Charred short ribs with rice, lettuce wraps, and ssamjang.",
    "ingredients": [
      {
        "rawName": "short ribs",
        "canonicalName": "short rib",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 1,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "lettuce",
        "canonicalName": "lettuce",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "ssamjang",
        "canonicalName": "ssamjang",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 4,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "kimchi",
        "canonicalName": "kimchi",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 6,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "brown sugar",
        "canonicalName": "brown sugar",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 10,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "large skillet"
    ],
    "leftoversNote": "Store leftover the main ingredient and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lettuce, scallions, kimchi after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 35,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice lettuce and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir ssamjang with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the the main ingredient",
          "body": "Cook the main ingredient in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm rice in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then lettuce, then ssamjang. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add lettuce, scallions, kimchi right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Galbi short ribs with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "shoyu-glazed-chicken-thighs-rice-charred-cabbage",
    "name": "Shoyu-glazed chicken thighs, rice, charred cabbage",
    "category": "Korean and Japanese",
    "description": "Soy-glazed chicken thighs with rice and smoky cabbage wedges.",
    "dinnerLanes": [
      "Charred, citrusy, herby",
      "Rice bowl energy",
      "Weeknight roast"
    ],
    "cuisineInfluence": [
      "Japanese-ish"
    ],
    "format": "plate",
    "timeMinutes": 32,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "shoyu",
      "chicken thighs",
      "charred cabbage",
      "rice",
      "glazed"
    ],
    "chefNote": "Taste honey before serving. It should be bold enough to season the chicken thighs and rice, not just sit on top.",
    "whyItWorks": "Soy-glazed chicken thighs with rice and smoky cabbage wedges.",
    "ingredients": [
      {
        "rawName": "chicken thighs",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "cabbage",
        "canonicalName": "cabbage",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "3 cups",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "sesame seeds",
        "canonicalName": "sesame seed",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 5,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 7,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "honey",
        "canonicalName": "honey",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover chicken thighs and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add scallions, lime after warming.",
    "recipe": {
      "activeTimeMinutes": 27,
      "totalTimeMinutes": 32,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss cabbage with oil, salt, pepper, and the main seasoning from Shoyu-glazed chicken thighs. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the chicken thighs",
          "body": "Pat chicken thighs dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until chicken thighs is cooked through and cabbage is browned at the edges.",
          "timeMinutes": 24,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir honey with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook rice so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with scallions, lime and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Shoyu-glazed chicken thighs over or alongside rice, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "sheet-pan-chicken-shawarma-herby-tahini-pita-pickled-onion",
    "name": "Sheet pan chicken shawarma, herby tahini, pita, pickled onion",
    "category": "Middle Eastern and Mediterranean",
    "description": "Spiced chicken with pita, herby tahini, cucumber, tomato, and pickled onion.",
    "dinnerLanes": [
      "Big platter dinner",
      "Mediterranean home cooking",
      "Weeknight roast"
    ],
    "cuisineInfluence": [
      "Middle Eastern-ish"
    ],
    "format": "sheet pan",
    "timeMinutes": 38,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "shawarma",
      "tahini",
      "pita",
      "pickled onion",
      "sheet pan"
    ],
    "chefNote": "Taste tahini before serving. It should be bold enough to season the chicken thighs and pita, not just sit on top.",
    "whyItWorks": "Spiced chicken with pita, herby tahini, cucumber, tomato, and pickled onion.",
    "ingredients": [
      {
        "rawName": "chicken thighs",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "pita",
        "canonicalName": "pita",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "tahini",
        "canonicalName": "tahini",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "red onion",
        "canonicalName": "red onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "feta",
        "canonicalName": "feta",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 9,
        "displayQuantity": "4 oz",
        "importance": "optional"
      },
      {
        "rawName": "hot sauce",
        "canonicalName": "hot sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "paprika",
        "canonicalName": "paprika",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 13,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 14,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chicken thighs and pita separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, lemon, parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 33,
      "totalTimeMinutes": 38,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice cucumber, tomatoes and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir tahini with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken thighs",
          "body": "Cook chicken thighs in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm pita in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then cucumber, tomatoes, then tahini. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add cucumber, lemon, parsley right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Sheet pan chicken shawarma with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "lamb-kofta-garlic-yogurt-couscous-cucumber-tomato",
    "name": "Lamb kofta, garlic yogurt, couscous, cucumber tomato",
    "category": "Middle Eastern and Mediterranean",
    "description": "Seared lamb kofta with couscous, garlic yogurt, and cucumber tomato salad.",
    "dinnerLanes": [
      "Big platter dinner",
      "Mediterranean home cooking"
    ],
    "cuisineInfluence": [
      "Middle Eastern-ish"
    ],
    "format": "platter",
    "timeMinutes": 32,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "kofta",
      "garlic yogurt",
      "couscous",
      "herby",
      "platter"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the ground lamb and couscous, not just sit on top.",
    "whyItWorks": "Seared lamb kofta with couscous, garlic yogurt, and cucumber tomato salad.",
    "ingredients": [
      {
        "rawName": "ground lamb",
        "canonicalName": "ground lamb",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 2,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "couscous",
        "canonicalName": "couscou",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "sumac",
        "canonicalName": "sumac",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "mint",
        "canonicalName": "mint",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 10,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      },
      {
        "rawName": "pepper",
        "canonicalName": "pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 13,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "large skillet",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover ground lamb and couscous separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, parsley, lemon after warming.",
    "recipe": {
      "activeTimeMinutes": 27,
      "totalTimeMinutes": 32,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Season the ground lamb",
          "body": "Coat ground lamb with oil, salt, pepper, and the main spice profile from Lamb kofta. Let it sit while you prep the sides.",
          "timeMinutes": 5,
          "component": "protein",
          "visualCue": "The seasoning should cling, not pool."
        },
        {
          "stepNumber": 2,
          "title": "Make the cool sauce",
          "body": "Stir Greek yogurt with lemon, salt, and a small splash of water until creamy and spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should taste tangy enough to wake up the plate."
        },
        {
          "stepNumber": 3,
          "title": "Prepare the base",
          "body": "Cook or warm couscous. Keep it covered so it stays soft.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 4,
          "title": "Cook the ground lamb",
          "body": "Sear, grill, or roast ground lamb until browned outside and cooked through.",
          "timeMinutes": 10,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Edges should be browned and juices should run clear for chicken."
        },
        {
          "stepNumber": 5,
          "title": "Make the salad",
          "body": "Toss cucumber, tomatoes with cucumber, parsley, lemon, olive oil, and salt.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "The salad should be bright and crisp."
        },
        {
          "stepNumber": 6,
          "title": "Rest before slicing",
          "body": "Rest ground lamb for 5 minutes so the juices settle.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Build the plate",
          "body": "Serve Lamb kofta with couscous, Greek yogurt, the salad, and any optional pickles or herbs.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "chicken-souvlaki-lemon-potatoes-tzatziki",
    "name": "Chicken souvlaki, lemon potatoes, tzatziki",
    "category": "Middle Eastern and Mediterranean",
    "description": "Lemony grilled chicken skewers with roast potatoes and cool tzatziki.",
    "dinnerLanes": [
      "Mediterranean home cooking",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Greek"
    ],
    "format": "plate",
    "timeMinutes": 42,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "souvlaki",
      "lemon potatoes",
      "tzatziki",
      "grilled",
      "herby"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the chicken and potatoes, not just sit on top.",
    "whyItWorks": "Lemony grilled chicken skewers with roast potatoes and cool tzatziki.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "potatoes",
        "canonicalName": "potato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 lb",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "dill",
        "canonicalName": "dill",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 6,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "pita",
        "canonicalName": "pita",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 7,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "feta",
        "canonicalName": "feta",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 8,
        "displayQuantity": "4 oz",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 10,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "oregano",
        "canonicalName": "oregano",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 11,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board"
    ],
    "leftoversNote": "Store leftover chicken and potatoes separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, lemon after warming.",
    "recipe": {
      "activeTimeMinutes": 37,
      "totalTimeMinutes": 42,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Season the chicken",
          "body": "Coat chicken with oil, salt, pepper, and the main spice profile from Chicken souvlaki. Let it sit while you prep the sides.",
          "timeMinutes": 5,
          "component": "protein",
          "visualCue": "The seasoning should cling, not pool."
        },
        {
          "stepNumber": 2,
          "title": "Make the cool sauce",
          "body": "Stir Greek yogurt with lemon, salt, and a small splash of water until creamy and spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should taste tangy enough to wake up the plate."
        },
        {
          "stepNumber": 3,
          "title": "Prepare the base",
          "body": "Cook or warm potatoes. Keep it covered so it stays soft.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 4,
          "title": "Cook the chicken",
          "body": "Sear, grill, or roast chicken until browned outside and cooked through.",
          "timeMinutes": 10,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Edges should be browned and juices should run clear for chicken."
        },
        {
          "stepNumber": 5,
          "title": "Make the salad",
          "body": "Toss cucumber with cucumber, lemon, olive oil, and salt.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "The salad should be bright and crisp."
        },
        {
          "stepNumber": 6,
          "title": "Rest before slicing",
          "body": "Rest chicken for 5 minutes so the juices settle.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Build the plate",
          "body": "Serve Chicken souvlaki with potatoes, Greek yogurt, the salad, and any optional pickles or herbs.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "zaatar-roast-chicken-freekeh-roasted-carrots",
    "name": "Za'atar roast chicken, freekeh, roasted carrots",
    "category": "Middle Eastern and Mediterranean",
    "description": "Za'atar chicken with smoky freekeh, roasted carrots, and lemon.",
    "dinnerLanes": [
      "Weeknight roast",
      "Mediterranean home cooking",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Levantine-ish"
    ],
    "format": "plate",
    "timeMinutes": 45,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "za'atar",
      "roast chicken",
      "freekeh",
      "carrots",
      "lemon"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the chicken and freekeh, not just sit on top.",
    "whyItWorks": "Za'atar chicken with smoky freekeh, roasted carrots, and lemon.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "freekeh",
        "canonicalName": "freekeh",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 2,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "carrots",
        "canonicalName": "carrot",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "4 medium",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 6,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "pomegranate seeds",
        "canonicalName": "pomegranate seed",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "za'atar",
        "canonicalName": "za'atar",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover chicken and freekeh separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 40,
      "totalTimeMinutes": 45,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss carrots with oil, salt, pepper, and the main seasoning from Za'atar roast chicken. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the chicken",
          "body": "Pat chicken dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until chicken is cooked through and carrots is browned at the edges.",
          "timeMinutes": 30,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir Greek yogurt with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook freekeh so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with lemon, parsley and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Za'atar roast chicken over or alongside freekeh, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "beef-kebab-platter-rice-pilaf-charred-tomato-sumac-onion",
    "name": "Beef kebab platter, rice pilaf, charred tomato, sumac onion",
    "category": "Middle Eastern and Mediterranean",
    "description": "Juicy beef kebabs with rice pilaf, charred tomato, and sumac onion.",
    "dinnerLanes": [
      "Big platter dinner",
      "Charred, citrusy, herby",
      "Mediterranean home cooking"
    ],
    "cuisineInfluence": [
      "Middle Eastern-ish"
    ],
    "format": "platter",
    "timeMinutes": 40,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "beef kebab",
      "rice pilaf",
      "sumac onion",
      "charred",
      "platter"
    ],
    "chefNote": "Taste tahini before serving. It should be bold enough to season the ground beef and rice, not just sit on top.",
    "whyItWorks": "Juicy beef kebabs with rice pilaf, charred tomato, and sumac onion.",
    "ingredients": [
      {
        "rawName": "ground beef",
        "canonicalName": "ground beef",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "red onion",
        "canonicalName": "red onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "pita",
        "canonicalName": "pita",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 7,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "tahini",
        "canonicalName": "tahini",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "sumac",
        "canonicalName": "sumac",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "large skillet"
    ],
    "leftoversNote": "Store leftover ground beef and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add parsley, lemon, sumac after warming.",
    "recipe": {
      "activeTimeMinutes": 35,
      "totalTimeMinutes": 40,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Season the ground beef",
          "body": "Coat ground beef with oil, salt, pepper, and the main spice profile from Beef kebab platter. Let it sit while you prep the sides.",
          "timeMinutes": 5,
          "component": "protein",
          "visualCue": "The seasoning should cling, not pool."
        },
        {
          "stepNumber": 2,
          "title": "Make the cool sauce",
          "body": "Stir tahini with lemon, salt, and a small splash of water until creamy and spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should taste tangy enough to wake up the plate."
        },
        {
          "stepNumber": 3,
          "title": "Prepare the base",
          "body": "Cook or warm rice. Keep it covered so it stays soft.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 4,
          "title": "Cook the ground beef",
          "body": "Sear, grill, or roast ground beef until browned outside and cooked through.",
          "timeMinutes": 10,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Edges should be browned and juices should run clear for chicken."
        },
        {
          "stepNumber": 5,
          "title": "Make the salad",
          "body": "Toss tomatoes with parsley, lemon, sumac, olive oil, and salt.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "The salad should be bright and crisp."
        },
        {
          "stepNumber": 6,
          "title": "Rest before slicing",
          "body": "Rest ground beef for 5 minutes so the juices settle.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Build the plate",
          "body": "Serve Beef kebab platter with rice, tahini, the salad, and any optional pickles or herbs.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "crispy-halloumi-chickpea-salad-lemon-herb-dressing",
    "name": "Crispy halloumi, chickpea salad, lemon herb dressing",
    "category": "Middle Eastern and Mediterranean",
    "description": "Crispy halloumi over chickpeas, cucumber, herbs, and lemon dressing.",
    "dinnerLanes": [
      "Crispy, saucy, crunchy",
      "Mediterranean home cooking"
    ],
    "cuisineInfluence": [
      "Mediterranean"
    ],
    "format": "salad plate",
    "timeMinutes": 20,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "halloumi",
      "chickpeas",
      "lemon herb",
      "crispy",
      "vegetarian"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the halloumi and the base, not just sit on top.",
    "whyItWorks": "Crispy halloumi over chickpeas, cucumber, herbs, and lemon dressing.",
    "ingredients": [
      {
        "rawName": "halloumi",
        "canonicalName": "halloumi",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 1,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "chickpeas",
        "canonicalName": "chickpea",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "pita chips",
        "canonicalName": "pita chip",
        "quantity": null,
        "unit": null,
        "section": "Snacks",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Snacks",
        "sortOrder": 7,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "mint",
        "canonicalName": "mint",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      },
      {
        "rawName": "pepper",
        "canonicalName": "pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 11,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover halloumi and the base separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, parsley, lemon after warming.",
    "recipe": {
      "activeTimeMinutes": 15,
      "totalTimeMinutes": 20,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Season the halloumi",
          "body": "Coat halloumi with oil, salt, pepper, and the main spice profile from Crispy halloumi.",
          "timeMinutes": 5,
          "component": "protein"
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir the sauce with lemon, salt, and a small splash of water until creamy and spoonable.",
          "timeMinutes": 3,
          "component": "sauce"
        },
        {
          "stepNumber": 3,
          "title": "Prepare the base",
          "body": "Cook or warm the base. Keep it covered so it stays soft.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 4,
          "title": "Cook the halloumi",
          "body": "Sear, grill, or roast halloumi until browned outside and cooked through.",
          "timeMinutes": 10,
          "temperature": "medium-high heat",
          "component": "protein"
        },
        {
          "stepNumber": 5,
          "title": "Make the salad",
          "body": "Toss chickpeas, cucumber, tomatoes with cucumber, parsley, lemon, olive oil, and salt.",
          "timeMinutes": 4,
          "component": "vegetables"
        },
        {
          "stepNumber": 6,
          "title": "Rest briefly",
          "body": "Rest halloumi for 5 minutes so the texture settles.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Build the plate",
          "body": "Serve Crispy halloumi with the base, the sauce, the salad, and any optional pickles or herbs.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "harissa-lamb-chops-whole-wheat-couscous-mint-yogurt",
    "name": "Harissa lamb chops, whole wheat couscous, mint yogurt",
    "category": "Middle Eastern and Mediterranean",
    "description": "Charred harissa lamb chops with couscous and cool mint yogurt.",
    "dinnerLanes": [
      "Charred, citrusy, herby",
      "Big platter dinner",
      "Mediterranean home cooking"
    ],
    "cuisineInfluence": [
      "North African-ish"
    ],
    "format": "plate",
    "timeMinutes": 35,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "harissa",
      "lamb chops",
      "mint yogurt",
      "couscous",
      "charred"
    ],
    "chefNote": "Taste Greek yogurt, harissa before serving. It should be bold enough to season the lamb chops and whole wheat couscous, not just sit on top.",
    "whyItWorks": "Charred harissa lamb chops with couscous and cool mint yogurt.",
    "ingredients": [
      {
        "rawName": "lamb chops",
        "canonicalName": "lamb chop",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "whole wheat couscous",
        "canonicalName": "wheat couscou",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "mint",
        "canonicalName": "mint",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "harissa",
        "canonicalName": "harissa",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 6,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "cucumber salad",
        "canonicalName": "cucumber salad",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      },
      {
        "rawName": "pepper",
        "canonicalName": "pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 10,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover lamb chops and whole wheat couscous separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add mint, lemon, cucumber salad after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 35,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Season the lamb chops",
          "body": "Coat lamb chops with oil, salt, pepper, and the main spice profile from Harissa lamb chops. Let it sit while you prep the sides.",
          "timeMinutes": 5,
          "component": "protein",
          "visualCue": "The seasoning should cling, not pool."
        },
        {
          "stepNumber": 2,
          "title": "Make the cool sauce",
          "body": "Stir Greek yogurt, harissa with lemon, salt, and a small splash of water until creamy and spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should taste tangy enough to wake up the plate."
        },
        {
          "stepNumber": 3,
          "title": "Prepare the base",
          "body": "Cook or warm whole wheat couscous. Keep it covered so it stays soft.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 4,
          "title": "Cook the lamb chops",
          "body": "Sear, grill, or roast lamb chops until browned outside and cooked through.",
          "timeMinutes": 10,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Edges should be browned and juices should run clear for chicken."
        },
        {
          "stepNumber": 5,
          "title": "Make the salad",
          "body": "Toss the vegetables with mint, lemon, cucumber salad, olive oil, and salt.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "The salad should be bright and crisp."
        },
        {
          "stepNumber": 6,
          "title": "Rest before slicing",
          "body": "Rest lamb chops for 5 minutes so the juices settle.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Build the plate",
          "body": "Serve Harissa lamb chops with whole wheat couscous, Greek yogurt, harissa, the salad, and any optional pickles or herbs.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "chicken-kebab-bowl-jeweled-rice-herb-salad",
    "name": "Chicken kebab bowl, jeweled rice, herb salad",
    "category": "Middle Eastern and Mediterranean",
    "description": "Chicken kebabs over jeweled rice with herbs, lemon, and cucumber.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Mediterranean home cooking",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Middle Eastern-ish"
    ],
    "format": "bowl",
    "timeMinutes": 38,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "chicken kebab",
      "jeweled rice",
      "herb salad",
      "lemon",
      "bowl"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the chicken and rice, not just sit on top.",
    "whyItWorks": "Chicken kebabs over jeweled rice with herbs, lemon, and cucumber.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "mint",
        "canonicalName": "mint",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "dried cranberries",
        "canonicalName": "dried cranberry",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "almonds",
        "canonicalName": "almond",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "turmeric",
        "canonicalName": "turmeric",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "large skillet",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chicken and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, parsley, mint after warming.",
    "recipe": {
      "activeTimeMinutes": 33,
      "totalTimeMinutes": 38,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir the sauce with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken",
          "body": "Cook chicken over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss cucumber. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste chicken, rice, and the sauce separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice into bowls, add chicken, tuck in cucumber, then drizzle with the sauce.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Chicken kebab bowl with cucumber, parsley, mint and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "baked-spiced-beef-kibbeh-hummus-pita",
    "name": "Baked spiced beef kibbeh, hummus, pita",
    "category": "Middle Eastern and Mediterranean",
    "description": "Warm spiced beef kibbeh with hummus, pita, herbs, and lemon.",
    "dinnerLanes": [
      "Big platter dinner",
      "Spiced rice and slow comfort",
      "Mediterranean home cooking"
    ],
    "cuisineInfluence": [
      "Levantine-ish"
    ],
    "format": "platter",
    "timeMinutes": 50,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "kibbeh",
      "beef",
      "hummus",
      "pita",
      "spiced"
    ],
    "chefNote": "Taste hummus, tahini before serving. It should be bold enough to season the ground beef and pita, not just sit on top.",
    "whyItWorks": "Warm spiced beef kibbeh with hummus, pita, herbs, and lemon.",
    "ingredients": [
      {
        "rawName": "ground beef",
        "canonicalName": "ground beef",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "bulgur",
        "canonicalName": "bulgur",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 2,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "hummus",
        "canonicalName": "hummu",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "pita",
        "canonicalName": "pita",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 4,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "pickles",
        "canonicalName": "pickl",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "tahini",
        "canonicalName": "tahini",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "allspice",
        "canonicalName": "allspice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover ground beef and pita separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add parsley, lemon after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 50,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice the vegetables and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir hummus, tahini with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the ground beef",
          "body": "Cook ground beef in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm pita in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then the vegetables, then hummus, tahini. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add parsley, lemon right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Baked spiced beef kibbeh with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "grilled-branzino-oregano-potatoes-greek-salad",
    "name": "Grilled branzino, oregano potatoes, Greek salad",
    "category": "Middle Eastern and Mediterranean",
    "description": "Grilled branzino with oregano potatoes, Greek salad, and lemon.",
    "dinnerLanes": [
      "Charred, citrusy, herby",
      "Mediterranean home cooking"
    ],
    "cuisineInfluence": [
      "Greek"
    ],
    "format": "plate",
    "timeMinutes": 40,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "branzino",
      "grilled",
      "oregano potatoes",
      "greek salad",
      "lemon"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the branzino and potatoes, not just sit on top.",
    "whyItWorks": "Grilled branzino with oregano potatoes, Greek salad, and lemon.",
    "ingredients": [
      {
        "rawName": "branzino",
        "canonicalName": "branzino",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "potatoes",
        "canonicalName": "potato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 lb",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "feta",
        "canonicalName": "feta",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 5,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "olives",
        "canonicalName": "olive",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "dill",
        "canonicalName": "dill",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "oregano",
        "canonicalName": "oregano",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover branzino and potatoes separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, lemon after warming.",
    "recipe": {
      "activeTimeMinutes": 35,
      "totalTimeMinutes": 40,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss potatoes, tomatoes with oil, salt, pepper, and the main seasoning from Grilled branzino. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the branzino",
          "body": "Pat branzino dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until branzino is cooked through and potatoes, tomatoes is browned at the edges.",
          "timeMinutes": 30,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir the sauce with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook potatoes so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with cucumber, lemon and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Grilled branzino over or alongside potatoes, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "moroccan-chicken-tagine-apricots-olives-couscous",
    "name": "Moroccan chicken tagine, apricots, olives, couscous",
    "category": "Moroccan and North African",
    "description": "Chicken simmered with apricots, olives, warm spices, and couscous.",
    "dinnerLanes": [
      "Spiced rice and slow comfort",
      "Big platter dinner"
    ],
    "cuisineInfluence": [
      "Moroccan-ish"
    ],
    "format": "stew",
    "timeMinutes": 50,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "tagine",
      "apricots",
      "olives",
      "couscous",
      "spiced"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the chicken thighs and couscous, not just sit on top.",
    "whyItWorks": "Chicken simmered with apricots, olives, warm spices, and couscous.",
    "ingredients": [
      {
        "rawName": "chicken thighs",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "couscous",
        "canonicalName": "couscou",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "dried apricots",
        "canonicalName": "dried apricot",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "olives",
        "canonicalName": "olive",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 4,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "toasted almonds",
        "canonicalName": "almond",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "cinnamon",
        "canonicalName": "cinnamon",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover chicken thighs and couscous separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 50,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Soften aromatics",
          "body": "Warm oil in a heavy pot over medium heat. Cook onion, garlic, or the listed aromatics until soft and fragrant.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "They should look glossy, not scorched."
        },
        {
          "stepNumber": 2,
          "title": "Bloom the seasoning",
          "body": "Stir in the sauce and the dry spices for 30 to 60 seconds so the fat takes on color.",
          "timeMinutes": 1,
          "component": "sauce",
          "visualCue": "The paste should darken slightly and smell toasted."
        },
        {
          "stepNumber": 3,
          "title": "Brown the chicken thighs",
          "body": "Add chicken thighs with a pinch of salt. Brown the outside before adding the simmering liquid.",
          "timeMinutes": 6,
          "component": "protein",
          "visualCue": "The outside should no longer look raw."
        },
        {
          "stepNumber": 4,
          "title": "Simmer gently",
          "body": "Add the liquid for the dish, then fold in onion. Cover partly and simmer until tender and saucy.",
          "timeMinutes": 35,
          "temperature": "325°F",
          "component": "vegetables",
          "visualCue": "The sauce should coat a spoon."
        },
        {
          "stepNumber": 5,
          "title": "Cook the base",
          "body": "Cook couscous while the sauce simmers. Season it lightly.",
          "timeMinutes": 15,
          "component": "base"
        },
        {
          "stepNumber": 6,
          "title": "Balance the pot",
          "body": "Taste for salt, heat, and acid. Add a splash of water if the sauce gets too tight.",
          "component": "finish",
          "visualCue": "It should taste rounded first, then bright."
        },
        {
          "stepNumber": 7,
          "title": "Serve with contrast",
          "body": "Spoon Moroccan chicken tagine over couscous. Finish with lemon, parsley right before eating.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "ras-el-hanout-meatballs-tomato-baked-eggs-crusty-bread",
    "name": "Ras el hanout meatballs, tomato, baked eggs, crusty bread",
    "category": "Moroccan and North African",
    "description": "Spiced meatballs in tomato sauce with baked eggs and crusty bread.",
    "dinnerLanes": [
      "Spiced rice and slow comfort",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "Moroccan-ish"
    ],
    "format": "skillet",
    "timeMinutes": 40,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "ras el hanout",
      "meatballs",
      "tomato",
      "baked eggs",
      "bread"
    ],
    "chefNote": "Taste harissa yogurt before serving. It should be bold enough to season the ground beef and crusty bread, not just sit on top.",
    "whyItWorks": "Spiced meatballs in tomato sauce with baked eggs and crusty bread.",
    "ingredients": [
      {
        "rawName": "ground beef",
        "canonicalName": "ground beef",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "eggs",
        "canonicalName": "egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 2,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "core"
      },
      {
        "rawName": "crusty bread",
        "canonicalName": "crusty bread",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "feta",
        "canonicalName": "feta",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 7,
        "displayQuantity": "4 oz",
        "importance": "optional"
      },
      {
        "rawName": "harissa yogurt",
        "canonicalName": "harissa yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 8,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "ras el hanout",
        "canonicalName": "ras el hanout",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan",
      "large skillet"
    ],
    "leftoversNote": "Store leftover ground beef and crusty bread separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 20,
      "totalTimeMinutes": 40,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice tomatoes and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir harissa yogurt with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the ground beef",
          "body": "Cook ground beef in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm crusty bread in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then tomatoes, then harissa yogurt. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add parsley right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Ras el hanout meatballs with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "chermoula-salmon-herby-couscous-roasted-carrots",
    "name": "Chermoula salmon, herby couscous, roasted carrots",
    "category": "Moroccan and North African",
    "description": "Herby chermoula salmon with couscous and roasted carrots.",
    "dinnerLanes": [
      "Charred, citrusy, herby",
      "Rice bowl energy"
    ],
    "cuisineInfluence": [
      "North African-ish"
    ],
    "format": "plate",
    "timeMinutes": 32,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "chermoula",
      "salmon",
      "couscous",
      "carrots",
      "herby"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the salmon and couscous, not just sit on top.",
    "whyItWorks": "Herby chermoula salmon with couscous and roasted carrots.",
    "ingredients": [
      {
        "rawName": "salmon",
        "canonicalName": "salmon",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "couscous",
        "canonicalName": "couscou",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "carrots",
        "canonicalName": "carrot",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "4 medium",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 7,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "almonds",
        "canonicalName": "almond",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "paprika",
        "canonicalName": "paprika",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover salmon and couscous separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cilantro, parsley, lemon after warming.",
    "recipe": {
      "activeTimeMinutes": 27,
      "totalTimeMinutes": 32,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss carrots with oil, salt, pepper, and the main seasoning from Chermoula salmon. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the salmon",
          "body": "Pat salmon dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until salmon is cooked through and carrots is browned at the edges.",
          "timeMinutes": 24,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir Greek yogurt with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook couscous so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with cilantro, parsley, lemon and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Chermoula salmon over or alongside couscous, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "spiced-lamb-and-chickpea-stew-harissa-yogurt",
    "name": "Spiced lamb and chickpea stew, harissa yogurt",
    "category": "Moroccan and North African",
    "description": "Lamb and chickpeas in a warm tomato stew with harissa yogurt.",
    "dinnerLanes": [
      "Spiced rice and slow comfort",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "North African-ish"
    ],
    "format": "stew",
    "timeMinutes": 55,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "lamb",
      "chickpeas",
      "harissa yogurt",
      "stew",
      "spiced"
    ],
    "chefNote": "Taste Greek yogurt, harissa before serving. It should be bold enough to season the lamb and the base, not just sit on top.",
    "whyItWorks": "Lamb and chickpeas in a warm tomato stew with harissa yogurt.",
    "ingredients": [
      {
        "rawName": "lamb",
        "canonicalName": "lamb",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "chickpeas",
        "canonicalName": "chickpea",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "harissa",
        "canonicalName": "harissa",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 4,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "couscous",
        "canonicalName": "couscou",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 7,
        "displayQuantity": "8 oz",
        "importance": "optional"
      },
      {
        "rawName": "mint",
        "canonicalName": "mint",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "cinnamon",
        "canonicalName": "cinnamon",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover lamb and the base separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add mint after warming.",
    "recipe": {
      "activeTimeMinutes": 35,
      "totalTimeMinutes": 55,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Soften aromatics",
          "body": "Warm oil in a heavy pot over medium heat. Cook onion, garlic, or the listed aromatics until soft and fragrant.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "They should look glossy, not scorched."
        },
        {
          "stepNumber": 2,
          "title": "Bloom the seasoning",
          "body": "Stir in Greek yogurt, harissa and the dry spices for 30 to 60 seconds so the fat takes on color.",
          "timeMinutes": 1,
          "component": "sauce",
          "visualCue": "The paste should darken slightly and smell toasted."
        },
        {
          "stepNumber": 3,
          "title": "Brown the lamb",
          "body": "Add lamb with a pinch of salt. Brown the outside before adding the simmering liquid.",
          "timeMinutes": 6,
          "component": "protein",
          "visualCue": "The outside should no longer look raw."
        },
        {
          "stepNumber": 4,
          "title": "Simmer gently",
          "body": "Add the liquid for the dish, then fold in chickpeas, tomatoes, onion. Cover partly and simmer until tender and saucy.",
          "timeMinutes": 35,
          "temperature": "325°F",
          "component": "vegetables",
          "visualCue": "The sauce should coat a spoon."
        },
        {
          "stepNumber": 5,
          "title": "Cook the base",
          "body": "Cook the base while the sauce simmers. Season it lightly.",
          "timeMinutes": 15,
          "component": "base"
        },
        {
          "stepNumber": 6,
          "title": "Balance the pot",
          "body": "Taste for salt, heat, and acid. Add a splash of water if the sauce gets too tight.",
          "component": "finish",
          "visualCue": "It should taste rounded first, then bright."
        },
        {
          "stepNumber": 7,
          "title": "Serve with contrast",
          "body": "Spoon Spiced lamb and chickpea stew over the base. Finish with mint right before eating.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "carrot-and-lentil-bowl-charred-chicken-cumin-yogurt",
    "name": "Carrot and lentil bowl, charred chicken, cumin yogurt",
    "category": "Moroccan and North African",
    "description": "Charred chicken over carrots and lentils with cumin yogurt.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Charred, citrusy, herby",
      "Spiced rice and slow comfort"
    ],
    "cuisineInfluence": [
      "North African-ish"
    ],
    "format": "bowl",
    "timeMinutes": 35,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "carrots",
      "lentils",
      "charred chicken",
      "cumin yogurt",
      "bowl"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the chicken and the base, not just sit on top.",
    "whyItWorks": "Charred chicken over carrots and lentils with cumin yogurt.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "carrots",
        "canonicalName": "carrot",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "4 medium",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "lentils",
        "canonicalName": "lentil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 4,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "pickled onion",
        "canonicalName": "pickled onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chicken and the base separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, parsley, pickled onion after warming.",
    "recipe": {
      "activeTimeMinutes": 15,
      "totalTimeMinutes": 35,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start the base first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir Greek yogurt with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken",
          "body": "Cook chicken over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss carrots. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste chicken, the base, and Greek yogurt separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon the base into bowls, add chicken, tuck in carrots, then drizzle with Greek yogurt.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Carrot and lentil bowl with lemon, parsley, pickled onion and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "carnitas-tacos-salsa-verde-onion-cilantro-lime",
    "name": "Carnitas tacos, salsa verde, onion cilantro, lime",
    "category": "Mexican and Latin",
    "description": "Crispy pork tacos with salsa verde, onion, cilantro, and lime.",
    "dinnerLanes": [
      "Tacos, wraps, and things in bread",
      "Crispy, saucy, crunchy"
    ],
    "cuisineInfluence": [
      "Mexican-ish"
    ],
    "format": "tacos",
    "timeMinutes": 30,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "carnitas",
      "tacos",
      "salsa verde",
      "lime",
      "crispy"
    ],
    "chefNote": "Taste salsa verde before serving. It should be bold enough to season the the main ingredient and tortillas, not just sit on top.",
    "whyItWorks": "Crispy pork tacos with salsa verde, onion, cilantro, and lime.",
    "ingredients": [
      {
        "rawName": "carnitas",
        "canonicalName": "carnita",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 1,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "tortillas",
        "canonicalName": "tortilla",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "salsa verde",
        "canonicalName": "salsa verde",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "radishes",
        "canonicalName": "radish",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large skillet"
    ],
    "leftoversNote": "Store leftover the main ingredient and tortillas separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cilantro, lime, avocado after warming.",
    "recipe": {
      "activeTimeMinutes": 25,
      "totalTimeMinutes": 30,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice onion and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir salsa verde with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the the main ingredient",
          "body": "Cook the main ingredient in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm tortillas in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then onion, then salsa verde. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add cilantro, lime, avocado right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Carnitas tacos with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "baja-fish-tacos-chipotle-crema-cabbage-slaw",
    "name": "Baja fish tacos, chipotle crema, cabbage slaw",
    "category": "Mexican and Latin",
    "description": "Crisp fish tacos with chipotle crema, cabbage slaw, and lime.",
    "dinnerLanes": [
      "Tacos, wraps, and things in bread",
      "Crispy, saucy, crunchy"
    ],
    "cuisineInfluence": [
      "Baja-ish"
    ],
    "format": "tacos",
    "timeMinutes": 25,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "fish tacos",
      "chipotle crema",
      "cabbage slaw",
      "crispy",
      "lime"
    ],
    "chefNote": "Taste Greek yogurt, chipotle before serving. It should be bold enough to season the white fish and tortillas, not just sit on top.",
    "whyItWorks": "Crisp fish tacos with chipotle crema, cabbage slaw, and lime.",
    "ingredients": [
      {
        "rawName": "white fish",
        "canonicalName": "white fish",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "tortillas",
        "canonicalName": "tortilla",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "cabbage",
        "canonicalName": "cabbage",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "3 cups",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 5,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "chipotle",
        "canonicalName": "chipotle",
        "quantity": null,
        "unit": null,
        "section": "Snacks",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Snacks",
        "sortOrder": 6,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "pickled onion",
        "canonicalName": "pickled onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "flour",
        "canonicalName": "flour",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Pantry",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large skillet",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover white fish and tortillas separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lime, cilantro, avocado after warming.",
    "recipe": {
      "activeTimeMinutes": 20,
      "totalTimeMinutes": 25,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice cabbage and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir Greek yogurt, chipotle with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the white fish",
          "body": "Cook white fish in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm tortillas in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then cabbage, then Greek yogurt, chipotle. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add lime, cilantro, avocado right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Baja fish tacos with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "al-pastor-chicken-bowls-pineapple-rice-beans",
    "name": "Al pastor chicken bowls, pineapple, rice, beans",
    "category": "Mexican and Latin",
    "description": "Chile pineapple chicken over rice and beans with lime.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Mexican-ish"
    ],
    "format": "bowl",
    "timeMinutes": 32,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "al pastor",
      "chicken",
      "pineapple",
      "rice bowl",
      "beans"
    ],
    "chefNote": "Taste crema before serving. It should be bold enough to season the chicken and rice, black beans, not just sit on top.",
    "whyItWorks": "Chile pineapple chicken over rice and beans with lime.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "pineapple",
        "canonicalName": "pineapple",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "black beans",
        "canonicalName": "black bean",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 4,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "crema",
        "canonicalName": "crema",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 8,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "chili powder",
        "canonicalName": "chili powder",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover chicken and rice, black beans separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cilantro, lime, avocado after warming.",
    "recipe": {
      "activeTimeMinutes": 27,
      "totalTimeMinutes": 32,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice, black beans first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir crema with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken",
          "body": "Cook chicken over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss onion. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste chicken, rice, black beans, and crema separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice, black beans into bowls, add chicken, tuck in onion, then drizzle with crema.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Al pastor chicken bowls with cilantro, lime, avocado and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "birria-style-beef-tacos-consomme-onion-cilantro",
    "name": "Birria-style beef tacos, consomme, onion cilantro",
    "category": "Mexican and Latin",
    "description": "Saucy beef tacos with consomme, onion, cilantro, and lime.",
    "dinnerLanes": [
      "Tacos, wraps, and things in bread",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "Mexican-ish"
    ],
    "format": "tacos",
    "timeMinutes": 60,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "birria",
      "beef tacos",
      "consomme",
      "saucy",
      "cilantro"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the beef and tortillas, not just sit on top.",
    "whyItWorks": "Saucy beef tacos with consomme, onion, cilantro, and lime.",
    "ingredients": [
      {
        "rawName": "beef",
        "canonicalName": "beef",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "tortillas",
        "canonicalName": "tortilla",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "cheese",
        "canonicalName": "cheese",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 6,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "radishes",
        "canonicalName": "radish",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "chiles",
        "canonicalName": "chil",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "stock",
        "canonicalName": "stock",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large skillet"
    ],
    "leftoversNote": "Store leftover beef and tortillas separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cilantro, lime after warming.",
    "recipe": {
      "activeTimeMinutes": 55,
      "totalTimeMinutes": 60,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice onion and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir the sauce with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the beef",
          "body": "Cook beef in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm tortillas in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then onion, then the sauce. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add cilantro, lime right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Birria-style beef tacos with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "chili-lime-shrimp-tacos-avocado-pickled-red-onion",
    "name": "Chili lime shrimp tacos, avocado, pickled red onion",
    "category": "Mexican and Latin",
    "description": "Fast chili lime shrimp tacos with avocado and pickled onion.",
    "dinnerLanes": [
      "Tacos, wraps, and things in bread",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Mexican-ish"
    ],
    "format": "tacos",
    "timeMinutes": 20,
    "effort": "Very easy",
    "servings": 4,
    "tags": [
      "shrimp tacos",
      "chili lime",
      "avocado",
      "pickled onion",
      "bright"
    ],
    "chefNote": "Taste crema before serving. It should be bold enough to season the shrimp and tortillas, not just sit on top.",
    "whyItWorks": "Fast chili lime shrimp tacos with avocado and pickled onion.",
    "ingredients": [
      {
        "rawName": "shrimp",
        "canonicalName": "shrimp",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "tortillas",
        "canonicalName": "tortilla",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "core"
      },
      {
        "rawName": "red onion",
        "canonicalName": "red onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "cabbage",
        "canonicalName": "cabbage",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "3 cups",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "crema",
        "canonicalName": "crema",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 8,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "chili powder",
        "canonicalName": "chili powder",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "vinegar",
        "canonicalName": "vinegar",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "large skillet"
    ],
    "leftoversNote": "Store leftover shrimp and tortillas separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add avocado, lime, cilantro after warming.",
    "recipe": {
      "activeTimeMinutes": 15,
      "totalTimeMinutes": 20,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice avocado and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir crema with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the shrimp",
          "body": "Cook shrimp in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm tortillas in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then avocado, then crema. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add avocado, lime, cilantro right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Chili lime shrimp tacos with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "pollo-asado-cilantro-lime-rice-charro-beans",
    "name": "Pollo asado, cilantro lime rice, charro beans",
    "category": "Mexican and Latin",
    "description": "Citrusy grilled chicken with cilantro lime rice and smoky beans.",
    "dinnerLanes": [
      "Charred, citrusy, herby",
      "Rice bowl energy"
    ],
    "cuisineInfluence": [
      "Mexican-ish"
    ],
    "format": "plate",
    "timeMinutes": 38,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "pollo asado",
      "cilantro lime rice",
      "charro beans",
      "grilled",
      "citrus"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the chicken and rice, pinto beans, not just sit on top.",
    "whyItWorks": "Citrusy grilled chicken with cilantro lime rice and smoky beans.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "pinto beans",
        "canonicalName": "pinto bean",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "orange",
        "canonicalName": "orange",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "pico",
        "canonicalName": "pico",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover chicken and rice, pinto beans separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cilantro, lime, avocado after warming.",
    "recipe": {
      "activeTimeMinutes": 33,
      "totalTimeMinutes": 38,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice, pinto beans first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir the sauce with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken",
          "body": "Cook chicken over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss the vegetables. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste chicken, rice, pinto beans, and the sauce separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice, pinto beans into bowls, add chicken, tuck in the vegetables, then drizzle with the sauce.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Pollo asado with cilantro, lime, avocado and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "street-corn-chicken-bowls-cotija-lime-crema",
    "name": "Street corn chicken bowls, cotija, lime crema",
    "category": "Mexican and Latin",
    "description": "Chicken bowls with charred corn, cotija, lime crema, and rice.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Mexican-ish"
    ],
    "format": "bowl",
    "timeMinutes": 28,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "street corn",
      "chicken",
      "cotija",
      "lime crema",
      "bowl"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the chicken and rice, not just sit on top.",
    "whyItWorks": "Chicken bowls with charred corn, cotija, lime crema, and rice.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "corn",
        "canonicalName": "corn",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "cotija",
        "canonicalName": "cotija",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 4,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 5,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "jalapeno",
        "canonicalName": "jalapeno",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "chili powder",
        "canonicalName": "chili powder",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chicken and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lime, cilantro, avocado after warming.",
    "recipe": {
      "activeTimeMinutes": 23,
      "totalTimeMinutes": 28,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir Greek yogurt with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken",
          "body": "Cook chicken over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss corn. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste chicken, rice, and Greek yogurt separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice into bowls, add chicken, tuck in corn, then drizzle with Greek yogurt.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Street corn chicken bowls with lime, cilantro, avocado and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "carne-asada-quesadillas-guac-pico",
    "name": "Carne asada quesadillas, guac, pico",
    "category": "Mexican and Latin",
    "description": "Crispy steak quesadillas with guac and pico.",
    "dinnerLanes": [
      "Tacos, wraps, and things in bread",
      "Crispy, saucy, crunchy"
    ],
    "cuisineInfluence": [
      "Mexican-ish"
    ],
    "format": "quesadilla",
    "timeMinutes": 25,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "carne asada",
      "quesadilla",
      "guac",
      "pico",
      "crispy"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the steak and tortillas, not just sit on top.",
    "whyItWorks": "Crispy steak quesadillas with guac and pico.",
    "ingredients": [
      {
        "rawName": "steak",
        "canonicalName": "steak",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "tortillas",
        "canonicalName": "tortilla",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "cheese",
        "canonicalName": "cheese",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 3,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "sour cream",
        "canonicalName": "sour cream",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "jalapeno",
        "canonicalName": "jalapeno",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large skillet",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover steak and tortillas separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add avocado, lime, cilantro after warming.",
    "recipe": {
      "activeTimeMinutes": 20,
      "totalTimeMinutes": 25,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice avocado, tomatoes and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir the sauce with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the steak",
          "body": "Cook steak in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm tortillas in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then avocado, tomatoes, then the sauce. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add avocado, lime, cilantro right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Carne asada quesadillas with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "cuban-mojo-pork-black-beans-rice-plantains",
    "name": "Cuban mojo pork, black beans, rice, plantains",
    "category": "Mexican and Latin",
    "description": "Citrusy mojo pork with black beans, rice, and sweet plantains.",
    "dinnerLanes": [
      "Big platter dinner",
      "Rice bowl energy",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Cuban-ish"
    ],
    "format": "plate",
    "timeMinutes": 45,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "mojo pork",
      "black beans",
      "plantains",
      "rice",
      "citrus"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the pork and black beans, rice, not just sit on top.",
    "whyItWorks": "Citrusy mojo pork with black beans, rice, and sweet plantains.",
    "ingredients": [
      {
        "rawName": "pork",
        "canonicalName": "pork",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "black beans",
        "canonicalName": "black bean",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "plantains",
        "canonicalName": "plantain",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 4,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "orange",
        "canonicalName": "orange",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "avocado salad",
        "canonicalName": "avocado salad",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover pork and black beans, rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lime, cilantro, avocado salad after warming.",
    "recipe": {
      "activeTimeMinutes": 40,
      "totalTimeMinutes": 45,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start black beans, rice first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir the sauce with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the pork",
          "body": "Cook pork over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss plantains. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste pork, black beans, rice, and the sauce separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon black beans, rice into bowls, add pork, tuck in plantains, then drizzle with the sauce.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Cuban mojo pork with lime, cilantro, avocado salad and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "peruvian-aji-verde-chicken-rice-salad",
    "name": "Peruvian aji verde chicken, rice, salad",
    "category": "Mexican and Latin",
    "description": "Roasted chicken with aji verde, rice, and crisp salad.",
    "dinnerLanes": [
      "Charred, citrusy, herby",
      "Big platter dinner"
    ],
    "cuisineInfluence": [
      "Peruvian-ish"
    ],
    "format": "plate",
    "timeMinutes": 40,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "aji verde",
      "chicken",
      "rice",
      "herby",
      "roasted"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the chicken and rice, not just sit on top.",
    "whyItWorks": "Roasted chicken with aji verde, rice, and crisp salad.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "jalapeno",
        "canonicalName": "jalapeno",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 4,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 5,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "lettuce",
        "canonicalName": "lettuce",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 10,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chicken and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cilantro, lettuce, lime after warming.",
    "recipe": {
      "activeTimeMinutes": 35,
      "totalTimeMinutes": 40,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss the vegetables with oil, salt, pepper, and the main seasoning from Peruvian aji verde chicken. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the chicken",
          "body": "Pat chicken dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until chicken is cooked through and the vegetables is browned at the edges.",
          "timeMinutes": 30,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir Greek yogurt with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook rice so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with cilantro, lettuce, lime and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Peruvian aji verde chicken over or alongside rice, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "barbacoa-burrito-bowls-lime-rice-queso-fresco",
    "name": "Barbacoa burrito bowls, lime rice, queso fresco",
    "category": "Mexican and Latin",
    "description": "Tender barbacoa over lime rice with beans, queso fresco, and salsa.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Spiced rice and slow comfort"
    ],
    "cuisineInfluence": [
      "Mexican-ish"
    ],
    "format": "bowl",
    "timeMinutes": 55,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "barbacoa",
      "burrito bowl",
      "lime rice",
      "queso fresco",
      "beans"
    ],
    "chefNote": "Taste salsa before serving. It should be bold enough to season the beef and rice, black beans, not just sit on top.",
    "whyItWorks": "Tender barbacoa over lime rice with beans, queso fresco, and salsa.",
    "ingredients": [
      {
        "rawName": "beef",
        "canonicalName": "beef",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "black beans",
        "canonicalName": "black bean",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "queso fresco",
        "canonicalName": "queso fresco",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 4,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "salsa",
        "canonicalName": "salsa",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 7,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "pickled onion",
        "canonicalName": "pickled onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "chiles",
        "canonicalName": "chil",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "stock",
        "canonicalName": "stock",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 12,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 13,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover beef and rice, black beans separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lime, cilantro, avocado after warming.",
    "recipe": {
      "activeTimeMinutes": 35,
      "totalTimeMinutes": 55,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice the vegetables and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir salsa with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the beef",
          "body": "Cook beef in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm rice, black beans in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then the vegetables, then salsa. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add lime, cilantro, avocado right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Barbacoa burrito bowls with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "chipotle-honey-salmon-tacos-slaw-lime",
    "name": "Chipotle honey salmon tacos, slaw, lime",
    "category": "Mexican and Latin",
    "description": "Chipotle honey salmon tucked into tortillas with slaw and lime.",
    "dinnerLanes": [
      "Tacos, wraps, and things in bread",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Mexican-ish"
    ],
    "format": "tacos",
    "timeMinutes": 24,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "salmon tacos",
      "chipotle honey",
      "slaw",
      "lime",
      "sweet heat"
    ],
    "chefNote": "Taste chipotle, honey, avocado crema before serving. It should be bold enough to season the salmon and tortillas, not just sit on top.",
    "whyItWorks": "Chipotle honey salmon tucked into tortillas with slaw and lime.",
    "ingredients": [
      {
        "rawName": "salmon",
        "canonicalName": "salmon",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "tortillas",
        "canonicalName": "tortilla",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "cabbage",
        "canonicalName": "cabbage",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "3 cups",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "chipotle",
        "canonicalName": "chipotle",
        "quantity": null,
        "unit": null,
        "section": "Snacks",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Snacks",
        "sortOrder": 5,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "honey",
        "canonicalName": "honey",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 6,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "avocado crema",
        "canonicalName": "avocado crema",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "large skillet",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover salmon and tortillas separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lime, cilantro, avocado crema after warming.",
    "recipe": {
      "activeTimeMinutes": 19,
      "totalTimeMinutes": 24,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice cabbage and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir chipotle, honey, avocado crema with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the salmon",
          "body": "Cook salmon in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm tortillas in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then cabbage, then chipotle, honey, avocado crema. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add lime, cilantro, avocado crema right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Chipotle honey salmon tacos with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "thai-red-curry-chicken-jasmine-rice-basil",
    "name": "Thai red curry chicken, jasmine rice, basil",
    "category": "Curry and saucy",
    "description": "Red curry chicken with coconut, basil, peppers, and jasmine rice.",
    "dinnerLanes": [
      "Curry night",
      "Creamy, spicy, cozy",
      "Rice bowl energy"
    ],
    "cuisineInfluence": [
      "Thai-ish"
    ],
    "format": "curry",
    "timeMinutes": 27,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "red curry",
      "chicken",
      "jasmine rice",
      "basil",
      "creamy"
    ],
    "chefNote": "Taste red curry paste, coconut milk before serving. It should be bold enough to season the chicken and jasmine rice, not just sit on top.",
    "whyItWorks": "Red curry chicken with coconut, basil, peppers, and jasmine rice.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "jasmine rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "red curry paste",
        "canonicalName": "red curry paste",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "coconut milk",
        "canonicalName": "coconut milk",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 4,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "bell peppers",
        "canonicalName": "bell pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "basil",
        "canonicalName": "basil",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "green beans",
        "canonicalName": "green bean",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "optional"
      },
      {
        "rawName": "eggplant",
        "canonicalName": "eggplant",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "1 large",
        "prep": "sliced into 1/2-inch rounds",
        "importance": "optional"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover chicken and jasmine rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lime, basil after warming.",
    "recipe": {
      "activeTimeMinutes": 22,
      "totalTimeMinutes": 27,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Soften aromatics",
          "body": "Warm oil in a heavy pot over medium heat. Cook onion, garlic, or the listed aromatics until soft and fragrant.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "They should look glossy, not scorched."
        },
        {
          "stepNumber": 2,
          "title": "Bloom the seasoning",
          "body": "Stir in red curry paste, coconut milk and the dry spices for 30 to 60 seconds so the fat takes on color.",
          "timeMinutes": 1,
          "component": "sauce",
          "visualCue": "The paste should darken slightly and smell toasted."
        },
        {
          "stepNumber": 3,
          "title": "Brown the chicken",
          "body": "Add chicken with a pinch of salt. Brown the outside before adding the simmering liquid.",
          "timeMinutes": 6,
          "component": "protein",
          "visualCue": "The outside should no longer look raw."
        },
        {
          "stepNumber": 4,
          "title": "Simmer gently",
          "body": "Add the liquid for the dish, then fold in bell peppers. Cover partly and simmer until tender and saucy.",
          "timeMinutes": 15,
          "component": "vegetables",
          "visualCue": "The sauce should coat a spoon."
        },
        {
          "stepNumber": 5,
          "title": "Cook the base",
          "body": "Cook jasmine rice while the sauce simmers. Season it lightly.",
          "timeMinutes": 15,
          "component": "base"
        },
        {
          "stepNumber": 6,
          "title": "Balance the pot",
          "body": "Taste for salt, heat, and acid. Add a splash of water if the sauce gets too tight.",
          "component": "finish",
          "visualCue": "It should taste rounded first, then bright."
        },
        {
          "stepNumber": 7,
          "title": "Serve with contrast",
          "body": "Spoon Thai red curry chicken over jasmine rice. Finish with lime, basil right before eating.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "coconut-chickpea-curry-spinach-basmati",
    "name": "Coconut chickpea curry, spinach, basmati",
    "category": "Curry and saucy",
    "description": "Creamy coconut chickpeas with spinach and basmati rice.",
    "dinnerLanes": [
      "Curry night",
      "Creamy, spicy, cozy",
      "Pantry sauce magic"
    ],
    "cuisineInfluence": [
      "Indian-ish"
    ],
    "format": "curry",
    "timeMinutes": 25,
    "effort": "Very easy",
    "servings": 4,
    "tags": [
      "chickpea curry",
      "coconut",
      "spinach",
      "basmati",
      "pantry"
    ],
    "chefNote": "Taste coconut milk, Greek yogurt, curry powder before serving. It should be bold enough to season the chickpeas and basmati rice, not just sit on top.",
    "whyItWorks": "Creamy coconut chickpeas with spinach and basmati rice.",
    "ingredients": [
      {
        "rawName": "chickpeas",
        "canonicalName": "chickpea",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 1,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "coconut milk",
        "canonicalName": "coconut milk",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 2,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "spinach",
        "canonicalName": "spinach",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "basmati rice",
        "canonicalName": "basmati rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 4,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 7,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "naan",
        "canonicalName": "naan",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 8,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "curry powder",
        "canonicalName": "curry powder",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "1/3 cup",
        "importance": "pantry"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 10,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chickpeas and basmati rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cilantro after warming.",
    "recipe": {
      "activeTimeMinutes": 20,
      "totalTimeMinutes": 25,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Soften aromatics",
          "body": "Warm oil in a heavy pot over medium heat. Cook onion, garlic, or the listed aromatics until soft and fragrant.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "They should look glossy, not scorched."
        },
        {
          "stepNumber": 2,
          "title": "Bloom the seasoning",
          "body": "Stir in coconut milk, Greek yogurt, curry powder and the dry spices for 30 to 60 seconds so the fat takes on color.",
          "timeMinutes": 1,
          "component": "sauce",
          "visualCue": "The paste should darken slightly and smell toasted."
        },
        {
          "stepNumber": 3,
          "title": "Brown the chickpeas",
          "body": "Add chickpeas with a pinch of salt. Brown the outside before adding the simmering liquid.",
          "timeMinutes": 6,
          "component": "protein",
          "visualCue": "The outside should no longer look raw."
        },
        {
          "stepNumber": 4,
          "title": "Simmer gently",
          "body": "Add the liquid for the dish, then fold in chickpeas, spinach, onion. Cover partly and simmer until tender and saucy.",
          "timeMinutes": 13,
          "component": "vegetables",
          "visualCue": "The sauce should coat a spoon."
        },
        {
          "stepNumber": 5,
          "title": "Cook the base",
          "body": "Cook basmati rice while the sauce simmers. Season it lightly.",
          "timeMinutes": 15,
          "component": "base"
        },
        {
          "stepNumber": 6,
          "title": "Balance the pot",
          "body": "Taste for salt, heat, and acid. Add a splash of water if the sauce gets too tight.",
          "component": "finish",
          "visualCue": "It should taste rounded first, then bright."
        },
        {
          "stepNumber": 7,
          "title": "Serve with contrast",
          "body": "Spoon Coconut chickpea curry over basmati rice. Finish with cilantro right before eating.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "butter-chicken-basmati-naan-cucumber",
    "name": "Butter chicken, basmati, naan, cucumber",
    "category": "Curry and saucy",
    "description": "Creamy tomato butter chicken with basmati, naan, and cucumber.",
    "dinnerLanes": [
      "Curry night",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "Indian-ish"
    ],
    "format": "curry",
    "timeMinutes": 40,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "butter chicken",
      "basmati",
      "naan",
      "creamy",
      "tomato"
    ],
    "chefNote": "Taste yogurt, butter, garam masala before serving. It should be bold enough to season the chicken and basmati rice, naan, not just sit on top.",
    "whyItWorks": "Creamy tomato butter chicken with basmati, naan, and cucumber.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "basmati rice",
        "canonicalName": "basmati rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "naan",
        "canonicalName": "naan",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "tomato sauce",
        "canonicalName": "tomato sauce",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "cream",
        "canonicalName": "cream",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 6,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "yogurt",
        "canonicalName": "yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 8,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "butter",
        "canonicalName": "butter",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "1/3 cup",
        "importance": "pantry"
      },
      {
        "rawName": "garam masala",
        "canonicalName": "garam masala",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 11,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven"
    ],
    "leftoversNote": "Store leftover chicken and basmati rice, naan separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, cilantro after warming.",
    "recipe": {
      "activeTimeMinutes": 35,
      "totalTimeMinutes": 40,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Soften aromatics",
          "body": "Warm oil in a heavy pot over medium heat. Cook onion, garlic, or the listed aromatics until soft and fragrant.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "They should look glossy, not scorched."
        },
        {
          "stepNumber": 2,
          "title": "Bloom the seasoning",
          "body": "Stir in yogurt, butter, garam masala and the dry spices for 30 to 60 seconds so the fat takes on color.",
          "timeMinutes": 1,
          "component": "sauce",
          "visualCue": "The paste should darken slightly and smell toasted."
        },
        {
          "stepNumber": 3,
          "title": "Brown the chicken",
          "body": "Add chicken with a pinch of salt. Brown the outside before adding the simmering liquid.",
          "timeMinutes": 6,
          "component": "protein",
          "visualCue": "The outside should no longer look raw."
        },
        {
          "stepNumber": 4,
          "title": "Simmer gently",
          "body": "Add the liquid for the dish, then fold in cucumber, tomato sauce. Cover partly and simmer until tender and saucy.",
          "timeMinutes": 28,
          "component": "vegetables",
          "visualCue": "The sauce should coat a spoon."
        },
        {
          "stepNumber": 5,
          "title": "Cook the base",
          "body": "Cook basmati rice, naan while the sauce simmers. Season it lightly.",
          "timeMinutes": 15,
          "component": "base"
        },
        {
          "stepNumber": 6,
          "title": "Balance the pot",
          "body": "Taste for salt, heat, and acid. Add a splash of water if the sauce gets too tight.",
          "component": "finish",
          "visualCue": "It should taste rounded first, then bright."
        },
        {
          "stepNumber": 7,
          "title": "Serve with contrast",
          "body": "Spoon Butter chicken over basmati rice, naan. Finish with cucumber, cilantro right before eating.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "massaman-beef-curry-potato-peanut-rice",
    "name": "Massaman beef curry, potato, peanut, rice",
    "category": "Curry and saucy",
    "description": "Cozy beef curry with potatoes, peanuts, coconut, and rice.",
    "dinnerLanes": [
      "Curry night",
      "Spiced rice and slow comfort",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "Thai-ish"
    ],
    "format": "curry",
    "timeMinutes": 55,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "massaman",
      "beef curry",
      "potato",
      "peanut",
      "coconut"
    ],
    "chefNote": "Taste coconut milk, peanuts, massaman curry paste before serving. It should be bold enough to season the beef and potatoes, rice, not just sit on top.",
    "whyItWorks": "Cozy beef curry with potatoes, peanuts, coconut, and rice.",
    "ingredients": [
      {
        "rawName": "beef",
        "canonicalName": "beef",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "potatoes",
        "canonicalName": "potato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 lb",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "coconut milk",
        "canonicalName": "coconut milk",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 4,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "peanuts",
        "canonicalName": "peanut",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "optional"
      },
      {
        "rawName": "massaman curry paste",
        "canonicalName": "massaman curry paste",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "1/3 cup",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover beef and potatoes, rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cilantro, lime after warming.",
    "recipe": {
      "activeTimeMinutes": 35,
      "totalTimeMinutes": 55,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Soften aromatics",
          "body": "Warm oil in a heavy pot over medium heat. Cook onion, garlic, or the listed aromatics until soft and fragrant.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "They should look glossy, not scorched."
        },
        {
          "stepNumber": 2,
          "title": "Bloom the seasoning",
          "body": "Stir in coconut milk, peanuts, massaman curry paste and the dry spices for 30 to 60 seconds so the fat takes on color.",
          "timeMinutes": 1,
          "component": "sauce",
          "visualCue": "The paste should darken slightly and smell toasted."
        },
        {
          "stepNumber": 3,
          "title": "Brown the beef",
          "body": "Add beef with a pinch of salt. Brown the outside before adding the simmering liquid.",
          "timeMinutes": 6,
          "component": "protein",
          "visualCue": "The outside should no longer look raw."
        },
        {
          "stepNumber": 4,
          "title": "Simmer gently",
          "body": "Add the liquid for the dish, then fold in potatoes, onion. Cover partly and simmer until tender and saucy.",
          "timeMinutes": 35,
          "component": "vegetables",
          "visualCue": "The sauce should coat a spoon."
        },
        {
          "stepNumber": 5,
          "title": "Cook the base",
          "body": "Cook potatoes, rice while the sauce simmers. Season it lightly.",
          "timeMinutes": 15,
          "component": "base"
        },
        {
          "stepNumber": 6,
          "title": "Balance the pot",
          "body": "Taste for salt, heat, and acid. Add a splash of water if the sauce gets too tight.",
          "component": "finish",
          "visualCue": "It should taste rounded first, then bright."
        },
        {
          "stepNumber": 7,
          "title": "Serve with contrast",
          "body": "Spoon Massaman beef curry over potatoes, rice. Finish with cilantro, lime right before eating.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "pad-krapow-thai-basil-chicken-fried-egg-rice",
    "name": "Pad krapow, Thai basil chicken, fried egg, rice",
    "category": "Curry and saucy",
    "description": "Spicy basil chicken over rice with a fried egg.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Pantry sauce magic",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "Thai-ish"
    ],
    "format": "rice bowl",
    "timeMinutes": 18,
    "effort": "Very easy",
    "servings": 4,
    "tags": [
      "pad krapow",
      "thai basil",
      "chicken",
      "fried egg",
      "rice"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the ground chicken and rice, green beans, not just sit on top.",
    "whyItWorks": "Spicy basil chicken over rice with a fried egg.",
    "ingredients": [
      {
        "rawName": "ground chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "eggs",
        "canonicalName": "egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 3,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "core"
      },
      {
        "rawName": "Thai basil",
        "canonicalName": "thai basil",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "chiles",
        "canonicalName": "chil",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 5,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "green beans",
        "canonicalName": "green bean",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "fish sauce",
        "canonicalName": "fish sauce",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Protein",
        "sortOrder": 8,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "pantry"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "sugar",
        "canonicalName": "sugar",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 11,
        "displayQuantity": "as needed",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "medium saucepan",
      "large skillet"
    ],
    "leftoversNote": "Store leftover ground chicken and rice, green beans separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add Thai basil, cucumber after warming.",
    "recipe": {
      "activeTimeMinutes": 15,
      "totalTimeMinutes": 18,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice, green beans first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains or noodles should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir the sauce with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the ground chicken",
          "body": "Cook ground chicken over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss green beans. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste ground chicken, rice, green beans, and the sauce separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice, green beans into bowls, add ground chicken, tuck in green beans, then drizzle with the sauce.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Pad krapow with Thai basil, cucumber and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "green-curry-shrimp-eggplant-jasmine-rice",
    "name": "Green curry shrimp, eggplant, jasmine rice",
    "category": "Curry and saucy",
    "description": "Green curry shrimp with eggplant, basil, coconut, and rice.",
    "dinnerLanes": [
      "Curry night",
      "Creamy, spicy, cozy",
      "Rice bowl energy"
    ],
    "cuisineInfluence": [
      "Thai-ish"
    ],
    "format": "curry",
    "timeMinutes": 24,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "green curry",
      "shrimp",
      "eggplant",
      "jasmine rice",
      "basil"
    ],
    "chefNote": "Taste green curry paste, coconut milk before serving. It should be bold enough to season the shrimp and jasmine rice, not just sit on top.",
    "whyItWorks": "Green curry shrimp with eggplant, basil, coconut, and rice.",
    "ingredients": [
      {
        "rawName": "shrimp",
        "canonicalName": "shrimp",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "eggplant",
        "canonicalName": "eggplant",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "1 large",
        "prep": "sliced into 1/2-inch rounds",
        "importance": "core"
      },
      {
        "rawName": "jasmine rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "green curry paste",
        "canonicalName": "green curry paste",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 4,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "coconut milk",
        "canonicalName": "coconut milk",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 5,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "basil",
        "canonicalName": "basil",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "green beans",
        "canonicalName": "green bean",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "optional"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "optional"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "medium saucepan",
      "large skillet"
    ],
    "leftoversNote": "Store leftover shrimp and jasmine rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add basil, lime after warming.",
    "recipe": {
      "activeTimeMinutes": 19,
      "totalTimeMinutes": 24,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Soften aromatics",
          "body": "Warm oil in a heavy pot over medium heat. Cook onion, garlic, or the listed aromatics until soft and fragrant.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "They should look glossy, not scorched."
        },
        {
          "stepNumber": 2,
          "title": "Bloom the seasoning",
          "body": "Stir in green curry paste, coconut milk and the dry spices for 30 to 60 seconds so the fat takes on color.",
          "timeMinutes": 1,
          "component": "sauce",
          "visualCue": "The paste should darken slightly and smell toasted."
        },
        {
          "stepNumber": 3,
          "title": "Brown the shrimp",
          "body": "Add shrimp with a pinch of salt. Brown the outside before adding the simmering liquid.",
          "timeMinutes": 6,
          "component": "protein",
          "visualCue": "The outside should no longer look raw."
        },
        {
          "stepNumber": 4,
          "title": "Simmer gently",
          "body": "Add the liquid for the dish, then fold in eggplant. Cover partly and simmer until tender and saucy.",
          "timeMinutes": 12,
          "component": "vegetables",
          "visualCue": "The sauce should coat a spoon."
        },
        {
          "stepNumber": 5,
          "title": "Cook the base",
          "body": "Cook jasmine rice while the sauce simmers. Season it lightly.",
          "timeMinutes": 15,
          "component": "base"
        },
        {
          "stepNumber": 6,
          "title": "Balance the pot",
          "body": "Taste for salt, heat, and acid. Add a splash of water if the sauce gets too tight.",
          "component": "finish",
          "visualCue": "It should taste rounded first, then bright."
        },
        {
          "stepNumber": 7,
          "title": "Serve with contrast",
          "body": "Spoon Green curry shrimp over jasmine rice. Finish with basil, lime right before eating.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "chana-masala-basmati-yogurt-cilantro",
    "name": "Chana masala, basmati, yogurt, cilantro",
    "category": "Curry and saucy",
    "description": "Spiced chickpeas with basmati, cool yogurt, and cilantro.",
    "dinnerLanes": [
      "Curry night",
      "Pantry sauce magic",
      "Spiced rice and slow comfort"
    ],
    "cuisineInfluence": [
      "Indian-ish"
    ],
    "format": "curry",
    "timeMinutes": 28,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "chana masala",
      "chickpeas",
      "basmati",
      "yogurt",
      "pantry"
    ],
    "chefNote": "Taste Greek yogurt, garam masala before serving. It should be bold enough to season the chickpeas and basmati rice, not just sit on top.",
    "whyItWorks": "Spiced chickpeas with basmati, cool yogurt, and cilantro.",
    "ingredients": [
      {
        "rawName": "chickpeas",
        "canonicalName": "chickpea",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 1,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "basmati rice",
        "canonicalName": "basmati rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "naan",
        "canonicalName": "naan",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 7,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "optional"
      },
      {
        "rawName": "garam masala",
        "canonicalName": "garam masala",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chickpeas and basmati rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cilantro, lime after warming.",
    "recipe": {
      "activeTimeMinutes": 15,
      "totalTimeMinutes": 28,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Soften aromatics",
          "body": "Warm oil in a heavy pot over medium heat. Cook onion, garlic, or the listed aromatics until soft and fragrant.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "They should look glossy, not scorched."
        },
        {
          "stepNumber": 2,
          "title": "Bloom the seasoning",
          "body": "Stir in Greek yogurt, garam masala and the dry spices for 30 to 60 seconds so the fat takes on color.",
          "timeMinutes": 1,
          "component": "sauce",
          "visualCue": "The paste should darken slightly and smell toasted."
        },
        {
          "stepNumber": 3,
          "title": "Brown the chickpeas",
          "body": "Add chickpeas with a pinch of salt. Brown the outside before adding the simmering liquid.",
          "timeMinutes": 6,
          "component": "protein",
          "visualCue": "The outside should no longer look raw."
        },
        {
          "stepNumber": 4,
          "title": "Simmer gently",
          "body": "Add the liquid for the dish, then fold in chickpeas, tomatoes, onion. Cover partly and simmer until tender and saucy.",
          "timeMinutes": 16,
          "component": "vegetables",
          "visualCue": "The sauce should coat a spoon."
        },
        {
          "stepNumber": 5,
          "title": "Cook the base",
          "body": "Cook basmati rice while the sauce simmers. Season it lightly.",
          "timeMinutes": 15,
          "component": "base"
        },
        {
          "stepNumber": 6,
          "title": "Balance the pot",
          "body": "Taste for salt, heat, and acid. Add a splash of water if the sauce gets too tight.",
          "component": "finish",
          "visualCue": "It should taste rounded first, then bright."
        },
        {
          "stepNumber": 7,
          "title": "Serve with contrast",
          "body": "Spoon Chana masala over basmati rice. Finish with cilantro, lime right before eating.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "panang-curry-salmon-rice-green-beans",
    "name": "Panang curry salmon, rice, green beans",
    "category": "Curry and saucy",
    "description": "Rich panang curry with salmon, green beans, and rice.",
    "dinnerLanes": [
      "Curry night",
      "Creamy, spicy, cozy",
      "Rice bowl energy"
    ],
    "cuisineInfluence": [
      "Thai-ish"
    ],
    "format": "curry",
    "timeMinutes": 26,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "panang curry",
      "salmon",
      "green beans",
      "rice",
      "creamy"
    ],
    "chefNote": "Taste panang curry paste, coconut milk, peanuts before serving. It should be bold enough to season the salmon and rice, green beans, not just sit on top.",
    "whyItWorks": "Rich panang curry with salmon, green beans, and rice.",
    "ingredients": [
      {
        "rawName": "salmon",
        "canonicalName": "salmon",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "green beans",
        "canonicalName": "green bean",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "panang curry paste",
        "canonicalName": "panang curry paste",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 4,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "coconut milk",
        "canonicalName": "coconut milk",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 5,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "basil",
        "canonicalName": "basil",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "peanuts",
        "canonicalName": "peanut",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "heavy pot or Dutch oven",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover salmon and rice, green beans separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lime, basil after warming.",
    "recipe": {
      "activeTimeMinutes": 21,
      "totalTimeMinutes": 26,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss green beans with oil, salt, pepper, and the main seasoning from Panang curry salmon. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the salmon",
          "body": "Pat salmon dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until salmon is cooked through and green beans is browned at the edges.",
          "timeMinutes": 18,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir panang curry paste, coconut milk, peanuts with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook rice, green beans so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with lime, basil and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Panang curry salmon over or alongside rice, green beans, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "creamy-cajun-chicken-pasta",
    "name": "Creamy Cajun chicken pasta",
    "category": "Pasta and cozy comfort",
    "description": "Cajun chicken tossed with creamy pasta, peppers, and scallions.",
    "dinnerLanes": [
      "Pasta but better",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "Cajun-ish"
    ],
    "format": "pasta",
    "timeMinutes": 28,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "cajun",
      "chicken pasta",
      "creamy",
      "spicy",
      "weeknight"
    ],
    "chefNote": "Taste butter before serving. It should be bold enough to season the chicken and pasta, not just sit on top.",
    "whyItWorks": "Cajun chicken tossed with creamy pasta, peppers, and scallions.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "pasta",
        "canonicalName": "pasta",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "cream",
        "canonicalName": "cream",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 3,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "bell peppers",
        "canonicalName": "bell pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "parmesan",
        "canonicalName": "parmesan",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 6,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "spinach",
        "canonicalName": "spinach",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "optional"
      },
      {
        "rawName": "cajun seasoning",
        "canonicalName": "cajun seasoning",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "butter",
        "canonicalName": "butter",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1/3 cup",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large pot"
    ],
    "leftoversNote": "Store leftover chicken and pasta separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add scallions, lemon after warming.",
    "recipe": {
      "activeTimeMinutes": 23,
      "totalTimeMinutes": 28,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Boil the base",
          "body": "Bring salted water to a boil. Cook pasta until just shy of tender, then save 1 cup of the cooking water.",
          "timeMinutes": 10,
          "component": "base",
          "visualCue": "It should still have a little bite."
        },
        {
          "stepNumber": 2,
          "title": "Brown the chicken",
          "body": "Cook chicken in a wide skillet over medium-high heat until browned in spots and nearly cooked through.",
          "timeMinutes": 6,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "You want browning, not steaming."
        },
        {
          "stepNumber": 3,
          "title": "Add vegetables",
          "body": "Add bell peppers and cook until hot, glossy, and still colorful.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "Greens should wilt; sturdy vegetables should soften at the edges."
        },
        {
          "stepNumber": 4,
          "title": "Build the sauce",
          "body": "Lower the heat and stir in butter. Add splashes of pasta water until glossy.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should slide, not clump."
        },
        {
          "stepNumber": 5,
          "title": "Toss together",
          "body": "Add pasta to the skillet and toss hard for 1 to 2 minutes so every piece is coated.",
          "timeMinutes": 2,
          "component": "assembly",
          "visualCue": "The pasta should look shiny."
        },
        {
          "stepNumber": 6,
          "title": "Finish bright",
          "body": "Turn off the heat. Add scallions, lemon, more pasta water if needed, and a final drizzle of olive oil.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve now",
          "body": "Plate Creamy Cajun chicken pasta while hot. Add the optional upgrade at the table.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "pesto-chicken-orzo-blistered-tomato",
    "name": "Pesto chicken orzo, blistered tomato",
    "category": "Pasta and cozy comfort",
    "description": "Pesto chicken with orzo, blistered tomatoes, and parmesan.",
    "dinnerLanes": [
      "Pasta but better",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Italian-ish"
    ],
    "format": "orzo",
    "timeMinutes": 25,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "pesto",
      "chicken",
      "orzo",
      "blistered tomato",
      "herby"
    ],
    "chefNote": "Taste pesto before serving. It should be bold enough to season the chicken and orzo, not just sit on top.",
    "whyItWorks": "Pesto chicken with orzo, blistered tomatoes, and parmesan.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "orzo",
        "canonicalName": "orzo",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "pesto",
        "canonicalName": "pesto",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "parmesan",
        "canonicalName": "parmesan",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 5,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "basil",
        "canonicalName": "basil",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "spinach",
        "canonicalName": "spinach",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large pot"
    ],
    "leftoversNote": "Store leftover chicken and orzo separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add basil, lemon after warming.",
    "recipe": {
      "activeTimeMinutes": 20,
      "totalTimeMinutes": 25,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Boil the base",
          "body": "Bring salted water to a boil. Cook orzo until just shy of tender, then save 1 cup of the cooking water.",
          "timeMinutes": 10,
          "component": "base",
          "visualCue": "It should still have a little bite."
        },
        {
          "stepNumber": 2,
          "title": "Brown the chicken",
          "body": "Cook chicken in a wide skillet over medium-high heat until browned in spots and nearly cooked through.",
          "timeMinutes": 6,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "You want browning, not steaming."
        },
        {
          "stepNumber": 3,
          "title": "Add vegetables",
          "body": "Add tomatoes and cook until hot, glossy, and still colorful.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "Greens should wilt; sturdy vegetables should soften at the edges."
        },
        {
          "stepNumber": 4,
          "title": "Build the sauce",
          "body": "Lower the heat and stir in pesto. Add splashes of pasta water until glossy.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should slide, not clump."
        },
        {
          "stepNumber": 5,
          "title": "Toss together",
          "body": "Add orzo to the skillet and toss hard for 1 to 2 minutes so every piece is coated.",
          "timeMinutes": 2,
          "component": "assembly",
          "visualCue": "The pasta should look shiny."
        },
        {
          "stepNumber": 6,
          "title": "Finish bright",
          "body": "Turn off the heat. Add basil, lemon, more pasta water if needed, and a final drizzle of olive oil.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve now",
          "body": "Plate Pesto chicken orzo while hot. Add the optional upgrade at the table.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "baked-feta-and-tomato-pasta-basil",
    "name": "Baked feta and tomato pasta, basil",
    "category": "Pasta and cozy comfort",
    "description": "Baked feta and tomatoes tossed into glossy basil pasta.",
    "dinnerLanes": [
      "Pasta but better",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "Mediterranean-ish"
    ],
    "format": "pasta",
    "timeMinutes": 35,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "baked feta",
      "tomato pasta",
      "basil",
      "creamy",
      "vegetarian"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the the main ingredient and pasta, not just sit on top.",
    "whyItWorks": "Baked feta and tomatoes tossed into glossy basil pasta.",
    "ingredients": [
      {
        "rawName": "pasta",
        "canonicalName": "pasta",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 1,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "feta",
        "canonicalName": "feta",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 2,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "basil",
        "canonicalName": "basil",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "core"
      },
      {
        "rawName": "chili flakes",
        "canonicalName": "chili flak",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 6,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "spinach",
        "canonicalName": "spinach",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      },
      {
        "rawName": "pepper",
        "canonicalName": "pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 10,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "large pot"
    ],
    "leftoversNote": "Store leftover the main ingredient and pasta separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add basil after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 35,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Boil the base",
          "body": "Bring salted water to a boil. Cook pasta until just shy of tender, then save 1 cup of the cooking water.",
          "timeMinutes": 10,
          "component": "base",
          "visualCue": "It should still have a little bite."
        },
        {
          "stepNumber": 2,
          "title": "Brown the the main ingredient",
          "body": "Cook the main ingredient in a wide skillet over medium-high heat until browned in spots and nearly cooked through.",
          "timeMinutes": 6,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "You want browning, not steaming."
        },
        {
          "stepNumber": 3,
          "title": "Add vegetables",
          "body": "Add tomatoes and cook until hot, glossy, and still colorful.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "Greens should wilt; sturdy vegetables should soften at the edges."
        },
        {
          "stepNumber": 4,
          "title": "Build the sauce",
          "body": "Lower the heat and stir in the sauce. Add splashes of pasta water until glossy.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should slide, not clump."
        },
        {
          "stepNumber": 5,
          "title": "Toss together",
          "body": "Add pasta to the skillet and toss hard for 1 to 2 minutes so every piece is coated.",
          "timeMinutes": 2,
          "component": "assembly",
          "visualCue": "The pasta should look shiny."
        },
        {
          "stepNumber": 6,
          "title": "Finish bright",
          "body": "Turn off the heat. Add basil, more pasta water if needed, and a final drizzle of olive oil.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve now",
          "body": "Plate Baked feta and tomato pasta while hot. Add the optional upgrade at the table.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "spicy-rigatoni-alla-vodka-hot-honey",
    "name": "Spicy rigatoni alla vodka, hot honey",
    "category": "Pasta and cozy comfort",
    "description": "Creamy spicy vodka rigatoni with a hot honey finish.",
    "dinnerLanes": [
      "Pasta but better",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "Italian-American"
    ],
    "format": "pasta",
    "timeMinutes": 24,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "spicy rigatoni",
      "vodka sauce",
      "hot honey",
      "creamy",
      "pasta"
    ],
    "chefNote": "Taste tomato paste, hot honey, vodka before serving. It should be bold enough to season the the main ingredient and rigatoni, not just sit on top.",
    "whyItWorks": "Creamy spicy vodka rigatoni with a hot honey finish.",
    "ingredients": [
      {
        "rawName": "rigatoni",
        "canonicalName": "rigatoni",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 1,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "tomato paste",
        "canonicalName": "tomato paste",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "cream",
        "canonicalName": "cream",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 3,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "parmesan",
        "canonicalName": "parmesan",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 4,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "basil",
        "canonicalName": "basil",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "hot honey",
        "canonicalName": "hot honey",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 6,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "vodka",
        "canonicalName": "vodka",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 7,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "calabrian chili",
        "canonicalName": "calabrian chili",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 10,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      },
      {
        "rawName": "pepper",
        "canonicalName": "pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 12,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large pot",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover the main ingredient and rigatoni separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add basil after warming.",
    "recipe": {
      "activeTimeMinutes": 19,
      "totalTimeMinutes": 24,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Boil the base",
          "body": "Bring salted water to a boil. Cook rigatoni until just shy of tender, then save 1 cup of the cooking water.",
          "timeMinutes": 10,
          "component": "base",
          "visualCue": "It should still have a little bite."
        },
        {
          "stepNumber": 2,
          "title": "Brown the the main ingredient",
          "body": "Cook the main ingredient in a wide skillet over medium-high heat until browned in spots and nearly cooked through.",
          "timeMinutes": 6,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "You want browning, not steaming."
        },
        {
          "stepNumber": 3,
          "title": "Add vegetables",
          "body": "Add the vegetables and cook until hot, glossy, and still colorful.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "Greens should wilt; sturdy vegetables should soften at the edges."
        },
        {
          "stepNumber": 4,
          "title": "Build the sauce",
          "body": "Lower the heat and stir in tomato paste, hot honey, vodka. Add splashes of pasta water until glossy.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should slide, not clump."
        },
        {
          "stepNumber": 5,
          "title": "Toss together",
          "body": "Add rigatoni to the skillet and toss hard for 1 to 2 minutes so every piece is coated.",
          "timeMinutes": 2,
          "component": "assembly",
          "visualCue": "The pasta should look shiny."
        },
        {
          "stepNumber": 6,
          "title": "Finish bright",
          "body": "Turn off the heat. Add basil, more pasta water if needed, and a final drizzle of olive oil.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve now",
          "body": "Plate Spicy rigatoni alla vodka while hot. Add the optional upgrade at the table.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "lemon-garlic-shrimp-scampi-linguine",
    "name": "Lemon garlic shrimp scampi, linguine",
    "category": "Pasta and cozy comfort",
    "description": "Shrimp linguine with lemon, garlic, parsley, and glossy pan sauce.",
    "dinnerLanes": [
      "Pasta but better",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Italian-American"
    ],
    "format": "pasta",
    "timeMinutes": 20,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "shrimp scampi",
      "lemon garlic",
      "linguine",
      "bright",
      "fast"
    ],
    "chefNote": "Taste butter before serving. It should be bold enough to season the shrimp and linguine, not just sit on top.",
    "whyItWorks": "Shrimp linguine with lemon, garlic, parsley, and glossy pan sauce.",
    "ingredients": [
      {
        "rawName": "shrimp",
        "canonicalName": "shrimp",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "linguine",
        "canonicalName": "linguine",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 2,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "core"
      },
      {
        "rawName": "parmesan",
        "canonicalName": "parmesan",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 6,
        "displayQuantity": "4 oz",
        "importance": "optional"
      },
      {
        "rawName": "chili flakes",
        "canonicalName": "chili flak",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "butter",
        "canonicalName": "butter",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "1/3 cup",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large pot"
    ],
    "leftoversNote": "Store leftover shrimp and linguine separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 15,
      "totalTimeMinutes": 20,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Boil the base",
          "body": "Bring salted water to a boil. Cook linguine until just shy of tender, then save 1 cup of the cooking water.",
          "timeMinutes": 10,
          "component": "base",
          "visualCue": "It should still have a little bite."
        },
        {
          "stepNumber": 2,
          "title": "Brown the shrimp",
          "body": "Cook shrimp in a wide skillet over medium-high heat until browned in spots and nearly cooked through.",
          "timeMinutes": 6,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "You want browning, not steaming."
        },
        {
          "stepNumber": 3,
          "title": "Add vegetables",
          "body": "Add the vegetables and cook until hot, glossy, and still colorful.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "Greens should wilt; sturdy vegetables should soften at the edges."
        },
        {
          "stepNumber": 4,
          "title": "Build the sauce",
          "body": "Lower the heat and stir in butter. Add splashes of pasta water until glossy.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should slide, not clump."
        },
        {
          "stepNumber": 5,
          "title": "Toss together",
          "body": "Add linguine to the skillet and toss hard for 1 to 2 minutes so every piece is coated.",
          "timeMinutes": 2,
          "component": "assembly",
          "visualCue": "The pasta should look shiny."
        },
        {
          "stepNumber": 6,
          "title": "Finish bright",
          "body": "Turn off the heat. Add lemon, parsley, more pasta water if needed, and a final drizzle of olive oil.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve now",
          "body": "Plate Lemon garlic shrimp scampi while hot. Add the optional upgrade at the table.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "sausage-and-broccoli-rabe-orecchiette-chili-flake",
    "name": "Sausage and broccoli rabe orecchiette, chili flake",
    "category": "Pasta and cozy comfort",
    "description": "Orecchiette with sausage, bitter greens, garlic, and chili flake.",
    "dinnerLanes": [
      "Pasta but better",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Italian"
    ],
    "format": "pasta",
    "timeMinutes": 28,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "sausage",
      "broccoli rabe",
      "orecchiette",
      "chili flake",
      "garlic"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the sausage and orecchiette, not just sit on top.",
    "whyItWorks": "Orecchiette with sausage, bitter greens, garlic, and chili flake.",
    "ingredients": [
      {
        "rawName": "sausage",
        "canonicalName": "sausage",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 1,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "broccoli rabe",
        "canonicalName": "broccoli rabe",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "orecchiette",
        "canonicalName": "orecchiette",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 3,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "parmesan",
        "canonicalName": "parmesan",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 4,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "optional"
      },
      {
        "rawName": "breadcrumbs",
        "canonicalName": "breadcrumb",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 7,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "chili flakes",
        "canonicalName": "chili flak",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "large pot"
    ],
    "leftoversNote": "Store leftover sausage and orecchiette separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon after warming.",
    "recipe": {
      "activeTimeMinutes": 23,
      "totalTimeMinutes": 28,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Boil the base",
          "body": "Bring salted water to a boil. Cook orecchiette until just shy of tender, then save 1 cup of the cooking water.",
          "timeMinutes": 10,
          "component": "base",
          "visualCue": "It should still have a little bite."
        },
        {
          "stepNumber": 2,
          "title": "Brown the sausage",
          "body": "Cook sausage in a wide skillet over medium-high heat until browned in spots and nearly cooked through.",
          "timeMinutes": 6,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "You want browning, not steaming."
        },
        {
          "stepNumber": 3,
          "title": "Add vegetables",
          "body": "Add broccoli rabe and cook until hot, glossy, and still colorful.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "Greens should wilt; sturdy vegetables should soften at the edges."
        },
        {
          "stepNumber": 4,
          "title": "Build the sauce",
          "body": "Lower the heat and stir in the sauce. Add splashes of pasta water until glossy.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should slide, not clump."
        },
        {
          "stepNumber": 5,
          "title": "Toss together",
          "body": "Add orecchiette to the skillet and toss hard for 1 to 2 minutes so every piece is coated.",
          "timeMinutes": 2,
          "component": "assembly",
          "visualCue": "The pasta should look shiny."
        },
        {
          "stepNumber": 6,
          "title": "Finish bright",
          "body": "Turn off the heat. Add lemon, more pasta water if needed, and a final drizzle of olive oil.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve now",
          "body": "Plate Sausage and broccoli rabe orecchiette while hot. Add the optional upgrade at the table.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "french-onion-pasta-crispy-prosciutto",
    "name": "French onion pasta, crispy prosciutto",
    "category": "Pasta and cozy comfort",
    "description": "Caramelized onion pasta with gruyere and crisp prosciutto.",
    "dinnerLanes": [
      "Pasta but better",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "French-ish"
    ],
    "format": "pasta",
    "timeMinutes": 38,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "french onion",
      "pasta",
      "prosciutto",
      "cheesy",
      "cozy"
    ],
    "chefNote": "Taste butter before serving. It should be bold enough to season the the main ingredient and pasta, not just sit on top.",
    "whyItWorks": "Caramelized onion pasta with gruyere and crisp prosciutto.",
    "ingredients": [
      {
        "rawName": "pasta",
        "canonicalName": "pasta",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 1,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "onions",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "gruyere",
        "canonicalName": "gruyere",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 3,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "prosciutto",
        "canonicalName": "prosciutto",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 4,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "thyme",
        "canonicalName": "thyme",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 5,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "mushrooms",
        "canonicalName": "mushroom",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "butter",
        "canonicalName": "butter",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "1/3 cup",
        "importance": "pantry"
      },
      {
        "rawName": "stock",
        "canonicalName": "stock",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      },
      {
        "rawName": "pepper",
        "canonicalName": "pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 11,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large pot"
    ],
    "leftoversNote": "Store leftover the main ingredient and pasta separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 33,
      "totalTimeMinutes": 38,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Boil the base",
          "body": "Bring salted water to a boil. Cook pasta until just shy of tender, then save 1 cup of the cooking water.",
          "timeMinutes": 10,
          "component": "base",
          "visualCue": "It should still have a little bite."
        },
        {
          "stepNumber": 2,
          "title": "Brown the the main ingredient",
          "body": "Cook the main ingredient in a wide skillet over medium-high heat until browned in spots and nearly cooked through.",
          "timeMinutes": 6,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "You want browning, not steaming."
        },
        {
          "stepNumber": 3,
          "title": "Add vegetables",
          "body": "Add onions and cook until hot, glossy, and still colorful.",
          "timeMinutes": 4,
          "component": "vegetables"
        },
        {
          "stepNumber": 4,
          "title": "Build the sauce",
          "body": "Lower the heat and stir in butter. Add splashes of pasta water until glossy.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should slide, not clump."
        },
        {
          "stepNumber": 5,
          "title": "Toss together",
          "body": "Add pasta to the skillet and toss hard for 1 to 2 minutes so every piece is coated.",
          "timeMinutes": 2,
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish bright",
          "body": "Turn off the heat. Add parsley, more pasta water if needed, and a final drizzle of olive oil.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve now",
          "body": "Plate French onion pasta while hot.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "gochujang-butter-noodles-soft-egg-scallion",
    "name": "Gochujang butter noodles, soft egg, scallion",
    "category": "Pasta and cozy comfort",
    "description": "Glossy gochujang butter noodles with soft egg and scallions.",
    "dinnerLanes": [
      "Pantry sauce magic",
      "Creamy, spicy, cozy",
      "Pasta but better"
    ],
    "cuisineInfluence": [
      "Korean-ish"
    ],
    "format": "noodles",
    "timeMinutes": 15,
    "effort": "Very easy",
    "servings": 4,
    "tags": [
      "gochujang butter",
      "noodles",
      "soft egg",
      "scallion",
      "pantry sauce"
    ],
    "chefNote": "Taste gochujang, butter before serving. It should be bold enough to season the eggs and noodles, not just sit on top.",
    "whyItWorks": "Glossy gochujang butter noodles with soft egg and scallions.",
    "ingredients": [
      {
        "rawName": "noodles",
        "canonicalName": "noodle",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 1,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "eggs",
        "canonicalName": "egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 2,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "gochujang",
        "canonicalName": "gochujang",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 4,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "butter",
        "canonicalName": "butter",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 5,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "sesame seeds",
        "canonicalName": "sesame seed",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 6,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large pot",
      "large skillet",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover eggs and noodles separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add scallions, cucumber after warming.",
    "recipe": {
      "activeTimeMinutes": 15,
      "totalTimeMinutes": 15,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Boil the base",
          "body": "Bring salted water to a boil. Cook noodles until just shy of tender, then save 1 cup of the cooking water.",
          "timeMinutes": 10,
          "component": "base",
          "visualCue": "It should still have a little bite."
        },
        {
          "stepNumber": 2,
          "title": "Brown the eggs",
          "body": "Cook eggs in a wide skillet over medium-high heat until browned in spots and nearly cooked through.",
          "timeMinutes": 6,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "You want browning, not steaming."
        },
        {
          "stepNumber": 3,
          "title": "Add vegetables",
          "body": "Add the vegetables and cook until hot, glossy, and still colorful.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "Greens should wilt; sturdy vegetables should soften at the edges."
        },
        {
          "stepNumber": 4,
          "title": "Build the sauce",
          "body": "Lower the heat and stir in gochujang, butter. Add splashes of pasta water until glossy.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should slide, not clump."
        },
        {
          "stepNumber": 5,
          "title": "Toss together",
          "body": "Add noodles to the skillet and toss hard for 1 to 2 minutes so every piece is coated.",
          "timeMinutes": 2,
          "component": "assembly",
          "visualCue": "The pasta should look shiny."
        },
        {
          "stepNumber": 6,
          "title": "Finish bright",
          "body": "Turn off the heat. Add scallions, cucumber, more pasta water if needed, and a final drizzle of olive oil.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve now",
          "body": "Plate Gochujang butter noodles while hot. Add the optional upgrade at the table.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "beef-ragu-pappardelle",
    "name": "Beef ragu pappardelle",
    "category": "Pasta and cozy comfort",
    "description": "Slow-ish beef ragu with wide pappardelle and parmesan.",
    "dinnerLanes": [
      "Pasta but better",
      "Spiced rice and slow comfort"
    ],
    "cuisineInfluence": [
      "Italian"
    ],
    "format": "pasta",
    "timeMinutes": 60,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "beef ragu",
      "pappardelle",
      "slow comfort",
      "tomato",
      "parmesan"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the beef and pappardelle, not just sit on top.",
    "whyItWorks": "Slow-ish beef ragu with wide pappardelle and parmesan.",
    "ingredients": [
      {
        "rawName": "beef",
        "canonicalName": "beef",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "pappardelle",
        "canonicalName": "pappardelle",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 2,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "carrots",
        "canonicalName": "carrot",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "4 medium",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "parmesan",
        "canonicalName": "parmesan",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 6,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "ricotta",
        "canonicalName": "ricotta",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "stock",
        "canonicalName": "stock",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      },
      {
        "rawName": "pepper",
        "canonicalName": "pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 12,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "large pot",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover beef and pappardelle separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 40,
      "totalTimeMinutes": 60,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Boil the base",
          "body": "Bring salted water to a boil. Cook pappardelle until just shy of tender, then save 1 cup of the cooking water.",
          "timeMinutes": 10,
          "component": "base",
          "visualCue": "It should still have a little bite."
        },
        {
          "stepNumber": 2,
          "title": "Brown the beef",
          "body": "Cook beef in a wide skillet over medium-high heat until browned in spots and nearly cooked through.",
          "timeMinutes": 6,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "You want browning, not steaming."
        },
        {
          "stepNumber": 3,
          "title": "Add vegetables",
          "body": "Add tomatoes, onion, carrots and cook until hot, glossy, and still colorful.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "Greens should wilt; sturdy vegetables should soften at the edges."
        },
        {
          "stepNumber": 4,
          "title": "Build the sauce",
          "body": "Lower the heat and stir in the sauce. Add splashes of pasta water until glossy.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should slide, not clump."
        },
        {
          "stepNumber": 5,
          "title": "Toss together",
          "body": "Add pappardelle to the skillet and toss hard for 1 to 2 minutes so every piece is coated.",
          "timeMinutes": 2,
          "component": "assembly",
          "visualCue": "The pasta should look shiny."
        },
        {
          "stepNumber": 6,
          "title": "Finish bright",
          "body": "Turn off the heat. Add parsley, more pasta water if needed, and a final drizzle of olive oil.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve now",
          "body": "Plate Beef ragu pappardelle while hot. Add the optional upgrade at the table.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "sheet-pan-harissa-honey-chicken-thighs-carrots-chickpeas",
    "name": "Sheet pan harissa honey chicken thighs, carrots, chickpeas",
    "category": "Sheet pan and roasts",
    "description": "Sticky harissa honey chicken with roasted carrots and chickpeas.",
    "dinnerLanes": [
      "Weeknight roast",
      "Charred, citrusy, herby",
      "Big platter dinner"
    ],
    "cuisineInfluence": [
      "North African-ish"
    ],
    "format": "sheet pan",
    "timeMinutes": 42,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "sheet pan",
      "harissa honey",
      "chicken thighs",
      "carrots",
      "chickpeas"
    ],
    "chefNote": "Taste harissa, honey, Greek yogurt before serving. It should be bold enough to season the chicken thighs and the base, not just sit on top.",
    "whyItWorks": "Sticky harissa honey chicken with roasted carrots and chickpeas.",
    "ingredients": [
      {
        "rawName": "chicken thighs",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "carrots",
        "canonicalName": "carrot",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "4 medium",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "chickpeas",
        "canonicalName": "chickpea",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "harissa",
        "canonicalName": "harissa",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 4,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "honey",
        "canonicalName": "honey",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 5,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 7,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan"
    ],
    "leftoversNote": "Store leftover chicken thighs and the base separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 37,
      "totalTimeMinutes": 42,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss carrots, chickpeas with oil, salt, pepper, and the main seasoning from Sheet pan harissa honey chicken thighs. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the chicken thighs",
          "body": "Pat chicken thighs dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until chicken thighs is cooked through and carrots, chickpeas is browned at the edges.",
          "timeMinutes": 30,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir harissa, honey, Greek yogurt with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook the base so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with lemon, parsley and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Sheet pan harissa honey chicken thighs over or alongside the base, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "sheet-pan-sausage-peppers-onions-potatoes",
    "name": "Sheet pan sausage, peppers, onions, potatoes",
    "category": "Sheet pan and roasts",
    "description": "Roasted sausage, peppers, onions, and potatoes with crispy edges.",
    "dinnerLanes": [
      "Weeknight roast",
      "Big platter dinner"
    ],
    "cuisineInfluence": [
      "Italian-American"
    ],
    "format": "sheet pan",
    "timeMinutes": 38,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "sheet pan",
      "sausage",
      "peppers",
      "potatoes",
      "roasted"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the sausage and potatoes, not just sit on top.",
    "whyItWorks": "Roasted sausage, peppers, onions, and potatoes with crispy edges.",
    "ingredients": [
      {
        "rawName": "sausage",
        "canonicalName": "sausage",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 1,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "bell peppers",
        "canonicalName": "bell pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "potatoes",
        "canonicalName": "potato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1 1/2 lb",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "mustard",
        "canonicalName": "mustard",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 6,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "crusty bread",
        "canonicalName": "crusty bread",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 7,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "oregano",
        "canonicalName": "oregano",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan"
    ],
    "leftoversNote": "Store leftover sausage and potatoes separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 33,
      "totalTimeMinutes": 38,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss bell peppers, onion, potatoes with oil, salt, pepper, and the main seasoning from Sheet pan sausage. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the sausage",
          "body": "Pat sausage dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until sausage is cooked through and bell peppers, onion, potatoes is browned at the edges.",
          "timeMinutes": 30,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir the sauce with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook potatoes so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with parsley and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Sheet pan sausage over or alongside potatoes, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "garlic-butter-steak-bites-shishito-potatoes",
    "name": "Garlic butter steak bites, shishito, potatoes",
    "category": "Sheet pan and roasts",
    "description": "Seared steak bites with shishitos, potatoes, garlic butter, and lemon.",
    "dinnerLanes": [
      "Charred, citrusy, herby",
      "Weeknight roast"
    ],
    "cuisineInfluence": [
      "American-ish"
    ],
    "format": "skillet",
    "timeMinutes": 30,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "steak bites",
      "garlic butter",
      "shishito",
      "potatoes",
      "seared"
    ],
    "chefNote": "Taste butter before serving. It should be bold enough to season the steak and potatoes, not just sit on top.",
    "whyItWorks": "Seared steak bites with shishitos, potatoes, garlic butter, and lemon.",
    "ingredients": [
      {
        "rawName": "steak",
        "canonicalName": "steak",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "shishito peppers",
        "canonicalName": "shishito pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "potatoes",
        "canonicalName": "potato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1 1/2 lb",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "chimichurri",
        "canonicalName": "chimichurri",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "butter",
        "canonicalName": "butter",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "1/3 cup",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      },
      {
        "rawName": "pepper",
        "canonicalName": "pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 11,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "large skillet"
    ],
    "leftoversNote": "Store leftover steak and potatoes separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 25,
      "totalTimeMinutes": 30,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss shishito peppers, potatoes with oil, salt, pepper, and the main seasoning from Garlic butter steak bites. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the steak",
          "body": "Pat steak dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until steak is cooked through and shishito peppers, potatoes is browned at the edges.",
          "timeMinutes": 22,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir butter with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook potatoes so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with lemon, parsley and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Garlic butter steak bites over or alongside potatoes, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "roast-chicken-thighs-fennel-lemon-olives",
    "name": "Roast chicken thighs, fennel, lemon, olives",
    "category": "Sheet pan and roasts",
    "description": "Crispy chicken thighs with jammy fennel, lemon, olives, and pan juices.",
    "dinnerLanes": [
      "Weeknight roast",
      "Charred, citrusy, herby",
      "Mediterranean home cooking"
    ],
    "cuisineInfluence": [
      "Mediterranean"
    ],
    "format": "sheet pan",
    "timeMinutes": 42,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "roast chicken",
      "fennel",
      "lemon",
      "olives",
      "sheet pan"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the chicken thighs and the base, not just sit on top.",
    "whyItWorks": "Crispy chicken thighs with jammy fennel, lemon, olives, and pan juices.",
    "ingredients": [
      {
        "rawName": "chicken thighs",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "fennel",
        "canonicalName": "fennel",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "olives",
        "canonicalName": "olive",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 4,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "potatoes",
        "canonicalName": "potato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1 1/2 lb",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 7,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      },
      {
        "rawName": "pepper",
        "canonicalName": "pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan"
    ],
    "leftoversNote": "Store leftover chicken thighs and the base separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 37,
      "totalTimeMinutes": 42,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss fennel, olives with oil, salt, pepper, and the main seasoning from Roast chicken thighs. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the chicken thighs",
          "body": "Pat chicken thighs dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until chicken thighs is cooked through and fennel, olives is browned at the edges.",
          "timeMinutes": 30,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir the sauce with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook the base so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with lemon, parsley and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Roast chicken thighs over or alongside the base, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "sheet-pan-gochujang-salmon-broccoli-sesame",
    "name": "Sheet pan gochujang salmon, broccoli, sesame",
    "category": "Sheet pan and roasts",
    "description": "Gochujang-glazed salmon with roasted broccoli and sesame.",
    "dinnerLanes": [
      "Weeknight roast",
      "Creamy, spicy, cozy",
      "Rice bowl energy"
    ],
    "cuisineInfluence": [
      "Korean-ish"
    ],
    "format": "sheet pan",
    "timeMinutes": 24,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "gochujang",
      "salmon",
      "broccoli",
      "sesame",
      "sheet pan"
    ],
    "chefNote": "Taste gochujang, honey before serving. It should be bold enough to season the salmon and rice, not just sit on top.",
    "whyItWorks": "Gochujang-glazed salmon with roasted broccoli and sesame.",
    "ingredients": [
      {
        "rawName": "salmon",
        "canonicalName": "salmon",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "broccoli",
        "canonicalName": "broccoli",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "gochujang",
        "canonicalName": "gochujang",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 5,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "sesame seeds",
        "canonicalName": "sesame seed",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 6,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "honey",
        "canonicalName": "honey",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover salmon and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add scallions, cucumber after warming.",
    "recipe": {
      "activeTimeMinutes": 19,
      "totalTimeMinutes": 24,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss broccoli with oil, salt, pepper, and the main seasoning from Sheet pan gochujang salmon. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the salmon",
          "body": "Pat salmon dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until salmon is cooked through and broccoli is browned at the edges.",
          "timeMinutes": 18,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir gochujang, honey with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook rice so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with scallions, cucumber and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Sheet pan gochujang salmon over or alongside rice, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "maple-dijon-pork-tenderloin-brussels-sweet-potato",
    "name": "Maple dijon pork tenderloin, brussels, sweet potato",
    "category": "Sheet pan and roasts",
    "description": "Maple dijon pork with roasted brussels and sweet potato.",
    "dinnerLanes": [
      "Weeknight roast",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "American-ish"
    ],
    "format": "sheet pan",
    "timeMinutes": 40,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "pork tenderloin",
      "maple dijon",
      "brussels",
      "sweet potato",
      "roasted"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the pork tenderloin and sweet potato, not just sit on top.",
    "whyItWorks": "Maple dijon pork with roasted brussels and sweet potato.",
    "ingredients": [
      {
        "rawName": "pork tenderloin",
        "canonicalName": "pork tenderloin",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "brussels sprouts",
        "canonicalName": "brussels sprout",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "sweet potato",
        "canonicalName": "sweet potato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1 1/2 lb",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "dijon mustard",
        "canonicalName": "dijon mustard",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 4,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "apples",
        "canonicalName": "appl",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "maple syrup",
        "canonicalName": "maple syrup",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 7,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan"
    ],
    "leftoversNote": "Store leftover pork tenderloin and sweet potato separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 35,
      "totalTimeMinutes": 40,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss brussels sprouts, sweet potato with oil, salt, pepper, and the main seasoning from Maple dijon pork tenderloin. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the pork tenderloin",
          "body": "Pat pork tenderloin dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until pork tenderloin is cooked through and brussels sprouts, sweet potato is browned at the edges.",
          "timeMinutes": 30,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir the sauce with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook sweet potato so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with parsley and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Maple dijon pork tenderloin over or alongside sweet potato, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "sheet-pan-chicken-fajitas-creamy-verde-charred-tortillas",
    "name": "Sheet pan chicken fajitas, creamy verde, charred tortillas",
    "category": "Sheet pan and roasts",
    "description": "Chicken fajitas with peppers, onions, creamy verde, and charred tortillas.",
    "dinnerLanes": [
      "Tacos, wraps, and things in bread",
      "Weeknight roast",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Mexican-ish"
    ],
    "format": "sheet pan",
    "timeMinutes": 30,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "chicken fajitas",
      "creamy verde",
      "tortillas",
      "sheet pan",
      "charred"
    ],
    "chefNote": "Taste salsa verde, Greek yogurt before serving. It should be bold enough to season the chicken and tortillas, not just sit on top.",
    "whyItWorks": "Chicken fajitas with peppers, onions, creamy verde, and charred tortillas.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "bell peppers",
        "canonicalName": "bell pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "tortillas",
        "canonicalName": "tortilla",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 4,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "salsa verde",
        "canonicalName": "salsa verde",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 5,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 6,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "large skillet"
    ],
    "leftoversNote": "Store leftover chicken and tortillas separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lime, avocado, cilantro after warming.",
    "recipe": {
      "activeTimeMinutes": 25,
      "totalTimeMinutes": 30,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice bell peppers, onion and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir salsa verde, Greek yogurt with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken",
          "body": "Cook chicken in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm tortillas in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then bell peppers, onion, then salsa verde, Greek yogurt. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add lime, avocado, cilantro right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Sheet pan chicken fajitas with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "crispy-parmesan-garlic-halibut-green-beans-lemon",
    "name": "Crispy parmesan garlic halibut, green beans, lemon",
    "category": "Sheet pan and roasts",
    "description": "Parmesan-crusted halibut with green beans and lemon.",
    "dinnerLanes": [
      "Crispy, saucy, crunchy",
      "Charred, citrusy, herby",
      "Weeknight roast"
    ],
    "cuisineInfluence": [
      "Simple healthy weeknight"
    ],
    "format": "sheet pan",
    "timeMinutes": 25,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "halibut",
      "parmesan",
      "green beans",
      "lemon",
      "crispy"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the halibut and green beans, not just sit on top.",
    "whyItWorks": "Parmesan-crusted halibut with green beans and lemon.",
    "ingredients": [
      {
        "rawName": "halibut",
        "canonicalName": "halibut",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "green beans",
        "canonicalName": "green bean",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "parmesan",
        "canonicalName": "parmesan",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 3,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "potatoes",
        "canonicalName": "potato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1 1/2 lb",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "aioli",
        "canonicalName": "aioli",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "breadcrumbs",
        "canonicalName": "breadcrumb",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Pantry",
        "sortOrder": 8,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "pantry"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover halibut and green beans separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 20,
      "totalTimeMinutes": 25,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss green beans with oil, salt, pepper, and the main seasoning from Crispy parmesan garlic halibut. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the halibut",
          "body": "Pat halibut dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein"
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until halibut is cooked through and green beans is browned at the edges.",
          "timeMinutes": 22,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir the sauce with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce"
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook green beans so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with lemon, parsley.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Crispy parmesan garlic halibut over or alongside green beans.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "baked-hot-honey-chicken-rice-charred-broccoli",
    "name": "Baked hot honey chicken, rice, charred broccoli",
    "category": "Saucy, cozy, weeknight fusion",
    "description": "Baked crispy-ish hot honey chicken with rice and charred broccoli.",
    "dinnerLanes": [
      "Crispy, saucy, crunchy",
      "Rice bowl energy",
      "Weeknight roast"
    ],
    "cuisineInfluence": [
      "American-ish"
    ],
    "format": "plate",
    "timeMinutes": 35,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "hot honey",
      "chicken",
      "rice",
      "charred broccoli",
      "weeknight"
    ],
    "chefNote": "Taste hot honey, ranch yogurt before serving. It should be bold enough to season the chicken and rice, not just sit on top.",
    "whyItWorks": "Baked crispy-ish hot honey chicken with rice and charred broccoli.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "broccoli",
        "canonicalName": "broccoli",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "hot honey",
        "canonicalName": "hot honey",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 4,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "ranch yogurt",
        "canonicalName": "ranch yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 6,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "breadcrumbs",
        "canonicalName": "breadcrumb",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Pantry",
        "sortOrder": 8,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover chicken and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, scallions after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 35,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss broccoli with oil, salt, pepper, and the main seasoning from Baked hot honey chicken. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the chicken",
          "body": "Pat chicken dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein"
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until chicken is cooked through and broccoli is browned at the edges.",
          "timeMinutes": 22,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir hot honey, ranch yogurt with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce"
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook rice so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with lemon, scallions.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Baked hot honey chicken over or alongside rice.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "sesame-katsu-chicken-rice-bowls-all-the-toppings",
    "name": "Sesame katsu chicken rice bowls, all the toppings",
    "category": "Saucy, cozy, weeknight fusion",
    "description": "Crispy sesame katsu chicken over rice with slaw, cucumber, and sauce.",
    "dinnerLanes": [
      "Crispy, saucy, crunchy",
      "Rice bowl energy"
    ],
    "cuisineInfluence": [
      "Japanese-ish"
    ],
    "format": "bowl",
    "timeMinutes": 38,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "sesame katsu",
      "chicken",
      "rice bowl",
      "crispy",
      "slaw"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the chicken cutlets and rice, not just sit on top.",
    "whyItWorks": "Crispy sesame katsu chicken over rice with slaw, cucumber, and sauce.",
    "ingredients": [
      {
        "rawName": "chicken cutlets",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "cabbage",
        "canonicalName": "cabbage",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "3 cups",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "sesame seeds",
        "canonicalName": "sesame seed",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 5,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "kewpie mayo",
        "canonicalName": "kewpie mayo",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "pickled ginger",
        "canonicalName": "pickled ginger",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "breadcrumbs",
        "canonicalName": "breadcrumb",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Pantry",
        "sortOrder": 9,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "pantry"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "large skillet",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chicken cutlets and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, scallions, pickled ginger after warming.",
    "recipe": {
      "activeTimeMinutes": 33,
      "totalTimeMinutes": 38,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Set up the coating",
          "body": "Season chicken cutlets with salt and pepper. Put flour or starch, beaten egg, and breadcrumbs or the listed coating in separate shallow bowls.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "Each bowl should be seasoned so the crust tastes good on its own."
        },
        {
          "stepNumber": 2,
          "title": "Make the fresh side",
          "body": "Toss cabbage, cucumber with citrus, salt, and a little oil. Keep it cold while the crispy piece cooks.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The side should taste sharper than you think; it has to cut the fried crust."
        },
        {
          "stepNumber": 3,
          "title": "Coat firmly",
          "body": "Dredge chicken cutlets, pressing the coating on with your hands. Rest it for 5 minutes so the crust sticks.",
          "timeMinutes": 5,
          "component": "protein",
          "visualCue": "No wet patches should show through."
        },
        {
          "stepNumber": 4,
          "title": "Cook until crisp",
          "body": "Heat a thin layer of oil over medium-high heat. Fry chicken cutlets until deeply golden on both sides and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "The crust should sound crisp when tapped."
        },
        {
          "stepNumber": 5,
          "title": "Drain and salt",
          "body": "Move chicken cutlets to a rack or paper towel and salt it immediately.",
          "timeMinutes": 2,
          "component": "finish",
          "visualCue": "Steam should escape instead of softening the crust."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Serve with hot rice. If there is sauce, keep it spoonable and hot.",
          "timeMinutes": 5,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Plate for crunch",
          "body": "Spoon the sauce beside or under the crispy chicken cutlets, then finish with cucumber, scallions, pickled ginger.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "creamy-white-chicken-chili-lime-tortilla-avocado",
    "name": "Creamy white chicken chili, lime, tortilla, avocado",
    "category": "Saucy, cozy, weeknight fusion",
    "description": "Creamy white chicken chili with lime, tortillas, avocado, and cilantro.",
    "dinnerLanes": [
      "Creamy, spicy, cozy",
      "Tacos, wraps, and things in bread"
    ],
    "cuisineInfluence": [
      "Tex-Mex-ish"
    ],
    "format": "stew",
    "timeMinutes": 35,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "white chicken chili",
      "creamy",
      "lime",
      "avocado",
      "tortilla"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the chicken and white beans, tortillas, not just sit on top.",
    "whyItWorks": "Creamy white chicken chili with lime, tortillas, avocado, and cilantro.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "white beans",
        "canonicalName": "white bean",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "tortillas",
        "canonicalName": "tortilla",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 3,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "cream cheese",
        "canonicalName": "cream cheese",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 7,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "jalapeno",
        "canonicalName": "jalapeno",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "corn",
        "canonicalName": "corn",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "stock",
        "canonicalName": "stock",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 11,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "large skillet"
    ],
    "leftoversNote": "Store leftover chicken and white beans, tortillas separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add avocado, lime, cilantro after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 35,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice avocado and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir the sauce with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken",
          "body": "Cook chicken in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm white beans, tortillas in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then avocado, then the sauce. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add avocado, lime, cilantro right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Creamy white chicken chili with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "spicy-honey-mustard-pretzel-chicken-fingers",
    "name": "Spicy honey mustard pretzel chicken fingers",
    "category": "Saucy, cozy, weeknight fusion",
    "description": "Pretzel-crusted chicken fingers with spicy honey mustard.",
    "dinnerLanes": [
      "Crispy, saucy, crunchy"
    ],
    "cuisineInfluence": [
      "American-ish"
    ],
    "format": "fingers",
    "timeMinutes": 30,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "pretzel chicken",
      "honey mustard",
      "crispy",
      "spicy",
      "weeknight"
    ],
    "chefNote": "Taste honey before serving. It should be bold enough to season the chicken tenders and the base, not just sit on top.",
    "whyItWorks": "Pretzel-crusted chicken fingers with spicy honey mustard.",
    "ingredients": [
      {
        "rawName": "chicken tenders",
        "canonicalName": "chicken tender",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "pretzels",
        "canonicalName": "pretzel",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 2,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "eggs",
        "canonicalName": "egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 3,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "core"
      },
      {
        "rawName": "dijon mustard",
        "canonicalName": "dijon mustard",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 4,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "honey",
        "canonicalName": "honey",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 5,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "slaw",
        "canonicalName": "slaw",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 6,
        "displayQuantity": "3 cups",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "pickles",
        "canonicalName": "pickl",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "flour",
        "canonicalName": "flour",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Pantry",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board"
    ],
    "leftoversNote": "Store leftover chicken tenders and the base separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, herbs, or pickles if you have them after warming.",
    "recipe": {
      "activeTimeMinutes": 25,
      "totalTimeMinutes": 30,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Set up the coating",
          "body": "Season chicken tenders with salt and pepper. Put flour or starch, beaten egg, and breadcrumbs or the listed coating in separate shallow bowls.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "Each bowl should be seasoned so the crust tastes good on its own."
        },
        {
          "stepNumber": 2,
          "title": "Make the fresh side",
          "body": "Toss the vegetables with citrus, salt, and a little oil. Keep it cold while the crispy piece cooks.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The side should taste sharper than you think; it has to cut the fried crust."
        },
        {
          "stepNumber": 3,
          "title": "Coat firmly",
          "body": "Dredge chicken tenders, pressing the coating on with your hands. Rest it for 5 minutes so the crust sticks.",
          "timeMinutes": 5,
          "component": "protein",
          "visualCue": "No wet patches should show through."
        },
        {
          "stepNumber": 4,
          "title": "Cook until crisp",
          "body": "Heat a thin layer of oil over medium-high heat. Fry chicken tenders until deeply golden on both sides and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "The crust should sound crisp when tapped."
        },
        {
          "stepNumber": 5,
          "title": "Drain and salt",
          "body": "Move chicken tenders to a rack or paper towel and salt it immediately.",
          "timeMinutes": 2,
          "component": "finish",
          "visualCue": "Steam should escape instead of softening the crust."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Serve with hot the base. If there is sauce, keep it spoonable and hot.",
          "timeMinutes": 5,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Plate for crunch",
          "body": "Spoon honey beside or under the crispy chicken tenders, then finish with lemon, herbs, or pickles if you have them.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "greek-chicken-meatballs-lemon-butter-orzo-one-skillet",
    "name": "Greek chicken meatballs, lemon butter orzo, one skillet",
    "category": "Saucy, cozy, weeknight fusion",
    "description": "Herby chicken meatballs with lemon butter orzo in one skillet.",
    "dinnerLanes": [
      "Mediterranean home cooking",
      "Pasta but better",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "Greek-ish"
    ],
    "format": "skillet",
    "timeMinutes": 34,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "chicken meatballs",
      "lemon butter orzo",
      "one skillet",
      "herby",
      "greek"
    ],
    "chefNote": "Taste Greek yogurt, butter before serving. It should be bold enough to season the ground chicken and orzo, not just sit on top.",
    "whyItWorks": "Herby chicken meatballs with lemon butter orzo in one skillet.",
    "ingredients": [
      {
        "rawName": "ground chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "orzo",
        "canonicalName": "orzo",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "feta",
        "canonicalName": "feta",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 4,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 6,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "dill",
        "canonicalName": "dill",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 7,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "butter",
        "canonicalName": "butter",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "1/3 cup",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large pot"
    ],
    "leftoversNote": "Store leftover ground chicken and orzo separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, parsley, cucumber after warming.",
    "recipe": {
      "activeTimeMinutes": 29,
      "totalTimeMinutes": 34,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Boil the base",
          "body": "Bring salted water to a boil. Cook orzo until just shy of tender, then save 1 cup of the cooking water.",
          "timeMinutes": 10,
          "component": "base",
          "visualCue": "It should still have a little bite."
        },
        {
          "stepNumber": 2,
          "title": "Brown the ground chicken",
          "body": "Cook ground chicken in a wide skillet over medium-high heat until browned in spots and nearly cooked through.",
          "timeMinutes": 6,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "You want browning, not steaming."
        },
        {
          "stepNumber": 3,
          "title": "Add vegetables",
          "body": "Add the vegetables and cook until hot, glossy, and still colorful.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "Greens should wilt; sturdy vegetables should soften at the edges."
        },
        {
          "stepNumber": 4,
          "title": "Build the sauce",
          "body": "Lower the heat and stir in Greek yogurt, butter. Add splashes of pasta water until glossy.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should slide, not clump."
        },
        {
          "stepNumber": 5,
          "title": "Toss together",
          "body": "Add orzo to the skillet and toss hard for 1 to 2 minutes so every piece is coated.",
          "timeMinutes": 2,
          "component": "assembly",
          "visualCue": "The pasta should look shiny."
        },
        {
          "stepNumber": 6,
          "title": "Finish bright",
          "body": "Turn off the heat. Add lemon, parsley, cucumber, more pasta water if needed, and a final drizzle of olive oil.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve now",
          "body": "Plate Greek chicken meatballs while hot. Add the optional upgrade at the table.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "one-skillet-cheesy-salsa-verde-chicken-and-rice",
    "name": "One-skillet cheesy salsa verde chicken and rice",
    "category": "Saucy, cozy, weeknight fusion",
    "description": "Chicken, rice, salsa verde, and melty cheese in one skillet.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Creamy, spicy, cozy",
      "Pantry sauce magic"
    ],
    "cuisineInfluence": [
      "Tex-Mex-ish"
    ],
    "format": "skillet",
    "timeMinutes": 32,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "salsa verde",
      "chicken and rice",
      "cheesy",
      "one skillet",
      "weeknight"
    ],
    "chefNote": "Taste salsa verde before serving. It should be bold enough to season the chicken and rice, not just sit on top.",
    "whyItWorks": "Chicken, rice, salsa verde, and melty cheese in one skillet.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "salsa verde",
        "canonicalName": "salsa verde",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "cheese",
        "canonicalName": "cheese",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 4,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "jalapeno",
        "canonicalName": "jalapeno",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "stock",
        "canonicalName": "stock",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 9,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chicken and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lime, cilantro, avocado after warming.",
    "recipe": {
      "activeTimeMinutes": 27,
      "totalTimeMinutes": 32,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start rice first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir salsa verde with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken",
          "body": "Cook chicken over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss the vegetables. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste chicken, rice, and salsa verde separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon rice into bowls, add chicken, tuck in the vegetables, then drizzle with salsa verde.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top One-skillet cheesy salsa verde chicken and rice with lime, cilantro, avocado and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "creamy-chipotle-chicken-tortilla-bake",
    "name": "Creamy chipotle chicken tortilla bake",
    "category": "Saucy, cozy, weeknight fusion",
    "description": "Layered tortillas, chipotle chicken, cheese, and creamy sauce.",
    "dinnerLanes": [
      "Creamy, spicy, cozy",
      "Tacos, wraps, and things in bread"
    ],
    "cuisineInfluence": [
      "Tex-Mex-ish"
    ],
    "format": "bake",
    "timeMinutes": 40,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "chipotle chicken",
      "tortilla bake",
      "creamy",
      "cheesy",
      "cozy"
    ],
    "chefNote": "Taste chipotle, Greek yogurt before serving. It should be bold enough to season the chicken and tortillas, not just sit on top.",
    "whyItWorks": "Layered tortillas, chipotle chicken, cheese, and creamy sauce.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "tortillas",
        "canonicalName": "tortilla",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "chipotle",
        "canonicalName": "chipotle",
        "quantity": null,
        "unit": null,
        "section": "Snacks",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Snacks",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "cheese",
        "canonicalName": "cheese",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 4,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 5,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "corn",
        "canonicalName": "corn",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "black beans",
        "canonicalName": "black bean",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 7,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "optional"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large skillet"
    ],
    "leftoversNote": "Store leftover chicken and tortillas separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cilantro after warming.",
    "recipe": {
      "activeTimeMinutes": 35,
      "totalTimeMinutes": 40,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice corn and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir chipotle, Greek yogurt with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken",
          "body": "Cook chicken in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm tortillas in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then corn, then chipotle, Greek yogurt. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add cilantro right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Creamy chipotle chicken tortilla bake with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "sweet-thai-basil-chicken-jasmine-rice",
    "name": "Sweet Thai basil chicken, jasmine rice",
    "category": "Saucy, cozy, weeknight fusion",
    "description": "Sweet, salty Thai basil chicken over jasmine rice.",
    "dinnerLanes": [
      "Rice bowl energy",
      "Pantry sauce magic"
    ],
    "cuisineInfluence": [
      "Thai-ish"
    ],
    "format": "rice bowl",
    "timeMinutes": 20,
    "effort": "Very easy",
    "servings": 4,
    "tags": [
      "thai basil",
      "chicken",
      "jasmine rice",
      "sweet soy",
      "fast"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the ground chicken and jasmine rice, not just sit on top.",
    "whyItWorks": "Sweet, salty Thai basil chicken over jasmine rice.",
    "ingredients": [
      {
        "rawName": "ground chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "jasmine rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "Thai basil",
        "canonicalName": "thai basil",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "bell peppers",
        "canonicalName": "bell pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "scallions",
        "canonicalName": "scallion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "fried egg",
        "canonicalName": "fried egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 6,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "optional"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "soy sauce",
        "canonicalName": "soy sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "fish sauce",
        "canonicalName": "fish sauce",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Protein",
        "sortOrder": 9,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "pantry"
      },
      {
        "rawName": "sugar",
        "canonicalName": "sugar",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover ground chicken and jasmine rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add Thai basil, scallions, cucumber after warming.",
    "recipe": {
      "activeTimeMinutes": 15,
      "totalTimeMinutes": 20,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Cook the base",
          "body": "Start jasmine rice first. Keep it warm and lightly seasoned while you cook the rest.",
          "timeMinutes": 12,
          "component": "base",
          "visualCue": "The grains should be tender and separate."
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir the sauce with citrus or vinegar, salt, and enough water to make it spoonable.",
          "timeMinutes": 4,
          "component": "sauce",
          "visualCue": "It should taste a little too bold by itself."
        },
        {
          "stepNumber": 3,
          "title": "Cook the ground chicken",
          "body": "Cook ground chicken over medium-high heat until browned in spots and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Look for browned edges and a juicy center."
        },
        {
          "stepNumber": 4,
          "title": "Prep the cold crunch",
          "body": "Slice or toss bell peppers. Keep raw crunchy items cold so they contrast with the hot base.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The vegetables should still snap."
        },
        {
          "stepNumber": 5,
          "title": "Check seasoning",
          "body": "Taste ground chicken, jasmine rice, and the sauce separately. Add salt, acid, or heat before assembling.",
          "component": "finish"
        },
        {
          "stepNumber": 6,
          "title": "Build the bowl",
          "body": "Spoon jasmine rice into bowls, add ground chicken, tuck in bell peppers, then drizzle with the sauce.",
          "component": "assembly"
        },
        {
          "stepNumber": 7,
          "title": "Finish last",
          "body": "Top Sweet Thai basil chicken with Thai basil, scallions, cucumber and any optional crunch right before serving.",
          "component": "finish",
          "visualCue": "The bowl should feel hot, cold, saucy, and crunchy in the same bite."
        }
      ]
    }
  },
  {
    "slug": "marry-me-chicken-orzo-or-crusty-bread",
    "name": "Marry me chicken, orzo or crusty bread",
    "category": "Saucy, cozy, weeknight fusion",
    "description": "Creamy tomato chicken with herbs, parmesan, and orzo or bread.",
    "dinnerLanes": [
      "Creamy, spicy, cozy",
      "Pasta but better"
    ],
    "cuisineInfluence": [
      "Italian-American"
    ],
    "format": "skillet",
    "timeMinutes": 32,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "marry me chicken",
      "creamy tomato",
      "orzo",
      "parmesan",
      "skillet"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the chicken and orzo, not just sit on top.",
    "whyItWorks": "Creamy tomato chicken with herbs, parmesan, and orzo or bread.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "orzo",
        "canonicalName": "orzo",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "sun-dried tomatoes",
        "canonicalName": "sundried tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "cream",
        "canonicalName": "cream",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 4,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "parmesan",
        "canonicalName": "parmesan",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 5,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "basil",
        "canonicalName": "basil",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "crusty bread",
        "canonicalName": "crusty bread",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 7,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "spinach",
        "canonicalName": "spinach",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large pot"
    ],
    "leftoversNote": "Store leftover chicken and orzo separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add basil after warming.",
    "recipe": {
      "activeTimeMinutes": 27,
      "totalTimeMinutes": 32,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice sun-dried tomatoes and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir the sauce with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken",
          "body": "Cook chicken in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm orzo in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then sun-dried tomatoes, then the sauce. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add basil right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Marry me chicken with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "crispy-buffalo-chicken-tacos-cilantro-lime-ranch",
    "name": "Crispy buffalo chicken tacos, cilantro lime ranch",
    "category": "Saucy, cozy, weeknight fusion",
    "description": "Crispy buffalo chicken tucked into tacos with cilantro lime ranch.",
    "dinnerLanes": [
      "Tacos, wraps, and things in bread",
      "Crispy, saucy, crunchy"
    ],
    "cuisineInfluence": [
      "American-ish"
    ],
    "format": "tacos",
    "timeMinutes": 28,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "buffalo chicken",
      "tacos",
      "cilantro lime ranch",
      "crispy",
      "saucy"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the chicken and tortillas, not just sit on top.",
    "whyItWorks": "Crispy buffalo chicken tucked into tacos with cilantro lime ranch.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "tortillas",
        "canonicalName": "tortilla",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "buffalo sauce",
        "canonicalName": "buffalo sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 3,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 4,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lime",
        "canonicalName": "lime",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "cabbage",
        "canonicalName": "cabbage",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "3 cups",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "blue cheese",
        "canonicalName": "blue cheese",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 8,
        "displayQuantity": "4 oz",
        "importance": "optional"
      },
      {
        "rawName": "avocado",
        "canonicalName": "avocado",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "1",
        "prep": "sliced",
        "importance": "optional"
      },
      {
        "rawName": "breadcrumbs",
        "canonicalName": "breadcrumb",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Pantry",
        "sortOrder": 10,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large skillet"
    ],
    "leftoversNote": "Store leftover chicken and tortillas separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cilantro, lime, avocado after warming.",
    "recipe": {
      "activeTimeMinutes": 23,
      "totalTimeMinutes": 28,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Prep the crunch",
          "body": "Slice cabbage and toss with lime or lemon, salt, and a little oil. Let it sit while the filling cooks.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "It should soften slightly but stay crunchy."
        },
        {
          "stepNumber": 2,
          "title": "Mix the sauce",
          "body": "Stir Greek yogurt with citrus, salt, and enough water to make it drizzle. Taste for heat.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should be creamy but loose enough to spoon."
        },
        {
          "stepNumber": 3,
          "title": "Cook the chicken",
          "body": "Cook chicken in a hot skillet until browned and seasoned all the way through. Let it sit between stirs so it picks up color.",
          "timeMinutes": 8,
          "component": "protein",
          "visualCue": "Edges should be browned, not pale."
        },
        {
          "stepNumber": 4,
          "title": "Warm the bread",
          "body": "Warm tortillas in a dry skillet, over a burner, or wrapped in foil until flexible.",
          "timeMinutes": 3,
          "component": "base",
          "visualCue": "It should bend without cracking."
        },
        {
          "stepNumber": 5,
          "title": "Build in order",
          "body": "Add the hot filling first, then cabbage, then Greek yogurt. Keep the wettest sauce off the bottom.",
          "component": "assembly"
        },
        {
          "stepNumber": 6,
          "title": "Finish sharp",
          "body": "Add cilantro, lime, avocado right before serving.",
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Serve hot",
          "body": "Serve Crispy buffalo chicken tacos with extra sauce on the side so the first bite stays structured.",
          "component": "finish"
        }
      ]
    }
  },
  {
    "slug": "mediterranean-meatballs-carrots-peas-warm-spices-rice",
    "name": "Mediterranean meatballs simmered with carrots, peas, and warm spices, rice",
    "category": "Mediterranean home cooking, Israeli, Iraqi, and Syrian roots",
    "description": "Tender meatballs simmered with carrots, peas, tomato, warm spices, and rice.",
    "dinnerLanes": [
      "Mediterranean home cooking",
      "Spiced rice and slow comfort"
    ],
    "cuisineInfluence": [
      "Israeli home cooking"
    ],
    "format": "simmered plate",
    "timeMinutes": 50,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "meatballs",
      "carrots",
      "peas",
      "warm spices",
      "rice"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the ground beef and rice, not just sit on top.",
    "whyItWorks": "Tender meatballs simmered with carrots, peas, tomato, warm spices, and rice.",
    "ingredients": [
      {
        "rawName": "ground beef",
        "canonicalName": "ground beef",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "carrots",
        "canonicalName": "carrot",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "4 medium",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "peas",
        "canonicalName": "pea",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 8,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "pita",
        "canonicalName": "pita",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 9,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "paprika",
        "canonicalName": "paprika",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 13,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover ground beef and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 50,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Season the ground beef",
          "body": "Coat ground beef with oil, salt, pepper, and the main spice profile from Mediterranean meatballs simmered with carrots. Let it sit while you prep the sides.",
          "timeMinutes": 5,
          "component": "protein",
          "visualCue": "The seasoning should cling, not pool."
        },
        {
          "stepNumber": 2,
          "title": "Make the cool sauce",
          "body": "Stir Greek yogurt with lemon, salt, and a small splash of water until creamy and spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should taste tangy enough to wake up the plate."
        },
        {
          "stepNumber": 3,
          "title": "Prepare the base",
          "body": "Cook or warm rice. Keep it covered so it stays soft.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 4,
          "title": "Cook the ground beef",
          "body": "Sear, grill, or roast ground beef until browned outside and cooked through.",
          "timeMinutes": 10,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Edges should be browned and juices should run clear for chicken."
        },
        {
          "stepNumber": 5,
          "title": "Make the salad",
          "body": "Toss tomatoes with parsley, olive oil, and salt.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "The salad should be bright and crisp."
        },
        {
          "stepNumber": 6,
          "title": "Rest before slicing",
          "body": "Rest ground beef for 5 minutes so the juices settle.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Build the plate",
          "body": "Serve Mediterranean meatballs simmered with carrots with rice, Greek yogurt, the salad, and any optional pickles or herbs.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "stuffed-chicken-thighs-mushroom-filling-red-wine-honey-sauce",
    "name": "Stuffed chicken thighs, mushroom filling, red wine honey sauce",
    "category": "Mediterranean home cooking, Israeli, Iraqi, and Syrian roots",
    "description": "Chicken thighs stuffed with mushrooms and finished with red wine honey sauce.",
    "dinnerLanes": [
      "Big platter dinner",
      "Spiced rice and slow comfort"
    ],
    "cuisineInfluence": [
      "Holiday-ish home cooking"
    ],
    "format": "roast",
    "timeMinutes": 65,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "stuffed chicken",
      "mushrooms",
      "red wine honey",
      "roast",
      "cozy"
    ],
    "chefNote": "Taste honey before serving. It should be bold enough to season the chicken thighs and the base, not just sit on top.",
    "whyItWorks": "Chicken thighs stuffed with mushrooms and finished with red wine honey sauce.",
    "ingredients": [
      {
        "rawName": "chicken thighs",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "mushrooms",
        "canonicalName": "mushroom",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "red wine",
        "canonicalName": "red wine",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 4,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "honey",
        "canonicalName": "honey",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 5,
        "displayQuantity": "1 package",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "rice pilaf",
        "canonicalName": "rice pilaf",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 7,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "optional"
      },
      {
        "rawName": "green beans",
        "canonicalName": "green bean",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      },
      {
        "rawName": "pepper",
        "canonicalName": "pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 11,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chicken thighs and the base separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 45,
      "totalTimeMinutes": 65,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss mushrooms, onion with oil, salt, pepper, and the main seasoning from Stuffed chicken thighs. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the chicken thighs",
          "body": "Pat chicken thighs dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until chicken thighs is cooked through and mushrooms, onion is browned at the edges.",
          "timeMinutes": 30,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir honey with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook the base so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with parsley and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Stuffed chicken thighs over or alongside the base, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "baked-eggplant-slices-tahini-parsley-lemon",
    "name": "Baked eggplant slices, tahini, parsley, lemon",
    "category": "Mediterranean home cooking, Israeli, Iraqi, and Syrian roots",
    "description": "Roasted eggplant slices with tahini, parsley, lemon, and olive oil.",
    "dinnerLanes": [
      "Mediterranean home cooking",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Israeli-ish"
    ],
    "format": "plate",
    "timeMinutes": 35,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "eggplant",
      "tahini",
      "parsley",
      "lemon",
      "vegetarian"
    ],
    "chefNote": "Taste tahini before serving. It should be bold enough to season the eggplant and the base, not just sit on top.",
    "whyItWorks": "Roasted eggplant slices with tahini, parsley, lemon, and olive oil.",
    "ingredients": [
      {
        "rawName": "eggplant",
        "canonicalName": "eggplant",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 1,
        "displayQuantity": "1 large",
        "prep": "sliced into 1/2-inch rounds",
        "importance": "core"
      },
      {
        "rawName": "tahini",
        "canonicalName": "tahini",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 2,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "pita",
        "canonicalName": "pita",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 5,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "feta",
        "canonicalName": "feta",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 6,
        "displayQuantity": "4 oz",
        "importance": "optional"
      },
      {
        "rawName": "chickpeas",
        "canonicalName": "chickpea",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "large skillet",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover eggplant and the base separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add parsley, lemon after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 35,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss eggplant with oil, salt, pepper, and the main seasoning from Baked eggplant slices. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the eggplant",
          "body": "Pat eggplant dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until eggplant is cooked through and eggplant is browned at the edges.",
          "timeMinutes": 27,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir tahini with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook the base so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with parsley, lemon and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Baked eggplant slices over or alongside the base, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "iraqi-tbeet-slow-cooked-chicken-and-spiced-rice",
    "name": "Iraqi tbeet, slow-cooked chicken and spiced rice",
    "category": "Mediterranean home cooking, Israeli, Iraqi, and Syrian roots",
    "description": "Slow-cooked chicken and deeply spiced rice with tomato and warm aromatics.",
    "dinnerLanes": [
      "Spiced rice and slow comfort"
    ],
    "cuisineInfluence": [
      "Iraqi"
    ],
    "format": "rice pot",
    "timeMinutes": 75,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "tbeet",
      "chicken",
      "spiced rice",
      "slow comfort",
      "iraqi"
    ],
    "chefNote": "Taste tomato paste before serving. It should be bold enough to season the chicken thighs and rice, not just sit on top.",
    "whyItWorks": "Slow-cooked chicken and deeply spiced rice with tomato and warm aromatics.",
    "ingredients": [
      {
        "rawName": "chicken thighs",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "tomato paste",
        "canonicalName": "tomato paste",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "core"
      },
      {
        "rawName": "hard-boiled eggs",
        "canonicalName": "hardboiled egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 6,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "optional"
      },
      {
        "rawName": "cardamom",
        "canonicalName": "cardamom",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 7,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "cinnamon",
        "canonicalName": "cinnamon",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover chicken thighs and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon, herbs, or pickles if you have them after warming.",
    "recipe": {
      "activeTimeMinutes": 55,
      "totalTimeMinutes": 75,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Soften aromatics",
          "body": "Warm oil in a heavy pot over medium heat. Cook onion, garlic, or the listed aromatics until soft and fragrant.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "They should look glossy, not scorched."
        },
        {
          "stepNumber": 2,
          "title": "Bloom the seasoning",
          "body": "Stir in tomato paste and the dry spices for 30 to 60 seconds so the fat takes on color.",
          "timeMinutes": 1,
          "component": "sauce",
          "visualCue": "The paste should darken slightly and smell toasted."
        },
        {
          "stepNumber": 3,
          "title": "Brown the chicken thighs",
          "body": "Add chicken thighs with a pinch of salt. Brown the outside before adding the simmering liquid.",
          "timeMinutes": 6,
          "component": "protein",
          "visualCue": "The outside should no longer look raw."
        },
        {
          "stepNumber": 4,
          "title": "Simmer gently",
          "body": "Add the liquid for the dish, then fold in onion. Cover partly and simmer until tender and saucy.",
          "timeMinutes": 35,
          "temperature": "325°F",
          "component": "vegetables",
          "visualCue": "The sauce should coat a spoon."
        },
        {
          "stepNumber": 5,
          "title": "Cook the base",
          "body": "Cook rice while the sauce simmers. Season it lightly.",
          "timeMinutes": 15,
          "component": "base"
        },
        {
          "stepNumber": 6,
          "title": "Balance the pot",
          "body": "Taste for salt, heat, and acid. Add a splash of water if the sauce gets too tight.",
          "component": "finish",
          "visualCue": "It should taste rounded first, then bright."
        },
        {
          "stepNumber": 7,
          "title": "Serve with contrast",
          "body": "Spoon Iraqi tbeet over rice. Finish with lemon, herbs, or pickles if you have them right before eating.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "syrian-lemony-beef-with-greens-rice",
    "name": "Syrian lemony beef with greens, rice",
    "category": "Mediterranean home cooking, Israeli, Iraqi, and Syrian roots",
    "description": "Tender beef with greens, lemon, garlic, and rice.",
    "dinnerLanes": [
      "Mediterranean home cooking",
      "Spiced rice and slow comfort"
    ],
    "cuisineInfluence": [
      "Syrian-ish"
    ],
    "format": "rice plate",
    "timeMinutes": 50,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "syrian",
      "lemony beef",
      "greens",
      "rice",
      "garlic"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the beef and rice, not just sit on top.",
    "whyItWorks": "Tender beef with greens, lemon, garlic, and rice.",
    "ingredients": [
      {
        "rawName": "beef",
        "canonicalName": "beef",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "greens",
        "canonicalName": "green",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 7,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "pita",
        "canonicalName": "pita",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 8,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "allspice",
        "canonicalName": "allspice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover beef and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add lemon after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 50,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Season the beef",
          "body": "Coat beef with oil, salt, pepper, and the main spice profile from Syrian lemony beef with greens. Let it sit while you prep the sides.",
          "timeMinutes": 5,
          "component": "protein",
          "visualCue": "The seasoning should cling, not pool."
        },
        {
          "stepNumber": 2,
          "title": "Make the cool sauce",
          "body": "Stir Greek yogurt with lemon, salt, and a small splash of water until creamy and spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should taste tangy enough to wake up the plate."
        },
        {
          "stepNumber": 3,
          "title": "Prepare the base",
          "body": "Cook or warm rice. Keep it covered so it stays soft.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 4,
          "title": "Cook the beef",
          "body": "Sear, grill, or roast beef until browned outside and cooked through.",
          "timeMinutes": 10,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Edges should be browned and juices should run clear for chicken."
        },
        {
          "stepNumber": 5,
          "title": "Make the salad",
          "body": "Toss greens, onion with lemon, olive oil, and salt.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "The salad should be bright and crisp."
        },
        {
          "stepNumber": 6,
          "title": "Rest before slicing",
          "body": "Rest beef for 5 minutes so the juices settle.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Build the plate",
          "body": "Serve Syrian lemony beef with greens with rice, Greek yogurt, the salad, and any optional pickles or herbs.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "roasted-salmon-herby-tahini-israeli-couscous",
    "name": "Roasted salmon, herby tahini, Israeli couscous",
    "category": "Mediterranean home cooking, Israeli, Iraqi, and Syrian roots",
    "description": "Roasted salmon with herby tahini and pearl couscous.",
    "dinnerLanes": [
      "Mediterranean home cooking",
      "Charred, citrusy, herby"
    ],
    "cuisineInfluence": [
      "Israeli-ish"
    ],
    "format": "plate",
    "timeMinutes": 30,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "salmon",
      "herby tahini",
      "israeli couscous",
      "roasted",
      "lemon"
    ],
    "chefNote": "Taste tahini before serving. It should be bold enough to season the salmon and Israeli couscous, not just sit on top.",
    "whyItWorks": "Roasted salmon with herby tahini and pearl couscous.",
    "ingredients": [
      {
        "rawName": "salmon",
        "canonicalName": "salmon",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/4 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "Israeli couscous",
        "canonicalName": "israeli couscou",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "8 oz",
        "importance": "core"
      },
      {
        "rawName": "tahini",
        "canonicalName": "tahini",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 3,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "optional"
      },
      {
        "rawName": "feta",
        "canonicalName": "feta",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 8,
        "displayQuantity": "4 oz",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover salmon and Israeli couscous separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add parsley, lemon, cucumber after warming.",
    "recipe": {
      "activeTimeMinutes": 25,
      "totalTimeMinutes": 30,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss the vegetables with oil, salt, pepper, and the main seasoning from Roasted salmon. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the salmon",
          "body": "Pat salmon dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until salmon is cooked through and the vegetables is browned at the edges.",
          "timeMinutes": 22,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir tahini with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook Israeli couscous so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with parsley, lemon, cucumber and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Roasted salmon over or alongside Israeli couscous, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "chicken-schnitzel-lemon-cucumber-tomato-salad",
    "name": "Chicken schnitzel, lemon, cucumber tomato salad",
    "category": "Mediterranean home cooking, Israeli, Iraqi, and Syrian roots",
    "description": "Crispy chicken schnitzel with lemon and cucumber tomato salad.",
    "dinnerLanes": [
      "Crispy, saucy, crunchy",
      "Charred, citrusy, herby",
      "Mediterranean home cooking"
    ],
    "cuisineInfluence": [
      "Israeli-ish"
    ],
    "format": "plate",
    "timeMinutes": 35,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "schnitzel",
      "crispy chicken",
      "lemon",
      "cucumber tomato",
      "comfort"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the chicken cutlets and the base, not just sit on top.",
    "whyItWorks": "Crispy chicken schnitzel with lemon and cucumber tomato salad.",
    "ingredients": [
      {
        "rawName": "chicken cutlets",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "breadcrumbs",
        "canonicalName": "breadcrumb",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 6,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "eggs",
        "canonicalName": "egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 7,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 8,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "capers",
        "canonicalName": "caper",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "flour",
        "canonicalName": "flour",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Pantry",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      },
      {
        "rawName": "pepper",
        "canonicalName": "pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 13,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "large skillet",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chicken cutlets and the base separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, parsley, lemon after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 35,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Set up the coating",
          "body": "Season chicken cutlets with salt and pepper. Put flour or starch, beaten egg, and breadcrumbs or the listed coating in separate shallow bowls.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "Each bowl should be seasoned so the crust tastes good on its own."
        },
        {
          "stepNumber": 2,
          "title": "Make the fresh side",
          "body": "Toss cucumber, tomatoes with citrus, salt, and a little oil. Keep it cold while the crispy piece cooks.",
          "timeMinutes": 5,
          "component": "vegetables",
          "visualCue": "The side should taste sharper than you think; it has to cut the fried crust."
        },
        {
          "stepNumber": 3,
          "title": "Coat firmly",
          "body": "Dredge chicken cutlets, pressing the coating on with your hands. Rest it for 5 minutes so the crust sticks.",
          "timeMinutes": 5,
          "component": "protein",
          "visualCue": "No wet patches should show through."
        },
        {
          "stepNumber": 4,
          "title": "Cook until crisp",
          "body": "Heat a thin layer of oil over medium-high heat. Fry chicken cutlets until deeply golden on both sides and cooked through.",
          "timeMinutes": 8,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "The crust should sound crisp when tapped."
        },
        {
          "stepNumber": 5,
          "title": "Drain and salt",
          "body": "Move chicken cutlets to a rack or paper towel and salt it immediately.",
          "timeMinutes": 2,
          "component": "finish",
          "visualCue": "Steam should escape instead of softening the crust."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Serve with hot the base. If there is sauce, keep it spoonable and hot.",
          "timeMinutes": 5,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Plate for crunch",
          "body": "Spoon Greek yogurt beside or under the crispy chicken cutlets, then finish with cucumber, parsley, lemon.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "hawaij-spiced-roast-chicken-rice-charred-onion",
    "name": "Hawaij-spiced roast chicken, rice, charred onion",
    "category": "Mediterranean home cooking, Israeli, Iraqi, and Syrian roots",
    "description": "Hawaij roast chicken with rice and sweet charred onion.",
    "dinnerLanes": [
      "Weeknight roast",
      "Spiced rice and slow comfort"
    ],
    "cuisineInfluence": [
      "Yemeni-ish"
    ],
    "format": "roast",
    "timeMinutes": 50,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "hawaij",
      "roast chicken",
      "rice",
      "charred onion",
      "spiced"
    ],
    "chefNote": "Taste yogurt before serving. It should be bold enough to season the chicken and rice, not just sit on top.",
    "whyItWorks": "Hawaij roast chicken with rice and sweet charred onion.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "cucumber salad",
        "canonicalName": "cucumber salad",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "optional"
      },
      {
        "rawName": "yogurt",
        "canonicalName": "yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 7,
        "displayQuantity": "1/3 cup",
        "importance": "optional"
      },
      {
        "rawName": "hawaij spice",
        "canonicalName": "hawaij spice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "rimmed sheet pan",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover chicken and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add parsley, lemon, cucumber salad after warming.",
    "recipe": {
      "activeTimeMinutes": 30,
      "totalTimeMinutes": 50,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Heat the oven",
          "body": "Heat oven to 425°F. Line a rimmed sheet pan or lightly oil it.",
          "temperature": "425°F",
          "component": "prep"
        },
        {
          "stepNumber": 2,
          "title": "Season the vegetables",
          "body": "Toss onion with oil, salt, pepper, and the main seasoning from Hawaij-spiced roast chicken. Spread in one layer.",
          "timeMinutes": 3,
          "component": "vegetables",
          "visualCue": "There should be space between pieces so they brown."
        },
        {
          "stepNumber": 3,
          "title": "Season the chicken",
          "body": "Pat chicken dry, season it well, and place it on the pan with the vegetables.",
          "timeMinutes": 3,
          "component": "protein",
          "visualCue": "The surface should look dry enough to roast, not wet."
        },
        {
          "stepNumber": 4,
          "title": "Roast hard",
          "body": "Roast until chicken is cooked through and onion is browned at the edges.",
          "timeMinutes": 30,
          "temperature": "425°F",
          "component": "protein",
          "visualCue": "Look for caramelized edges and clear chicken juices or flaking fish."
        },
        {
          "stepNumber": 5,
          "title": "Make the sauce",
          "body": "While the pan roasts, stir yogurt with citrus, salt, and a splash of water until spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "The sauce should ribbon off a spoon."
        },
        {
          "stepNumber": 6,
          "title": "Prepare the base",
          "body": "Warm or cook rice so it is ready when the tray comes out.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 7,
          "title": "Rest and finish",
          "body": "Rest the pan for 5 minutes, then finish with parsley, lemon, cucumber salad and any pan juices.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 8,
          "title": "Serve",
          "body": "Serve Hawaij-spiced roast chicken over or alongside rice, keeping sauce on top so the roasted edges stay crisp.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "shakshuka-with-feta-and-herbs-challah",
    "name": "Shakshuka with feta and herbs, challah",
    "category": "Mediterranean home cooking, Israeli, Iraqi, and Syrian roots",
    "description": "Tomato pepper shakshuka with eggs, feta, herbs, and challah.",
    "dinnerLanes": [
      "Mediterranean home cooking",
      "Pantry sauce magic",
      "Creamy, spicy, cozy"
    ],
    "cuisineInfluence": [
      "Israeli-ish"
    ],
    "format": "skillet",
    "timeMinutes": 28,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "shakshuka",
      "feta",
      "herbs",
      "challah",
      "eggs"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the eggs and challah, not just sit on top.",
    "whyItWorks": "Tomato pepper shakshuka with eggs, feta, herbs, and challah.",
    "ingredients": [
      {
        "rawName": "eggs",
        "canonicalName": "egg",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 1,
        "displayQuantity": "4",
        "prep": "large",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "bell peppers",
        "canonicalName": "bell pepper",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "feta",
        "canonicalName": "feta",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 4,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "challah",
        "canonicalName": "challah",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 6,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "core"
      },
      {
        "rawName": "cilantro",
        "canonicalName": "cilantro",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "hot sauce",
        "canonicalName": "hot sauce",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 8,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "paprika",
        "canonicalName": "paprika",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "large skillet",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover eggs and challah separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add parsley, cilantro after warming.",
    "recipe": {
      "activeTimeMinutes": 23,
      "totalTimeMinutes": 28,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Soften aromatics",
          "body": "Warm oil in a heavy pot over medium heat. Cook onion, garlic, or the listed aromatics until soft and fragrant.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "They should look glossy, not scorched."
        },
        {
          "stepNumber": 2,
          "title": "Bloom the seasoning",
          "body": "Stir in the sauce and the dry spices for 30 to 60 seconds so the fat takes on color.",
          "timeMinutes": 1,
          "component": "sauce",
          "visualCue": "The paste should darken slightly and smell toasted."
        },
        {
          "stepNumber": 3,
          "title": "Brown the eggs",
          "body": "Add eggs with a pinch of salt. Brown the outside before adding the simmering liquid.",
          "timeMinutes": 6,
          "component": "protein",
          "visualCue": "The outside should no longer look raw."
        },
        {
          "stepNumber": 4,
          "title": "Simmer gently",
          "body": "Add the liquid for the dish, then fold in tomatoes, bell peppers. Cover partly and simmer until tender and saucy.",
          "timeMinutes": 16,
          "component": "vegetables",
          "visualCue": "The sauce should coat a spoon."
        },
        {
          "stepNumber": 5,
          "title": "Cook the base",
          "body": "Cook challah while the sauce simmers. Season it lightly.",
          "timeMinutes": 15,
          "component": "base"
        },
        {
          "stepNumber": 6,
          "title": "Balance the pot",
          "body": "Taste for salt, heat, and acid. Add a splash of water if the sauce gets too tight.",
          "component": "finish",
          "visualCue": "It should taste rounded first, then bright."
        },
        {
          "stepNumber": 7,
          "title": "Serve with contrast",
          "body": "Spoon Shakshuka with feta and herbs over challah. Finish with parsley, cilantro right before eating.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "slow-braised-brisket-soft-onions-and-potatoes",
    "name": "Slow-braised brisket, soft onions and potatoes",
    "category": "Mediterranean home cooking, Israeli, Iraqi, and Syrian roots",
    "description": "Tender brisket with soft onions, potatoes, and deep pan sauce.",
    "dinnerLanes": [
      "Spiced rice and slow comfort",
      "Big platter dinner"
    ],
    "cuisineInfluence": [
      "Jewish home cooking"
    ],
    "format": "braise",
    "timeMinutes": 120,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "brisket",
      "braised",
      "onions",
      "potatoes",
      "comfort"
    ],
    "chefNote": "Taste tomato paste before serving. It should be bold enough to season the brisket and potatoes, not just sit on top.",
    "whyItWorks": "Tender brisket with soft onions, potatoes, and deep pan sauce.",
    "ingredients": [
      {
        "rawName": "brisket",
        "canonicalName": "brisket",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Other",
        "sortOrder": 1,
        "displayQuantity": "1 lb",
        "prep": "patted dry",
        "importance": "core"
      },
      {
        "rawName": "onions",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "potatoes",
        "canonicalName": "potato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "1 1/2 lb",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "carrots",
        "canonicalName": "carrot",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 4,
        "displayQuantity": "4 medium",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "garlic",
        "canonicalName": "garlic",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "2 cloves",
        "prep": "grated or minced",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "green beans",
        "canonicalName": "green bean",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "optional"
      },
      {
        "rawName": "stock",
        "canonicalName": "stock",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 8,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "tomato paste",
        "canonicalName": "tomato paste",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Produce",
        "sortOrder": 9,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "pantry"
      },
      {
        "rawName": "oil",
        "canonicalName": "oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "heavy pot or Dutch oven",
      "medium saucepan"
    ],
    "leftoversNote": "Store leftover brisket and potatoes separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 100,
      "totalTimeMinutes": 120,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Soften aromatics",
          "body": "Warm oil in a heavy pot over medium heat. Cook onion, garlic, or the listed aromatics until soft and fragrant.",
          "timeMinutes": 5,
          "component": "prep",
          "visualCue": "They should look glossy, not scorched."
        },
        {
          "stepNumber": 2,
          "title": "Bloom the seasoning",
          "body": "Stir in tomato paste and the dry spices for 30 to 60 seconds so the fat takes on color.",
          "timeMinutes": 1,
          "component": "sauce",
          "visualCue": "The paste should darken slightly and smell toasted."
        },
        {
          "stepNumber": 3,
          "title": "Brown the brisket",
          "body": "Add brisket with a pinch of salt. Brown the outside before adding the simmering liquid.",
          "timeMinutes": 6,
          "component": "protein",
          "visualCue": "The outside should no longer look raw."
        },
        {
          "stepNumber": 4,
          "title": "Simmer gently",
          "body": "Add the liquid for the dish, then fold in onions, potatoes, carrots. Cover partly and simmer until tender and saucy.",
          "timeMinutes": 35,
          "temperature": "325°F",
          "component": "vegetables",
          "visualCue": "The sauce should coat a spoon."
        },
        {
          "stepNumber": 5,
          "title": "Cook the base",
          "body": "Cook potatoes while the sauce simmers. Season it lightly.",
          "timeMinutes": 15,
          "component": "base"
        },
        {
          "stepNumber": 6,
          "title": "Balance the pot",
          "body": "Taste for salt, heat, and acid. Add a splash of water if the sauce gets too tight.",
          "component": "finish",
          "visualCue": "It should taste rounded first, then bright."
        },
        {
          "stepNumber": 7,
          "title": "Serve with contrast",
          "body": "Spoon Slow-braised brisket over potatoes. Finish with parsley right before eating.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "majadra-lentils-and-rice-crispy-onions-yogurt-salad",
    "name": "Majadra, lentils and rice with crispy onions, yogurt, salad",
    "category": "Mediterranean home cooking, Israeli, Iraqi, and Syrian roots",
    "description": "Lentils and rice with cumin, crispy onions, yogurt, and salad.",
    "dinnerLanes": [
      "Pantry sauce magic",
      "Spiced rice and slow comfort",
      "Mediterranean home cooking"
    ],
    "cuisineInfluence": [
      "Levantine-ish"
    ],
    "format": "rice plate",
    "timeMinutes": 45,
    "effort": "Medium",
    "servings": 4,
    "tags": [
      "majadra",
      "lentils",
      "rice",
      "crispy onions",
      "yogurt"
    ],
    "chefNote": "Taste Greek yogurt before serving. It should be bold enough to season the lentils and rice, not just sit on top.",
    "whyItWorks": "Lentils and rice with cumin, crispy onions, yogurt, and salad.",
    "ingredients": [
      {
        "rawName": "lentils",
        "canonicalName": "lentil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 1,
        "displayQuantity": "1 can",
        "prep": "drained and rinsed",
        "importance": "core"
      },
      {
        "rawName": "rice",
        "canonicalName": "rice",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 2,
        "displayQuantity": "1 1/2 cups",
        "prep": "rinsed",
        "importance": "core"
      },
      {
        "rawName": "onion",
        "canonicalName": "onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "Greek yogurt",
        "canonicalName": "greek yogurt",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 4,
        "displayQuantity": "1/3 cup",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 8,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "optional"
      },
      {
        "rawName": "pita",
        "canonicalName": "pita",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 9,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "cumin",
        "canonicalName": "cumin",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "medium saucepan",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover lentils and rice separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, lemon, parsley after warming.",
    "recipe": {
      "activeTimeMinutes": 25,
      "totalTimeMinutes": 45,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Season the lentils",
          "body": "Coat lentils with oil, salt, pepper, and the main spice profile from Majadra.",
          "timeMinutes": 5,
          "component": "protein"
        },
        {
          "stepNumber": 2,
          "title": "Make the sauce",
          "body": "Stir Greek yogurt with lemon, salt, and a small splash of water until creamy and spoonable.",
          "timeMinutes": 3,
          "component": "sauce"
        },
        {
          "stepNumber": 3,
          "title": "Prepare the base",
          "body": "Cook or warm rice. Keep it covered so it stays soft.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 4,
          "title": "Cook the lentils",
          "body": "Sear, grill, or roast lentils until browned outside and cooked through.",
          "timeMinutes": 10,
          "temperature": "medium-high heat",
          "component": "protein"
        },
        {
          "stepNumber": 5,
          "title": "Make the salad",
          "body": "Toss onion, cucumber, tomatoes with cucumber, lemon, parsley, olive oil, and salt.",
          "timeMinutes": 4,
          "component": "vegetables"
        },
        {
          "stepNumber": 6,
          "title": "Rest briefly",
          "body": "Rest lentils for 5 minutes so the texture settles.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Build the plate",
          "body": "Serve Majadra with rice, Greek yogurt, the salad, and any optional pickles or herbs.",
          "component": "assembly"
        }
      ]
    }
  },
  {
    "slug": "herby-chopped-salad-feta-sumac-lemon-grilled-chicken",
    "name": "Herby chopped salad, feta, sumac, lemon, alongside grilled chicken",
    "category": "Mediterranean home cooking, Israeli, Iraqi, and Syrian roots",
    "description": "A sharp chopped salad with feta and sumac next to grilled chicken.",
    "dinnerLanes": [
      "Charred, citrusy, herby",
      "Mediterranean home cooking"
    ],
    "cuisineInfluence": [
      "Israeli-ish"
    ],
    "format": "plate",
    "timeMinutes": 30,
    "effort": "Easy",
    "servings": 4,
    "tags": [
      "chopped salad",
      "feta",
      "sumac",
      "lemon",
      "grilled chicken"
    ],
    "chefNote": "Taste the sauce before serving. It should be bold enough to season the chicken and the base, not just sit on top.",
    "whyItWorks": "A sharp chopped salad with feta and sumac next to grilled chicken.",
    "ingredients": [
      {
        "rawName": "chicken",
        "canonicalName": "chicken",
        "quantity": null,
        "unit": null,
        "section": "Meat/Protein",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Protein",
        "sortOrder": 1,
        "displayQuantity": "1 1/2 lb",
        "prep": "trimmed and patted dry",
        "importance": "core"
      },
      {
        "rawName": "cucumber",
        "canonicalName": "cucumber",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 2,
        "displayQuantity": "1 large",
        "prep": "thinly sliced",
        "importance": "core"
      },
      {
        "rawName": "tomatoes",
        "canonicalName": "tomato",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 3,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "feta",
        "canonicalName": "feta",
        "quantity": null,
        "unit": null,
        "section": "Dairy",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Dairy",
        "sortOrder": 4,
        "displayQuantity": "4 oz",
        "importance": "core"
      },
      {
        "rawName": "parsley",
        "canonicalName": "parsley",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 5,
        "displayQuantity": "1/2 cup",
        "prep": "chopped",
        "importance": "core"
      },
      {
        "rawName": "lemon",
        "canonicalName": "lemon",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 6,
        "displayQuantity": "1",
        "prep": "juiced, plus wedges",
        "importance": "core"
      },
      {
        "rawName": "red onion",
        "canonicalName": "red onion",
        "quantity": null,
        "unit": null,
        "section": "Produce",
        "isOptional": false,
        "isPantry": false,
        "groceryCategory": "Produce",
        "sortOrder": 7,
        "displayQuantity": "2 cups",
        "prep": "cut into bite-size pieces",
        "importance": "core"
      },
      {
        "rawName": "pita",
        "canonicalName": "pita",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Pantry",
        "sortOrder": 8,
        "displayQuantity": "4 pieces",
        "prep": "warmed",
        "importance": "optional"
      },
      {
        "rawName": "olives",
        "canonicalName": "olive",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": true,
        "isPantry": false,
        "groceryCategory": "Condiments",
        "sortOrder": 9,
        "displayQuantity": "to taste",
        "importance": "optional"
      },
      {
        "rawName": "sumac",
        "canonicalName": "sumac",
        "quantity": null,
        "unit": null,
        "section": "Other",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Other",
        "sortOrder": 10,
        "displayQuantity": "as needed",
        "importance": "pantry"
      },
      {
        "rawName": "olive oil",
        "canonicalName": "olive oil",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 11,
        "displayQuantity": "2 tbsp",
        "importance": "pantry"
      },
      {
        "rawName": "salt",
        "canonicalName": "salt",
        "quantity": null,
        "unit": null,
        "section": "Pantry",
        "isOptional": false,
        "isPantry": true,
        "groceryCategory": "Condiments",
        "sortOrder": 12,
        "displayQuantity": "1 tsp",
        "prep": "plus more to taste",
        "importance": "pantry"
      }
    ],
    "equipment": [
      "chef knife",
      "cutting board",
      "mixing bowl"
    ],
    "leftoversNote": "Store leftover chicken and the base separately from fresh toppings for up to 3 days. Reheat the hot parts first, then add cucumber, parsley, lemon after warming.",
    "recipe": {
      "activeTimeMinutes": 25,
      "totalTimeMinutes": 30,
      "steps": [
        {
          "stepNumber": 1,
          "title": "Season the chicken",
          "body": "Coat chicken with oil, salt, pepper, and the main spice profile from Herby chopped salad. Let it sit while you prep the sides.",
          "timeMinutes": 5,
          "component": "protein",
          "visualCue": "The seasoning should cling, not pool."
        },
        {
          "stepNumber": 2,
          "title": "Make the cool sauce",
          "body": "Stir the sauce with lemon, salt, and a small splash of water until creamy and spoonable.",
          "timeMinutes": 3,
          "component": "sauce",
          "visualCue": "It should taste tangy enough to wake up the plate."
        },
        {
          "stepNumber": 3,
          "title": "Prepare the base",
          "body": "Cook or warm the base. Keep it covered so it stays soft.",
          "timeMinutes": 10,
          "component": "base"
        },
        {
          "stepNumber": 4,
          "title": "Cook the chicken",
          "body": "Sear, grill, or roast chicken until browned outside and cooked through.",
          "timeMinutes": 10,
          "temperature": "medium-high heat",
          "component": "protein",
          "visualCue": "Edges should be browned and juices should run clear for chicken."
        },
        {
          "stepNumber": 5,
          "title": "Make the salad",
          "body": "Toss cucumber, tomatoes with cucumber, parsley, lemon, olive oil, and salt.",
          "timeMinutes": 4,
          "component": "vegetables",
          "visualCue": "The salad should be bright and crisp."
        },
        {
          "stepNumber": 6,
          "title": "Rest before slicing",
          "body": "Rest chicken for 5 minutes so the juices settle.",
          "timeMinutes": 5,
          "component": "finish"
        },
        {
          "stepNumber": 7,
          "title": "Build the plate",
          "body": "Serve Herby chopped salad with the base, the sauce, the salad, and any optional pickles or herbs.",
          "component": "assembly"
        }
      ]
    }
  }
];
