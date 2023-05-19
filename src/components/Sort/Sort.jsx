import style from "./sort.module.scss";

const Sort = () => {
	return (
		<div className={style.wrapper}>
			<span className={style.title}>All plants</span>
			<div className={style.sortBlock}>
				<div className={style.sortTitle}>
					Sort by: <span>Default sorting</span>
				</div>
				<ul className={style.sortPopup}>
					<li>Min price</li>
					<li>Max price</li>
				</ul>
			</div>
		</div>
	);
};

export default Sort;
