const API__URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const getData = async (search) => {
  const response = await fetch(`${API__URL}${search}`);
  const data = await response.json();
  const dataArr = data.meals;
  if (dataArr === null) {
    return null;
  }

  const filter = dataArr.map((element) => {
    const transform = Object.entries(element);
    const strIngredients = [];
    const strMeasure = [];
    for (let index = 9; index <= 48; index++) {
      transform[index][1] === "" ||
      transform[index][1] === "" ||
      transform[index][1] === " "
        ? ""
        : index <= 28
        ? strIngredients.push(transform[index][1])
        : strMeasure.push(transform[index][1]);
    }
    const objData = { ...element, strIngredients, strMeasure };
    return objData;
  });
  
  return filter;
};

export default getData;
