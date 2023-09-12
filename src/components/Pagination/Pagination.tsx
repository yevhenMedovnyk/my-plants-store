import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";

import "./pagination.scss";
import { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";

interface IPaginationProps {
	currentPage: number;
	totalCount: number;
	pageLimit: number;
	setCurrentPage: (selected: number) => any
}

interface ISelectedItem {
    selected: number;
}

function Pagination({ setCurrentPage, totalCount, currentPage, pageLimit }: IPaginationProps) {
	const dispatch = useAppDispatch();
	//const { currentPage, totalCount } = useSelector(state => state.plants);

	const pageCount = Math.ceil(totalCount / pageLimit);

	const handlePageClick = (e: ISelectedItem) => {
		const selected = e.selected;
		dispatch(setCurrentPage(selected));
	};

	return (
		<>
			<ReactPaginate
				onPageChange={handlePageClick}
				breakLabel='...'
				nextLabel='>'
				pageRangeDisplayed={3}
				pageCount={pageCount}
				previousLabel='<'
				renderOnZeroPageCount={null}
				containerClassName={"pagination-container"}
				pageClassName={"page"}
				pageLinkClassName={"page-link"}
				activeClassName={"active"}
				previousClassName={"prev"}
				nextClassName={"next"}
				previousLinkClassName={"prev-link"}
				nextLinkClassName={"next-link"}
				forcePage={currentPage}
			/>
		</>
	);
}

export default Pagination;
