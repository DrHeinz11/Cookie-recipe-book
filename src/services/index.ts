import { ApiUrls } from "../types";

export const apiUrls: ApiUrls = {
  searchMealByName: () => "/search.php?s=Arrabiata",
  listAllMealsByFirstLetter: () => "/search.php?f=a",
  lookupMealById: () => "/lookup.php?i=52772",
  lookupRandomMeal: () => "random.php",
  listAllMealCategories: () => "/categories.php",
  listAllCategories: () => "/list.php?c=list",
  listAllAreas: () => "/list.php?a=list",
  listAllIngredients: () => "/list.php?i=list",
  filterByMainIngredient: () => "/filter.php?i=chicken_breast",
  filterByCategory: () => "/filter.php?c=Seafood",
  filterByArea: () => "/filter.php?a=Canadian",
};

// const getData = async (search: string) => {
//   const response = await fetch(search);
//   const data = await response.json();
//   const dataArr = data.meals;

//   if (dataArr === null) {
//     return null;
//   }

//   const filterData = dataArr.map((element: Meal) => {
//     const strIngredients: string[] = [];
//     const strMeasure: string[] = [];

//     for (let index = 1; index <= 20; index++) {
//       const ingredientKey = `strIngredient${index}`;
//       const measureKey = `strMeasure${index}`;

//       const ingredientValue = element[ingredientKey]?.trim();
//       const measureValue = element[measureKey]?.trim();

//       if (ingredientValue !== "") {
//         strIngredients.push(ingredientValue);
//       }

//       if (measureValue !== "") {
//         strMeasure.push(measureValue);
//       }
//     }

//     const filteredElement: Meal = {
//       ...element,
//       strIngredients,
//       strMeasure,
//     };

//     return filteredElement;
//   });

//   return filterData;
// };
