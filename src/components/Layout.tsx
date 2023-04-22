import React from "react";
import { Link } from "gatsby";

import avatar from "src/images/avatar.png";

namespace Layout {
  export const Container = ({ children }: any) => (
    <div className="p-0 m-0 h-screen flex flex-row items-stretch bg-gray-300">
      {children}
    </div>
  );
  export const Sidebar = ({ children }: any) => (
    <aside className="w-64 overflow-y-auto bg-gray-900 flex-shrink-0">{children}</aside>
  );
  export const SidebarLogo = () => (
    <div className="w-32 h-32 mx-auto mt-2 rounded-full overflow-hidden">
      <img src={avatar} />
    </div>
  );
  export const SidebarItem = ({ children, href = "#" }: any) => {
    const isActive =
      window.location.pathname === href ||
      window.location.pathname === `${href}/`;
    return (
      <li>
        <Link
          to={href}
          className={`font-copperplate text-lg flex justify-center items-center p-4 m-4 rounded-lg text-center cursor-pointer ${
            isActive ? "bg-amber-600" : "bg-gray-600 hover:bg-gray-500"
          } text-white shadow-lg`}
        >
          {children}
        </Link>
      </li>
    );
  };
  export const Main = ({ children }: any) => (
    <main className="flex-grow overflow-y-auto">{children}</main>
  );
}

export const MainLayout = ({ children }: any) => (
  <>
    <Layout.Container>
      <Layout.Sidebar>
        <Layout.SidebarLogo />
        <ul>
          <Layout.SidebarItem href="/">About Me</Layout.SidebarItem>
          <Layout.SidebarItem href="/blog">Blog</Layout.SidebarItem>
          <Layout.SidebarItem href="/misc">Misc.</Layout.SidebarItem>
        </ul>
      </Layout.Sidebar>
      <Layout.Main>{children}</Layout.Main>
    </Layout.Container>
  </>
);

export default Layout;
