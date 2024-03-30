import { Outlet } from 'react-router-dom';
import { Favorites } from '../components/favorites/Favorites';
import { LanguageSelect } from '../components/language/LanguageSelect';

const MainRoot = () => (
  <div className="flex-grow bg-gray-900 relative">
    <LanguageSelect />
    <Favorites />
    <Outlet />
  </div>
);

export default MainRoot;
