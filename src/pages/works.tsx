import Header, { weekday, month } from "@/components/Header";
import HomeBar from "@/components/HomeBar";
import { firestore } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsChevronRight, BsGit, BsGithub, BsPersonPlus } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

interface Project {
	title: string;
	description: string;
	githubUrl: string;
	imgUrl: string;
	technologies: string;
}

async function getServerSideProps(context: any) {
	const querySnapshot = await getDocs(collection(firestore, "project"));
	const projects = querySnapshot.docs.map<any>((doc) => doc.data());

	// Pass data to the page via props
	return { props: { projects } };
}

const works = (projects: any) => {
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
				{/* About */}
				<div className="w-full min-h-screen flex flex-col justify-center items-center px-3">
					<Header page={"About"} />
					<div className="w-full max-w-[1000px] mt-[-50px] h-1/2 rounded-lg overflow-hidden shadow-xl shadow-neutral-400">
						<div className="w-full h-[20px] p-3 flex flex-row justify-start items-center gap-1 bg-neutral-800">
							<div className="w-[10px] h-[10px] rounded-full bg-red-600" />
							<div className="w-[10px] h-[10px] rounded-full bg-yellow-600" />
							<div className="w-[10px] h-[10px] rounded-full bg-green-600" />
						</div>
						<div className="w-full bg-neutral-200 max-h-[70vh] overflow-y-scroll p-6">
							<div className="w-full flex flex-col justify-center items-center gap-4">
								{projects.projects.map((project: Project) => {
									return (
										<div
											key={project.title}
											className="w-full flex md:flex-row flex-col justify-center items-center bg-neutral-500 gap-3 bg-opacity-50 p-3 rounded-lg"
										>
											<div className="md:w-1/4 w-full h-full max-h-[200px] rounded-lg overflow-hidden">
												<img
													src={project.imgUrl}
													alt="img"
												/>
											</div>
											<div className="md:w-3/4 w-full flex flex-col justify-center items-start gap-1">
												<div className="text-white text-lg text-left w-full flex flex-row justify-start items-center gap-4">
													{project.title}{" "}
													{project.githubUrl ? (
														<Link
															href={
																project.githubUrl
															}
															className="flex flex-row justify-start items-center gap-1 hover:gap-4 text-lg hover:text-blue-600 duration-300"
														>
															<BsGithub />
															<BsChevronRight />
														</Link>
													) : null}
												</div>
												<div className="text-white text-sm text-left w-full">
													{project.technologies}
												</div>
												<div className="text-white text-left w-full">
													{project.description}
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<HomeBar />
				</div>
			</div>
		</>
	);
};

export default works;
