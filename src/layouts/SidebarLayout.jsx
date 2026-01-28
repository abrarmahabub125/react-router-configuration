import { Outlet } from "react-router";
import FriendSidebar from "../sidebars/friendsidebar";
import GroupeSidebar from "../sidebars/GroupeSidebar";
import MarketplaceSidebar from "../sidebars/MarketplaceSidebar";

const SidebarLayout = () => {
  const renderSidebar = () => {
    if (location.pathname.startsWith("/friends")) {
      return <FriendSidebar />;
    }
    if (location.pathname.startsWith("/groups")) {
      return <GroupeSidebar />;
    }
    if (location.pathname.startsWith("/marketplace")) {
      return <MarketplaceSidebar />;
    }
    return <div className="p-4">No Sidebar</div>;
  };

  return (
    <div className="grid grid-rows-1 grid-cols-[350px_1fr] h-full">
      <div className="border-r border-neutral-300">{renderSidebar()}</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
