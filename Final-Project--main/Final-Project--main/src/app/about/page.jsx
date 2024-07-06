import styles from "../../styles/Home.module.css";

export default function AboutUs() {
  return (
    <div>
      <div className="bg-orange-100 w-full pt-20" id="about">
        <div className={styles.aboutMaior}>
          <div className={styles.aboutFoto}>
            <img src="/about/about.png" alt="city" />
          </div>
          <div className={styles.aboutTexto}>
            <p className="text-gray-600 mt-6 ">ABOUT US</p>
            <p className="text-gray-900 font-bold text-2xl mt-2 ">
              {`  We're not your ordinary travel agency. We're a community of
              travellers.`}
            </p>
            <p className="text-gray-900 mt-2">
              {` This page is not about how we work, it's more about giving you a
              sense of what NaTours is - or who we are. NaTours was born to
              connect people, cultures and stories through that magical activity
              that we call 'travelling'. So we group people together and send them
              to live incredible adventures around the globe. What are you waiting
              for? Come travel with us! :)`}
            </p>
            <div className="flex justify-between mt-6">
              <div>
                <p className="text-orange-400 font-bold  text-3xl	">20+</p>
                <p className="text-gray-500">Years</p>
                <p className="text-gray-500">Experience</p>
              </div>
              <div>
                <p className="text-orange-400 font-bold  text-3xl	">100+</p>
                <p className="text-gray-500">Happy</p>
                <p className="text-gray-500">Costumer</p>
              </div>
              <div>
                <p className="text-orange-400 font-bold  text-3xl	">15+</p>
                <p className="text-gray-500">Choice</p>
                <p className="text-gray-500">of Services</p>
              </div>
              <div>
                <p className="text-orange-400 font-bold  text-3xl	">15+</p>
                <p className="text-gray-500">Profissional</p>
                <p className="text-gray-500">Guides</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero  h-2/3 mt-24">
        <div className="hero-content flex-col lg:flex-row-reverse w-3/4">
          <img
            src="/about/about1.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold p-10">Connecting People</h1>
            <p className="py-6 p-10">
              {`We're more than just a travel agency - we build connections. 
            Making a difference is what
              drives us. We get to see the positive change we create every day,
              and that's a privilege not many companies can offer. This is why
              we come to work with a smile - it's more than a job, it's a chance
              to connect and make a real impact.`}
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen h-2/3 ">
        <div className="hero-content flex-col lg:flex-row w-3/4 ">
          <img
            src="/about/about2.png"
            height={"300px"}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold p-10">Connecting Stories</h1>
            <p className="py-6 p-10">
              <b>We open doors to a world of discovery.</b> We believe in the
              power of travel to transform you. It just takes a single step of
              courage to embark on an adventure that will broaden your horizons.
              <br />
              <b>Every journey is an exchange.</b> Immerse yourself in vibrant
              cultures that challenge your perspectives and enrich your soul. We
              approach travel with the spirit of open hearts and open minds.
              {`There's a simple truth we embrace: beneath our differences, we
              share a common humanity.`}
            </p>
          </div>
        </div>
      </div>

      <div className="stats shadow w-full pl-24 bg-cyan-50">
        <div className="stat">
          <div className="stat-figure text-primary"></div>
          <div className="stat-value text-accent">25k</div>
          <div className="stat-title">Travelers</div>
        </div>

        <div className="stat w-full">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-value text-accent">+50</div>
          <div className="stat-title">Guides</div>
        </div>

        <div className="stat">
          <div className="stat-value text-accent">+160</div>
          <div className="stat-title">Team Members</div>
        </div>
        <div className="stat">
          <div className="stat-value text-accent">+40</div>
          <div className="stat-title">Destinations</div>
        </div>
      </div>
    </div>
  );
}
