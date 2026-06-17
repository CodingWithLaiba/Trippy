import { Link } from "react-router-dom";

// import heroImage from '../assets/12.jpg'
export default function Hero(props) {
  return (
    <>
    <div className={props.cName}>
        <img src={props.heroImg} alt="HeroImg"  className="w-full h-full object-cover"/>
        <div className="absolute w-full top-3/6 left-3/6 -translate-x-3/6 -translate-y-3/6 text-center">
            <h1 className="text-5xl font-extrabold bg-white bg-clip-text text-transparent py-2.5 px-5 md:py-0 md:px-0 ">{props.title} </h1>
            <p className="md:text-xl text-sm pb-8  text-white md:pt-2 md:pb-8">{props.text}</p>
            <Link to={props.url} className={props.btnclass}>{props.btnText}</Link>
        </div>
    </div>
    </>
  )
}
