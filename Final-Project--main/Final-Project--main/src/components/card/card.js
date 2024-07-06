import Image from "next/image";
import React from "react";
import { BiSolidNavigation } from "react-icons/bi";

export default function Card(props) {
  console.log(
    "card............................................................",
    props.tour
  );
  return (
    <div
      key={props.tour._id}
      className=" card w-[330px] h-[400px] mx-5 bg-white shadow-lg carousel-item  rounded-xl shrink-0"
    >
      <div>
        <Image
          className="w-full rounded-tl-xl rounded-tr-xl h-52 "
          src={`http://localhost:8084/img/tours/${props.tour.imageCover}`}
          alt="image"
          width={200}
          height={200}
        />
      </div>
      <div className="flex justify-between pl-3 font-bold mt-6 mr-3 text-xl">
        <h1>{props.tour.name}</h1>
        <br />
        <p className="font-bold text-orange-600 text-xl	">
          {props.tour.price} €
        </p>
      </div>
      <div>
        <h1 className="pl-3 mt-3 mb-3 text-gray-500">
          {props.tour.startLocation.description}
        </h1>
      </div>
      <div className="flex justify-between pl-3 ">
        <p className="text-sm">
          <span className="flex align-middle">
            <BiSolidNavigation className="mr-1 w-5 h-5" />
            {props.tour.duration}
            &nbsp; Days Trip
          </span>
        </p>
        <div className="content-center mb-3 flex mr-3">
          <div className="rating">
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-yellow-500 mr-1"
            />
          </div>
          <div className=" text-gray-500 text-lg">{props.tour.rating}</div>
        </div>
      </div>
    </div>
  );
}
