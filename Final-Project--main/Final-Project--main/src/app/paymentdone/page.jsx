import React from "react";
import Link from "next/link";
export default function paymentDone() {
  return (
    <div className="pt-32">
      <div>
        <div className=" p-6  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center flex flex-col justify-center w-1/2 mx-auto">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold ">
              Your payment has been successfully confirmed!
            </h3>
            <p className="text-gray-700 my-5  ">
              {`We're so excited that you've decided to join us on this incredible
              journey! ✈️
              You're just one step away from making your dream come
             true. To access all the information
              about your package, including dates, itinerary, accommodation, and flights, simply click on the link below:`}
            </p>
            <p className="text-lg"> Have a great day! </p>
            <div className="py-10 text-center">
              <div>
                <Link href="/profile">
                  <button className="block  max-w-xs mx-auto bg-orange-400 hover:bg-orange-500 focus:bg-orange-600 text-white rounded-lg px-3 py-2 font-semibold">
                    <i className="mdi mdi-lock-outline mr-1"></i> GO TO MY
                    PROFILE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
