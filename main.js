// инпуты
let productType = document.getElementById("type-select");
let productName = document.getElementById("product-name");
let productCount = document.getElementById("product-count");
let productsList = document.getElementsByClassName("products-list")[0];

// Кнопки
let addProductButton = document.getElementsByClassName("add-product")[0];
let clearListButton = document.getElementsByClassName("clear-list")[0];

// Массив с продуктами
let productArray = [];

addProductButton.addEventListener("click", addProduct);
clearListButton.addEventListener("click", clearProducts);

// функция для отрисовки  
function renderProducts() {
    productsList.innerHTML = "";

    for (let i = 0; i < productArray.length; i++) {
        const e = productArray[i];
        productsList.innerHTML += `
            <div class="product-item">
                ${i + 1}. Тип: ${e.productType}, Название: ${e.productName}, Количество: ${e.productCount}
            </div>
        `;
    }
}

// Функция для добавления продукта
function addProduct() {
    const productTypeValue = productType.value;
    const productNameValue = productName.value;
    const productCountValue = productCount.value;

    
    if (
        productTypeValue !== "" &&
        productNameValue !== "" &&
        productCountValue !== ""
    ) {
        let obj = {
            productType: productTypeValue,
            productName: productNameValue,
            productCount: productCountValue,
        };

        
        productArray.push(obj);

        
        renderProducts();

        console.log(productArray);
        productType.value = "";
        productName.value = "";
        productCount.value = "";
    } else {
        alert(" Заполните все поля!");
    }
}

// Функция для очистки списка
function clearProducts() {
    productArray = [];
    renderProducts();
}











