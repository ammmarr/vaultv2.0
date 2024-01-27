import { useParams } from "react-router-dom";
import BlogPostCard from "../../../components/blogPostCard/BlogPostCard";
import Footer from "../../../components/footer/Footer";
import useDataFetch from "../../../hooks/useGetData";
import transition from "../../../utils/transitions/pageTransitions/PageTransitions";
import style from "./index.module.scss";
import Navbar from "../../../components/navbar/NavBar";
const BlogsFilter = () => {
  const params = useParams();
  const { data, loading, error } = useDataFetch(
    `https://tazzweed.com/api/method/tazzweed.api.blog_filter?${params.filter}`
  );
  const filterName = params.filter?.split("=")[1];
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <h1> </h1>

        <div className={style.postsContainer}>
          <div className={style.headerContainer}>
            <h2>
              Showing Blogs by {params.id} <span>"{filterName}"</span>
            </h2>
            {/* <Back /> */}
          </div>

          {data[0]?.data && (
            <>
              {data[0].data.length > 0 ? (
                data[0].data.map((item: any, i: number) => (
                  <BlogPostCard data={item} key={i} />
                ))
              ) : (
                <div> No Data</div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default transition(BlogsFilter);
