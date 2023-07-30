import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselPage = () => {
  const carouselContainerStyle = {
    width: "100%",
    height: "60px",
    backgroundColor: "#e5d3b3",
  };
  const imageStyle = {
    width: "40%",
    height: "40%",
  };
  return (
    <div style={carouselContainerStyle}>
      <Carousel showThumbs={false} showStatus={false} autoPlay interval={3000}>
        <div>
          <img
            src="https://media.istockphoto.com/id/586051630/photo/woman-applying-with-brush-clay-mud-mask-to-her-face.jpg?s=612x612&w=0&k=20&c=dOUQSLNR7JIrHM3kDYgiBh9tZZxnh81JJiZbezB68SA="
            alt="Image 1"
            style={imageStyle}
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/side-view-smiley-girl-using-face-serum_23-2149427921.jpg"
            alt="Image 2"
            style={imageStyle}
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1283396131/photo/beautiful-young-woman-applying-foundation-powder.jpg?s=612x612&w=0&k=20&c=EkG-yD0vruwgrRJ9FRaF_8_NhfCwiu3-ILibPTCcX9c="
            alt="Image 3"
            style={imageStyle}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
