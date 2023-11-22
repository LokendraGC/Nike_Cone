const wrapper = document.querySelector(".slideWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 2999,
    colors: [
      {
        code: "black",
        img: "./image/air.png",
      },
      {
        code: "darkblue",
        img: "./image/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 4999,
    colors: [
      {
        code: "lightgray",
        img: "./image/jordan.png",
      },
      {
        code: "green",
        img: "./image/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 3109,
    colors: [
      {
        code: "lightgray",
        img: "./image/blazer.png",
      },
      {
        code: "green",
        img: "./image/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 4109,
    colors: [
      {
        code: "black",
        img: "./image/crater.png",
      },
      {
        code: "lightgray",
        img: "./image/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 9999,
    colors: [
      {
        code: "gray",
        img: "./image/hippie.png",
      },
      {
        code: "black",
        img: "./image/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

console.log(currentProductColors)

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // change the choosen product
    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;

    currentProductPrice.textContent = "Rs." + choosenProduct.price;

    currentProductImg.src = choosenProduct.colors[0].img;

    // Assigning new colors

    currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor = choosenProduct.colors[index].code;
    })
  });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener('click',()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})

currentProductSize.forEach((size,index)=>{
    size.addEventListener('click',()=>{

        currentProductSize.forEach((size)=>{
            size.style.backgroundColor = 'white' 
            size.style.color = 'black'
        })
        size.style.backgroundColor = 'black' 
        size.style.color = 'white'
    })
})

const productButton = document.querySelector('.productBtn')
const payment = document.querySelector('.payment')
const closeBtn = document.querySelector('.close')

productButton.addEventListener('click',()=>{
  payment.style.display = 'flex'
})

closeBtn.addEventListener('click',()=>{
  payment.style.display = 'none'
})