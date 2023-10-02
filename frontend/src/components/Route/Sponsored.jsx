import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://www.cropway.com/wp-content/uploads/2022/11/grow-150x150.jpg"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.cropway.com/wp-content/uploads/2022/11/crop-150x150.jpg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.cropway.com/wp-content/uploads/2022/11/Greenpeace-150x150.jpg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.cropway.com/wp-content/uploads/2022/11/o-base-150x150.jpg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.kisankonnect.in/assets/images/kisankonnect_logo.png"
            style={{width:"150px", objectFit:"contain"}}
            alt="https://www.kisankonnect.in/"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
