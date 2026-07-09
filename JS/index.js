var recipes = [
  {
    name: "Classic Cheeseburger",
    image: "./images/burger.jpg",
    description:
      "A juicy beef burger topped with melted cheddar cheese, fresh lettuce, tomatoes, onions, and pickles, served in a toasted sesame bun.",
    rating: 4.8,
    reviews: 325,
    prepTime: "15 min",

    cookTime: "10 min",

    totalTime: "25",

    servings: 2,

    difficulty: "Easy",

    country: "American",
    ingredients: [
      "2 burger buns",
      "300g ground beef",
      "2 cheddar cheese slices",
      "2 lettuce leaves",
      "2 tomato slices",
      "4 pickle slices",
      "2 onion rings",
      "2 tbsp mayonnaise",
      "1 tbsp ketchup",
      "1 tbsp mustard",
      "Salt",
      "Black pepper",
      "1 tbsp butter",
    ],

    instructions: [
      "Season the ground beef with salt and black pepper, then shape it into two patties.",
      "Heat a grill or skillet over medium-high heat.",
      "Cook the burger patties for about 4–5 minutes on each side.",
      "Place a slice of cheddar cheese on each patty during the last minute of cooking.",
      "Butter and lightly toast the burger buns.",
      "Spread mayonnaise, ketchup, and mustard on the buns.",
      "Layer lettuce, tomato slices, the cheesy beef patty, onion rings, and pickles.",
      "Cover with the top bun and serve immediately with fries.",
    ],

    nutrition: ["650 kcal", "38g", "35g", "42g", "5g", "1200mg"],
    tips: [
      "Don't press the burger while cooking to keep it juicy.",
      "Let the burger rest for 2 minutes before serving.",
      "Use freshly ground beef with about 20% fat for the best flavor.",
    ],
  },
  {
    name: "Creamy Tomato Soup",

    image: "./images/soup.jpg",

    description:
      "A rich and creamy tomato soup made with ripe tomatoes, fresh herbs, and a touch of cream. Perfect as a comforting appetizer or light meal.",

    rating: 4.7,

    reviews: 185,

    prepTime: "10 min",

    cookTime: "30 min",

    totalTime: "40",

    servings: 4,

    difficulty: "Easy",

    country: "Italian",

    ingredients: [
      "6 ripe tomatoes",
      "1 onion, chopped",
      "2 garlic cloves",
      "2 tbsp olive oil",
      "2 cups vegetable broth",
      "1/2 cup heavy cream",
      "Fresh basil leaves",
      "Salt",
      "Black pepper",
      "1 tsp paprika",
    ],

    instructions: [
      "Heat olive oil in a large pot.",
      "Cook the onion until soft, then add the garlic.",
      "Add chopped tomatoes and cook for 10 minutes.",
      "Pour in the vegetable broth and simmer for 15 minutes.",
      "Blend the soup until smooth.",
      "Stir in the heavy cream.",
      "Season with salt, pepper, and paprika.",
      "Garnish with basil leaves and serve warm.",
    ],

    nutrition: ["220 kcal", "5g", "18g", "14g", "4g", "520mg"],

    tips: [
      "Roast the tomatoes before cooking for a deeper flavor.",
      "Serve with toasted garlic bread.",
      "Add grated Parmesan cheese for extra richness.",
    ],
  },
  {
    name: "Chicken Fried Rice",

    image: "./images/rice.jpg",

    description:
      "A delicious Asian-style fried rice made with tender chicken, vegetables, eggs, and soy sauce.",

    rating: 4.8,

    reviews: 276,

    prepTime: "15 min",

    cookTime: "20 min",

    totalTime: "35",

    servings: 4,

    difficulty: "Easy",

    country: "Chinese",

    ingredients: [
      "3 cups cooked rice",
      "250g chicken breast",
      "2 eggs",
      "1 carrot",
      "1/2 cup peas",
      "2 green onions",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "2 garlic cloves",
      "Salt",
      "Black pepper",
    ],

    instructions: [
      "Cook the chicken and cut into small cubes.",
      "Scramble the eggs and set aside.",
      "Sauté garlic and vegetables.",
      "Add the cooked rice and stir well.",
      "Mix in the chicken and eggs.",
      "Pour soy sauce and sesame oil.",
      "Cook for another 5 minutes.",
      "Serve hot.",
    ],

    nutrition: ["480 kcal", "30g", "45g", "18g", "4g", "900mg"],

    tips: [
      "Use cold rice for the best texture.",
      "Cook on high heat.",
      "Add chili sauce for extra spice.",
    ],
  },
  {
    name: "Crispy Samosa",

    image: "./images/sambossaa.jpg",

    description:
      "Golden crispy samosas stuffed with spicy potatoes and peas, served with mint or tamarind chutney.",

    rating: 4.9,

    reviews: 312,

    prepTime: "25 min",

    cookTime: "20 min",

    totalTime: "45",

    servings: 6,

    difficulty: "Medium",

    country: "Indian",

    ingredients: [
      "12 samosa wrappers",
      "3 potatoes",
      "1/2 cup peas",
      "1 onion",
      "1 tsp cumin",
      "1 tsp curry powder",
      "Salt",
      "Black pepper",
      "Oil for frying",
    ],

    instructions: [
      "Boil and mash the potatoes.",
      "Cook onions with spices.",
      "Mix potatoes and peas.",
      "Fill each wrapper.",
      "Seal with water.",
      "Deep fry until golden.",
      "Drain excess oil.",
      "Serve with chutney.",
    ],

    nutrition: ["320 kcal", "6g", "34g", "17g", "5g", "430mg"],

    tips: [
      "Seal the edges tightly.",
      "Don't overcrowd the pan.",
      "Serve immediately.",
    ],
  },
  {
    name: "Chicken Chow Mein",

    image: "./images/spa.jpg",

    description:
      "Classic stir-fried noodles tossed with chicken, vegetables, and savory soy sauce.",

    rating: 4.8,

    reviews: 241,

    prepTime: "15 min",

    cookTime: "15 min",

    totalTime: "30",

    servings: 3,

    difficulty: "Easy",

    country: "Chinese",

    ingredients: [
      "250g noodles",
      "200g chicken",
      "1 carrot",
      "1 bell pepper",
      "1 onion",
      "2 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "2 garlic cloves",
      "1 tbsp sesame oil",
    ],

    instructions: [
      "Cook the noodles.",
      "Cook the chicken.",
      "Stir-fry the vegetables.",
      "Add noodles.",
      "Pour sauces.",
      "Mix everything together.",
      "Cook for 3 minutes.",
      "Serve hot.",
    ],

    nutrition: ["510 kcal", "27g", "55g", "20g", "4g", "980mg"],

    tips: [
      "Don't overcook the noodles.",
      "Cook over high heat.",
      "Use fresh vegetables.",
    ],
  },
  {
    name: "Margherita Pizza",

    image: "./images/margritaa.jpg",

    description:
      "A traditional Italian pizza topped with mozzarella cheese, tomato sauce, and fresh basil leaves.",

    rating: 4.9,

    reviews: 458,

    prepTime: "30 min",

    cookTime: "15 min",

    totalTime: "45",

    servings: 4,

    difficulty: "Easy",

    country: "Italian",

    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "250g mozzarella",
      "Fresh basil",
      "Olive oil",
      "Salt",
    ],

    instructions: [
      "Preheat the oven.",
      "Roll out the dough.",
      "Spread tomato sauce.",
      "Add mozzarella.",
      "Bake for 12-15 minutes.",
      "Top with basil.",
      "Drizzle olive oil.",
      "Serve hot.",
    ],

    nutrition: ["580 kcal", "24g", "60g", "24g", "3g", "850mg"],

    tips: [
      "Bake on a pizza stone.",
      "Use fresh mozzarella.",
      "Add basil after baking.",
    ],
  },
  {
    name: "Shrimp Pad Thai",

    image: "./images/shrimp.jpg",

    description:
      "A flavorful Thai noodle dish with shrimp, bean sprouts, peanuts, eggs, and a tangy tamarind sauce.",

    rating: 4.8,

    reviews: 194,

    prepTime: "20 min",

    cookTime: "15 min",

    totalTime: "35",

    servings: 2,

    difficulty: "Medium",

    country: "Thai",

    ingredients: [
      "200g rice noodles",
      "200g shrimp",
      "2 eggs",
      "Bean sprouts",
      "Green onions",
      "Crushed peanuts",
      "Pad Thai sauce",
      "Garlic",
      "Lime",
    ],

    instructions: [
      "Soak the noodles.",
      "Cook the shrimp.",
      "Scramble the eggs.",
      "Add noodles and sauce.",
      "Mix shrimp and vegetables.",
      "Top with peanuts.",
      "Serve with lime.",
    ],

    nutrition: ["540 kcal", "29g", "48g", "24g", "3g", "890mg"],

    tips: [
      "Don't overcook the shrimp.",
      "Serve with fresh lime.",
      "Add chili flakes if desired.",
    ],
  },
  {
    name: "Veggie Tacos",

    image: "./images/homoos.jpg",

    description:
      "Soft tortillas filled with roasted vegetables, avocado, chickpeas, and fresh salsa.",

    rating: 4.7,

    reviews: 163,

    prepTime: "15 min",

    cookTime: "15 min",

    totalTime: "30",

    servings: 3,

    difficulty: "Easy",

    country: "Mexican",

    ingredients: [
      "6 tortillas",
      "1 avocado",
      "1 cup chickpeas",
      "Lettuce",
      "Tomatoes",
      "Red onion",
      "Cilantro",
      "Lime",
      "Salsa",
    ],

    instructions: [
      "Warm the tortillas.",
      "Roast the chickpeas.",
      "Slice vegetables.",
      "Fill tortillas.",
      "Add salsa.",
      "Squeeze lime.",
      "Serve immediately.",
    ],

    nutrition: ["410 kcal", "14g", "46g", "19g", "8g", "620mg"],

    tips: [
      "Warm tortillas before serving.",
      "Use fresh avocado.",
      "Add hot sauce if desired.",
    ],
  },
  {
    name: "Grilled Steak",

    image: "./images/steak.jpg",

    description:
      "Perfectly grilled juicy beef steak seasoned with herbs and black pepper, served with your favorite side dish.",

    rating: 4.9,

    reviews: 382,

    prepTime: "10 min",

    cookTime: "15 min",

    totalTime: "25",

    servings: 2,

    difficulty: "Medium",

    country: "American",

    ingredients: [
      "2 beef steaks",
      "2 tbsp butter",
      "2 garlic cloves",
      "Fresh rosemary",
      "Salt",
      "Black pepper",
      "Olive oil",
    ],

    instructions: [
      "Season the steaks.",
      "Heat the grill.",
      "Cook each side for 4-5 minutes.",
      "Add butter, garlic, and rosemary.",
      "Baste the steaks.",
      "Rest for 5 minutes.",
      "Slice and serve.",
    ],

    nutrition: ["620 kcal", "48g", "2g", "46g", "0g", "710mg"],

    tips: [
      "Let the steak reach room temperature before cooking.",
      "Rest the meat before slicing.",
      "Slice against the grain for maximum tenderness.",
    ],
  },
  {
    name: "Chicken Tikka Masala",

    image: "./images/masalla.avif",

    description:
      "Tender grilled chicken pieces simmered in a rich, creamy tomato sauce infused with authentic Indian spices. Best served with warm naan bread or basmati rice.",

    rating: 4.8,

    reviews: 318,

    prepTime: "20 min",

    cookTime: "30 min",

    totalTime: "50",

    servings: 4,

    difficulty: "Medium",

    country: "Indian",

    ingredients: [
      "500g boneless chicken breast",
      "1 cup plain yogurt",
      "2 tbsp tikka masala paste",
      "2 tbsp butter",
      "1 onion, finely chopped",
      "3 garlic cloves, minced",
      "1 tbsp grated ginger",
      "2 cups tomato puree",
      "1/2 cup heavy cream",
      "1 tsp garam masala",
      "1 tsp cumin",
      "1 tsp paprika",
      "1/2 tsp turmeric",
      "Salt",
      "Black pepper",
      "Fresh cilantro",
      "4 naan breads",
    ],

    instructions: [
      "Marinate the chicken with yogurt and tikka masala paste for at least 30 minutes.",
      "Cook the chicken in a hot pan until lightly charred, then set aside.",
      "Melt butter and sauté the onion, garlic, and ginger until soft.",
      "Add tomato puree, cumin, paprika, turmeric, and garam masala.",
      "Simmer the sauce for 10 minutes.",
      "Stir in the heavy cream until smooth.",
      "Return the chicken to the sauce and cook for 10–15 minutes.",
      "Garnish with fresh cilantro and serve with warm naan or basmati rice.",
    ],

    nutrition: ["590 kcal", "40g", "28g", "34g", "3g", "810mg"],

    tips: [
      "Marinate the chicken overnight for maximum flavor.",
      "Use fresh cream for a silky sauce.",
      "Serve with basmati rice or warm garlic naan.",
      "Adjust the chili level to your preference.",
    ],
  },
];

