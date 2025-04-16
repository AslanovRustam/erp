import { Suspense, type FC } from "react";
import styles from "./layout.module.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.mainContent}>
        <Sidebar />
        {/* Placeholder for routed components, wrapped in Suspense for lazy loading */}
        <Suspense fallback={<div>Loading...</div>}>
          {/* Renders the matched route element*/}
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
