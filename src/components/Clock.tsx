import React, { useEffect, useState } from "react";
import { weekday, month } from "./Header";

const Clock = () => {
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
	return (
		<div className="w-full flex flex-row justify-end items-start gap-3">
			<div className="text-black text-sm">
				{d} {m} {calDay}
			</div>
			<div className="text-black text-sm">
				{date.toLocaleTimeString()}
			</div>
		</div>
	);
};

export default Clock;
