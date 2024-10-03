import React, { useState, useEffect } from "react";
import Sidebar from "../../layouts/sidebar/sidebar";
import Pagination from "../../layouts/pagination/pagination";
import { useAppContext } from "../../AppProvider";

const Admin_Panel = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 30;

    const { sessionToken, setSessionToken } = useAppContext();  // Get sessionToken and setSessionToken from context

    // Mimic token for debugging purposes
    useEffect(() => {
        // Check if there's no token and set a mock token for debugging
        if (!sessionToken) {
            setSessionToken('mock-debug-token');
        }
    }, [sessionToken, setSessionToken]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
      <div className="flex">
        <Sidebar role="tutor" />
  
        <div className="flex-1 p-6">
          <div className="bg-gray-200 h-[630px] p-4 rounded-lg mb-4">
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
  
  export default Admin_Panel;
