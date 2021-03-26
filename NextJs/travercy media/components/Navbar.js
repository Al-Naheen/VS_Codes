import Link from "next/link";

const Navbar = () => (
        <ul>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/products/'><a>All Products</a></Link></li>
            <li><Link href='/stores/'><a>Store</a></Link></li>
            <li><Link href='/stores/store_id/'><a>Store Products</a></Link></li>
        </ul>
)

export default Navbar