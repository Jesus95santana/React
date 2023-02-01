import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import image1 from "./WW-Icon-Destiny.gif";
import image2 from "./WW-Icon-IP.gif";
import image3 from "./WW-Icon-Operational.gif";
import image4 from "./WW-Icon-Pooled.gif";
import image5 from "./WW-Icon-Track.gif";

import "./styles.css";
import carousel from "react-alice-carousel/lib/alice-carousel.css";

export default function App() {
	const responsive = {
		0: {
			items: 1,
		},
		568: {
			items: 2,
		},
		1024: {
			items: 3,
		},
	};
	const items = [
		<img src={image1} />,
		<img src={image2} />,
		<img src={image3} />,
		<img src={image4} />,
		<img src={image5} />,
	];

	return (
		<div className="container">
			<div className="alice">
				<h1 className={styles.name}>
					<p>hello</p>
				</h1>
				<AliceCarousel
					className={carousel}
					items={items}
					autoPlay={true}
					infinite={true}
					animationDuration={2000}
					autoPlayInterval={1000}
					disableButtonsControls={true}
					disableDotsControls={true}
					responsive={responsive}
				/>
			</div>
			<div classNam="test">
				<div className="parent">
					<div className="child"></div>
				</div>
			</div>
		</div>
	);
}
