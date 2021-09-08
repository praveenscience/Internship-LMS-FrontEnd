import React from "react";
import style from "../../styles/Preloader/Preloader.module.scss";

function Preloader(props) {
  let preloaderDimensions = Object.assign(
    {
      height: "100%",
      width: "100%"
    },
    props
  );
  return (
    <div style={preloaderDimensions}>
      <div className={style.preloader}>
        {props.withSpinner && <div className={style.spinner} />}
      </div>
    </div>
  );
}

export default Preloader;
