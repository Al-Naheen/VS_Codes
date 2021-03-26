import Products from '../components/Products'

function products() {
	return (
		<div>
			<Products
				imageUrl='../components/img/product01.png'
				productName='Laptop'
				oldPrice='$5000'
				normalPrice='$4500'
				shopName='Amader Cart'
				productId='01'
			/>

			<Products
				imageUrl='../components/img/product02.png'
				productName='Headphone'
				oldPrice='$5000'
				normalPrice='$4500'
				shopName='Amader Cart'
				productId='02'
			/>

			<Products
				imageUrl='../components/product03.png'
				productName='Laptop'
				oldPrice='$5500'
				normalPrice='$4500'
				shopName='Amader Cart'
				productId='03'
			/>

			<Products
				imageUrl='../components/product04.png'
				productName='Sony Tablet'
				oldPrice='$5000'
				normalPrice='$4500'
				shopName='Amader Cart'
				productId='04'
			/>

			<Products
				imageUrl='../components/product05.png'
				productName='Sony Headphone'
				oldPrice='$6000'
				normalPrice='$4500'
				shopName='Amader Cart'
				productId='05'
			/>

			<Products
				imageUrl='../components/product06.png'
				productName='Laptop'
				oldPrice='$5000'
				normalPrice='$4500'
				shopName='Amader Cart'
				productId='06'
			/>

			<Products
				imageUrl='../components/product07.png'
				productName='Smartphone'
				oldPrice='$500'
				normalPrice='$450'
				shopName='Amader Cart'
				productId='07'
			/>

			<Products
				imageUrl='../components/product08.png'
				productName='Asus Laptop'
				oldPrice='$3000'
				normalPrice='$2500'
				shopName='Amader Cart'
				productId='08'
			/>

			<Products
				imageUrl='../components/product09.png'
				productName='Camera'
				oldPrice='$5800'
				normalPrice='$5000'
				shopName='Amader Cart'
				productId='09'
			/>
		</div>
	)
}

export default products
