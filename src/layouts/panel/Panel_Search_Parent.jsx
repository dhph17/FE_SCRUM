import PropTypes from 'prop-types';
import SideBarSearchParent from '../sidebar/SideBar_Search_Parent';

const Panel_Search_Parent = ({ children }) => {
  return (
    <div className="flex -mt-4">
      <SideBarSearchParent />

      <div className="flex-1 p-6">
        <div className="bg-gray-200 min-h-[50vh] p-4 rounded-lg mb-4">
          {children}
        </div>
      </div>
    </div>
  );
};

Panel_Search_Parent.propTypes = {
  children: PropTypes.node,
};

export default Panel_Search_Parent;
