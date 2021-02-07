//... Input Area ...
document.getElementById('button').addEventListener("click", function(){

    const input = document.getElementById("input").value;
    display(input);
    
})

//... Food Categories Section ...

const display = categories =>{

    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))

    const displayCategories = categories =>{

        const categoriesDiv = document.getElementById("categories");

        categories.forEach(categories => {

            const foodDiv = document.createElement('div');
            foodDiv.className = "foodCategory"
            const categoriesInfo = `
                <img onclick="displayFood('${categories.strCategoryThumb}')" class="image" src="${categories.strCategoryThumb}">
                <h3 onclick="displayFood('${categories.strCategory}')" class="textAlign">${categories.strCategory}</h3>
                
            `
            foodDiv.innerHTML = categoriesInfo;
            categoriesDiv.appendChild(foodDiv)
                
            });

    }

     displayFood = categories =>{
        const url = `https://www.themealdb.com/api/json/v1/1/categories.php/${categories}`
        fetch(url)
        .then(res => res.json())
        .then(data => displayDetail(data.categories[0]))
        
    }

    const displayDetail = categories =>{

        const foodsDiv = document.getElementById("foodsDiv");
        foodsDiv.innerHTML = `

            <img class="image" src="${categories.strCategoryThumb}">
            <h3>Ingredient</h3>
            <p>${categories.strCategoryDescription}</p>
        
        ` 
    }
}