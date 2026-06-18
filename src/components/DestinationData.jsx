// import React from 'react'
// import Mountain1 from "../assets/1.jpg";
// import Mountain2 from "../assets/2.jpg";
export default function DestinationData(props) {
  return (
    <>
    <div className={props.cName}>
          <div className="lg:w-[45%] w-full  text-start  text-xl">
            <h2 className="text-2xl font-bold pb-4"> {props.heading}</h2>
            <p>
              {props.text}
            </p>
          </div>
          <div className="relative flex justify-between lg:w-[50%] w-full z-[-99] my-7 lg:mt-0">
            <img src={props.img1} alt="img" className="w-[49%] lg:h-87.5 h-62.5 object-cover rounded-xl shadow-[-1px_1px_62px_-18px_rgba(0,0,0,0.19)]"/>
            <img src={props.img2} alt="img" className="w-[49%] lg:h-87.5 h-62.5  object-cover rounded-xl shadow-[-1px_1px_62px_-18px_rgba(0,0,0,0.19)] absolute -top-[10%] right-0"/>
          </div>
        </div></>
  )
}
