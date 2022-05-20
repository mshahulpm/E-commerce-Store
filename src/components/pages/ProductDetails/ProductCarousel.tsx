import Image from "next/image";
import React, { Component, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

export default function ProductCarousel() {

    const [nav1, setNav1] = useState<Slider>();
    const [nav2, setNav2] = useState<Slider>();
    const slider1 = useRef<Slider | null>(null);
    const slider2 = useRef<Slider | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const images = [
        '/img/product/product-1.jpg',
        '/img/product/product-2.jpg',
        '/img/product/product-3.jpg',
        '/img/product/product-4.jpg',
    ]

    useEffect(() => {
        setNav1(slider1.current || undefined);
        setNav2(slider2.current || undefined);
    }, [currentIndex]);


    return (
        <div className="col-lg-6">
            <Slider
                asNavFor={nav2}
                ref={slider1}
            >
                {
                    images.map((image, index) => (
                        <img className="m-2 product-carousel-large " src={image} alt="" key={index} />
                    ))
                }
            </Slider>
            <div className="only-lg">
                <Slider
                    asNavFor={nav1}
                    ref={slider2}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    centerMode={true}
                >
                    {
                        images.map((image, index) => (
                            <div key={index} className={`m-2 `} onClick={() => setCurrentIndex(index)}>
                                <img className={`m-2 pointer ${currentIndex === index ? 'carousel-active' : ''}`}
                                    height={100} width={100} src={image} alt="" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}




export function ProductCarousel2() {

    return (
        <div className="col-lg-6">
            <div className="product__details__pic">
                <div className="product__details__pic__left product__thumb nice-scroll">
                    <a className="pt active" href="#product-1">
                        <img src="/img/product/details/thumb-1.jpg" alt="" />
                    </a>
                    <a className="pt" href="#product-2">
                        <img src="/img/product/details/thumb-2.jpg" alt="" />
                    </a>
                    <a className="pt" href="#product-3">
                        <img src="/img/product/details/thumb-3.jpg" alt="" />
                    </a>
                    <a className="pt" href="#product-4">
                        <img src="/img/product/details/thumb-4.jpg" alt="" />
                    </a>
                </div>
                <div className="product__details__slider__content">
                    <div className="product__details__pic__slider owl-carousel">
                        <img data-hash="product-1" className="product__big__img" src="img/product/details/product-1.jpg" alt="" />
                        <img data-hash="product-2" className="product__big__img" src="img/product/details/product-3.jpg" alt="" />
                        <img data-hash="product-3" className="product__big__img" src="img/product/details/product-2.jpg" alt="" />
                        <img data-hash="product-4" className="product__big__img" src="img/product/details/product-4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

