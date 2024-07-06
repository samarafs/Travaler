import React from "react";
import Image from "next/image";
import Link from "next/link";
function UserSettings({ user }) {
  return (
    <div className="w-full flex justify-center pt-10">
      <div className="center pt- ">
        <h2 className="pl-2 text-2xl font-bold sm:text-xl">Public Profile</h2>

        <div className="grid max-w-2xl mx-auto mt-8">
          <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
            <Image
              src={`http://localhost:8084/img/users/${user.photo}`}
              alt="user-pic"
              width={160}
              height={160}
              className="rounded-full mb-3 shadow-lg w-40 h-40 object-cover"
            />

            <div className="flex flex-col space-y-5 sm:ml-8">
              <button
                type="button"
                className="transition ease-in-out delay-150 py-3.5 px-7 text-base font-medium text-orange-100 focus:outline-none bg-orange-400 rounded-lg border border-orange-200 hover:bg-orange-500 focus:z-10 focus:ring-4 focus:ring-orange-200 "
              >
                Change picture
              </button>
              <button
                type="button"
                className="transition ease-in-out delay-150 py-3.5 px-7 text-base font-medium text-orange-400 focus:outline-none bg-white rounded-lg border border-orange-200 hover:bg-orange-100 hover:text-orange-500 focus:z-10 focus:ring-4 focus:ring-orange-200 "
              >
                Delete picture
              </button>
            </div>
          </div>

          <div className="items-center mt-8 sm:mt-14 text-[#202142]">
            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div className="w-full">
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-indigo-900"
                >
                  Your first name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                  value="Lourdes"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-indigo-900"
                >
                  Your last name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                  value="Browning"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <label
                for="number"
                className="block mb-2 text-sm font-medium text-indigo-900"
              >
                Your number
              </label>
              <input
                type="number"
                id="number"
                className="bg-indigo-50 border border-indigo-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                placeholder="+351 123-45678"
                required
              />
            </div>

            <div className="mb-2 sm:mb-6">
              <div class="mb-2 sm:mb-6 mt-5">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-indigo-900"
                >
                  Your email
                </label>

                <input
                  type="email"
                  id="email"
                  class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                  placeholder={`${user.email}`}
                  required
                />
              </div>
              <label
                for="location"
                className="block mb-2 text-sm font-medium text-indigo-900"
              >
                Your location
              </label>

              <input
                type="text"
                id="text"
                className="bg-indigo-50 border border-indigo-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                placeholder={`${user.location}`}
                required
              />
            </div>
            <div className="w-full">
              <label
                for="last_name"
                className="block mb-2 text-sm font-medium text-indigo-900"
              >
                Spoken languages
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                placeholder={`${user.languages}`}
                required
              />
            </div>

            <div className="mb-6 mt-5">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-indigo-900"
              >
                Biography
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-orange-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-orange-500 focus:border-orange-500 "
                placeholder={`${user.description}`}
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-indigo-900"
              >
                Social Media
              </label>
              <textarea
                id="message"
                rows="2"
                className="block p-2.5 w-full text-sm text-orange-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-orange-500 focus:border-orange-500 "
                placeholder="https://www.instagram.com/bytes4future/"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Link href="/profile">
                <button
                  type="submit"
                  className="transition ease-in-out delay-150 text-white bg-orange-400  hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Save
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
