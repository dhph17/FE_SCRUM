import PropTypes from 'prop-types';
import SideBarSearch from '../sidebar/SideBar_Search';

const Panel_Search = ({ children }) => {
    return (
        <div className="flex -mt-4">
            <SideBarSearch />

            <div className="flex-1 p-6">
                <div className="bg-gray-200 min-h-[50vh] p-4 rounded-lg mb-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

Panel_Search.propTypes = {
    children: PropTypes.node,
};

export default Panel_Search;
