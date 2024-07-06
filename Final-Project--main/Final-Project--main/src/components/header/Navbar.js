"use client";
import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { useScrollPosition } from "./useScrollPosition";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  // const [coisas, setCoisas] = useState("LKDJASDlk");
  const scrollPosition = useScrollPosition();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header>
      <div
        className={classNames(
          scrollPosition > 150
            ? "bg-[#197084] text-white shadow-2xl"
            : "bg-transparent  text-white ",
          " fixed z-40 transition ease-in-out duration-500  w-full flex justify-between"
        )}
      >
        <div className=" hover:cursor-pointer ml-6">
          <div className="ml-2">
            <Image src="/logo.png" alt="logo" width={50} height={50 } />
          </div>
          <p
            className={classNames(
              scrollPosition > 150
                ? " text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)] text-sm mr-6"
                : " text-orange-400 [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)] text-sm mr-6",
              "menu menu-horizontal hover:cursor-pointer   "
            )}
          >
            WonderGo
          </p>
        </div>

        <ul
          className={classNames(
            scrollPosition > 150 ? " text-white " : " text-orange-400 ",
            "menu menu-horizontal gap-12 hover:cursor-pointer  text-sm mr-6"
          )}
        >
          <li className="pt-3 ">
            <Link
              href="/"
              className="[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]  hover:underline hover:underline-thick hover:underline-offset-4 "
            >
              Home
            </Link>
          </li>

          <li className="pt-3 ">
            <Link
              href="/package"
              className="[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] hover:underline hover:underline-thick hover:underline-offset-4 "
            >
              Tour Packages
            </Link>
          </li>
          <li className="pt-3">
            <Link
              href="/guide"
              className="[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] hover:underline hover:underline-thick hover:underline-offset-4 "
            >
              Guide
            </Link>
          </li>
          <li className="pt-3">
            <Link
              href="/community"
              className="[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] hover:underline hover:underline-thick hover:underline-offset-4 "
            >
              Community
            </Link>
          </li>
          <li className="pt-3">
            <Link
              href="/about"
              className="[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] hover:underline hover:underline-thick hover:underline-offset-4 "
            >
              About Us
            </Link>
          </li>
          <li className="pt-3">
            <Link
              href="#footer"
              className="[text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] hover:underline hover:underline-thick hover:underline-offset-4 "
            >
              Contact
            </Link>
          </li>

          <li>
            <div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={10}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="rounded-full">
                    <VscAccount className="w-9 h-9" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3   shadow menu menu-sm dropdown-content w-44 rounded-md bg-[#197084] text-white"
                >
                  <li>
                    <Link href="/login" className=" hover:font-bold">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile" className="hover:font-bold">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/community-user" className="hover:font-bold">
                      My Community
                    </Link>
                  </li>
                  <li>
                    <Link href="/settings" className="hover:font-bold">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/tourRegistry"
                      className="hover:font-bold"
                    >
                      Admin Panel
                    </Link>
                  </li>

                  <li>
                    <Link href="/" className="hover:font-bold">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
