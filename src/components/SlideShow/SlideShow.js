import { useCallback, useEffect, useState } from "react";
import ImageGarage from "../../assets/images/garage_1.png";
import ImageGarage_1 from "../../assets/images/697054.jpg";
import ImageGarage_2 from "../../assets/images/114920.jpg";

import "./SlideShow.css";
import { ExampleSlide } from "./utils";
import SlideContent from "./SlideContent";

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slideShow = ExampleSlide({
    ImageGarage,
    ImageGarage_1,
    ImageGarage_2,
  });
  const showSlides = useCallback(
    (n) => {
      console.log(slideIndex, 234);
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        setSlideIndex(1);
      }
      if (n < 1) {
        setSlideIndex(slides.length);
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    },
    [slideIndex]
  );

  const plusSlides = (n) => {
    const slide = slideIndex + n;
    setSlideIndex(slide);
  };
  console.log(slideIndex, "out");

  const currentSlide = (n) => {
    console.log("asdf");
    const slide = n;
    setSlideIndex(slide);
  };
  useEffect(() => {
    showSlides(slideIndex);
  }, [showSlides, slideIndex]);

  return (
    <>
      <div className="slideshow-container">
        {slideShow.map((value) => SlideContent(value.img, value.content))}

        {slideIndex !== 1 && (
          <button className="prev" onClick={() => plusSlides(-1)}>
            ❮
          </button>
        )}

        {slideIndex !== slideShow.length && (
          <button className="next" onClick={() => plusSlides(1)}>
            ❯
          </button>
        )}
      </div>
      <div className="dot-contain">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </>
  );
};

export default SlideShow;
