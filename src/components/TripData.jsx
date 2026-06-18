export default function TripData(props) {
  return (
    <>
      <div className="lg:w-[32%] w-full text-start shadow-[0_5px_25px_2px_rgba(0,0,0,0.11)] rounded-md cursor-pointer py-4 px-3.5 mb-6 lg:mb-0 transition-all duration-300 ease-in-out hover:-translate-y-3 hover:scale-[1.02]">
        <div className="h-[200px] overflow-hidden rounded-md">
          <img
            src={props.image}
            alt="image"
            className="w-full h-full ease-in-out rounded-md hover:scale-3d"
          />
        </div>
        <h4 className="text-2xl font-semibold pt-3.5 pb-1">{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </>
  );
}
