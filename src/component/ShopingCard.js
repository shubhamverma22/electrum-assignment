import React from "react";
import ProductImg from "../image/product.png";
import "../style.css";

const ShopingCard = () => {
	return (
		<div>
			<div className="product-card">
				<header className="product-header">
					<h2>Rheem</h2>
					<h4>Pro Prestige 50 LeakGuard</h4>
				</header>
				<div className="product-main">
					<div className="product-left">
						<img src={ProductImg} alt="productimage"></img>
					</div>
					<div className="product-right">
						<ul>
							<li>4x more Efficient as standard Model</li>
							<li>10 years manufacture warranty</li>
							<li>Built in leak prevention System</li>
							<li>Control Setting with mobile app</li>
						</ul>
					</div>
				</div>
				<hr size="1" width="90%" color="#7F7F7F"></hr>
				<div className="product-pricing">
					<div className="left-billing">
						<h4>Base Price</h4>
						<span>(Installation not included)</span>
						<p>Available Incentives</p>
						<h4>Equipment Cost</h4>
					</div>
					<div className="right-billing">
						<p className="price">$1,500</p>
						<p className="price">$0</p>
						<p className="price">$1,500</p>
					</div>
					<section className="alert-box">
						<text>Your Est. Annual Saving is $160</text>
					</section>
					<button>Get Install Quote</button>
					<footer>
						<a href="www.facebok.com">View More Details</a>
					</footer>
				</div>
			</div>
		</div>
	);
};

//	<span className="continue">................</span>

export default ShopingCard;
