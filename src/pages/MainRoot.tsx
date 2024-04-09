import { Outlet } from 'react-router-dom';
import { Favorites } from '../components/favorites/Favorites';
import { TopMenu } from '../components/menu/TopMenu';

const MainRoot = () => (
  <div className="flex-grow bg-gray-300 dark:bg-gray-900 relative">
    <TopMenu />
    <Favorites />
    <Outlet />
  </div>
);

export default MainRoot;
