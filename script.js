

const content = [
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-1.jpg",
        heading: "Women's Boots Shoes Meca",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-2.jpg",
        heading: "Women's Minam Meaghan",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-3.jpg",
        heading: "Men's Taja Commissioner",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-4.jpg",
        heading: "Russ Men's Sneakers",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-5.jpg",
        heading: "Women's Boots Shoes Maca",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-6.jpg",
        heading: "Women's Minam Meaghan",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-7.jpg",
        heading: "Men's Taja Commissioner",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-8.jpg",
        heading: "Russ Men's Sneakers",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-9.jpg",
        heading: "Women's Boots Shoes Maca",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-10.jpg",
        heading: "Women's Minam Meaghan",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-11.jpg",
        heading: "Men's Taja Commissioner",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-12.jpg",
        heading: "Russ Men's Sneakers",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-13.jpg",
        heading: "Women's Boots Shoes Maca",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-14.jpg",
        heading: "Women's Minam Meaghan",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-15.jpg",
        heading: "Men's Taja Commissioner",
        price: "139$"

    },
    {
        src:"https://muhammad-hassam.github.io/Ecommerce-UI/images/item-16.jpg",
        heading: "Russ Men's Sneakers",
        price: "139$"

    }
    
]

const content1 = document.querySelector('.content')


const cards = content.map(card => {
    return `
    
                         <div class="card">
                            <img src=${card.src}  class="card-img-top w-100" alt="/">
                            <div class="card-body text-center">
                                <h5 class="card-title">${card.heading}</h5>
                                <p class="card-text fs-5">${card.price}</p>
                            </div>
                        </div>
                        
                        `
}).join('')

content1.innerHTML = cards
