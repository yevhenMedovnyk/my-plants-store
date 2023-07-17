import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import style from "./mainSlider.module.scss";

import mainImg from "./../../assets/images/welcome/main-img.png";
import superSale from "./../../assets/images/welcome/super-sale.png";
import SliderItem from "./SliderItem/SliderItem";

const MainSlider = () => {
	return (
		<Carousel
			//autoPlay={true}
			interval={2500}
			transitionTime={500}
			useKeyboardArrows={true}
			emulateTouch={true}
			className={style.wrapper}
			showThumbs={false}
			infiniteLoop={true}
			verticalSwipe={false}
		>
			<SliderItem img={mainImg} />
			<SliderItem img={superSale} />
			<SliderItem img={mainImg} />
		</Carousel>
	);
};

export default MainSlider;
