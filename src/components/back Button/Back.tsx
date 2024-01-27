import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const Back = () => {
  const navigate = useNavigate();
  const handleNavigateRefresh = () => {
    navigate(-1);
  };
  return (
    <div className={style.back} onClick={handleNavigateRefresh}>
      <ArrowBackIosNewIcon />
      Back!
    </div>
  );
};

export default Back;
