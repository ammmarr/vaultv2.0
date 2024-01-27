import { useFormik } from "formik";
import * as yup from "yup";

import transition from "../../utils/transitions/pageTransitions/PageTransitions";
import style from "./index.module.scss";
import img from "../../assets/backgroundImages/contact.jpg";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/NavBar";
const Contact = () => {
  const handleSubmit = async (data: any) => {
    try {
      const postUrl = `https://tazzweed.com/api/method/tazzweed.api.contact`;
      await fetch(postUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (er) {
      console.log(er, "axios er");
    }
  };
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      description: "",
      phone: "",
      company: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await handleSubmit(values);
      resetForm();
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(1, "Name is too short")
        .max(20, "Name is too long"),
      email: yup.string().email(),
      description: yup.string(),
      company: yup.string(),
      phoneNumber: yup.string(),
    }),
  });

  return (
    <>
      <Navbar theme="dark" />
      <div className={style.container}>
        <h1>
          Send Us a Message<span className={style.contrastingColor}>!</span>
        </h1>
        <div className={style.formAndMapsWrapper}>
          <form className={style.form} onSubmit={formik.handleSubmit}>
            <div className={style.formRow}>
              <div className={style.inputContainer}>
                <label>
                  Name{" "}
                  {formik.errors.full_name && formik.touched.full_name ? (
                    <span className={style.errorMessage}>
                      {formik.errors.full_name}
                    </span>
                  ) : null}
                </label>
                <input
                  type="text"
                  className={style.input}
                  placeholder="Enter your Name"
                  name="full_name"
                  id="full_name"
                  onBlur={formik.handleBlur}
                  value={formik.values.full_name}
                  onChange={formik.handleChange}
                />
              </div>

              <div className={style.inputContainer}>
                <label>
                  Email{" "}
                  {formik.errors.email && formik.touched.email ? (
                    <span className={style.errorMessage}>
                      {formik.errors.email}
                    </span>
                  ) : null}
                </label>
                <input
                  type="text"
                  className={style.input}
                  placeholder="Enter your Email"
                  name="email"
                  id="email"
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className={style.formRow}>
              <div className={style.inputContainer}>
                <label>
                  Phone{" "}
                  {formik.errors.phone && formik.touched.phone ? (
                    <span className={style.errorMessage}>
                      {formik.errors.phone}
                    </span>
                  ) : null}
                </label>
                <input
                  type="text"
                  className={style.input}
                  placeholder="Enter your Phone"
                  name="phone"
                  id="phone"
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
              </div>

              <div className={style.inputContainer}>
                <label>
                  Company{" "}
                  {formik.errors.company && formik.touched.company ? (
                    <span className={style.errorMessage}>
                      {formik.errors.company}
                    </span>
                  ) : null}
                </label>
                <input
                  type="text"
                  className={style.input}
                  placeholder="Enter your Company's Name"
                  name="company"
                  id="company"
                  onBlur={formik.handleBlur}
                  value={formik.values.company}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className={style.textAreaWrapper}>
              <label>
                Message{" "}
                {formik.errors.description && formik.touched.description ? (
                  <span className={style.errordescription}>
                    {formik.errors.description}
                  </span>
                ) : null}
              </label>
              <textarea
                placeholder="Enter your Message"
                name="description"
                id="description"
                onBlur={formik.handleBlur}
                value={formik.values.description}
                onChange={formik.handleChange}
              ></textarea>
            </div>
            <div className={style.buttonContainer}>
              <button className="buttonDark"> Submit</button>
            </div>
          </form>
          {/* <div className={style.mapsWrapper}>
            <Map />
            <img src={img} />
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default transition(Contact);
