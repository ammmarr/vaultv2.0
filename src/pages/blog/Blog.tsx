import { useParams } from "react-router-dom";
import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import Footer from "../../components/footer/Footer";
import useGetData from "../../hooks/useGetData";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import style from "./index.module.scss";
import BloggerCard from "../../components/bloggerCard/BloggerCard";
// import Back from "../../components/back Button/Back";
import { BlogTimeInfo } from "../../components/blogtimeInfo/BlogTimeInfo";
import Navbar from "../../components/navbar/NavBar";
import getDateInCostumeFormat from "../../utils/getDateInCustomFormat";
import Back from "../../components/back Button/Back";
const Blog = () => {
  const params = useParams();
  const { data, loading, error } = useGetData(
    `https://vault.jirlie.com/api/method/vault.api.blog_filter?name=${params.id}`
  );
  const moreData = useGetData(
    "https://tazzweed.com/api/method/tazzweed.api.blog_filter"
  )?.data.slice(0, 4);
  // const blogData = data[0];

  // const { content } = blogData;
  // const rawDate = new Date(blogData?.creation);
  // const year = rawDate.getDate();
  // const month = rawDate.getMonth();
  // const day = rawDate.getDay();

  // const date = getDateInCostumeFormat(blogData?.published_on);
  const blog = data[0]?.data[0] ? data[0]?.data[0] : null;
  return (
    <>
      <Navbar />
      {data[0] ? (
        <div className={style.container}>
          <div className={style.backButtonContainer}>
            <Back />
          </div>
          <div className={style.blog}>
            <h1>{blog.title}</h1>
            <span className={style.topInfo}>
              {blog.read_time} {parseInt(blog.read_time) > 2 ? "mins" : "min"}
            </span>
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className={style.content}
            />
            <div className={style.content}></div>
            <div className={style.blogTimeInfoMargin}>
              <BlogTimeInfo published_on={"20 - 10 - 2023"} read_time={"1"} />
            </div>

            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            <BloggerCard data={blog} />
          </div>
          {/* <div className={style.moreBlogsContainer}>
            <h3>
              More <span>Blogs!</span>
            </h3>
            {moreData?.map((item: any, i: number) => (
              <BlogPostCard data={item} key={i} />
            ))}
          </div> */}
        </div>
      ) : (
        <h2>No Data</h2>
      )}

      <Footer />
    </>
  );
};
export default transition(Blog);
