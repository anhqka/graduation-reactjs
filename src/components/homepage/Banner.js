import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from "react";

const Banner = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <div className="w-[100%] m-auto">
            <Carousel showArrows={true} onChange={onChange} >
                <div>
                    <img src="https://phongbvb.com/upload/bia.jpg?v=1.0.2" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://phongbvb.com/upload/anh-toc-uon/untitled-1-1.jpg?v=1.0.2" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
            </Carousel>
        </div>
    )
}

export default Banner