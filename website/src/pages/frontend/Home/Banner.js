import React, { useEffect, useState } from "react";
import sliderservices from "../../../services/SliderServices";
import { urlImage } from "../../../config";

function Banner() {
  const [Slider,setSlider] = useState([]);
  useEffect(function(){
    (async function(){
        await sliderservices.getSliderMain('slider_main').then(function(result){
            setSlider(result.data.sliders)
        })
    })();
},[]);
  return (
    <div class="banner">

      <div class="container">

        <div class="slider-container has-scrollbar">
          {Slider.map(function(item,index){
            return(
              <div class="slider-item">

              <img src={urlImage +'slider/'+ item.image} alt="modern sunglasses" class="banner-img" />
  
              <div class="banner-content">
  
                <p class="banner-subtitle">{item.sub_title}</p>
  
                <h2 class="banner-title">{item.name}</h2>
  
                <p class="banner-text">
                  {item.description}
                </p>
  
                <a href="#" class="banner-btn">Mua ngay</a>
  
              </div>
  
            </div>
  
            );
          })}





        </div>

      </div>

    </div>

  );
}

export default Banner;