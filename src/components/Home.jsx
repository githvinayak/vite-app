import banner from "../images/banner.svg";
import Banner from "../shared/Banner";
const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mt-24 mx-auto'>
      <Banner 
      banner={banner}
        heading={"Develop Your Skills Without Dilligence"}
        subheading={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
        btn1={"Get Started"}
        btn2={"Discount"}
      />
    </div>
  );
};

export default Home;
