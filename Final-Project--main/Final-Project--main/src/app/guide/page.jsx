import styles from "../../styles/Guide.module.css";
import GuideCard from "../../components/guideCard/guideCard";
import { getGuides } from "../../actions/guideAction/guideAction";
export default async function Guide() {
  const data = await getGuides();
  console.log(data);

  return (
    <div>
      <div className={styles.background}>
        <p className={styles.paragrafo}>
          Find the perfect person to guide you on your journey...
        </p>
      </div>
      <p className="text-1xl p-10 text-center">
        {`Passionate travellers ready to lead you on an unforgettable trip: learn
        more about them! Search their name here to find their next trip :)`}
      </p>

      <div className={styles.search}>
        <div className="bg-white opacity-90 rounded-lg shadow-md p-4 w-[480px]">
          <div className="flex gap-3">
            <input
              type="search"
              name="search"
              placeholder="Search for Guides by Name, Location..."
              className="input input-bordered w-full bg-white "
            />
            <button className="btn btn-ghost btn-circle bg-orange-400 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.guidecards}>
        {data.data.guides.map((guide) => (
          <GuideCard guide={guide} key={guide._id} />
        ))}
      </div>
    </div>
  );
}
