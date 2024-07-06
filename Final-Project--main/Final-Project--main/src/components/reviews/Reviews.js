import React from "react";

export default function Stories() {
  return (
    <div className="flex ml-16 mt-16 text-center h-96 w-full ">
      <div className="avatar flex w-1/2 ">
        <div>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="ml-2 text-lg mt-3 ">
            {`"Solo trip to Machu Picchu with WonderGo was a dream
            come true! They took care of everything from the personalized
            itinerary to group activities. I made friends and had unforgettable
            experiences."`}
          </p>
          <p className="ml-2 text-lg font-bold  mt-2">Tom Cavalcante</p>
        </div>
      </div>
      <div className="avatar flex w-1/2 ">
        <div>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="ml-2 text-lg  mt-3">
            {`"Always wanted to visit Tokyo, but was unsure about solo travel. WonderGo gave me the confidence I needed. They provided a customized itinerary with experienced local guides. I felt immersed in
          Japanese culture from the start."`}
          </p>
          <p className="ml-2 text-lg font-bold  mt-2">Isabella Saito</p>
        </div>
      </div>
    </div>
  );
}
