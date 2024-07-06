"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AddTourForm from "./TourForm";
import TourSearch from "./SearchTour";

function TourCRUD({
  toursData,
  deleteTourRecord,
  insertTourRecord,
  searchTour,
}: {
  toursData: any;
  deleteTourRecord: (id: string) => Promise<any>;
  insertTourRecord: (formData: FormData) => Promise<any>;
  searchTour: (query: string) => Promise<any>;
}) {
  const [showTourForm, setShowTourForm] = useState(false);
  const [tours, setTours] = useState(toursData);

  const handleDelete = async (id: string) => {
    await deleteTourRecord(id);
  };

  const handSearch = async (query: string) => {
    const results = await searchTour(query);
    setTours(results);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className=" flex justify-center gap-4 items-center">
        <TourSearch
          searchTours={handSearch}
          setTours={setTours}
          toursValues={toursData}
        />
        <button
          className="btn  bg-orange-400 hover:bg-orange-500 border-none text-white my-3"
          onClick={() => setShowTourForm(!showTourForm)}
        >
          {showTourForm ? "Close" : "Add New Tour"}
        </button>
      </div>

      {showTourForm ? (
        <AddTourForm
          insertTourRecord={insertTourRecord}
          setShowTourForm={setShowTourForm}
        />
      ) : (
        <div className="overflow-x-auto mt-10 w-full px-20 ">
          <table className="table w-full rounded-lg  ">
            <thead className=" text-gray-600 border-none  bg-orange-100 text-base	">
              <tr className=" border-none">
                <th></th>
                <th>Name</th>
                <th>Duration</th>
                <th>Max Group Size</th>
                <th>Difficulty</th>
                <th>Ratings Average</th>
                <th>Price</th>
                <th>Image Cover</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {tours?.map((tour: any, index: number) => (
                <tr className="border-none" key={tour._id}>
                  <th>{index + 1}</th>
                  <td>{tour.name}</td>
                  <td>{tour.duration}</td>
                  <td>{tour.maxGroupSize}</td>
                  <td>{tour.difficulty}</td>
                  <td>{tour.ratingsAverage}</td>
                  <td>{tour.price}</td>
                  <td>
                    <Image
                      src={`http://localhost:8084/img/tours/${tour.imageCover}`}
                      className="rounded-full w-14 h-14 "
                      alt="image"
                      width={100}
                      height={100}
                    />
                  </td>
                  <td>
                    <Link
                      className="btn bg-[#f2fffd] border-orange-500 text-orange-500 hover:bg-orange-200 hover:border-orange-600 hover:text-orange-600"
                      href={`/tour/${tour._id}`}
                    >
                      View
                    </Link>
                  </td>
                  <td>
                    <button className="btn bg-[#f2fffd] border-orange-500 text-orange-500 hover:bg-orange-200 hover:border-orange-600 hover:text-orange-600 ">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(tour._id)}
                      className="btn bg-orange-400 hover:bg-orange-500 border-none text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TourCRUD;
