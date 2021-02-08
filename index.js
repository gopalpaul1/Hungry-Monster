
//... Search For Food Names ...

const searchFoods = async() =>{

    const searchName = document.getElementById("searchArea").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`
    const res = await fetch(url);
    const data = await res.json();
     displayFoods(data.meals);

}

//... All Foods ...

const displayFoods = foods =>{

    const foodContainer = document.getElementById("foodContainer");
    foodContainer.innerHTML = '';

    foods.forEach(food => {

        const foodDiv = document.createElement("div");
        foodDiv.className = "foodContent";

        const foodInfo = `

            <div onclick="displayFood('${food.idMeal}')">
                <img class="image" src="${food.strMealThumb}">
                <h3 class="textAlign">${food.strMeal}</h3>
            </div>

        `
        foodDiv.innerHTML = foodInfo;
        foodContainer.appendChild(foodDiv)   
        
    });

}

const displayFood = async (idMeal) =>{

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    const res = await fetch(url)
    const data= await res.json();
     display(data.meals[0]);
     
}

//... Foods Details ...

const display = meals => {

    const foodDetail = document.getElementById("foodDetail");

        const foodsDiv = document.createElement("div");
        foodsDiv.className = "foodContent";

        const foodsInfo = `

            <div class="detailInfo">
                <img class="image" src="${meals.strMealThumb}">
                <h2 class="textAlign">${meals.strMeal}</h2>
                <div class="ingredient">
                    <h3>${meals.strArea}</h3>
                    <h3>Ingredient:</h3>
                    <p><i class="fa fa-bars" aria-hidden="true"></i> ${meals.strIngredient1}</p>
                    <p><i class="fa fa-bars" aria-hidden="true"></i> ${meals.strIngredient2}</p>
                    <p><i class="fa fa-bars" aria-hidden="true"></i> ${meals.strIngredient3}</p>
                    <p><i class="fa fa-bars" aria-hidden="true"></i> ${meals.strIngredient4}</p>
                    <p><i class="fa fa-bars" aria-hidden="true"></i> ${meals.strIngredient5}</p>
                </div>        
            </div>

        `
        foodsDiv.innerHTML = foodsInfo;
        foodDetail.appendChild(foodsDiv);

}
