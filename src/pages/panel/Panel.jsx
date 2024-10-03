import React from 'react';
import Sidebar from "../../layouts/sidebar/sidebar"; 

const Admin_Panel = () => {
    return (
        <div className="flex">
            <Sidebar role="tutor" />
            
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold">Panel</h1>
                <div id="main-content">
                </div>
            </div>
        </div>
    );
};

export default Admin_Panel;
