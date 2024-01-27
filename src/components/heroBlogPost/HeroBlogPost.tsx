import { Link, useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import BloggerCard from "../bloggerCard/BloggerCard";
// import Back from "../back Button/Back";
import img from "../../assets/categoryImages/leather.jpg";
const HeroBlogPost = ({ data }: any) => {
  ("Jirlie's transformational impact on businesses, the creative industries, and search was widely mentioned, but so was the necessity to control and oversee this type of technology.");
  const navigate = useNavigate();
  const handleComponentClick = (e: any) => {
    e.stopPropagation();
    navigate(`/article/${data.name}`);
  };
  const handleLinkClick =(e,url:string) => {
    e.stopPropagation();
    navigate(url);
  }
  return (
    <div className={style.container} onClick={(e) => handleComponentClick(e)}>
      <div className={style.imageContainer}>
        <img src={data.meta_image} />
      </div>
      <div className={style.textSection}>
        <div className={style.groupAndBack}>
          {/* <h3 className={style.h3}>Highlighted</h3> */}
          {/* <Back /> */}
        </div>
        <h3 className={style.h3}></h3>
        <h1
          className={style.h1}
          onClick={(e) => handleLinkClick(e,`/article/${data.name}`)}
        >
          {data.title}
        </h1>
        <h4
          onClick={(e) =>
            handleLinkClick(e,
              `/blogs/blog_category_name=${data.blog_category_name}`
              )
          }
        >
          {data.blog_category_name}
        </h4>
        <p>{data.blog_intro}</p>
        <div className={style.bloggerCardContainer}>
          <BloggerCard data={data} />
        </div>
        <div className={style.buttonAndContainer}>
          {/* <Link className="button" to={`/article/${data.name}`}>
            Read More
          </Link> */}
          <span>{data.published_on}</span>
          <span>Read Time: {data.read_time} mins</span>
        </div>
      </div>
    </div>
  );
};

export default HeroBlogPost;
