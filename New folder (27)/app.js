const obj1 = document.getElementById("card")
const arr1 = [
    {
        id: 4,
        title: "Ford ms 10",
        price: 205,
        description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        Image_url: "https://cdn05.carsforsale.com/00e7818a91f451732249f04173c1a3058f/480x360/2019-dodge-challenger-gt-2dr-coupe.jpg",
        product_oder: "Buy now"
      }
  ];
  
  const modifiedArray1 = arr1.map((obj) => {
    const productDetails = {
      title: "Ford ms 10",
      price: 205,
      description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7-Color RGB LED Back-lighting for smart functionality",
      Image_url: "https://cdn05.carsforsale.com/00e7818a91f451732249f04173c1a3058f/480x360/2019-dodge-challenger-gt-2dr-coupe.jpg",
      product_order: "Buy now",
    };
    return { ...obj, ...productDetails };
  });
  
  for (let i = 5; i < modifiedArray1.length; i++) {
    const cardHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${modifiedArray1[i].Image_url}" class="card-img-top" alt="....">
        <div class="card-body">
          <h5 class="card-title">${modifiedArray1[i].title}</h5>
          <p class="card-text">${modifiedArray1[i].description}</p>
          ${modifiedArray1[i].price}
          <a href="#" class="btn btn-primary">${modifiedArray1[i].product_order}</a>
        </div>
      </div>`;
  }
  

console.log(arr1);


const obj2 = document.getElementById("RollsRoyce")
const arr2 = [
    {
        id: 4,
        title: "Rolls_Royce",
        price: 743,
        description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles.",
        Image_url: "https://hips.hearstapps.com/hmg-prod/images/p90475606-highres-rolls-royce-phantom-1677268219.jpg?crop=0.663xw:0.496xh;0.136xw,0.372xh&resize=1200:*",
        product_oder: "Buy now"
      }
  ];
  
  const modifiedArray2 = arr2.map((obj) => {
    const productDetails = {
      title: "Rolls_Royce",
      price: 743,
      description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles.",
      Image_url: "https://hips.hearstapps.com/hmg-prod/images/p90475606-highres-rolls-royce-phantom-1677268219.jpg?crop=0.663xw:0.496xh;0.136xw,0.372xh&resize=1200:*",
      product_order: "Buy now",
    };
    return { ...obj, ...productDetails };
  });
  
  for (let i = 5; i < modifiedArray2.length; i++) {
    const cardHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${modifiedArray2[i].Image_url}" class="card-img-top" alt="....">
        <div class="card-body">
          <h5 class="card-title">${modifiedArray2[i].title}</h5>
          <p class="card-text">${modifiedArray2[i].description}</p>
          ${modifiedArray2[i].price}
          <a href="#" class="btn btn-primary">${modifiedArray2[i].product_order}</a>
        </div>
      </div>`;
  }
  

console.log(arr2);



const obj3 = document.getElementById("BMW")
const arr3 = [
    {
        id: 4,
        title: "B_M_W",
        price: 808,
        description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive.",
        Image_url: "https://car-images.bauersecure.com/wp-images/164826/1752x1168/best_electric_luxury_car_bmw_i7.jpg?mode=max&quality=90&scale=down",
        product_oder: "Buy now"
      }
  ];
  
  const modifiedArray3 = arr3.map((obj) => {
    const productDetails = {
      title: "B_M_W",
      price: 808,
      description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive.",
      Image_url: "https://car-images.bauersecure.com/wp-images/164826/1752x1168/best_electric_luxury_car_bmw_i7.jpg?mode=max&quality=90&scale=down",
      product_order: "Buy now",
    };
    return { ...obj, ...productDetails };
  });
  
  for (let i = 5; i < modifiedArray3.length; i++) {
    const cardHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${modifiedArray3[i].Image_url}" class="card-img-top" alt="....">
        <div class="card-body">
          <h5 class="card-title">${modifiedArray3[i].title}</h5>
          <p class="card-text">${modifiedArray3[i].description}</p>
          ${modifiedArray3[i].price}
          <a href="#" class="btn btn-primary">${modifiedArray3[i].product_order}</a>
        </div>
      </div>`;
  }
  

console.log(arr3);



const obj4 = document.getElementById("audia4")
const arr4 = [
    {
        id: 4,
        title: "AUDI A4",
        price: 382,
        description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals.",
        Image_url: "https://media.ed.edmunds-media.com/audi/a4/2022/oem/2022_audi_a4_sedan_prestige-s-line_fq_oem_8_1280.jpg",
        product_oder: "Buy now"
      }
  ];
  
  const modifiedArray4 = arr4.map((obj) => {
    const productDetails = {
      title: "AUDI A4",
      price: 382,
      description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals.",
      Image_url: "https://media.ed.edmunds-media.com/audi/a4/2022/oem/2022_audi_a4_sedan_prestige-s-line_fq_oem_8_1280.jpg",
      product_order: "Buy now",
    };
    return { ...obj, ...productDetails };
  });
  
  for (let i = 5; i < modifiedArray4.length; i++) {
    const cardHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${modifiedArray4[i].Image_url}" class="card-img-top" alt="....">
        <div class="card-body">
          <h5 class="card-title">${modifiedArray4[i].title}</h5>
          <p class="card-text">${modifiedArray4[i].description}</p>
          ${modifiedArray4[i].price}
          <a href="#" class="btn btn-primary">${modifiedArray4[i].product_order}</a>
        </div>
      </div>`;
  }
  

console.log(arr4);



const obj = document.getElementById("farrari")
const arr = [
    {
        id: 4,
        title: "Farrari",
        price: 30,
        description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016.",
        Image_url: "https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.webp",
        product_oder: "Buy now"
      }
  ];
  
  const modifiedArray = arr.map((obj) => {
    const productDetails = {
      title: "Farrari",
      price: 30,
      description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016.",
      Image_url: "https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.webp",
      product_order: "Buy now",
    };
    return { ...obj, ...productDetails };
  });
  
  for (let i = 5; i < modifiedArray.length; i++) {
    const cardHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${modifiedArray[i].Image_url}" class="card-img-top" alt="....">
        <div class="card-body">
          <h5 class="card-title">${modifiedArray[i].title}</h5>
          <p class="card-text">${modifiedArray[i].description}</p>
          ${modifiedArray[i].price}
          <a href="#" class="btn btn-primary">${modifiedArray[i].product_order}</a>
        </div>
      </div>`;
  }
  

console.log(arr);

