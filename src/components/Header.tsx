import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
	BsHouse,
	BsPerson,
	BsCodeSlash,
	BsFolder,
	BsTelephone,
} from "react-icons/bs";

interface HeaderProps {
	page: string;
}

export const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
export const month = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];
const Clock = dynamic(() => import('../components/Clock'), {ssr: false});

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
	

	return (
		<div className="w-full fixed top-0 bg-slate-300 bg-opacity-50 px-3 py-0.5 flex flex-row justify-between items-center">
			<div className="w-full flex flex-row justify-start items-center gap-3">
				<div className="text-black">
					{props.page === "Home" ? <BsHouse /> : null}
					{props.page === "About" ? <BsPerson /> : null}
					{props.page === "Skills" ? <BsCodeSlash /> : null}
					{props.page === "Works" ? <BsFolder /> : null}
					{props.page === "Contact" ? <BsTelephone /> : null}
				</div>
				<Link href={""} className="text-black text-sm font-medium">
					{props.page}
				</Link>
			</div>
			<Clock/>
		</div>
	);
};

export default Header;
