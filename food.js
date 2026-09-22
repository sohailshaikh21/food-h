const foods = [
    { id: 1, name: "Margherita Pizza", category: "Pizza", price: 199, type: "Veg", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80", description: "Classic tomato, mozzarella and basil pizza." },
    { id: 2, name: "Pepperoni Pizza", category: "Pizza", price: 249, type: "Non-Veg", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80", description: "Loaded with pepperoni and melted cheese." },
    { id: 3, name: "Chicken Burger", category: "Burgers", price: 149, type: "Non-Veg", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80", description: "Juicy chicken patty with fresh vegetables." },
    { id: 4, name: "Classic Veg Burger", category: "Burgers", price: 129, type: "Veg", image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=700&q=80", description: "Crispy veggie patty with creamy sauce." },
    { id: 5, name: "Pasta Alfredo", category: "Pasta", price: 179, type: "Veg", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80", description: "Creamy white sauce pasta with herbs." },
    { id: 6, name: "Chicken Pasta", category: "Pasta", price: 199, type: "Non-Veg", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80", description: "Pasta with tender chicken and rich sauce." },
    { id: 7, name: "Paneer Tikka", category: "Main Course", price: 229, type: "Veg", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80", description: "Grilled paneer with Indian spices." },
    { id: 8, name: "Chicken Biryani", category: "Main Course", price: 249, type: "Non-Veg", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=700&q=80", description: "Aromatic basmati rice with juicy chicken." },
    { id: 9, name: "French Fries", category: "Starters", price: 99, type: "Veg", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80", description: "Crispy golden fries with seasoning." },
    { id: 10, name: "Garlic Bread", category: "Starters", price: 89, type: "Veg", image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=700&q=80", description: "Buttery garlic bread with herbs." },
    { id: 11, name: "Chocolate Lava Cake", category: "Desserts", price: 129, type: "Veg", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80", description: "Warm chocolate cake with molten center." },
    { id: 12, name: "Cheesecake", category: "Desserts", price: 149, type: "Veg", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80", description: "Creamy cheesecake with fresh topping." },
    { id: 13, name: "Cold Coffee", category: "Beverages", price: 99, type: "Veg", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80", description: "Chilled creamy coffee with ice." },
    { id: 14, name: "Fresh Lime Soda", category: "Beverages", price: 79, type: "Veg", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80", description: "Refreshing lime drink served chilled." }
];

function renderMenu(category = "All") {
    const grid = document.getElementById("menuGrid");
    if (!grid) return;
    const list = category === "All" ? foods : foods.filter(food => food.category === category);
    grid.innerHTML = list.map(food => `
        <div class="food-card">
            <div class="food-image"><img src="${food.image}" alt="${food.name}"><span class="food-badge ${food.type === "Veg" ? "veg" : "nonveg"}">● ${food.type}</span></div>
            <div class="food-content"><h3>${food.name}</h3><p class="food-description">${food.description}</p><div class="food-bottom"><span class="price">₹${food.price}</span><button class="add-btn" type="button" onclick="addToCart(${food.id})">Add to Cart</button></div></div>
        </div>
    `).join("");
}

function filterMenu(category, button) {
    document.querySelectorAll(".menu-tab").forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");
    renderMenu(category);
}

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => toast.style.display = "none", 3000);
}

function addToCart(id) {
    const food = foods.find(item => item.id === id);
    if (food) showToast(`${food.name} added to cart!`);
}

document.getElementById("reservationForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    this.reset();
    showToast("Table reserved successfully!");
});

document.getElementById("contactForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    this.reset();
    showToast("Message sent successfully!");
});

renderMenu();
