import Link from "next/link";
import React from "react";
import {
	BsHouse,
	BsPerson,
	BsCodeSlash,
	BsFolder,
	BsTelephone,
} from "react-icons/bs";

const HomeBar = () => {
	return (
		<div className="fixed bottom-5 px-3">
			<div className=" rounded-2xl bg-slate-300 bg-opacity-50 flex flex-row justify-center items-center px-3 pt-3 pb-1 gap-4 text-xl md:gap-8">
				<Link
					href={'/'}
					className="flex flex-col justify-center items-center"
				>
					<div className="p-4 text-xl rounded-lg text-white bg-black">
						<BsHouse />
					</div>
					<p className="text-sm text-neutral-800">Home</p>
				</Link>
				<Link
					href={"/about"}
					className="flex flex-col justify-center items-center"
				>
					<div className="p-4 text-xl rounded-lg text-white bg-blue-600">
						<BsPerson />
					</div>
					<p className="text-sm text-neutral-800">About</p>
				</Link>
				<Link
					href={'/skills'}
					className="flex flex-col justify-center items-center"
				>
					<div className="p-4 text-xl rounded-lg text-neutral-800 bg-slate-400">
						<BsCodeSlash />
					</div>
					<p className="text-sm text-neutral-800">Skills</p>
				</Link>
				<Link
					href={"/works"}
					className="flex flex-col justify-center items-center"
				>
					<div className="p-4 text-xl rounded-lg text-neutral-800 bg-opacity-50 bg-yellow-600">
						<BsFolder />
					</div>
					<p className="text-sm text-neutral-800">Works</p>
				</Link>
				<Link
					href={"/contact"}
					className="flex flex-col justify-center items-center"
				>
					<div className="p-4 text-xl rounded-lg text-white bg-green-500">
						<BsTelephone />
					</div>
					<p className="text-sm text-neutral-800">Contact</p>
				</Link>
			</div>
		</div>
	);
};

export default HomeBar;
