import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./stylesheets/ImageRoller.css";

import Image1 from "../../img/roller_image_01.jpg";
import Image2 from "../../img/roller_image_02.jpg";
import Image3 from "../../img/roller_image_03.jpg";
import Image4 from "../../img/roller_image_04.jpg";
import Image5 from "../../img/roller_image_05.jpg";

function ImageRoller() {
    return(
        <div className="imageRollerContainer" data-testid="imageRollerContainer">
            <AliceCarousel /*autoPlay*/ autoPlayInterval="3000" infinite="true">
                <div className="sliderimg">
                    <h1>helloooooo</h1>
                    <img src={Image1} alt="first" />
                </div>
                <img src={Image2} alt="first" className="sliderimg" />
                <img src={Image3} alt="first" className="sliderimg" />
                <img src={Image4} alt="first" className="sliderimg" />
                <img src={Image5} alt="first" className="sliderimg" />
            </AliceCarousel>
        </div>
    );
};

export default ImageRoller;