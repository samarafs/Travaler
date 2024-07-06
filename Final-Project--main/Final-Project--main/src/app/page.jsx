import Image from "next/image";
import data, { searchTours } from "../actions/tourActions/tour";
import Search from "../components/search/search";
import Card from "../components/card/card";
import Stories from "./clientstories/page";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { IoIosInformationCircleOutline } from "react-icons/io";
import TourSearch from "@/components/tour/SearchTour";

export default async function Home() {
  const toursData = await data();

  const searchTour = async (query) => {
    "use server";
    return await searchTours(query);
  };

  // const toursData = await fetchToursData().then((data) => data.data.data);

  return (
    <main>
      <div className={styles.main}>
        <div>
          <h1 className={styles.mainTitle}>Discover The World With Us</h1>
          <p
            className={styles.subTitle}
          >{`wherever you go let’s make it happen`}</p>
        </div>
        <div className={styles.search}>
          <Search />
          {/* <TourSearch searchTours={searchTour} toursValues={toursData.data.data} setTours={setTours} /> */}
        </div>
      </div>

      <div className="flex justify-center align-center m-12">
        <h1 className="text-3xl text-gray-900 font-bold place-content-center ">
          Best <span className="text-orange-500 font-bold">vacation plan</span>
        </h1>
      </div>

      <div>
        <div className="collapse justify-start ml-3">
          <input type="checkbox" />
          <div className="collapse-title text-2xl text-gray-500">
            <IoIosInformationCircleOutline />
          </div>
          <p className="collapse-content text-sm text-gray-500">
            <span>drag to the right to see more packages</span>
          </p>
        </div>
      </div>
      <div className="card carousel rounded-box w-full shrink-0 my-10">
        <ul className=" carousel-item">
          {toursData.data.data.map((tour) => (
            <Link href={`/tour/${tour._id}`} key={tour._id}>
              <Card carousel rounded-box key={tour._id} tour={tour} />
            </Link>
          ))}
        </ul>
      </div>

      <div className={styles.stories}>
        <span className="m-10 place-content-center flex ">
          <div className="divider divider-info w-1/3 ">Joyful Experiences</div>
        </span>
      </div>
      <Stories />
    </main>
  );
}
