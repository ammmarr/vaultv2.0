import {
	FacebookRounded,
	Instagram,
	LinkedIn,
	// Twitter,
} from "@mui/icons-material";
import Privacy from "./pages/PrivacyPolicy/Privacy";
import Blog from "./pages/blog/Blog";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contactUs/Contact";
import CookiesPage from "./pages/cookies/CookiesPage";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import Terms from "./pages/terms of use/Terms";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import TikTokIcon from "./utils/costumIcons/TiktokIcon";
import Services from "./pages/services/Services";
import ProductsNavbarDropDown from "./components/dropDowns/ProductsNavbarDropDown";
import Cart from "./pages/cart/Cart";
import React from "react";
import Careers from "./pages/careers/Careers";
import Job from "./pages/Job/Job";

export interface Route {
	name: string;
	href?: string;
	element: React.JSX.Element;
	dropDown?: React.JSX.Element;
}
export const mainRoutes: Route[] = [
	{
		name: "Home",
		href: "/",
		element: <Home />,
	},
	{
		name: "Products",
		element: <Products />,
		dropDown: <ProductsNavbarDropDown />,
	},
	{
		name: "Services",
		href: "/services",
		element: <Services />,
	},
	{
		name: "Blog",
		href: "/blogs",
		element: <Blogs />,
	},
	{
		name: "About Us",
		href: "/about-us",
		element: <AboutUs />,
	},
	{
		name: "Careers",
		href: "/careers",
		element: <Careers />,
	},
	{
		name: "Contact",
		href: "/contact",
		element: <Contact />,
	},
];
export const allRoutes = [
	{
		name: "Home",
		href: "/",
		element: <Home />,
	},
	{
		name: "Careers",
		href: "/careers",
		element: <Careers />,
	},
	{
		name: "Job",
		href: "/job",
		element: <Job />,
	},
	{
		name: "Products",
		href: "/products",
		element: <Products />,
	},
	{
		name: "Products",
		href: "/products/:filters",
		element: <Products />,
	},
	{
		name: "Services",
		href: "/services",
		element: <Services />,
	},
	{
		name: "Blog",
		href: "/blogs",
		element: <Blogs />,
	},
	{
		name: "Blog",
		href: "/blogs/:filters",
		element: <Blogs />,
	},
	{
		name: "About Us",
		href: "/about-us",
		element: <AboutUs />,
	},
	{
		name: "blog",
		href: "/article/:id",
		element: <Blog />,
	},
	{
		name: "product",
		href: "/:filters/product/:id",
		element: <Product />,
	},
	{
		name: "cookeis",
		href: "/cookies",
		element: <CookiesPage />,
	},
	{
		name: "Contact",
		href: "/contact",
		element: <Contact />,
	},
	{
		name: "Terms Of Use",
		href: "/terms-of-use",
		element: <Terms />,
	},
	{
		name: "Privacy and Policy",
		href: "/privacy-policy",
		element: <Privacy />,
	},
	{
		name: "Cart",
		href: "/cart",
		element: <Cart />,
	},
];

export const socialMediaLinks = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/profile.php?id=61551113101287&mibextid=LQQJ4d",
		icon: <FacebookRounded />,
	},
	{
		name: "instagram",
		href: "https://instagram.com/vaultauto_egy",
		icon: <Instagram />,
	},
	{
		name: "tiktok",
		href: "https://www.tiktok.com/@vaultauto_egy?_t=8gwQsZNLZpu&_r=1",
		icon: <TikTokIcon />,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/company/vault-auto-egy/",
		icon: <LinkedIn />,
	},
];
