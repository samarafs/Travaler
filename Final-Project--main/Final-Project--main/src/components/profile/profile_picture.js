"use client";

import styles from "../../styles/Profile.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";

export default function Profile({ user, key }) {
  const alert = () => {
    toast.info("No problem! You can joy the commmunity whenever you want :)");
  };

  return (
    <div className={styles.background}>
      <div className={styles.page}>
        <div>
          <div className="bg-white shadow-xl pb-8">
            <div className="w-full h-[250px]">
              <img src="/banner.png" className="w-full h-full " />
            </div>
            <div className="flex flex-col items-center -mt-20">
              <Image
                src={`http://localhost:8084/img/users/${user.photo}`}
                alt="user-pic"
                width={160}
                height={160}
                className="rounded-full mb-3 shadow-lg"
              />
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-2xl">{user.name}</p>
              </div>
              {/* <p class="text-gray-700">I love travelling</p> */}
              <p className="text-sm text-gray-500">{user.location}</p>
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
              <div className="flex items-center space-x-4 mt-2">
                <Link href="/settings">
                  <button className="flex items-center bg-orange-400 hover:bg-orange-500 focus:bg-orange-600 text-white rounded-lg px-3 py-2 space-x-2 transition duration-100">
                    <span className="flex items-center gap-1">
                      <CiSettings />
                      Settings
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8 mt-4 mx-3">
            <h4 className="text-xl text-gray-900 font-bold">Biography</h4>
            <p className="mt-2 text-gray-700">{user.description}</p>
          </div>
          <div className="flex gap-3 w-full">
            <div className=" flex flex-col 2xl:w-1/3 mt-4 ml-3 w-1/2">
              <div className=" bg-white rounded-lg shadow-xl p-8 pb-16">
                <h4 className="text-xl text-gray-900 font-bold">
                  Personal Info
                </h4>
                <ul className="mt-5 text-gray-700">
                  <li className="flex border-y py-2">
                    <span className="font-bold w-24">Full name:</span>
                    <span className="text-gray-700">{user.name}</span>
                  </li>

                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Mobile:</span>
                    <span className="text-gray-700">+351 123-1234</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Email:</span>
                    <span className="text-gray-700">{user.email}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Location:</span>
                    <span className="text-gray-700">{user.location}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Languages:</span>
                    <span className="text-gray-700">
                      {user.languages.map(
                        (language, index) => " " + language + " "
                      )}
                    </span>
                  </li>
                  <li className="flex items-center border-b py-2 space-x-2">
                    <span className="font-bold w-24">Elsewhere:</span>
                    <Link
                      href="https://www.instagram.com/bytes4future/"
                      target="_blank"
                    >
                      <FaWhatsapp className="w-5 h-5 hover:text-orange-500 hover:cursor-pointer" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/bytes4future/"
                      target="_blank"
                    >
                      <FaInstagram className="w-5 h-5 hover:text-orange-500 hover:cursor-pointer" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8 mr-3 w-1/2">
              <h4 className="text-xl text-orange-500 font-bold">My package</h4>
              <div className="mt-5 w-2/3">
                <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-gray-900">
                      The Sea Explorer
                    </span>
                    <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                      7 days
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-6 ">
                    <div>
                      <svg
                        className="w-12 h-12 p-2.5 bg-orange-400 bg-opacity-20 rounded-full text-orange-600 border border-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col ">
                      <div className="flex items-end">
                        <span className="text-base font-bold">Miami, USA</span>
                        <div className="flex items-center ml-2 mb-1">
                          <span className="font-bold text-sm text-gray-500 ml-0.5">
                            €1000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 px-3">
            <div className="flex-1 text-gray-900 text-lg m-24 text-center">
              <p>
                Ready to make some amazing connections? Join our community and
                connect with other solo travelers who are excited to explore the
                world with you.
              </p>
              <p className="mt-4 font-bold">
                Would you like to share your profile to the community about your
                trip?
              </p>
              <div className="flex place-content-center gap-8 mt-10">
                <Link href="/community-user">
                  <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-xl w-32">
                    I'm in
                  </button>
                </Link>
                <ToastContainer
                  position="top-right"
                  autoClose={8000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />

                <button
                  onClick={alert}
                  className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-xl w-32"
                >
                  Not now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
