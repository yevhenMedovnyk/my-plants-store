import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../store/Slices/mainSlice";

import "./pagination.scss";

function Pagination() {
	const dispatch = useDispatch();

	const handlePageClick = e => {
		dispatch(setCurrentPage(e.selected + 1));
	};

	return (
		<>
			<ReactPaginate
				onPageChange={handlePageClick}
				breakLabel='...'
				nextLabel='>>'
				pageRangeDisplayed={3}
				pageCount={5}
				previousLabel='<<'
				renderOnZeroPageCount={null}
				containerClassName={"pagination-container"}
				pageClassName={"page"}
				pageLinkClassName={"page-link"}
				activeClassName={"active"}
				previousClassName={"prev"}
				nextClassName={"next"}
				previousLinkClassName={"prev-link"}
				nextLinkClassName={"next-link"}
			/>
		</>
	);
}

export default Pagination;
