import styles from './css/Buy.module.css'
import { useState } from 'react'
import { Link } from 'react-router'
import { useLocation } from "react-router";



const Buy = () => {


    const location = useLocation();
    const { product } = location.state || {};

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [apartment, setApartment] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("Pakistan")

    const handleSubmit = (e) => {
        e.preventDefault()
        const orderData = {
            firstName,
            lastName,
            address,
            apartment,
            city,
            postalCode,
            phone,
            country,
            product,
        }
        console.log("Order placed:", orderData)
    }

    return (
        <div className={styles.buy}>
            <div className={styles.labeling}>
                <h2>Delivery</h2>
                <form onSubmit={handleSubmit}>
                    <select
                        className={styles.country}
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        <option>Pakistan</option>
                    </select>

                    <div className={styles.name}>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.address}>
                        <input
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Apartment (Optional)"
                            value={apartment}
                            onChange={(e) => setApartment(e.target.value)}
                        />
                    </div>

                    <div className={styles.city}>
                        <input
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Postal code (Optional)"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </div>

                    <div className={styles.no}>
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <h2>Shipping method</h2>
                    <div className={styles.optionbox}>
                        <p>Standard</p>
                        <p>Free</p>
                    </div>

                    <h2>Payment</h2>
                    <div className={styles.cod}>
                        <p>Cash On Delivery (COD)</p>
                    </div>
                    <div className={styles.bank}>
                        <p>Bank Details</p>
                    </div>

                    <button type="submit" className={styles.order}>
                        Complete Order
                    </button>
                </form>
            </div>

            <div className={styles.info}>
                {product && (
                    <div className={styles.detail} >
                        <img className={styles.pic} src={product.img}/>
                        <div className={styles.title}>{product.name}</div>
                        <div className={styles.price}>{product.price}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Buy
