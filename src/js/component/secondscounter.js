import React from "react";
import PropType from "prop-types";

let widthnumer = "60px";

function GetNumber(str, i) {
	let x = str.length - i;
	return str[x];
}

export function SecondsCounter(props) {
	let sec = GetNumber(props.seconds, 1);
	let mins = props.seconds < 10 ? 0 : GetNumber(props.seconds, 2);
	let cents = props.seconds < 100 ? 0 : GetNumber(props.seconds, 3);
	let mills = props.seconds < 1000 ? 0 : GetNumber(props.seconds, 4);
	let xxxs = props.seconds < 10000 ? 0 : GetNumber(props.seconds, 5);
	let yyys = props.seconds < 100000 ? 0 : GetNumber(props.seconds, 6);
	//console.log(props);
	return (
		<div className="row justify-content-center text-center">
			<h1
				className="border rounded-lg p-2 mx-2 bg-dark"
				style={{ width: widthnumer }}>
				<i className="fas fa-history"></i>
			</h1>
			<h1
				className="border rounded-lg p-2 mx-2 bg-dark"
				style={{ width: widthnumer }}>
				{yyys}
			</h1>
			<h1
				className="border rounded-lg p-2 mx-2 bg-dark"
				style={{ width: widthnumer }}>
				{xxxs}
			</h1>
			<h1
				className="border rounded-lg p-2 mx-2 bg-dark"
				style={{ width: widthnumer }}>
				{mills}
			</h1>
			<h1
				className="border rounded-lg p-2 mx-2 bg-dark"
				style={{ width: widthnumer }}>
				{cents}
			</h1>
			<h1
				className="border rounded-lg p-2 mx-2 bg-dark"
				style={{ width: widthnumer }}>
				{mins}
			</h1>
			<h1
				className="border rounded-lg p-2 mx-2 bg-dark"
				style={{ width: widthnumer }}>
				{sec}
			</h1>
		</div>
	);
}

SecondsCounter.propTypes = {
	seconds: PropType.string
};
