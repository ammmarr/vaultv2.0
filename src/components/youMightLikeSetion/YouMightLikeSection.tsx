import style from "./index.module.scss";
import stp from "../../assets/categoryImages/AeroFlex.jpg";
import sound from "../../assets/categoryImages/Acv pic.jpg";
import { useNavigate } from "react-router-dom";

const YouMightLikeSection = () => {
  const navigate = useNavigate()
  return (
    <div className={style.container}>
      <h2>We are “Vault”</h2>
      <p>
        the distributor of The Russian manufacturer of STP, ACV and more makers
        of amazing luxury brands in Egypt.
      </p>
      <div className={style.categoriesContainer}>
        <div className={style.categoryCard} onClick={() => navigate(`/products/custom_parent_group=Automotive Electronics`)}>
          <img src={sound}></img>
          <div className={style.buttonContainer}>
            <div className="button">Car Audio Systems</div>
          </div>
        </div>
        <div className={style.categoryCard} onClick={() => navigate(`/products/custom_parent_group=Sound Proofing and Insulation`)}>
          <img src={stp}></img>
          <div className={style.buttonContainer}>
            <div className="button">Car Isolation Materials</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouMightLikeSection;
