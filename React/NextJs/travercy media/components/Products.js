// import Layout from "./Layout"
import './css/style.css'

const Products = ({ imageUrl, productName, shopName, normalPrice, oldPrice, productId }) => (
	// <Layout>
		<div class="row">
			{/* product */}
			<div class="col-lg-3 col-md-4 col-xs-6 product-wrapper">
				<div class="product">
					<div class="product-img">
						<img src={imageUrl} alt=""
							style={{
								height: '150px',
								width: 'auto',
								maxWidth: '250px',
								display: 'block',
								margin: 'auto'
							}}
						/>
						<div class="product-label">
							<span class="sale">-30%</span>
							<span class="new">NEW</span>
						</div>
					</div>
					<div class="product-body">
						<p class="product-category">{shopName}</p>
						<h3 class="product-name"><a href="#">{productName}</a></h3>
						<h4 class="product-price">{normalPrice} <del class="product-old-price">{oldPrice}</del></h4>
						<div class="product-rating">
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
						</div>

						<button
							class="add-to-cart-btn primary-btn"
							style={{ paddingRight: '20px', paddingLeft: '20px' }}
						><i class="fa fa-shopping-cart"></i>&nbsp;&nbsp;buy
					                    </button>
						<button
							class="add-to-cart-btn primary-btn"
							style={{ margin: '5px', paddingRight: '20px', paddingLeft: '20px' }}
						>Details
					                    </button>

					</div>
				</div>
			</div>
			{/* /product */}
		</div>

)

export default Products
