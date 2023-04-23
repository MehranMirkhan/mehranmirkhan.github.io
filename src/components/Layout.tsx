import React from "react";
import { Link } from "gatsby";
import {
  UserCircleIcon,
  PencilSquareIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";

import { isBrowser } from "src/utils";
import profile from "src/images/profile.jpg";

namespace Layout {
  export const Container = ({ children }: any) => (
    <>
      <title>Mehran Mirkhan - Personal Website</title>
      <div className="p-0 m-0 h-screen flex flex-row items-stretch bg-gray-300">
        {children}
      </div>
    </>
  );
  export const Sidebar = ({ children }: any) => (
    <aside className="w-64 overflow-y-auto bg-slate-800 flex-shrink-0">
      {children}
    </aside>
  );
  export const SidebarLogo = () => (
    <img
      src={profile}
      className="w-32 h-32 mx-auto my-10 rounded-full overflow-hidden"
    />
  );
  export const SidebarItem = ({ children, href = "#" }: any) => {
    const path = isBrowser()
      ? window.location.pathname.split("/").filter((s) => !!s)[0] ?? ""
      : "";
    const isActive = isBrowser()
      ? href === path ||
        href === `${path}/` ||
        href === `/${path}` ||
        href === `/${path}/`
      : href === "/";
    return (
      <li>
        <Link
          to={href}
          className={`text-lg flex items-center p-4 text-center ${
            isActive ? "bg-sky-600" : "bg-slate-700 hover:bg-slate-600"
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
        <div className="h-full flex flex-col justify-between">
          <div>
            <Layout.SidebarLogo />
            <ul>
              <Layout.SidebarItem href="/">
                <UserCircleIcon className="h-6 w-6 mr-6 text-white" />
                About Me
              </Layout.SidebarItem>
              <Layout.SidebarItem href="/blog">
                <PencilSquareIcon className="h-6 w-6 mr-6 text-white" />
                Blog
              </Layout.SidebarItem>
              <Layout.SidebarItem href="/misc">
                <Cog8ToothIcon className="h-6 w-6 mr-6 text-white" />
                Misc.
              </Layout.SidebarItem>
            </ul>
          </div>
          <div className="text-center p-2 text-gray-400 text-xs font-general">
            © {new Date().getFullYear()} Mehran Mirkhan
            <br />
            All rights reserved
          </div>
        </div>
      </Layout.Sidebar>
      <Layout.Main>{children}</Layout.Main>
    </Layout.Container>
  </>
);

export default Layout;
