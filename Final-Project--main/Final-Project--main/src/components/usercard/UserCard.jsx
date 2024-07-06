import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";
import { MdHome } from "react-icons/md";
import { getNormalUser } from "../../actions/userAction/userAction";
import styles from "../../styles/Test.module.css";

export default async function UserCard({ user, key }) {
  return (
    <div key={key}>
      <div className="rounded-lg flex flex-col items-center mt-6 w-full bg-white shadow-xl p-3 h-96">
        <div className="p-8 flex flex-col justify-center items-center w-96">
          <Image
            src={`http://localhost:8084/img/users/${user.photo}`}
            alt="user-pic"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full shadow-xl"
          />
          <p className="font-bold mt-4">{user.name}</p>
          <p className="text-sm">
            <span className=" text-gray-800 mt-1 items-center gap-2 flex">
              <IoLanguageSharp />
              {user.languages.map((language, index) => " " + language + " ")}
            </span>
          </p>

          <div className="mt-2 px-5">
            <p className="text-sm text-center px-5">{user.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="flex gap-3 hover:cursor-pointer align-middle items-center mt-1">
            <FaInstagram className="hover:cursor-pointer w-6 h-6 hover:text-orange-500" />
            <FaWhatsapp className="hover:cursor-pointer w-6 h-6 hover:text-orange-500" />
          </span>
        </div>
      </div>
    </div>
  );
}
