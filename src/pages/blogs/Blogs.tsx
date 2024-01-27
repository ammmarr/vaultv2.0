import { useParams } from "react-router-dom";
import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import Footer from "../../components/footer/Footer";
import HeroBlogPost from "../../components/heroBlogPost/HeroBlogPost";
import Navbar from "../../components/navbar/NavBar";
import useDataFetch from "../../hooks/useGetData";
import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import style from "./index.module.scss";
const Blogs = () => {
  const params = useParams()
  console.log(params.filters,"params")
  const filters = params.filters ? params.filters : ""
  const { data, loading, error } = useDataFetch(
    `https://vault.jirlie.com/api/method/vault.api.blog_filter?${filters}`
  );
  const blog = data[0]?.data[0];
  const moreBlogs = data[0]?.data?.slice(1)
  function formatString(inputString: string): string {
    const formattedString = inputString.replace(/[_-]/g, ' ').replace(/=/g, ' ');
  
    return formattedString;
  }
  const formattedFilters = filters   ? formatString(filters) :  false
  console.log(formattedFilters,"form")
  return ( 
    <>
      <Navbar theme="dark" />
      <div className={style.container}>

        <h1>
          {" "}
          News<span> & </span> Blogs
        </h1>
        <div className={style.filtersContainer}>
          {formattedFilters && 
          
          <h3>Showing Blogs for the <span>"{formattedFilters}"</span></h3>
          }
        </div>
        {blog && <HeroBlogPost data={blog} />}

        <div className={style.postsContainer}>
          <h2>
            Have A quick read of our latest<span> Posts !</span>
          </h2>
          {moreBlogs && moreBlogs.length > 0 ? 
          (
          
                moreBlogs.map((item: any, i: number) => (
                  <BlogPostCard data={item} key={i} />
                )
           
          ))
            :
                <div> No Data</div>
                
          } 
        </div>
      </div>
      {/* <BlogsFilter /> */}
      <Footer />
    </>
  );
};

export default transition(Blogs);
