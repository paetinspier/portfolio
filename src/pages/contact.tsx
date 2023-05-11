import Header from "@/components/Header";
import HomeBar from "@/components/HomeBar";
import { firestore } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
	BsChevronDown,
	BsInfoCircle,
	BsSend,
} from "react-icons/bs";
import Lottie from "react-lottie-player";
import Checkmark from "@/lottie-json/checkmark.json";

interface ContactForm {
	cc: string | null;
	subject: string | null;
	from: string;
	content: string;
}

const Contact = () => {
	const methods = useForm<ContactForm>({ mode: "onSubmit" });
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = methods;

	useEffect(() => {
		if (success) {
			const id = setInterval(() => {
				setSuccess(false);
				reset();
			}, 3000);
			return () => clearInterval(id);
		}
	}, [success]);

	const onSubmit = async (data: ContactForm) => {
		setLoading(true);
		try {
			const cc = data.cc ? data.cc : "";
			const subject = data.subject ? data.subject : "";
			await addDoc(collection(firestore, "contact"), {
				cc: cc,
				subject: subject,
				from: data.from,
				content: data.content,
			});
			setSuccess(true);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
			throw error;
		}
	};

	return (
		<>
			<div className="isolate">
				<div className="absolute h-full inset-x-0 top-[10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-5rem]">
					<svg
						className="relative bottom-0 left-1/4 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 translate-y-3 rotate-[10deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
						viewBox="0 0 1155 678"
					>
						<path
							fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
							fillOpacity=".5"
							d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
						/>
						<defs>
							<linearGradient
								id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
								x1="1155.49"
								x2="-78.208"
								y1=".177"
								y2="474.645"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#3471eb" />
								<stop offset={1} stopColor="#ab31e8" />
							</linearGradient>
						</defs>
					</svg>
					<svg
						className="relative top-1/4 right-0 -z-10 h-[21.1875rem] max-w-none -translate-y-3/4 translate-x-3 rotate-[0deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
						viewBox="0 0 1155 678"
					>
						<path
							fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
							fillOpacity=".5"
							d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
						/>
						<defs>
							<linearGradient
								id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
								x1="-78.208"
								x2="1155.49"
								y1="474.645"
								y2=".177"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#3471eb" />
								<stop offset={1} stopColor="#ab31e8" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				{/* about */}
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="w-full min-h-screen flex flex-col justify-center items-center px-3">
							<Header page={"About"} />
							<div className="w-full max-w-[1000px] mt-[-50px] h-1/2 rounded-lg overflow-hidden shadow-xl shadow-neutral-400">
								<div className="w-full h-[20px] py-6 px-3 flex flex-row justify-start items-center gap-1 bg-neutral-800">
									<div className="w-[10px] h-[10px] rounded-full bg-red-600" />
									<div className="w-[10px] h-[10px] rounded-full bg-yellow-600" />
									<div className="w-[10px] h-[10px] rounded-full bg-green-600" />
									<button
										disabled={loading}
										type="submit"
										className="ml-12 hover:text-lg text-neutral-300"
									>
										<BsSend />
									</button>
								</div>
								<div className="w-full bg-neutral-900 max-h-[70vh] overflow-y-scroll p-6">
									{success ? (
										<div className="w-full flex justify-center items-center">
											<Lottie
												animationData={Checkmark}
												speed={1}
												style={{
													width: "300px",
													height: "300px",
												}}
												play
												loop={false}
											></Lottie>
										</div>
									) : (
										<>
											<div className="w-full border-b border-neutral-400 p-3 flex flex-row justify-start items-center gap-3">
												<div className="text-neutral-400">
													To:
												</div>
												<div className="text-white p-1 gap-1 bg-slate-800 rounded-md flex flex-row justify-center items-center">
													Paetin Nelson{" "}
													<BsChevronDown />
												</div>
											</div>
											<div className="w-full border-b border-neutral-400 p-2 flex flex-row justify-start items-center gap-3">
												<div className="text-neutral-400">
													Name:
												</div>
												<input
													{...(register("cc"),
													{
														required: false,
													})}
													placeholder="Your name goes here"
													className="w-full bg-transparent p-3 text-neutral-400 outline-transparent border-transparent focus:outline-transparent focus:border-transparent"
												/>
											</div>
											<div className="w-full border-b border-neutral-400 p-2 flex flex-row justify-start items-center gap-3">
												<div className="text-neutral-400">
													Subject:
												</div>
												<input
													type="text"
													{...register("subject", {
														required: false,
													})}
													placeholder="(optional)"
													className="w-full bg-transparent p-3 text-neutral-400 outline-transparent border-transparent focus:outline-transparent focus:border-transparent"
												/>
											</div>
											<div className="w-full border-b border-neutral-400 p-2 flex flex-row justify-start items-center gap-3">
												<div className="text-neutral-400">
													Email:
												</div>
												<input
													{...register("from", {
														required: "An email",
													})}
													placeholder="Your email goes here"
													className="w-full bg-transparent p-3 text-neutral-400 outline-transparent border-transparent focus:outline-transparent focus:border-transparent"
												/>
											</div>
											<div className="w-full flex flex-row justify-start items-center gap-3">
												<textarea
													rows={4}
													{...register("content", {
														required:
															"Message is required",
													})}
													placeholder="Message..."
													className="w-full p-2 bg-transparent text-neutral-400 outline-transparent border-transparent focus:outline-transparent focus:border-transparent"
												/>
											</div>
											<div className="w-full flex flex-row justify-start items-center gap-3">
												{errors.subject ? (
													<p className="text-red-500 text-sm">
														{errors.subject.message}
														.
													</p>
												) : null}
												{errors.from ? (
													<p className="text-red-500 text-sm">
														{errors.from.message}.
													</p>
												) : null}
												{errors.content ? (
													<p className="text-red-500 text-sm">
														{errors.content.message}
														.
													</p>
												) : null}
											</div>
											<div className="w-full hover:text-neutral-400 text-neutral-900 flex-wrap gap-2 flex flex-row justify-start items-center">
												<div className="text-neutral-400 text-sm">
													<BsInfoCircle />
												</div>
												Lets connect! Fill out the form
												and hit send at the top of the
												window to send a message. I will
												get back to you as soon as I can.
											</div>
										</>
									)}
								</div>
							</div>
							<HomeBar />
						</div>
					</form>
				</FormProvider>
			</div>
		</>
	);
};

export default Contact;
