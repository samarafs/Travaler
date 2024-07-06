import { getGuides } from "../../actions/guideAction/guideAction";
import styles from "../../styles/Guide.module.css";

import { MdHome } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";

import Link from "next/link";
import Image from "next/image";

export default async function GuideCard({ guide, key }) {
  return (
    <div key={key}>
      <div className="mx-auto m-10 bg-white border border-gray-200 rounded-lg shadow-xl ">
        <div className="flex justify-center px-4 pt-4">
          <div className="flex flex-col items-center pb-10  ">
            <Image
              src={`http://localhost:8084/img/users/${guide.photo}`}
              alt="profile-guide"
              width={80}
              height={80}
              className=" w-24 h-24 rounded-full mb-3  shadow-lg"
            />
            <h5 className="mb-1 text-xl font-bold text-gray-900 mt-3">
              {guide.name}
            </h5>
            <span className=" items-center gap-2 flex text-gray-800">
              <MdHome /> Lives in {guide.location}
            </span>
            <span className=" text-gray-800 mt-1 items-center gap-2 flex ">
              <IoLanguageSharp />{" "}
              {guide.languages.map((language, index) => " " + language + " ")}
            </span>
            <span className="text-sm text-gray-700 mt-2 leading-5	 p-2 text-center  ">
              {guide.description}
            </span>

            <div className="flex mt-4 md:mt-6">
              <Link
                href="/paymentguide"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-500 "
              >
                Hire
              </Link>
              <Link
                href="https://www.instagram.com/bytes4future/"
                target="_blank"
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 "
              >
                Follow
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
