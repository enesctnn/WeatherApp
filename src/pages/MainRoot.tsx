import { Outlet } from 'react-router-dom';

const MainRoot = () => (
  <div className="flex-grow bg-gray-900 relative">
    <Outlet />
  </div>
);

export default MainRoot;
