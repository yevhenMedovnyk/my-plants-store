import style from "./sliderItem.module.scss";

import Button from "../../UI/Button/Button";



const SliderItem = ({ img }) => {
	return (
		<div className={style.sliderItem}>
			<div className={style.content}>
				<h2>Welcome to GreenShop</h2>
				<h1>
					Let’s Make a Better <span>Planet</span>
				</h1>
				<p>
					We are an online plant shop offering a wide range of cheap and trendy plants. Use our
					plants to create an unique Urban Jungle. Order your favorite plants!
				</p>
				<Button text='SHOP NOW' classes='slider-btn' />
			</div>
			<div className={style.image}>
				<img src={img} alt='' />
			</div>
		</div>
	);
};


export default SliderItem;
