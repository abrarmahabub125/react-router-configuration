import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="grid grid-cols-3 h-full">
      <aside>
        <div>sidebar</div>
      </aside>
      <div className="border-l border-r border-neutral-300">
        <Outlet />
      </div>

      <aside>
        <div>sidebar</div>
      </aside>
    </div>
  );
};

export default HomeLayout;
