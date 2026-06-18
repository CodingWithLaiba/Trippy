import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/8.jpg";

export default function Trip() {
  return (
    <>
      <div className="flex gap-2 items-center justify-center flex-col my-16 lg:mx-24 mx-8">
        <h1 className="text-5xl font-bold">Recent Trips</h1>
        <p>You can discover uniquee destinations using Google Maps</p>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 mt-16">
          <TripData
            image={Trip1}
            heading="Trip in Indonesia"
            text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific Oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. "
          />
          <TripData
            image={Trip2}
            heading="Trip in Malaysia"
            text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It is known for its beautiful beaches, rainforests, and mix of Malay, Chinese, Indian, and European cultural influences. "
          />
          <TripData
            image={Trip3}
            heading="Trip in France"
            text="France, located in Western Europe, is famous for its rich history, stunning architecture, and world-renowned cuisine. From the romantic streets of Paris to the picturesque countryside and Mediterranean coast, France offers a unique blend of."
          />
        </div>
      </div>
    </>
  );
}
