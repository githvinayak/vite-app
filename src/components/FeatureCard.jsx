import book from "../images/book.svg";

const FeatureCard = () => {
  return (
    <div className=" shadow-3xl bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300"> 
        <div>
            <img src={book} width={250} height={250} alt="" className=""/>
            <h5 className="text-2xl font-semibold font-palanquin text-primary mt-5 text-center">Convenient study schedule</h5>
        </div>
    </div>
  )
}

export default FeatureCard;