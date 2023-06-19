const dataFilter = (dataArr: any[]): any[] => {
  const filter = dataArr.map((element: any) => {
    const transform = Object.entries(element);
    const strIngredients: string[] = [];
    const strMeasure: string[] = [];
    const arrayFiltrado = [...transform.slice(0, 9), ...transform.slice(49)];
    const objetoRestante = Object.fromEntries(arrayFiltrado);

    for (let index = 9; index <= 48; index++) {
      const currentValue = transform[index][1];
      if (currentValue && currentValue.trim() !== "") {
        if (index <= 28) {
          strIngredients.push(currentValue);
        } else {
          strMeasure.push(currentValue);
        }
      }
    }

    const srtIngredientsList = strIngredients.map((strIngredient, index) => ({
      strIngredient,
      strMeasures: strMeasure[index],
    }));

    const objData = { ...objetoRestante, srtIngredientsList };
    return objData;
  });

  return filter;
};

export default dataFilter;
