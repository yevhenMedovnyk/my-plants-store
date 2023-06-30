import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";

import "./pagination.scss";

function Pagination({ setCurrentPage, totalCount, currentPage, pageLimit }) {
	const dispatch = useDispatch();
	//const { currentPage, totalCount } = useSelector(state => state.plants);

	const pageCount = Math.ceil(totalCount / pageLimit);

	const handlePageClick = e => {
		dispatch(setCurrentPage(e.selected));
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
