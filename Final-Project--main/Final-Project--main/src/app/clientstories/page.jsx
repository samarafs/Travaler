import React from "react";

export default function Stories() {
  return (
    <div className="flex flex-col w-full lg:flex-row h-96">
      <div className="grid flex-grow h-32 card  rounded-box place-items-center mt-10">
        <div className=" w-1/2 flex flex-col align-middle text-lg text-gray-900 text-center mb-3">
          <div className="w-24 place-self-center mb-3 ">
            <img
              src="https://image.tmdb.org/t/p/w235_and_h235_face/oueWhEj3zPxnpMi8h3K1uSS8CBs.jpg"
              className="rounded-full"
            />
          </div>
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            aria-hidden="true"
            className="flex-shrink-0 text-orange-200 "
          >
            <path
              d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
              fill="currentColor "
            />
          </svg>
          <p>
            {` "Solo trip to Machu Picchu with WonderGo was a dream
              come true! They took care of everything from the personalized
              itinerary to group activities. I made friends and had unforgettable
              experiences."`}
          </p>
          <p className="font-bold mt-3">Tom Cavalcante</p>
        </div>
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="grid flex-grow h-32 card  rounded-box place-items-center mt-10">
        <div className=" w-1/2 flex flex-col align-middle text-lg text-gray-900 text-center mb-3">
          <div className="w-24 place-self-center mb-3 ">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="rounded-full"
            />
          </div>
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            aria-hidden="true"
            className="flex-shrink-0 text-orange-200"
          >
            <path
              d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
              fill="currentColor "
            />
          </svg>
          <p>
            {`  "Always wanted to visit Tokyo, but was unsure about solo travel.
               WonderGo gave me the confidence I needed. They
                provided a customized itinerary with experienced local guides. I
                felt immersed in Japanese culture from the start."`}
          </p>
          <p className="font-bold mt-3">Isabella Saito</p>
        </div>
      </div>
    </div>
  );
}
