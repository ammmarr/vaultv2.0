import { FC, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import BloggerCard from "../bloggerCard/BloggerCard";
import img from "../../assets/categoryImages/leather.jpg";
const BlogPostCard: FC<any> = ({ data }) => {
	const blog = 1;
	const navigate = useNavigate();
	const handleContainerClick = (e: any) => {
		e.stopPropagation();
		navigate(`/article/${data.name}`);
	};
	return (
		<div className={style.container} onClick={(e) => handleContainerClick(e)}>
			{data.meta_image && (
				<div className={style.imageContainer}>
					<img src={data.meta_image} />
				</div>
			)}

			<div className={style.textSection}>
				<h1
					className={style.h1}
					onClick={() => navigate(`/article/${data.name}`)}
				>
					{data.title}
				</h1>
				<h4
				// onClick={() =>
				//   navigate(
				//     `/blogs/category/blog_category_name=${data.blog_category_name}`
				//   )
				// }
				>
					{data.blog_category_name}
				</h4>
				<p className={style.p}>{data.meta_description}</p>
				<BloggerCard data={data} />
				<div className={style.buttonAndContainer}>
					<span className={style.info}>{data.published_on}</span>
					<span className={style.info}>Read Time: {data.read_time} mins</span>
				</div>
			</div>
		</div>
	);
};

export default BlogPostCard;
