import { Outlet } from "react-router";
import { Header } from "../components/Header";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
