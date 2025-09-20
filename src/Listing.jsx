import styles from './css/Listing.module.css';
import { Link } from 'react-router';

const Listing = () => {

    const product = [
        {
            name: 'Arabic Aura Watch',
            price: 'RS.3,950',
            img: 'https://dnstore.pk/cdn/shop/files/37CF3CEE-2315-42B2-9153-E22C66C2F310.jpg?v=1742674819&width=533'
        },
        {
            name: 'SABR Armless Watch',
            price: 'RS.3,290',
            img: 'https://dnstore.pk/cdn/shop/files/63401A3E-B145-42B4-A66F-2DFB22F99D2B.jpg?v=1742672187&width=533'
        },
        {
            name: 'PP Square Leather Straps',
            price: 'RS.5,000',
            img: 'https://dnstore.pk/cdn/shop/files/7A197A23-BEE4-4764-9D11-314E300CD634.jpg?v=1754406861&width=533'
        },
        {
            name: 'PP Leather straps ',
            price: 'RS.4,950',
            img: 'https://dnstore.pk/cdn/shop/files/83E2AAB1-C5A7-406D-A4FD-16BD010BF92B.jpg?v=1754486118&width=533'
        },
        {
            name: 'Metallic Arabic Aura',
            price: 'RS.7,550',
            img: 'https://dnstore.pk/cdn/shop/files/C6E67528-F13D-4699-ABBD-62DB71B1280F.jpg?v=1752100533&width=533'
        },
        {
            name: 'Patek Philippe Stone Dial',
            price: 'RS.5,900',
            img: 'https://dnstore.pk/cdn/shop/files/C1F74DF4-CDEC-442D-AECB-BA17775EDA1F.jpg?v=1750584916&width=533'
        },

    ]

    return (
        <div>
            <div className={styles.title}>Products</div>
            <div className={styles.listing} >
                {product.map((product, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.img}>
                            <img className={styles.product} src={product.img} />
                        </div>
                        <div className={styles.text}>
                            <p>{product.name}</p>
                            <div className={styles.pricetag} >
                                <div className={styles.h5} >{product.price}</div>
                                <button className={styles.btn} >
                                    <Link to="/buy" state={{ product: product }}>
                                        BUY NOW
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Listing