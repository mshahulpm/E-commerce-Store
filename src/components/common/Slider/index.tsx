import React, { ReactNode } from "react";
import Slider, { Settings } from "react-slick";

type props = {
    children: ReactNode,
    settings?: Settings
}

export default function SimpleSlider({ children, settings }: props) {

    const _settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        ...settings
    };

    return (
        <div>
            <Slider {..._settings}>
                {children}
            </Slider>
        </div>
    );


}