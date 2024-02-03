import { useState } from "react";
import ApplyForm from "../../components/apply form/ApplyForm";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/NavBar";
import style from "./index.module.scss";
const Job = () => {
	const [isHidden, setisHidden] = useState(true);
	return (
		<>
			<Navbar theme="dark" />
			<div className={style.container}>
				<div className={style.wrapper}>
					<h1>Title</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
						architecto mollitia quas harum impedit consectetur laudantium vel,
						porro qui voluptatum suscipit culpa recusandae repellendus! Eveniet,
						necessitatibus exercitationem. Quae, accusamus provident! Pariatur
						incidunt alias magnam minima sit nam id, unde ratione, rem at
						officia quam optio odit ipsam distinctio consequuntur ipsum
						molestias laborum soluta facere neque repellat. Reprehenderit
						dignissimos maiores quo!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
						architecto mollitia quas harum impedit consectetur laudantium vel,
						porro qui voluptatum suscipit culpa recusandae repellendus! Eveniet,
						necessitatibus exercitationem. Quae, accusamus provident! Pariatur
						incidunt alias magnam minima sit nam id, unde ratione, rem at
						officia quam optio odit ipsam distinctio consequuntur ipsum
						molestias laborum soluta facere neque repellat. Reprehenderit
						dignissimos maiores quo!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
						architecto mollitia quas harum impedit consectetur laudantium vel,
						porro qui voluptatum suscipit culpa recusandae repellendus! Eveniet,
						necessitatibus exercitationem. Quae, accusamus provident! Pariatur
						incidunt alias magnam minima sit nam id, unde ratione, rem at
						officia quam optio odit ipsam distinctio consequuntur ipsum
						molestias laborum soluta facere neque repellat. Reprehenderit
						dignissimos maiores quo!
					</p>
					<div className={style.applyContainer}>
						<span>Created: 11/11/1111</span>
						<button
							className="buttonDark"
							type="button"
							onClick={() => setisHidden(false)}
						>
							{" "}
							Apply
						</button>
					</div>
					<ApplyForm hidden={isHidden} />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Job;