const nutritionInfo = [
  {
    key: "calories",
    title: "Calories",
    icon: "fa-solid fa-fire",
    color: "--fire-color",
    bg: "--fire-bg",
  },
  {
    key: "protein",
    title: "Protein",
    icon: "fa-solid fa-dumbbell",
    color: "--dummb-bg",
    bg: "--bar-bg",
  },
  {
    key: "carbs",
    title: "Carbohydrates",
    icon: "fa-solid fa-wheat-awn",
    color: "--wheat-color",
    bg: "--carb-bg",
  },
  {
    key: "fat",
    title: "Fat",
    icon: "fa-solid fa-droplet",
    color: "--fat-color",
    bg: "--fat-bg",
  },
  {
    key: "fiber",
    title: "Fiber",
    icon: "fa-solid fa-seedling",
    color: "--fiber-color",
    bg: "--fiber-bg",
  },
  {
    key: "sodium",
    title: "Sodium",
    icon: "fa-solid fa-cube",
    color: " --sod-color",
    bg: "--sod-bg",
  },
];

var currentIndex = Math.floor(Math.random() * recipes.length);
var currentTap = "ingredients";
change(currentIndex);
function nextRecipie() {
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * recipes.length);
  } while (randomIndex === currentIndex);
  currentIndex = randomIndex;
  change(currentIndex);
}

