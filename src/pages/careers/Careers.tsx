import React from "react";
import bg from "../../assets/backgroundImages/careers.jpg";
import HeroSectionCentered from "../../components/heroSectionCentered/HeroSectionCentered";
import Navbar from "../../components/navbar/NavBar";
import style from "./index.module.scss";
import VacancyCard from "../../components/vacancyCard/VacancyCard";
import Footer from "../../components/footer/Footer";
import useDataFetch from "../../hooks/useGetData";

const Careers = () => {
	const heroSectionCardsData = [
		{
			bg,
			h1: " WELCOME TO VAULT",
			h2: "Explore our latest openning",
		},
	];
	const { data } = useDataFetch(
		"https://vault-auto.com/api/method/vault.api.opening_jobs",
	);
	console.log(data, "data");
	return (
		<>
			<Navbar />
			<HeroSectionCentered data={heroSectionCardsData} direction="y" />
			<div className={style.container}>
				<h1>Current Vacant Positions</h1>

				<div className={style.cardsContainer}>
					{data?.map((job) => (
						<VacancyCard {...job} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Careers;
