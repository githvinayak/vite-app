import FeatureCard from "../components/FeatureCard";
const Features = () => {
  return (
    <div className="my-24 md:px-[3rem] px-4 max:w-screen-2xl mx-auto" >
        <div className=" flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="lg:w-1/4">
                <h3 className=" text-3xl font-bold  font-palanquin text-primary lg:w-1/2 mb-3">Why we are better than others</h3>
                <p className=" font-montserrat text-base text-tertialry ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nesciunt sequi consequatur laboriosam exercitationem voluptatum veniam officia repellendus.</p>
            </div>
            <div className="w-full lg:w-3/4">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-10 gap-8">
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features