function change(currentIndex) {
  document.getElementById("name").innerHTML = `<div class="name">
                <h2 class="fw-bold mb-1" id="name">${recipes[currentIndex].name}</h2>
                <p class="main-p-color" id="desc">
                  ${recipes[currentIndex].description}
                </p>
              </div>`;

  document.getElementById("food-img").innerHTML = `
  <div
              class="review position-absolute bg-white pt-2 pb-2 pe-3 ps-3 rounded-5"
              id="review"
            >
              <span class=""
                ><i
                  class="fa-solid fa-star"
                  style="color: rgb(255, 212, 59)"
                ></i
              ></span>
              <span class="rate fw-medium =" id="rate">${recipes[currentIndex].rating}</span>
              <span
                class="review-num main-p-color fw-normal small-span"
                id="review-num"
                >(${recipes[currentIndex].reviews} reviews)</span
              >
            </div>
            <img src="${recipes[currentIndex].image}" class="w-100 h-100" alt="" />
            <div
              class="recipe-time d-flex column-gap-2 justify-content-evenly bg-white position-absolute rounded-4"
            >
              <div
                class="prep-time d-flex flex-column justify-content-center align-items-center"
              >
                <span
                  ><i class="fa-solid fa-clock" style="color: #ff6900"></i
                ></span>
                <span class="main-p-color small-span">Prep Time</span>
                <span class="fw-bold" id="prep-time">${recipes[currentIndex].prepTime}</span>
              </div>
              <div
                class="cook-time d-flex flex-column justify-content-center align-items-center"
              >
                <span
                  ><i class="fa-solid fa-fire-burner" style="color: #fb2c36"></i
                ></span>
                <span class="main-p-color small-span">Cook Time</span>
                <span class="fw-bold" id="cook-time">${recipes[currentIndex].cookTime}</span>
              </div>
              <div
                class="serving d-flex flex-column justify-content-center align-items-center"
              >
                <span
                  ><i class="fa-solid fa-users" style="color: #2b7fff"></i
                ></span>
                <span class="main-p-color small-span">Servings</span>
                <span class="fw-bold" id="people-num">${recipes[currentIndex].servings} people</span>
              </div>
            </div>
  
  `;
  document.getElementById("difficulty").innerHTML = `<span
                class="pt-1 pb-1 easy-color easy-bg tiny-span fw-medium rounded-5"
                >${recipes[currentIndex].difficulty}</span
              >
              <span
                class="pb-1 pt-1 type-bg type-color tiny-span fw-medium rounded-5"
                >${recipes[currentIndex].country}</span
              >`;
  if (Number(recipes[currentIndex].totalTime) >= 45) {
    document.getElementById("alert").innerHTML = `
  <div
                class="alert-content d-flex column-gap-2 align-items-center main-bg rounded-3 p-3 mt-3 mb-3"
              >
                <span class="fw-bold fs-5"
                  ><i
                    class="fa-solid fa-triangle-exclamation"
                    style="color: #e7000b"
                  ></i
                ></span>
                <div class="alert-text d-flex flex-column p-0">
                  <span class="red-800 fw-semibold"
                    >Extended Preparation Time</span
                  >
                  <span class="red-600 small-span"
                    >This recipe requires more than 45 minutes to prepare. Plan
                    accordingly!</span
                  >
                </div>
              </div>
    `;
  } else {
    document.getElementById("alert").innerHTML = " ";
  }

  if (currentTap == "ingredients") {
    showIngredients();
  } else if (currentTap == "instructions") {
    showInstructions();
  } else if (currentTap == "nutrition") {
    showNutrition();
  } else {
    showTips();
  }
}
function showIngredients() {
  document.getElementById("ingred").className = "active";

  document.getElementById("inst").className = "normal";

  document.getElementById("nutr").className = "normal";

  document.getElementById("tips").className = "normal";
  console.log(currentIndex);
  document.getElementById("steps").innerHTML = `<div
                class="ingredients main-bg p-4 rounded-4 d-flex flex-column row-gap-3"
              id="ing">  </div>`;
  for (var i = 0; i < recipes[currentIndex].ingredients.length; i++) {
    document.getElementById("ing").innerHTML += `<div
                  class="ingredients-step d-flex column-gap-2 align-items-center"
                >
                  <span
                    class="main-light-orange-bg rounded-5 order d-flex justify-content-center align-items-center tiny-span fw-bold"
                    >${i + 1}</span
                  >
                  <span class="main-p-color">${recipes[currentIndex].ingredients[i]}</span>
                </div>`;
  }
  currentTap = "ingredients";
}

