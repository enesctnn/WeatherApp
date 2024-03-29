import { Outlet } from 'react-router-dom';
import { Favorites } from '../components/favorites/Favorites';

const MainRoot = () => (
  <div className="flex-grow bg-gray-900 relative">
    <Favorites />
    <Outlet />
  </div>
);

export default MainRoot;
