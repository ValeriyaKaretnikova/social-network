import spinner from "../../../img/spinner.gif";
import s from "./Preloader.module.css";

const Preloader = (props) => {
  return (
    <div>
      <img src={spinner} alt="loading spinner" className={s.spinner} />
    </div>
  );
};

export default Preloader;
