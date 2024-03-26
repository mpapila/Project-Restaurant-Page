function createMenuPageContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.style.height = 'auto';
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv')
    const title = document.createElement('h1');
    title.textContent = 'Menu';
    titleDiv.style.display = 'flex';
    titleDiv.style.justifyContent = 'center';
    titleDiv.style.alignItems = 'center';

    const menuItem = document.createElement("div");
    const menu = {
        meals: [
            {
                title: "Eggs with Sucuk",
                description: "Eggs with Sucuk (Sucuklu Yumurta): A flavorful Turkish dish combining succulent sucuk sausage and eggs, delivering a hearty and satisfying meal.",
                price: 12.99,
                image: "./eggwsucuk.jpeg" 
            },
            {
                title: "Menemen",
                description: "Menemen: A delicious Turkish dish made with tomatoes, peppers, and eggs, creating a flavorful and satisfying breakfast or brunch option.",
                price: 9.99,
                image: "./menemen.jpg" 
            },
            {
                title: "Iskender",
                description: "Iskender: A classic Turkish dish featuring tender slices of grilled meat atop a bed of bread, drizzled with tangy tomato sauce and creamy yogurt, delivering a savory and indulgent culinary experience.",
                price: 10.99,
                image: "./iskender.jpg" 
            }
        ]
    };
    titleDiv.append(title)
    content.appendChild(titleDiv);
    content.append(menuItem);
    for (let i = 0; i < menu.meals.length; i++) {
        const meal = menu.meals[i];

        const mealDiv = document.createElement('div');
        const title = document.createElement('h2');
        const description = document.createElement('p');
        const price = document.createElement('p');
        const image = document.createElement('img');
    

        title.textContent = meal.title;
        description.textContent = meal.description;
        price.textContent = `$${meal.price.toFixed(2)}`;
        image.src = meal.image;
        image.style.width = '200px'; 
    
        mealDiv.appendChild(title);
        mealDiv.appendChild(description);
        mealDiv.appendChild(price);
        mealDiv.appendChild(image);
    
        content.appendChild(mealDiv);
    }


}


export default createMenuPageContent;