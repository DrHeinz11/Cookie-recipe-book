import useFetchData from "../hook/useFetchData";
import { apiUrls } from "../services";
import { Meal } from "../types";

const Prueba = () => {
  const { data, isLoading, error } = useFetchData<{ meals: Meal[] }>(
    apiUrls.searchMealByName()
  );
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data &&
        data?.meals.map((meal) => <div key={meal.idMeal}>{meal.strMeal}</div>)}
    </div>
  );
};

export default Prueba;
