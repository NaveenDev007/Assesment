var productData = {
    id: "1",
    name: "Men Navy Blue Solid Sweatshirt",
    preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    photos: [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
    ],
    description: "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "United Colors of Benetton",
    price: 2599,
};

const container = document.createElement("sect");
container.classList.add("container");
document.body.appendChild(container);


const section1 = document.createElement("div");
section1.classList.add("sect-1");
container.appendChild(section1);

const previewImg = document.createElement("img");
previewImg.classList.add("preview-img");
previewImg.setAttribute("src", productData.preview);

const section2 = document.createElement("div");
section2.classList.add("sect-2");
container.appendChild(section2);

const prodDetails = document.createElement("div");
prodDetails.classList.add("prod-details");
section2.appendChild(prodDetails);

const h1 = document.createElement("h1");
h1.innerHTML = productData.name;
prodDetails.appendChild(h1);

const pBrand = document.createElement("h4");
pBrand.innerHTML = productData.brand;
prodDetails.appendChild(pBrand);

const pPrice = document.createElement("h3");
pPrice.innerHTML = `Price: Rs `;
prodDetails.appendChild(pPrice);

const price = document.createElement("span");
price.classList.add("price");
price.innerHTML = productData.price;
pPrice.appendChild(price);

const prodDescription = document.createElement("div");
prodDescription.classList.add("prod-description");
prodDetails.appendChild(prodDescription);

const descriptionHEading = document.createElement("h3");
descriptionHEading.innerHTML = `Description`;

const descriptionPara = document.createElement("p");
descriptionPara.classList.add("description-para");
descriptionPara.innerHTML = productData.description;

const previewImgSection = document.createElement("div");

const previewHeading = document.createElement("h3");
previewHeading.innerHTML = `Product Preview`;

const previewImages = document.createElement("div");
previewImages.classList.add("preview-images");

const addToCart = document.createElement("div");

const btn = document.createElement("button");
btn.classList.add("add-to-cart");
btn.innerHTML = "Add To Cart";


section1.appendChild(previewImg);
prodDescription.appendChild(descriptionPara);
prodDetails.appendChild(previewImgSection);
previewImgSection.appendChild(previewHeading);
previewImgSection.appendChild(previewImages);
section2.appendChild(addToCart);
addToCart.appendChild(btn);

for (let i = 0; i < 6; i++) {
    let cls = `img${i}`;
    const img = document.createElement("img");
    img.classList.add(cls);
    img.classList.add("pre-image");
    if (i == 0) {
        img.classList.add("active");
    }
    img.setAttribute("src", productData.photos[i]);
    previewImages.appendChild(img);
}

const ele = document.querySelectorAll(".pre-image");
ele.forEach((element) => {
    element.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        element.classList.add("active");
        previewImg.setAttribute("src", element.src);
    });
});
