import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AnimatePresence } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoBlack from "../../assets/logos/logo-black-icon.png";
import logoWhite from "../../assets/logos/logo-red-icon.png";
import { mainRoutes } from "../../routes";
import SearchModal from "../search modal/SearchModal";
import DropDownWrapper from "./dropDownWrapper/DropDownWrapper";
import style from "./index.module.scss";
import useDataFetch from "../../hooks/useGetData";
import { dark } from "@mui/material/styles/createPalette";

interface Navbar {
	theme?: "dark" | "light";
}
const Navbar: React.FC<Navbar> = ({ theme = "light" }) => {
	const [navOpen, setNavOpen] = useState(false);
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);
	const [currentHovered, setCurrentHovered] = useState<number | null>(null);
	const [currentModeMobile, setCurrentModeMobile] = useState<boolean>(false);
	const [currentclikedNavbarItem, setCurrentCurrentClickedNavbarItem] =
		useState<number | null>(null);
	const location = useLocation();
	const navigate = useNavigate();
	const controlNavbar = () => {
		if (typeof window !== "undefined") {
			if (window.scrollY > lastScrollY) {
				// if scroll down hide the navbar
				setShow(false);
			} else {
				// if scroll up show the navbar
				setShow(true);
			}

			// remember current page location to use in the next move
			setLastScrollY(window.scrollY);
		}
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlNavbar);

			// cleanup function
			return () => {
				window.removeEventListener("scroll", controlNavbar);
			};
		}
	}, [lastScrollY]);
	const blurred = lastScrollY > window.innerHeight ? style.white : style.none;
	const handleCartClick = () => {
		navigate("/cart");
	};
	const { data, loading, error } = useDataFetch(
		"https://vault.jirlie.com/api/method/vault.api.product_filter",
	);
	const openModal = () => {
		document.body.style.overflow = "hidden";

		setModalOpen(true);
	};
	const closeModal = () => {
		setCurrentHovered(null);
		document.body.style.overflow = "visible";
	};
	const openMobNav = () => {
		document.body.style.overflow = "hidden";

		setNavOpen(true);
	};
	const handleLinkHover = (link: any, key: number) => {
		setCurrentModeMobile(false);

		if (!link.dropDown != false) {
			return;
		}

		setCurrentHovered(key);
	};
	const navigateToPage = (url: string) => {
		navigate(url);
		document.body.style.overflow = "visible";
	};
	const handleMobRouteClick = (link: any, key: number) => {
		setCurrentModeMobile(true);

		setCurrentHovered(key);
		if (!link.dropDown != false) {
			navigate(link.href);
			document.body.style.overflow = "visible";
			return;
		}
	};
	const navlinkDynamicStyles = (name: string) => {
		let isCurrentPage = false;
		if (location.pathname.includes(name)) isCurrentPage = true;

		if (theme === "dark") {
			if (isCurrentPage) "button";
			return "buttonDark";
		}
		if (theme === "light") {
			if (isCurrentPage) "buttonDark";
		}
		return "button";
	};
	return (
		<>
			<SearchModal
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				data={data}
			/>
			<nav
				className={
					show
						? `${style.mainNavShow} ${blurred} ${style.nav}`
						: `${style.mainNavHide} ${blurred} ${style.nav}`
				}
				onMouseLeave={() => setCurrentHovered(null)}
			>
				<div className={style.overlay} />
				<div className={style.logoContainer} onClick={() => navigate("/")}>
					<img src={blurred ? logoBlack : logoWhite} />
				</div>
				<div className={style.displayLinks}>
					{mainRoutes.map((item: any, key: number) => (
						<Fragment key={key}>
							<Link
								to={item.href}
								className={navlinkDynamicStyles(item.name)}
								onClick={() => setCurrentCurrentClickedNavbarItem(key)}
								onMouseEnter={() => handleLinkHover(item, key)}
							>
								{item.name}
							</Link>
							<AnimatePresence mode="wait">
								{currentHovered === key &&
									!!item.dropDown == true &&
									!currentModeMobile && (
										<DropDownWrapper
											itemDropDown={item.dropDown}
											currentHovered={currentHovered}
											item={key}
											key={key}
											theme={theme}
										>
											{item.dropDown}
										</DropDownWrapper>
									)}
							</AnimatePresence>
						</Fragment>
					))}
				</div>
				<div className={style.searchAndCart}>
					<SearchIcon
						className={` ${theme === "dark" ? "iconDark" : "iconLight"}`}
						onClick={openModal}
					/>

					<ShoppingCartIcon
						className={` ${theme === "dark" ? "iconDark" : "iconLight"}`}
						onClick={handleCartClick}
					/>
					<MenuIcon
						className={`${style.menuIcon}
            ${theme === "dark" ? "iconDark" : "iconLight"}`}
						onClick={() => openMobNav()}
					/>
					<nav
						className={style.mobNav}
						style={
							navOpen
								? { transform: "translateX(0%)" }
								: { transform: "translateX(100%)" }
						}
					>
						<div
							className={style.closeIconContainer}
							onClick={() => setNavOpen(false)}
						>
							<CloseIcon
								className={theme === "dark" ? "iconDark" : "iconLight"}
								style={{ marginRight: "5%" }}
								onClick={closeModal}
							/>
						</div>
						{mainRoutes.map((item: any, key) => (
							<Fragment key={key}>
								<Link
									to={item.href}
									// onClick={() => navigateToPage(item.href)}
									className={
										currentclikedNavbarItem == key ? "buttonDark" : "button"
									}
									key={key}
									onClick={() => handleMobRouteClick(item, key)}
								>
									{item.name}
								</Link>
								<AnimatePresence mode="wait">
									{currentHovered === key &&
										!!item.dropDown == true &&
										currentModeMobile && <>{item.dropDown}</>}
								</AnimatePresence>
							</Fragment>
						))}
					</nav>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
