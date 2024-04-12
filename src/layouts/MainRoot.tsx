import { Outlet } from "react-router-dom";
import { Favorites } from "../components/favorites/Favorites";
import { TopMenu } from "../components/menu/TopMenu";

const MainRoot = () => (
  <div className="relative flex-grow bg-gray-300 dark:bg-gray-900">
    <TopMenu />
    <Favorites />
    <Outlet />
  </div>
);

export default MainRoot;
