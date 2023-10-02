import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`bg-gradient-to-r from-cyan-500 to-blue-500 relative bg-cover	h-screen bg-fixed min-h-[100vh] 100px:min-h-[80vh]  w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/woman-picking-tea-leaves-by-hand-green-tea-farm_335224-771.jpg?t=st=1696000117~exp=1696000717~hmac=0fb03b337e7ee04fca5d6665001a2f4d73b35b34c9bb2ee85123552994ef2f7a)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#fff] font-[600] capitalize`}
        >
          Welcome to the world of <br /> smart farming
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#fff]">
        Connecting the agriculture
industry - farm to fork!{" "}
          <br /> 
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
