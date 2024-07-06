"use client";
import React, { useState } from "react";
import styles from "../../styles/Login.module.css";
import { getLogin } from "@/actions/authAction/authActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
function Login() {
  const router = useRouter();
  const [openTab, setOpenTab] = useState(1);

  const handleClick = (tabIndex) => {
    setOpenTab(tabIndex);
  };

  return (
    <div className=" font-sans items-center justify-center pt-32">
      <div className="p-8">
        <div className="max-w-md mx-auto">
          <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
            <div
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                openTab === 1 ? "bg-orange-400 text-white" : ""
              }`}
              onClick={() => handleClick(1)}
            >
              Login
            </div>
            <div
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                openTab === 2 ? "bg-orange-400 text-white" : ""
              }`}
              onClick={() => handleClick(2)}
            >
              Sign Up
            </div>
          </div>

          {openTab === 1 && (
            <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-500">
                Sign in to your account
              </h2>
              <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center ">
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      alt="logo"
                      width={120}
                      height={120}
                    />
                  </Link>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                  <form
                    className="space-y-6"
                    action={async (formData) => {
                      const response = await getLogin(formData);
                      console.log(
                        " user login ============================================================================ ",
                        response
                      );
                      if (response.status === 200) {
                        router.push("/");
                      } else {
                        console.log("error");
                      }
                    }}
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type=" email"
                          placeholder=" insert your email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-black shadow-sm ring-1 ring-inset   focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Password
                        </label>
                        <div className="text-sm">
                          <a
                            href="#"
                            className="font-semibold text-orange-500 hover:text-orange-600"
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          placeholder=" ••••••••"
                          required
                          className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset   focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 "
                        />
                      </div>
                    </div>
                    <div className="flex items-start mb-5 bg">
                      <div className="flex items-center h-5 bg-slate-100">
                        <input
                          id="terms"
                          type="checkbox"
                          className="w-4 h-4  border-gray-300 rounded "
                          name="terms"
                          required
                        />
                      </div>
                      <label
                        htmlFor="terms"
                        className="ms-2 text-sm font-medium text-gray-100 dark:text-gray-300"
                      >
                        I agree with the{" "}
                        <a
                          href="#"
                          className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                          terms and conditions.
                        </a>
                      </label>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {openTab === 2 && (
            <form
              action={async (formData) => {
                await signUpAction(formData);
              }}
              className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 "
            >
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-500">
                Create an account
              </h2>
              <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center ">
                    <Link href="/">
                      <Image
                        src="/logo.png"
                        alt="logo"
                        width={120}
                        height={120}
                      />
                    </Link>
                  </div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                  <form
                    className="space-y-6"
                    action={async (formData) => {
                      const response = await getLogin(formData);
                      if (response.status === 200) {
                        router.push("/");
                      } else {
                        console.log("error");
                      }
                    }}
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          name="name"
                          type=" name"
                          placeholder=" insert your name"
                          required
                          className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-black shadow-sm ring-1 ring-inset   focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        HTMLfor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type=" email"
                          placeholder=" insert your email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-black shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          HTMLfor="password"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          placeholder=" ••••••••"
                          type="password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 "
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          HTMLfor="password"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Repeat password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="confirmPassword"
                          placeholder=" ••••••••"
                          type="password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset 0 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 "
                        />
                      </div>
                    </div>
                    <div className="flex items-start mb-5 bg">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded  dark:focus:ring-blue-600"
                          name="terms"
                          required
                        />
                      </div>
                      <label
                        htmlFor="terms"
                        className="ms-2 text-sm font-medium text-gray-100 dark:text-gray-300"
                      >
                        I agree with the{" "}
                        <a
                          href="#"
                          className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                          terms and conditions.
                        </a>
                      </label>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
