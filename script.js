function carousel() {
    function Appearance() {
        const display = (element) => {
            element.style.display = "block";
        }
        const displayNone = (element) => {
            element.style.display = "none";
        }
        const visible = (element) => {
            element.style.visibility = "visible";
        }
        const hidden = (element) => {
            element.style.visibility = "hidden";
        }  
        return {
            display,
            displayNone,
            visible,
            hidden
        }
    }
    function ImageCarousel() {
        const btn1 = document.querySelector(".first");
        const btn2 = document.querySelector(".second");
        const btn3 = document.querySelector(".third");
        const image1 = document.querySelector(".image1");
        const image2 = document.querySelector(".image2");
        const image3 = document.querySelector(".image3");
        const strip = document.querySelector(".strip");
        const firstImage = document.querySelector(".first-image");
        const secondImage = document.querySelector(".second-image");
        const rightSecond = document.querySelector(".r-second");
        const rightThird = document.querySelector(".r-third");
    
        const appearance = Appearance();
    
        const imageView1 = () => {
            appearance.visible(image1);
            appearance.hidden(image2);
            appearance.hidden(image3);
            strip.style.left = "37%";
            appearance.displayNone(secondImage);
            appearance.display(rightSecond);
            appearance.displayNone(firstImage);
            appearance.displayNone(rightThird);
            btn1.style.backgroundColor = "black";
            btn2.style.backgroundColor = "lightgray";
            btn3.style.backgroundColor = "lightgray";
        }
        const imageView2 = () => {
            appearance.hidden(image1);
            appearance.visible(image2);
            appearance.hidden(image3);
            strip.style.left = "12%";
            appearance.display(firstImage);
            appearance.displayNone(secondImage);
            appearance.display(rightThird);
            appearance.displayNone(rightSecond);
            btn1.style.backgroundColor = "lightgray";
            btn2.style.backgroundColor = "black";
            btn3.style.backgroundColor = "lightgray";
        }
        const imageView3 = () => {
            appearance.hidden(image1);
            appearance.hidden(image2);
            appearance.visible(image3);
            strip.style.left = "-14%";
            appearance.display(secondImage);
            appearance.displayNone(firstImage);
            rightSecond.style.display = "none";
            appearance.displayNone(rightSecond);
            appearance.displayNone(rightThird);
            btn1.style.backgroundColor = "lightgray";
            btn2.style.backgroundColor = "lightgray";
            btn3.style.backgroundColor = "black";
        }
    
        const play = document.querySelector(".play");
        play.addEventListener("click", () => {
            setTimeout(imageView1, 0)
            setTimeout(imageView2, 5000);
            setTimeout(imageView3, 10000);
        });
    
        imageView1();
    
        const rotateImages = () => {
            btn1.addEventListener("click", () => {
                imageView1();
            });
    
            btn2.addEventListener("click", () => {
                imageView2();
            });
    
            btn3.addEventListener("click", () => {
                imageView3();
            });
        }
    
        const arrows = () => {
            firstImage.addEventListener("click", () => {
                imageView1();
            });
    
            rightSecond.addEventListener("click", () => {
                imageView2();
            });
            
            rightThird.addEventListener("click", () => {
                imageView3();
            })
    
            secondImage.addEventListener("click", () => {
                imageView2();
            })
        }
        return {rotateImages, arrows}
    }
    
    const imageC = ImageCarousel();
    imageC.rotateImages();
    imageC.arrows();
}

carousel();

module.exports = carousel;
