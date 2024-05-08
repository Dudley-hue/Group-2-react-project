import shorts from "./assets/shorts.jpeg";
import shirts from "./assets/shirts.jpeg";
import Dress from "./assets/dress.jpeg";
import jackets from "./assets/jacket.jpeg";
import tshirts from "./assets/t-shirts.jpeg";

const data ={
    productItems:[
        {
            id: 1,
            name: "Shorts",
            price: 1000,
            image:shorts,
            category: "children"
        },
        {
            id: 2,
            name: "Shirts",
            price: 1200,
            image:shirts,
            category: "adults"
        },
        {
            id: 3,
            name: "Dress",
            price: 1500,
            image:Dress,
            category: "adults"
        },
        {
            id: 4,
            name: "Jackets",
            price: 2500,
            image:jackets,
            category: "children"
        },
        {
            id: 5,
            name: "T-Shirts",
            price: 999,
            image:tshirts,
            category: "children"
        }
    ]
}

export default data;