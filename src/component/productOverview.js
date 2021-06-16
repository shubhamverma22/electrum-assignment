import React from "react";
import "../style.css";

const productOverview = () => {
	return (
		<div className="overview-container">
			<div className="header-overview">
				<header>Product Overview</header>
				<hr size="1" width="90%" color="#7F7F7F"></hr>
			</div>
			<div className="left-overview"></div>

			<div className="right-overview"></div>
		</div>
	);
};

export default productOverview;