function showInstructions() {
  document.getElementById("ingred").className = "normal";

  document.getElementById("inst").className = "active";

  document.getElementById("nutr").className = "normal";

  document.getElementById("tips").className = "normal";
  document.getElementById("steps").innerHTML =
    `<div class="instructions d-flex flex-column row-gap-4" id="instructions" ></div>`;
  for (var i = 0; i < recipes[currentIndex].instructions.length; i++) {
    document.getElementById("instructions").innerHTML += `<div
                  class="instructions-step d-flex column-gap-2 align-items-center"
                >
                  <span
                    class="main-light-orange-bg rounded-4 order d-flex justify-content-center align-items-center fs-5 fw-bold"
                    >${i + 1}</span
                  >
                  <span class="main-p-color">${recipes[currentIndex].instructions[i]}</span>
                </div>
               
                `;
  }
  currentTap = "instructions";
}
function showNutrition() {
  document.getElementById("ingred").className = "normal";

  document.getElementById("inst").className = "normal";

  document.getElementById("nutr").className = "active";

  document.getElementById("tips").className = "normal";
  document.getElementById("steps").innerHTML = `<div class="nutrition">
                <div class="row g-3" id="n-row"></div>
              </div>`;
  for (var i = 0; i < recipes[currentIndex].nutrition.length; i++) {
    document.getElementById("n-row").innerHTML += `<div class="col-12 col-md-6">
                    <div
                      class="col-info cols-color d-flex justify-content-between align-items-center p-4 rounded-4"
                    >
                      <div
                        class="nutrition-type d-felx justify-content-between align-items-center"
                      >
                        <span class=" rounded-3 fw-bold "style="background-color:var(${nutritionInfo[i].bg})"
                          ><i
                            class="${nutritionInfo[i].icon}"
                            style="color: var(${nutritionInfo[i].color})"
                          ></i
                        ></span>
                        <span class="main-p-color fw-medium">${nutritionInfo[i].title}</span>
                      </div>
                      <div class="nutrition-num fw-bold fs-5">${recipes[currentIndex].nutrition[i]}</div>
                    </div>
                  </div>`;
  }
  currentTap = "nutrition";
}
function showTips() {
  document.getElementById("ingred").className = "normal";

  document.getElementById("inst").className = "normal";

  document.getElementById("nutr").className = "normal";

  document.getElementById("tips").className = "active";
  document.getElementById("steps").innerHTML =
    `<div class="Tips d-flex flex-column row-gap-3" id="tips-step">
               
              </div> `;
  for (var i = 0; i < recipes[currentIndex].tips.length; i++) {
    document.getElementById("tips-step").innerHTML += ` <div
                  class="Tips-step rounded-4 d-flex column-gap-2 align-items-center main-bg"
                >
                  <span
                    class="main-light-orange-bg rounded-5 order d-flex justify-content-center align-items-center tiny-span fw-bold mt-2"
                    ><i
                      class="fa-solid fa-check"
                      style="color: rgb(255, 255, 255)"
                    ></i
                  ></span>
                  <span class="main-p-color"> ${recipes[currentIndex].tips[i]}</span>
                </div>`;
  }
  currentTap = "showTips";
}
