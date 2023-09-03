import { useRef, useState } from "react";
import style from "./sort.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { changeCategory, changeSortType } from "../../store/Slices/sortSlice";
import { setCurrentPage } from "../../store/Slices/mainSlice";
import Button from "../UI/Button/Button";

import filter from "./../../assets/images/filter.svg";
import { useHandleClickOutside } from "../../helpers/useHandleClickOutside";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

interface ISortValues {
	name: string;
	order: string;
	sortby: string;
}

const sortValueArr: ISortValues[] = [
	{ name: "Min price", order: "asc", sortby: "price" },
	{ name: "Max price", order: "desc", sortby: "price" },
];
const categories: string[] = [
	"All Plants",
	"House Plants",
	"Succulents",
	"Terrariums",
	"Seeds",
	"Accessories",
];

const Sort = () => {
	const { category } = useAppSelector(state => state.sort);
	const dispatch = useAppDispatch();
	const [sortValue, setSortValue] = useState(sortValueArr[1].name);
	const [sortOpened, setSortOpened] = useState(false);
	const [categoryOpened, setCategoryOpened] = useState(false);

	const handleClick = (el: ISortValues) => {
		setSortValue(el.name);
		dispatch(changeSortType(el));
		setSortOpened(false);
	};
	const handleCategoryClick = (category: string) => {
		dispatch(changeCategory(category));
		dispatch(setCurrentPage(0));
	};
	const handleFilterBtnClick = () => {
		setCategoryOpened(!categoryOpened);
	};

	const categoryPopupRef = useRef(null);
	const sortPopupRef = useRef(null);
	const categoryBtnRef = useRef(null);
	const sortBtnRef = useRef(null);
	useHandleClickOutside(categoryPopupRef, categoryBtnRef, setCategoryOpened);
	useHandleClickOutside(sortPopupRef, sortBtnRef, setSortOpened);

	return (
		<div className={style.wrapper}>
			{/*<button className={style.filter_btn}>Filter: </button>*/}
			<Button
				BtnRef={categoryBtnRef}
				text='Filter'
				img={filter}
				classes='sort'
				onClick={handleFilterBtnClick}
			/>
			<ul
				ref={categoryPopupRef}
				className={[style.filter, categoryOpened ? style.active : ""].join(" ")}
			>
				{categories.map(categoryName => (
					<li
						onClick={() => handleCategoryClick(categoryName)}
						className={[style.category, category === categoryName ? style.active : ""].join(" ")}
						key={categoryName}
					>
						{categoryName}
					</li>
				))}
			</ul>
			<div ref={sortPopupRef} className={style.sortBlock}>
				<div className={style.sortTitle}>
					<label ref={sortBtnRef}>
						Sort by:{" "}
						<input
							onClick={() => setSortOpened(!sortOpened)}
							type='text'
							value={sortValue}
							readOnly
						/>
					</label>
				</div>

				<ul className={[style.sortPopup, sortOpened ? style.active : ""].join(" ")}>
					{sortValueArr.map(el => (
						<li
							className={el.name === sortValue ? style.active : ""}
							key={el.name}
							onClick={() => handleClick(el)}
						>
							{el.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sort;
