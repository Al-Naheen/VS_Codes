import Navbar from './Navbar'
import Head from "next/head";

function Layout(props) {
    return (
        <div>
            <Head>
                <title>Amader Delivery</title>
            </Head>
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout
