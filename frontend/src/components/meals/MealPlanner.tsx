import * as React from "react";

import { Box } from "@chakra-ui/react";
import MealList from "./MealList";
import OtherNav from "../navigation/OtherNav";
import { useState } from "react";

const MealPlanner = () => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const getMealData = () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  setCalories(3000);

  return (
    <Box>
      <OtherNav />
      <button onClick={getMealData}>Get Daily Meal Plan</button>
      {mealData && <MealList mealData={mealData} />}
    </Box>
  );
};

export default MealPlanner;
