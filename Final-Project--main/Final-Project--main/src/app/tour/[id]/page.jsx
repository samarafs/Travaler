import { FaStar, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import ReviewForm from "@/components/reviews/ReviewForm";
import Image from "next/image";
import { createReview } from "@/actions/reviewAction/reviewActions";
import { CgAirplane } from "react-icons/cg";
import { MdHotel, MdLocalBar } from "react-icons/md";
import { FaBowlFood, FaWifi } from "react-icons/fa6";
import { FaSwimmingPool } from "react-icons/fa";
import { getTourById } from "@/actions/tourActions/tour";

async function page({ params }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  const addReview = async (review, rating, tourId, userId) => {
    "use server";
    return await createReview(review, rating, tourId, userId);
  };

  const tour = await getTourById(params.id);
  console.log("tour::: ", tour);
  return (
    <div className=" pt-8 ml-12">
      <div className="flex justify-center items-middle align-middle w-full ">
        <div className="flex relative z-20 items-center overflow-hidden mt-20  ">
          <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-3/5 flex flex-col relative ">
              <h1 className="uppercase text-7xl font-black flex flex-col leading-none text-gray-800 ">
                {tour.data.data.name}
              </h1>
              <p className="flex items-center text-sm sm:text-base text-gray-700 mt-2">
                Ratings:{renderStars(tour.data.data.ratingsAverage)} (
                {tour.data.data.ratingsQuantity} reviews)
              </p>
              <p className="text-sm sm:text-base text-gray-700 mt-2">
                {tour.data.data.summary}
              </p>
              <div className="flex mt-2">
                <p className="font-bold text-4xl mr-4">
                  € {tour.data.data.price}
                </p>
                <Link
                  href={`/payment/${tour.data.data._id}`}
                  className="transition ease-in-out delay-150 uppercase py-2 px-4 rounded-lg bg-orange-500 border-2 border-transparent text-white text-md mr-4 hover:bg-orange-600"
                >
                  Book
                </Link>
              </div>

              <h3 className="mt-4 font-semibold text-base ">Overview</h3>
              <p className="mt-2 text-sm ">{tour.data.data.description}</p>
              <h3 className="mt-4 font-semibold text-base">
                What’s included in the package?
              </h3>

              <div className="flex flex-column mt-2">
                <div>
                  <div className="flex flex-row">
                    <CgAirplane className="w-6 h-6" />
                    <p className="text-sm mt-1 ml-1 font-semibold">Flight</p>
                  </div>
                  <div className="flex flex-row">
                    <MdHotel className="w-6 h-6" />
                    <p className="text-sm mt-1 ml-1 font-semibold">Hotel</p>
                  </div>
                  <div className="flex flex-row">
                    <FaBowlFood className="w-5 h-5 mt-1" />
                    <p className="text-sm mt-1 ml-2 font-semibold">
                      Daily Breakfast & Dinner
                    </p>
                  </div>
                </div>

                <div className="ml-12">
                  <div className="flex flex-row">
                    <FaSwimmingPool className="w-5 h-5 mt-1" />
                    <p className="text-sm ml-1 mt-1 font-semibold">
                      Access to Hotel Swimming Pool
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <MdLocalBar className="w-5 h-5 mt-1" />
                    <p className="text-sm mt-1 ml-1 font-semibold">Hotel bar</p>
                  </div>
                  <div className="flex flex-row">
                    <FaWifi className="w-5 h-5 mt-1" />
                    <p className="text-sm mt-1 ml-1 font-semibold">WiFi</p>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 font-semibold text-base">Start Location:</h3>
              <p className="mt-1 text-sm">
                {tour.data.data.startLocation.description}
              </p>
              <p className="mt-2 text-sm">
                <span className="font-semibold text-sm">
                  Other locations you will visit: <br />
                </span>
                {tour.data.data.locations[0].description}
                <br></br>
                {tour.data.data.locations[1].description}
                <br></br>
              </p>
              <h3 className="mt-4 font-semibold text-base ">
                Other Information
              </h3>
              <p className="mt-2 text-sm">
                <span className="font-semibold">Duration: </span>
                {tour.data.data.duration} days
              </p>
              <p className="mt-2 text-sm">
                <span className="font-semibold text-sm">Group Size: </span>
                {tour.data.data.maxGroupSize} people
              </p>
              <p className="mt-2 text-sm">
                <span className="font-semibold text-sm">Difficulty: </span>
                {tour.data.data.difficulty}
              </p>
              <p className="mt-2 text-sm">
                <span className="font-semibold text-sm">Guide: </span>
                {tour.data.data.guide === false ? "No guide" : "Yes"}
              </p>
              <p className="mt-2 text-xs">
                *Difficulty describes the level of difficulty of the tour.
              </p>
              <p className="mt-6 font-semibold italic text-base ">
                If you need more information, don't hesitate to contact us!
              </p>
              <h3 className="mt-6 font-semibold text-base ">Reviews</h3>
              <div className="mb-8">
                {tour.data.data.reviews.map((review) => (
                  <div key={review.id} className="mb-4 p-4 border rounded-lg">
                    <h4 className="text-xl font-bold">{review.user.name}</h4>
                    <p className="flex items-center">
                      <strong>Rating:</strong> {renderStars(review.rating)}
                    </p>
                    <p>{review.review}</p>
                    <p className="text-sm text-gray-500">
                      <em>{new Date(review.createdAt).toLocaleDateString()}</em>
                    </p>
                  </div>
                ))}
                <ReviewForm tourId={params.id} addReview={addReview} />
              </div>
            </div>
            <div className="  mb-3/4 w-2/4 ">
              <div className="carousel carousel-center h-96 w-2/2  space-x-4 rounded-box ml-6">
                {tour.data.data.images.map((image) => (
                  <div key={image.id} className="carousel-item">
                    <Image
                      src={`http://localhost:8084/img/tours/${image}`}
                      alt="image"
                      width={450}
                      height={400}
                      className="rounded-box"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
