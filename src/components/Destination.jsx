import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import DestinationData from "../components/DestinationData";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";

export default function Destination() {
  return (
    <>
      <div className="my-16 lg:mx-24 mx-8  text-center">
        <h1 className="text-4xl font-bold">Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
        <DestinationData
          cName="flex justify-between items-center lg:mt-16 mt-10 flex-col-reverse lg:flex-row "
          heading="Taal Volcano, Batangas"
          text="Taal Volcano in Batangas is one of the most iconic sights in
              Luzon, known for its breathtaking landscape and unique geological
              features. Rising from the middle of Taal Lake, the volcano creates
              a stunning panorama that attracts visitors from around the world.
              Its remarkable setting an island volcano within a lake on the
              island of Luzon makes it one of the most fascinating natural
              wonders in the Philippines. Viewed from Tagaytay Ridge, the
              scenery offers a perfect blend of beauty, tranquility, and raw
              natural power, making Taal Volcano a symbol of the country's rich
              volcanic heritage and one of the most unforgettable destinations
              in Luzon."
          img1={Mountain1}
          img2={Mountain2}
        />
        <DestinationData
          cName="flex justify-between items-center lg:mt-16 mt-10 flex-col-reverse lg:flex-row-reverse "
          heading="Mt.Daguldul,Batangas"
          text="If you're looking for a hike that combines mountain adventure and beach relaxation, Mt. Daguldol in Batangas is the perfect destination. Located in San Juan, this beginner-friendly mountain offers scenic coastal views, lush forests, and rolling grasslands along the trail. Several rest stops and small stores along the way make the trek more comfortable, even for first-time hikers. Once you reach the summit, you'll be rewarded with breathtaking views of the sea and surrounding mountains. After the hike, you can cool off with a refreshing swim at the nearby beach, making Mt. Daguldol a unique outdoor experience where you can enjoy both the mountains and the sea in one trip.
"
          img1={Mountain3}
          img2={Mountain4}
        />
      </div>
    </>
  );
}
