import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`bg-gradient-to-r from-cyan-500 to-blue-500 relative bg-cover	h-screen bg-fixed min-h-[100vh] 100px:min-h-[80vh]  w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/large-green-rice-field-with-green-rice-plants-rows_181624-28862.jpg?t=st=1696962828~exp=1696963428~hmac=e540b29216469c27dae18fdf9777bd98cd24f9adb6008d5c439206bb2b807dc2)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#fff] font-[600] capitalize`}
        >
          WELCOME TO THE WORLD OF FARMING
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#fff]">
        {" "}
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
