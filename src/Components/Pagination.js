import React from "react";



const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className=' flex flex-wrap justify-center  mt-4 '>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "  m-1 p-3    bg-violet-700  font-body border  rounded-xl  text-white " : " rounded-xl border m-1 p-3 bg-rawdapurple font-body bg-opacity-5"}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;