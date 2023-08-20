console.clear();

const domBikiniTop = document.querySelector('.bikinitop');
const domBikiniBot = document.querySelector('.bikinibottom');
const domFeet = document.querySelector('.feet');
const domHandbag = document.querySelector('.handbag');
const domNecklace = document.querySelector('.necklace');
const domHairstyle = document.querySelector('.hairstyle');
const domBackground = document.querySelector('.background');

// Chọn tất cả các button trong div
let buttons = document.querySelectorAll(".products .btn-thu-do");

// Lặp qua từng button và gắn hàm xử lý sự kiện cho sự kiện "click"
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Xử lý khi button được nhấp
    // console.log(button.classList);

    let kiemTraClass = '';
    for (let i = 0; i < button.classList.length; i++) {
        switch (button.classList[i]) {
            case 'AO' : kiemTraClass = 'AO';
            break;
            case 'QUAN' : kiemTraClass = 'QUAN';
            break;
            case 'GIAY' : kiemTraClass = 'GIAY';
            break;
            case 'TUIXACH' : kiemTraClass = 'TUIXACH';
            break;
            case 'DAYCHUYEN' : kiemTraClass = 'DAYCHUYEN';
            break;
            case 'KIEUTOC' : kiemTraClass = 'KIEUTOC';
            break;
            case 'NEN' : kiemTraClass = 'NEN';
            break;
        }
    }

    let kiemTraDOM = (DOM) => {
        switch (kiemTraClass) {
            case 'AO' : DOM = domBikiniTop;
            break;
            case 'QUAN' : DOM = domBikiniBot;
            break;
            case 'GIAY' : DOM = domFeet;
            break;
            case 'TUIXACH' : DOM = domHandbag;
            break;
            case 'DAYCHUYEN' : DOM = domNecklace;
            break;
            case 'KIEUTOC' : DOM = domHairstyle;
            break;
            case 'NEN' : DOM = domBackground;
            break;
        }
        return DOM;
    }

    let dom = kiemTraDOM();

    switch (button.id) {
        case 'topcloth1' : {
            dom.style.backgroundImage = "url('./../assets/images/clothes/topcloth1.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'topcloth2' : {
            dom.style.backgroundImage = "url('./../assets/images/clothes/topcloth2.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'topcloth3' : {
            dom.style.backgroundImage = "url('./../assets/images/clothes/topcloth3.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'topcloth4' : {
            dom.style.backgroundImage = "url('./../assets/images/clothes/topcloth4.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'topcloth5' : {
            dom.style.backgroundImage = "url('./../assets/images/clothes/topcloth5.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'topcloth6' : {
            dom.style.backgroundImage = "url('./../assets/images/clothes/topcloth6.png')";
            dom.style.backgroundSize = "cover";
        };
        break;


        case 'botcloth1' : {
            dom.style.backgroundImage = "url('./../assets/images/clothes/botcloth1.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'botcloth2' : {
            dom.style.backgroundImage = "url('./../assets/images/clothes/botcloth2.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'botcloth3' : {
            dom.style.backgroundImage = "url('./../assets/images/clothes/botcloth3.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'botcloth4' : {
            dom.style.backgroundImage = "url('./../assets/images/clothes/botcloth4.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'botcloth5' : {
            dom.style.backgroundImage = "url('./../assets/images/clothes/botcloth5.png')";
            dom.style.backgroundSize = "cover";
        };
        break;


        case 'shoes1' : {
            dom.style.backgroundImage = "url('./../assets/images/shoes/shoes1.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'shoes2' : {
            dom.style.backgroundImage = "url('./../assets/images/shoes/shoes2.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'shoes3' : {
            dom.style.backgroundImage = "url('./../assets/images/shoes/shoes3.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'shoes4' : {
            dom.style.backgroundImage = "url('./../assets/images/shoes/shoes4.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'shoes5' : {
            dom.style.backgroundImage = "url('./../assets/images/shoes/shoes5.png')";
            dom.style.backgroundSize = "cover";
        };
        break;


        case 'handbag1' : {
            dom.style.backgroundImage = "url('./../assets/images/handbags/handbag1.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'handbag2' : {
            dom.style.backgroundImage = "url('./../assets/images/handbags/handbag2.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'handbag3' : {
            dom.style.backgroundImage = "url('./../assets/images/handbags/handbag3.png')";
            dom.style.backgroundSize = "cover";
        };
        break;


        case 'necklace1' : {
            dom.style.backgroundImage = "url('./../assets/images/necklaces/necklace1.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'necklace2' : {
            dom.style.backgroundImage = "url('./../assets/images/necklaces/necklace2.png')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'necklace3' : {
            dom.style.backgroundImage = "url('./../assets/images/necklaces/necklace3.png')";
            dom.style.backgroundSize = "cover";
        };
        break;


        case 'hairstyle1' : {
            dom.style.backgroundImage = "url('./../assets/images/hairstyle/hairstyle1.png')";
        };
        break;
        case 'hairstyle2' : {
            dom.style.backgroundImage = "url('./../assets/images/hairstyle/hairstyle2.png')";
        };
        break;
        case 'hairstyle3' : {
            dom.style.backgroundImage = "url('./../assets/images/hairstyle/hairstyle3.png')";
        };
        break;
        case 'huykieutoc' : {
            dom.style.backgroundImage = "none";
        };
        break;


        case 'background1' : {
            dom.style.backgroundImage = "url('./../assets/images/background/background1.jpg')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'background2' : {
            dom.style.backgroundImage = "url('./../assets/images/background/background2.jpg')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'background3' : {
            dom.style.backgroundImage = "url('./../assets/images/background/background3.jpg')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'background4' : {
            dom.style.backgroundImage = "url('./../assets/images/background/background4.jpg')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'background5' : {
            dom.style.backgroundImage = "url('./../assets/images/background/background5.jpg')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'background6' : {
            dom.style.backgroundImage = "url('./../assets/images/background/background6.jpg')";
            dom.style.backgroundSize = "cover";
        };
        break;
        case 'background7' : {
            dom.style.backgroundImage = "url('./../assets/images/background/background7.jpg')";
            dom.style.backgroundSize = "cover";
        };
        break;
    }
  });
});


