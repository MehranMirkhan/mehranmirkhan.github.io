import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import {
  UserCircleIcon,
  PencilSquareIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";

import { isBrowser } from "src/utils";
import logo from "src/images/MM_logo.png";

namespace Layout {
  export const Container = ({ children }: any) => (
    <>
      <title>Mehran Mirkhan - Personal Website</title>
      <div className="p-0 m-0 h-screen flex flex-row items-stretch bg-gray-400">
        {children}
      </div>
    </>
  );
  export const Sidebar = ({ children }: any) => (
    <aside className="w-64 overflow-y-auto bg-gray-900 flex-shrink-0">
      {children}
    </aside>
  );
  export const SidebarLogo = () => (
    <img
      src={logo}
      className="w-48 h-48 mx-auto my-6 rounded-full overflow-hidden brightness-150"
    />
  );
  export const SidebarItem = ({ children, href = "#" }: any) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    useEffect(() => {
      if (!isBrowser()) setIsActive(false);
      else {
        const path =
          window.location.pathname.split("/").filter((s) => !!s)[0] ?? "";
        setIsActive(
          href === path ||
            href === `${path}/` ||
            href === `/${path}` ||
            href === `/${path}/`
        );
      }
    });
    return (
      <li>
        <Link
          to={href}
          className={`text-lg flex items-center p-4 text-center ${
            isActive
              ? "bg-sky-600 text-gray-100"
              : "bg-gray-700 hover:bg-gray-600 text-gray-300"
          } shadow-lg`}
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
                <UserCircleIcon className="h-6 w-6 mx-6" />
                About Me
              </Layout.SidebarItem>
              <Layout.SidebarItem href="/blog">
                <PencilSquareIcon className="h-6 w-6 mx-6" />
                Blog
              </Layout.SidebarItem>
              <Layout.SidebarItem href="/misc">
                <Cog8ToothIcon className="h-6 w-6 mx-6" />
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
