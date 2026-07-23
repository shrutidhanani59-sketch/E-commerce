// const myproduct = {
//     moblie : [
//         {
//             company : "Apple",
//              model :" Apple 16", 
//             img : "imges/phone1.webp",
//             price : 70000,
//         description : "Apple 16 , 128GB ,256GB , 512GB Storage.  6.1-inch  , Black , white , pink , Teal color is available. " 
//         },

//         {
//             company : "Samsung",
//              model :" Samsung 13", 
//             img : "imges/phone2.png",
//             price : 70000,
//         description : "Samsung 16 , 128GB ,256GB , 512GB Storage.  6.1-inch  , Black , Blue , Purple , white color is available. " 
//         },

//         {
//             company : "Realme",
//                model :" Realme 13", 
//             img : "imges/phone3.webp",
//             price : 31000,
//         description : "Realme , 128GB ,256GB , 512GB Storage.  6.8-inch  , Black , pink , Purple , white color is available. " 
//         },

//         {
//             company : "Motorola",
//                    model :" Motorola 13", 
//             img : "imges/phone4.png",
//             price : 30000,
//         description : "Motorola ,  512GB Storage.  6.5-inch  , purple , white , pink ,Blue color is available. " 
//         },

//         {
//             company : "vivo",
//              model :" vivo 13",
//             img : "imges/phone5.png",
//             price : 30000,
//         description : "Vivo , 128GB ,256GB , 512GB Storage.  6.1-inch  , Black , white , Gold , Blue color is available. " 
//         }
//     ],
//     leptop : [
//         {
//             company : "Dell",
//             model :" Inspiron 15",
//             img : "imges/leptop1.png",
//             price : 56000,
//         description : "Dell Leptop , 128GB ,256GB , 512GB Storage.  14inch  , Black , white color is available. " 
//         },

//         {
//             company : "hp",
//             model :" victus 15",
//             img : "imges/leptop2.webp",
//             price : 70000,
//         description : "hp Leptop , 128GB ,256GB , 512GB Storage.  11 to 18 inch  , Black , Gray color is available." 
//         },

//         {
//             company : "Apple",
//             model :"MacBook Air M4 ",
//             img : "imges/leptop3.webp",
//             price : 200000,
//         description : "i-pad  , 128GB ,256GB , 512GB Storage.  13.6 to 14.2inch  , Black , white color is available. " 
//         },

//         {
//             company : "Lenovo",
//             model :" Gen 9",
//             img : "imges/leptop4.webp",
//             price : 60000,
//         description : "Lenova Leptop ,  512GB Storage.  14-inch, 15.6-inch, and 16-inch  , white , Black color is available. " 
//         },

//         {
//             company : "Asus",
//             model :" ROG Zephyrus G16",
//             img : "imges/leptop5.png",
//             price : 60000,
//         description : "Asus Leptop ,  512GB Storage. 14 inches, white , Black color is available. " 
//         }
//     ],
//     watch : [
//         {
//             company : "Fastrack",
//             model :"Fastrack Astor FR2 Pro ",
//             img : "imges/watch1.webp",
//             price : 1700,
//         description : " Fastrack watch . Experience the perfect blend of style, comfort, and performance with the Fastrack Watch. Designed for today's youth. " 
//         },

//         {
//             company : "TITAN",
//             model :" Neo Iv",
//             img : "imges/watch2.webp",
//             price : 2000,
//         description : "Titan watch.  Experience the perfect blend of style, precision, and durability with Titan watches. Crafted with premium-quality materials and elegant designs. " 
//         },

//         {
//             company : "TIMEX",
//             model :" Expedition",
//             img : "imges/watch3.webp",
//             price : 3000,
//         description : "A stylish and reliable timepiece crafted for everyday elegance. Featuring precise quartz movement." 
//         },

//         {
//             company : "CASIO",
//             model :" Casio F-91W",
//             img : "imges/watch4.webp",
//             price : 2000,
//         description : "Casio Watch is a perfect combination of style, durability, and advanced technology. Designed for everyday wear." 
//         },

//         {
//             company : "FCUK",
//             model :" FCUK series 2",
//             img : "imges/watch5.webp",
//             price : 1000,
//         description : "levate your everyday look with the FCUK Analog Watch, a perfect blend of modern fashion and reliable performance. Designed with a sleek dial, durable strap." 
//         }
//     ],
//     shoes : [
//         {
//             company : "Dual",
//             model: "Runner X1",
//             img : "imges/shoes1.png",
//             price : 12000,
//         description : "Step into comfort and style with our Dual Shoes, designed for everyday performance and modern fashion." 
//         },

//         {
//             company : "Bata",
//             model: "Power Sprint",
//             img : "imges/shoes2.webp",
//             price : 70000,
//         description : "Samsung 16 , 128GB ,256GB , 512GB Storage.  6.1-inch  , Black , Blue , Purple , white color is available. 5000mAh Battery. " 
//         },

//         {
//             company : "Umbro",
//              model: "Velocity Pro",
//             img : "imges/shoes3.webp",
//             price : 3100,
//         description :"Experience superior comfort and performance with Umbro Men's Sports Shoes. Designed for an active lifestyle. " 
//         },

//         {
//             company : "oofos",
//              model: "OOmg Low",
//             img : "imges/shoes4.avif",
//             price : 3000,
//             description : "Experience unmatched comfort with OOFOS Recovery Shoes, specially designed to reduce stress on your feet, knees, and joints. " 
//         },

//         {
//             company : "TOMS",
//              model: "Alpargata Classic",
//             img : "imges/shoes5.webp",
//             price : 2000,
//             description : "Experience everyday comfort with TOMS Shoes, crafted for people who value both style and simplicity." 
//         }
//     ]
// }

// console.log(localStorage);
// localStorage.setItem("myproduct" , JSON.stringify(myproduct));



function getproduct(parameter)
{
    // document.querySelector('input').value = parameter;

    if(parameter == "price Low to High")
    {
        console.log("hi");
        
    }
    else if(parameter == "price High to Low")
    {
        console.log("hello");
        
    }
    else
    {
        console.log("X");
        
    }

    console.log(JSON.parse(localStorage.getItem("myproduct")));

 const products = JSON.parse(localStorage.getItem("myproduct"));
for (const key in products) {

    let section = document.createElement('section');
    let h2 = document.createElement('h2');
    console.log(section);
    

    h2.append(key);
    section.appendChild(h2);

    let div = document.createElement('div')

   

    for (const element of products[key]) {

        let main = document.createElement('main');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let img = document.createElement('img');
        let h5 = document.createElement('h5');
        let p = document.createElement('p');

        h3.append(element.company);
        h4.append(element. model);
        h5.append(element.price);
        img.src= (element.img);
        p.append(element.description);

        main.appendChild(img);
        main.appendChild(h3);
        main.appendChild(h4);
        main.appendChild(h5);
        main.appendChild(p); 
        
        div.appendChild(main);
    }
    section.appendChild(div);
    document.querySelector("article").appendChild(section);


}

}
getproduct();

document.querySelector('input').onchange = function(e)
{
    localStorage.setItem("myparameter", e.target.value);
}



