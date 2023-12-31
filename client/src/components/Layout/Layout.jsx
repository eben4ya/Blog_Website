import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <main className="mx-auto my-0 max-w-[700px] p-[10px] ">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
