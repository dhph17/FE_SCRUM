import PropTypes from 'prop-types';

import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import Pagination from "../pagination/pagination";
import SideBarSearch from '../sidebar/SideBar_Search';


const Panel = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 30;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="flex">
      {/* <Sidebar role="admin" /> */}
      <SideBarSearch />

      <div className="flex-1 p-6">
        <div className="bg-gray-200 min-h-[70vh] p-4 rounded-lg mb-4">
          {children}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.node,
};

export default Panel;
