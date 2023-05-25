import { useState } from "react";
import style from "./sort.module.scss";

import { useDispatch } from "react-redux";
import { changeSortType } from "../../store/Slices/sortSlice";

const sortValueArr = [
	{ name: "Min price", order: "asc", sortby: "price" },
	{ name: "Max price", order: "desc", sortby: "price" },
];

const Sort = () => {
	const dispatch = useDispatch();
	const [sortValue, setSortValue] = useState(sortValueArr[0].name);
	const [sortOpened, setSortOpened] = useState(false);

	const handleClick = el => {
		setSortValue(el.name);
		dispatch(changeSortType(el));
		setSortOpened(false);
	};

	return (
		<div className={style.wrapper}>
			<span className={style.title}>All plants</span>
			<div className={style.sortBlock}>
				<div className={style.sortTitle}>
					<label>
						Sort by:{" "}
						<input
							onClick={() => setSortOpened(!sortOpened)}
							type='text'
							value={sortValue}
							readOnly
						/>
					</label>
				</div>
				{sortOpened && (
					<ul className={style.sortPopup}>
						{sortValueArr.map((el, _index) => (
							<li
								className={el.name === sortValue ? style.active : ""}
								key={el.name}
								onClick={() => handleClick(el)}
							>
								{el.name}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Sort;
