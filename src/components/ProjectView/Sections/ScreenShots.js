import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// core components
import Card from "components/Card/Card.js";

export default function ScreenShots(props) {
  const {expanded, project} = props;

  if (!expanded || project.screenshots.length === 0) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <Card carousel>
      <Carousel {...settings}>
        {project.screenshots.map((shot) => (
          <div key={shot}>
            <img src={shot} alt="First slide" className="slick-image" />
          </div>
        ))}
      </Carousel>
    </Card>
  );
}
