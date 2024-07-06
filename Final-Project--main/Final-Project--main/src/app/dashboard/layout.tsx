import Aside from "@/components/dashboard/dashbaord/Aside";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex gap-1">
      {/* <Aside /> */}
      <main className="w-full mt-32">{children}</main>
    </div>
  );
}

export default Layout;
