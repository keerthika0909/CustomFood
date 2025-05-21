const nextBtn = document.getElementById("nextBtn");
const landing = document.getElementById("landing");
const mainApp = document.getElementById("mainApp");
const vegList = document.getElementById("vegList");
const nonVegList = document.getElementById("nonVegList");
const generateBtn = document.getElementById("generateBtn");
const customDish = document.getElementById("customDish");
const vegDetail = document.getElementById("vegDetail");
const diseaseFilter = document.getElementById("diseaseFilter");

const vegetables = [
  { name: "Tomato", image: "images/tomato.jpg", vitamins: "C, K", minerals: "Potassium", specialty: "Rich in antioxidants" },
  { name: "Onion", image: "images/onion.jpg", vitamins: "C, B6", minerals: "Manganese", specialty: "Supports heart health" },
  { name: "Carrot", image: "images/carrot.jpg", vitamins: "A, K1", minerals: "Potassium", specialty: "Boosts vision" },
  { name: "Potato", image: "images/potato.jpg", vitamins: "B6, C", minerals: "Potassium", specialty: "Energy provider" },
  { name: "Beans", image: "images/beans.jpg", vitamins: "A, C", minerals: "Iron, Magnesium", specialty: "High in protein and fiber" },
  { name: "Peas", image: "images/peas.jpg", vitamins: "A, K, C", minerals: "Phosphorus", specialty: "Good for eye and bone health" },
  { name: "Corn", image: "images/corn.jpg", vitamins: "B1, C", minerals: "Magnesium", specialty: "Supports digestion" },
  { name: "Broccoli", image: "images/broccoli.jpg", vitamins: "C, K", minerals: "Iron", specialty: "Supports heart health" },
  { name: "Spinach", image: "images/spinach.jpg", vitamins: "A, C, K", minerals: "Iron, Magnesium", specialty: "Good for blood health" },
  { name: "Bell Pepper", image: "images/bellpepper.jpg", vitamins: "C, B6", minerals: "Potassium", specialty: "Boosts immunity" },
  { name: "Cabbage", image: "images/cabbage.jpg", vitamins: "C, K", minerals: "Calcium", specialty: "Anti-inflammatory" },
  { name: "Cauliflower", image: "images/cauliflower.jpg", vitamins: "C, K", minerals: "Folate", specialty: "Boosts brain function" },
  { name: "Pumpkin", image: "images/pumpkin.jpg", vitamins: "A, C", minerals: "Potassium", specialty: "Good for eyesight and immunity" },
  { name: "Cucumber", image: "images/cucumber.jpg", vitamins: "K, C", minerals: "Magnesium", specialty: "Hydrating and cooling" },
  { name: "Zucchini", image: "images/zucchini.jpg", vitamins: "C, A", minerals: "Potassium", specialty: "Supports digestion" },
  { name: "Eggplant", image: "images/eggplant.jpg", vitamins: "B1, B6", minerals: "Manganese", specialty: "Promotes brain health" },
  { name: "Garlic", image: "images/garlic.jpg", vitamins: "C, B6", minerals: "Manganese", specialty: "Natural antibiotic" },
  { name: "Ginger", image: "images/ginger.jpg", vitamins: "B6, C", minerals: "Magnesium", specialty: "Anti-nausea and anti-inflammatory" },
  { name: "Radish", image: "images/radish.jpg", vitamins: "C, B6", minerals: "Calcium", specialty: "Aids digestion and detox" },
  { name: "Beetroot", image: "images/beetroot.jpg", vitamins: "C, B9", minerals: "Iron", specialty: "Boosts stamina and blood flow" },
  { name: "Sweet Potato", image: "images/sweetpotato.jpg", vitamins: "A, C", minerals: "Potassium", specialty: "Supports eye health and immunity" },
  { name: "Okra", image: "images/okra.jpg", vitamins: "C, K", minerals: "Magnesium", specialty: "Good for digestion" },
  { name: "Mushroom", image: "images/mushroom.jpg", vitamins: "B2, D", minerals: "Selenium", specialty: "Boosts immunity" },
  { name: "Lettuce", image: "images/lettuce.jpg", vitamins: "A, K", minerals: "Iron", specialty: "Good for hydration and digestion" },
  { name: "Celery", image: "images/celery.jpg", vitamins: "K, A", minerals: "Potassium", specialty: "Reduces inflammation" },
  { name: "Kale", image: "images/kale.jpg", vitamins: "A, C, K", minerals: "Calcium", specialty: "Supports bone and immune health" },
  { name: "Leek", image: "images/leek.jpg", vitamins: "K, A", minerals: "Iron", specialty: "Good for heart and digestion" },
  { name: "Turnip", image: "images/turnip.jpg", vitamins: "C, B6", minerals: "Calcium", specialty: "Supports healthy metabolism" },
  { name: "Artichoke", image: "images/artichoke.jpg", vitamins: "C, K", minerals: "Magnesium", specialty: "Supports liver health" },
  { name: "Asparagus", image: "images/asparagus.jpg", vitamins: "A, E, K", minerals: "Folate", specialty: "Helps detoxify the body" }
];

