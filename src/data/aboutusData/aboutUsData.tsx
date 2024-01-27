import mission from "../../assets/categoryImages/target (4).png";
import vision from "../../assets/categoryImages/vision (3).png";
import values from "../../assets/categoryImages/work.png";
import aboutus from "../../assets/categoryImages/enterprise (3).png";
import style from "./index.module.scss";
{
  /* <ul>
       <li>
          Vault is a distributor of luxury automotive brands in Egypt.
          Established in 2019 in Dubai, UAE, we have expanded our business
          portfolio to include Egypt. We represent the Russian manufacturer of
          STP, ACV, and other amazing luxury brands.
        </li>
        <li>
          Our products have been used by top brand automobiles, including Audi,
          Bentley, Bugatti, Lamborghini, Porsche, Volkswagen, Jaguar Land Rover,
          Ferrari, Maserati, BMW, and Mercedes-Benz. Vault Auto Solutions is
          known for offering some of the most respected, prestigious, and iconic
          value-added service products in the world.
        </li>{" "}
        <li>
          We have earned a reputation for providing the best products for luxury
          sports and premium performance vehicles in the Middle East,
          particularly in the Gulf region. Our success is driven by our
          unparalleled commitment to anticipating and supporting our customers'
          needs.
        </li>{" "}
     
      </ul> 
    */
}
const aboutUsData = [
  {
    title: "About The Company",
    img: aboutus,
    backgroundColor: "#748c8c",
    content: (
      <p
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        Your premier distributor of luxury automotive brands in Egypt! Since our
        establishment in 2019 in Dubai, UAE, we have expanded our operations to
        bring the finest products to the Egyptian market. We proudly represent
        esteemed Russian manufacturers such as STP, ACV, and other incredible
        luxury brands. Our exceptional range of products has been trusted by top
        automobile brands, including Audi, Bentley, Bugatti, Lamborghini,
        Porsche, Volkswagen, Jaguar Land Rover, Ferrari, Maserati, BMW, and
        Mercedes-Benz. At Vault, we are renowned for offering prestigious,
        iconic, and value-added service products that are highly regarded
        worldwide. With a focus on luxury sports and premium performance
        vehicles, we have become a trusted name in the Middle East, particularly
        in the Gulf region. Our success stems from our unwavering commitment to
        anticipating and fulfilling our customers' needs, ensuring their
        satisfaction every step of the way.
      </p>
    ),
  },
  {
    title: "Our Mission",
    img: mission,
    backgroundColor: "#be2424 ",

    content: (
      <p style={{ textAlign: "center" }}>
        Our mission is to fulfill our customers' desires for luxury and cater to
        their diverse needs by offering a more comfortable and noise-free
        environment. We prioritize the comfort and tranquility of our customers
        by employing the finest solutions and using top-notch materials.
      </p>
    ),
  },
  {
    title: "Our Vision",
    img: vision,
    backgroundColor: "#002630",
    content: (
      <p style={{ textAlign: "center" }}>
        To be the leading market leaders offering the comfort and upgrading
        solutions, offering a wide range of high-quality products that ensure
        utmost comfort and tranquility for our valued customers
      </p>
    ),
  },
  {
    title: "Our Values",
    img: values,
    backgroundColor: "#748c8c",
    content: (
      <ul
        style={{ fontSize: "1.5rem", textAlign: "center", width: "85%" }}
        className={style.smart}
      >
        <li>
          <span style={{ fontSize: "3rem", color: "#be2424 " }}>S</span>
          afety
        </li>
        <li>
          <span style={{ fontSize: "3rem", color: "#be2424 " }}>M</span>
          orality
        </li>
        <li>
          <span style={{ fontSize: "3rem", color: "#be2424 " }}>A</span>
          bility
        </li>
        <li>
          <span style={{ fontSize: "3rem", color: "#be2424 " }}>R</span>
          eliability
        </li>
        <li>
          <span style={{ fontSize: "3rem", color: "#be2424 " }}>T</span>
          rustworthy
        </li>
      </ul>
    ),
  },
];
export default aboutUsData;
