import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  //   console.log(postsPerPage)
  //   console.log(totalPosts)
  //   console.log(pageNumbers)
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    // <nav>
    //   <ul className="pagination">
    //    <li><a href="!#">Test</a></li>
    //   </ul>
    // </nav>
  );
};

export default Pagination;
