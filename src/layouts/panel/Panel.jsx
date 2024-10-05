import PropTypes from 'prop-types';
import { useState } from "react";
import Sidebar from "../sidebar/sidebar";

const Panel = ({ children, role, activeItem }) => {
  return (
    <div className="flex">
      <Sidebar role={role} activeItem={activeItem} />

      <div className="flex-1 p-6">
        <div className="bg-gray-200 min-h-[70vh] p-4 rounded-lg mb-4">
          {children}
        </div>
      </div>
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.node,
  role: PropTypes.string.isRequired,
  activeItem: PropTypes.number.isRequired
};

export default Panel;
