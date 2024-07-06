

import React from "react";
import Link from "next/link";
import { getNormalUser } from "../../actions/userAction/userAction";
import UserSettings from "../../components/usersettings/UserSettings";


async function Settings() {
  const data = await getNormalUser();

  return (
    <div className="pt-20 w-full flex">
      <div className="flex flex-col start mr-4 border-r border-orange-100 top-12 p-10">
        <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

        <Link
          href="#"
          className="flex items-center px-3 py-2.5 font-medium hover:bg-orange-100 hover:rounded-lg focus:font-semibold"
        >
          Account Settings
        </Link>
        <Link
          href="community-user"
          className="flex items-center px-3 py-2.5 font-medium hover:bg-orange-100 hover:rounded-lg focus:font-semibold"
        >
          Community
        </Link>
      </div>

      <div className="flex-grow flex justify-center items-center mr-7 gap-6 text-[#161931]">
        <div className="w-full">
          {data.data.users.map((user) =>
            user._id === "5c8a1dfa2f8fb814b56fa181" ? (
              <UserSettings user={user} key={user._id} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
