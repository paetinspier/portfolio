import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { BsDownload, BsGithub, BsLinkedin } from "react-icons/bs";
import Header, { month, weekday } from "@/components/Header";
import HomeBar from "@/components/HomeBar";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocFromCache, getDocs } from "firebase/firestore";
import { firestore } from "@/config/firebase";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
	const router = useRouter();
	const [date, setDate] = useState(new Date());
	const [d, setDay] = useState<string>(weekday[date.getDay()]);
	const [m, setMonth] = useState<string>(month[date.getMonth()]);
	const [calDay, setCalDay] = useState<string>(
		date.getDate().toLocaleString()
	);
	function refreshClock() {
		setDate(new Date());
	}
	useEffect(() => {
		const timerId = setInterval(refreshClock, 1000);

		return function cleanup() {
			clearInterval(timerId);
		};
	}, []);
	const getResume = async () => {
		const docRef = doc(firestore, 'resume', 'lpgUHbUDLx29bzKqjaJN');
		const docSnap = await getDoc(docRef);
		const data = docSnap.data()
		if(data){
			router.push(data?.link)
		}
	}
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
				{/* home */}
				<div className="w-screen min-h-screen flex flex-col justify-center items-center px-3">
					<Header page={"Home"} />

					<div className="w-full max-w-[700px] h-1/2 rounded-lg overflow-hidden shadow-xl shadow-neutral-400">
						<div className="w-full h-[20px] p-3 flex flex-row justify-start items-center gap-1 bg-neutral-800">
							<div className="w-[10px] h-[10px] rounded-full bg-red-600" />
							<div className="w-[10px] h-[10px] rounded-full bg-yellow-600" />
							<div className="w-[10px] h-[10px] rounded-full bg-green-600" />
						</div>
						<div className="w-full bg-neutral-800 bg-opacity-50 h-80 p-6">
							<div className="w-full flex flex-col justify-start items-center">
								<div className="text-white text-left w-full cursor-default">
									~ % Hi, i&quot;m Paetin 👋
								</div>
								<div className="text-white text-left w-full cursor-default">
									~ % A Full-Stack Engineer passionate about
									building cool things.
								</div>
								<p className="text-white text-left w-full flex flex-row justify-start items-center gap-1 flex-wrap">
									~ %{" "}
									<button
										className="text-emerald-400 flex flex-row justify-center items-center gap-1 flex-wrap"
										onClick={getResume}
									>
										You can find my resumé here{" "}
										<BsDownload />
									</button>
								</p>
								<p className="text-white text-left w-full flex flex-row justify-start items-center gap-1 flex-wrap">
									~ %{" "}
									<Link className="text-emerald-400 flex flex-row justify-center items-center gap-1 flex-wrap" href={"https://github.com/paetinspier"}>
										You can find my GitHub here <BsGithub />
									</Link>
								</p>
								<p className="text-white text-left w-full flex flex-row justify-start items-center gap-1 flex-wrap">
									~ %{" "}
									<Link className="text-emerald-400 flex flex-row justify-center items-center gap-1 flex-wrap" href={"https://www.linkedin.com/in/paetin-nelson/"}>
										You can find my LinkedIn here{" "}
										<BsLinkedin />
									</Link>
								</p>
							</div>
						</div>
					</div>
					<HomeBar />
				</div>
			</div>
		</>
	);
}