const nonVegItems = [
  { name: "Chicken", image: "images/chicken.jpg", vitamins: "B6, B12", minerals: "Phosphorus, Zinc", specialty: "High in lean protein" },
  { name: "Fish", image: "images/fish.jpg", vitamins: "D, B12", minerals: "Iodine, Selenium", specialty: "Rich in Omega-3 fatty acids" },
  { name: "Egg", image: "images/egg.jpg", vitamins: "A, B2, B12", minerals: "Iron, Phosphorus", specialty: "Complete source of protein" },
  { name: "Mutton", image: "images/mutton.jpg", vitamins: "B12, B3", minerals: "Zinc, Iron", specialty: "Rich in iron and vitamin B12" },
  { name: "Prawns", image: "images/prawns.jpg", vitamins: "B12, E", minerals: "Selenium, Iodine", specialty: "Low-calorie protein source" },
  { name: "Crab", image: "images/crab.jpg", vitamins: "B12, C", minerals: "Zinc, Copper", specialty: "Boosts immune system and bone health" }
];

const diseaseRestrictions = {
  thyroid: ["Cabbage", "Cauliflower", "Broccoli", "Spinach", "Kale"],
  diabetes: ["Potato", "Sweet Potato", "Beetroot", "Corn", "Pumpkin"],
  heart: ["Potato", "Egg", "Mutton"],
  chronic: ["Fried Items", "Mutton", "Crab"]
};

nextBtn.addEventListener("click", () => {
  landing.classList.add("hidden");
  mainApp.classList.remove("hidden");
  renderCheckboxes();
});

function renderCheckboxes() {
  vegList.innerHTML = "";
  nonVegList.innerHTML = "";

  vegetables.forEach(veg => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" value="${veg.name}" name="veg"> ${veg.name}`;
    label.addEventListener("click", () => displayVegDetail(veg));
    vegList.appendChild(label);
  });

  nonVegItems.forEach(item => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" value="${item.name}" name="nonveg"> ${item.name}`;
    label.addEventListener("click", () => displayVegDetail(item));
    nonVegList.appendChild(label);
  });
}

function displayVegDetail(item) {
  vegDetail.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <div class="veg-detail-content">
      <h3>${item.name}</h3>
      <p><strong>Specialty:</strong> ${item.specialty}</p>
      <p><strong>Vitamins:</strong> ${item.vitamins}</p>
      <p><strong>Minerals:</strong> ${item.minerals}</p>
    </div>
  `;
  vegDetail.classList.remove("hidden");
}

diseaseFilter.addEventListener("change", () => {
  const disease = diseaseFilter.value;
  const restrictedItems = diseaseRestrictions[disease] || [];

  const checkboxes = vegList.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(cb => {
    if (restrictedItems.includes(cb.value)) {
      cb.disabled = true;
      cb.checked = false;
      cb.parentElement.style.opacity = 0.5;
    } else {
      cb.disabled = false;
      cb.parentElement.style.opacity = 1;
    }
  });

  const nonvegCBs = nonVegList.querySelectorAll("input[type='checkbox']");
  nonvegCBs.forEach(cb => {
    if (restrictedItems.includes(cb.value)) {
      cb.disabled = true;
      cb.checked = false;
      cb.parentElement.style.opacity = 0.5;
    } else {
      cb.disabled = false;
      cb.parentElement.style.opacity = 1;
    }
  });
});

generateBtn.addEventListener("click", () => {
  const selectedVeg = Array.from(vegList.querySelectorAll("input:checked")).map(input => input.value);
  const selectedNonVeg = Array.from(nonVegList.querySelectorAll("input:checked")).map(input => input.value);
  const spice = document.getElementById("spiceFilter").value;

  const ingredients = [...selectedVeg, ...selectedNonVeg];

  if (ingredients.length === 0) {
    customDish.innerHTML = `<strong>No ingredients selected.</strong>`;
    customDish.classList.remove("hidden");
    return;
  }

  const recipeHTML = `
    <strong>Your customized dish includes:</strong>
    <ul>${ingredients.map(item => `<li>${item}</li>`).join("")}</ul>
    <h4>Simple Recipe:</h4>
    <p>1. Wash and chop all the selected vegetables and proteins.</p>
    <p>2. Heat some oil in a pan. Add garlic, onion, and sauté till golden.</p>
    <p>3. Add your selected vegetables and stir-fry for 5–10 mins.</p>
    ${selectedNonVeg.length > 0 ? `<p>4. Add ${selectedNonVeg.join(", ")} and cook thoroughly.</p>` : ""}
    <p>5. Add spices as per your taste (${spice || 'your preference'}).</p>
    <p>6. Add water if needed, cover, and cook until everything is tender.</p>
    <p>7. Serve hot. Enjoy your healthy customized meal!</p>
  `;

  customDish.innerHTML = recipeHTML;
  customDish.classList.remove("hidden");
});
