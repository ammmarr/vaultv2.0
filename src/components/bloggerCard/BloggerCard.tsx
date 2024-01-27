import style from "./index.module.scss";
import p1 from "../../assets/images/p1.jfif";
import { useNavigate } from "react-router-dom";
import img from "../../assets/owner.jpg";
const BloggerCard = ({ data }: any) => {
  const navigate = useNavigate();
  const handleLinkClick =(e,url:string) => {
    e.stopPropagation();
    navigate(url);
  }
  return (
    <div className={style.container}>
      {data.blogger_photo && 
      
      <div className={style.imgContainer}>
        <img src={`${data.site_name}${data.blogger_photo}`}/>
      </div>
      }
      <div className={style.textSection}>
        <h4 onClick={(e) => handleLinkClick(e,`/blogs/blogger=${data.blogger}`)}>
          {data.blogger}
        </h4>
      
        <p dangerouslySetInnerHTML={{ __html: data.blogger_bio }}></p>
      </div>
    </div>
  );
};

export default BloggerCard;
