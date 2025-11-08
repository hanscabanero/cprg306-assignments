"use client";

import { useState, useEffect } from "react";

//Define API fetch
async function fetchMealIdeas(ingredient) 
{
  //If no ingredient is found, skip fetch
    if (!ingredient) return [];

    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    const data = await response.json();

  //The API returns an object with a `meals` array or NULL if nothing found
    return data.meals || [];
}


//Component definition and state variable 
export default function MealIdeas({ingredient}) 
{
const [meals, setMeals] = useState([]);
//Define load function 
async function loadMealIdeas() 
{
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData);
}

//useEffect hook
useEffect(() => 
{
    loadMealIdeas();
}, [ingredient]);

//Render component 
return (
    <div className="p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">
        Meal Ideas for: {ingredient || " "}
    </h2>
    {meals.length > 0 ? (
        <ul className="space-y-4">
        {meals.map((meal) => (
            <li
            key={meal.idMeal}
            className="border p-3 rounded-lg gap-4 bg-gray-50"
            >
            <p className="font-semibold">{meal.strMeal}</p>
            </li>
        ))}
        </ul>
    ) :
    (
        <p className="text-gray-500"> No meals found </p>
    )}
    </div>
);
}
