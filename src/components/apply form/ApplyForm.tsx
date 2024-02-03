import { ToastContainer, toast } from "react-toastify";
import style from "./index.module.scss";
import * as yup from "yup";
import { useFormik } from "formik";

const ApplyForm = ({ hidden = true }) => {
	const success = () => toast("Thanks for sending a message");
	console.log(hidden, "ssss");
	const handleSubmit = async (data) => {
		try {
			const postUrl =
				"https://vault-auto.com/api/method/vault.api.job_applicant";
			await fetch(postUrl, {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}).then(() => success());
		} catch (er) {
			console.log(er, "axios er");
		}
	};
	const formik = useFormik({
		initialValues: {
			full_name: "",
			email: "",
			cover_letter: "",
			phone: "",
			country: "",
			resume_link: "",
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
			email: yup.string().email("Enter a valid email"),
			cover_letter: yup.string(),
			country: yup.string(),
			phoneNumber: yup.string(),
			resume_link: yup.string(),
		}),
	});
	return (
		<>
			<ToastContainer hideProgressBar />

			<form
				className={`${style.form} ${hidden ? style.hidden : style.open}`}
				onSubmit={formik.handleSubmit}
			>
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
							country{" "}
							{formik.errors.country && formik.touched.country ? (
								<span className={style.errorMessage}>
									{formik.errors.country}
								</span>
							) : null}
						</label>
						<input
							type="text"
							className={style.input}
							placeholder="Enter your country's Name"
							name="country"
							id="country"
							onBlur={formik.handleBlur}
							value={formik.values.country}
							onChange={formik.handleChange}
						/>
					</div>
				</div>
				<div className={style.formRow}>
					<div className={style.inputContainer}>
						<label>
							Resume Link{" "}
							{formik.errors.resume_link && formik.touched.resume_link ? (
								<span className={style.errorMessage}>
									{formik.errors.resume_link}
								</span>
							) : null}
						</label>
						<input
							type="text"
							className={style.input}
							placeholder="Enter your Name"
							name="resume_link"
							id="resume_link"
							onBlur={formik.handleBlur}
							value={formik.values.resume_link}
							onChange={formik.handleChange}
						/>
					</div>
				</div>
				<div className={style.textAreaWrapper}>
					<label>
						Cover Letter{" "}
						{formik.errors.cover_letter && formik.touched.cover_letter ? (
							<span className={style.error}>{formik.errors.cover_letter}</span>
						) : null}
					</label>
					<textarea
						placeholder="Cover Letter "
						name="cover_letter"
						id="cover_letter"
						onBlur={formik.handleBlur}
						value={formik.values.cover_letter}
						onChange={formik.handleChange}
					/>
				</div>
				<div className={style.buttonContainer}>
					<button
						className="buttonDark"
						onClick={formik.handleSubmit}
						type="button"
					>
						{" "}
						Submit
					</button>
				</div>
			</form>
		</>
	);
};

export default ApplyForm;
