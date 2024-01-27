import demo from "../../../assets/categoryImages/AeroFlex.jpg";
import style from "./index.module.scss";
import ClearIcon from "@mui/icons-material/Clear";
const CartItems = () => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Variants</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className={style.imgContainer}>
              <img src={demo} />
            </div>
          </td>
          <td>name</td>
          <td>Category</td>
          <td>variants</td>
          <td>Price($)</td>
          <td>
            <div className={style.iconContainer}>
              <ClearIcon color="error" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={style.imgContainer}>
              <img src={demo} />
            </div>
          </td>
          <td>name</td>
          <td>Category</td>
          <td>variants</td>
          <td>Price($)</td>
          <td>
            <div className={style.iconContainer}>
              <ClearIcon color="error" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={style.imgContainer}>
              <img src={demo} />
            </div>
          </td>
          <td>name</td>
          <td>Category</td>
          <td>variants</td>
          <td>Price($)</td>
          <td>
            <div className={style.iconContainer}>
              <ClearIcon color="error" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className={style.imgContainer}>
              <img src={demo} />
            </div>
          </td>
          <td>name</td>
          <td>Category</td>
          <td>variants</td>
          <td>Price($)</td>
          <td>
            <div className={style.iconContainer}>
              <ClearIcon color="error" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartItems;
