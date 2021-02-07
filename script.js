fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then(res => res.json())
    .then(data => displayMeals(data.meals));

const displayMeals = meals => {
    const mealsDiv = document.getElementById("meals");
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = "meal";


        const mealDetails = `
        <img src="${meal.strMealThumb}">
       <h3>${meal.strMeal}</h3>
        <h6>${meal.strArea}</h6>
       <p>${meal.strCategory}</p>
       
       `

        mealDiv.innerHTML = mealDetails;
        mealsDiv.appendChild(mealDiv);

    });

}
