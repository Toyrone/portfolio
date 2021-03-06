var container = document.getElementById("container");
console.log(container);
var obj = {
      products: [
        {
          id: 1,
          product: "Yam",
          price: 2150,
          unit: "per 10kg",
          img: "http://www.foodsubs.com/Photos/yamaimo.jpg"
        },
        {
          id: 2,
          product: "Rice",
          price: 2450,
          unit: "per 10kg",
          img: "https://thumbs.dreamstime.com/z/unpolished-rice-whole-grain-burlap-bag-25395443.jpg"
        },
        {
          id: 3,
          product: "Egusi",
          price: 250,
          unit: "per Tin",
          img: "http://africanchop.com/smallchop/wp-content/uploads/2014/08/egusi1.jpg"
        },
        {
            id: 4,
            product: "Suya",
            price: 250,
            unit: "per wrap",
            img: "http://www.travelstart.com.ng/blog/wp-content/uploads/2014/03/Suya-1024x803.jpg"
          },
          {
            id: 5,
            product: "Semovita",
            price: 2500,
            unit: "per bag",
            img: "http://www.katointernational.com/wp-content/uploads/2015/01/semovita.png"
          },
          {
            id: 6,
            product: "Cornflakes",
            price: 1500,
            unit: "per Sachet",
            img: "http://www.sunpring.com/wp-content/uploads/2015/03/corn-flakes-manufacturing.jpg"
          },
        {
          id: 7,
          product: "Elubo",
          price: 2500,
          unit: "per Bag",
          img: "http://zippum.com/image/cache/data/swallow/sw10-500x500.jpg"
        },
        {
          id: 8,
          product: "Garri",
          price: 2500,
          unit: "per Bag",
          img: "http://madamsabi.com/image/cache/data/prodsupload/white%20garri-500x500.jpg"
        },
        {
          id: 9,
          product: "Pando Yam",
          price: 2500,
          unit: "per Bag",
          img: "http://www.healthysupplies.co.uk/pics/400x400/pounded-yam.jpg"
        },
        {
          id: 10,
          product: "Eggs",
          price: 2500,
          unit: "per Create",
          img: "https://cdn.pixabay.com/photo/2016/12/04/23/36/eggs-1882837_960_720.jpg"
        },
        {
          id: 11,
          product: "Bananas",
          price: 2500,
          unit: "per Bunch",
          img: "http://pngimg.com/uploads/banana/banana_PNG817.png"
        },
        {
          id: 12,
          product: "chicken",
          price: 2500,
          unit: "per kg",
          img: "http://dialnsearch.com/image/Whole%20Chicken167615.jpg"
        },
        {
          id: 13,
          product: "Rodo",
          price: 2500,
          unit: "per basket",
          img: "http://www.9jafoods.co/wp-content/uploads/2016/11/rodo-rspwxyz59_rodo_big_basket-400x350.jpg"
        },
        {
          id: 14,
          product: "Tomato",
          price: 2500,
          unit: "per basket",
          img: "http://www.naushieexports.com/img/tomato4_big.jpg"
        },
        {
          id: 15,
          product: "Potatoes",
          price: 2150,
          unit: "per 10kg",
          img: "http://wisconsinpotatoes.com/admin/wp-content/uploads/2014/09/yellow_potatoes.jpg"
        },
        {
          id: 16,
          product: "Efo Tete",
          price: 2150,
          unit: "per Bunch",
          img: "http://justfreshfood.com.ng/resources/image/18/7a/9.jpg"
        },
        {
          id: 17,
          product: "Wheat flour",
          price: 2150,
          unit: "per Kg",
          img: "http://i.ndtvimg.com/i/2015-06/wheat-flour-625_625x350_61434435605.jpg"
        },
        {
          id: 18,
          product: "Sugar",
          price: 2150,
          unit: "per kg",
          img: "http://www.mcnicholsplc.com/wp-content/uploads/family-granulated-sugar.png"
        },
        {
          id: 19,
          product: "Soap",
          price: 2150,
          unit: "per Park",
          img: "http://ecx.images-amazon.com/images/I/61CpVvyqSzL._SL1000_.jpg"
        },
        {
          id: 20,
          product: "Fish",
          price: 700,
          unit: "per Kg",
          img: "http://www.nairaland.com/attachments/3217770_mackerelbig_jpeg0de3d657ba3bc05478f7590c7ab76e55"
        }
      ],
      serviceChargePercent: 10,
      delivery: 1000
    };
var productsArray = obj.products;
console.log(productsArray);

var output = "";
for (var i = 0; i < productsArray.length; i++) {
  //productsArray[i];
  output += 
    `<div class="col-md-4">
          <div class="card">
            <div class="thumbnail">
              <img src="${productsArray[i].img}" alt="Product Image">
            </div>
            <div class="contents">
              <h3 class="name">${productsArray[i].product}</h3>
              <p class="price">${productsArray[i].price}</p>
              <p class="desc">${productsArray[i].unit}</p>
            </div>

          </div>
        </div>`;
}
container.innerHTML = output;