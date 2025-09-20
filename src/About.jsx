import styles from './css/About.module.css'


const About = () => {

    const service = [
        {
            head: 'Free Shipping',
            explain: 'Receive your product Within 2-3 Working days. Free Cash on Delivery all over Pakistan.',
            img: 'https://cdn-icons-png.flaticon.com/128/11153/11153380.png'
        },
        {
            head: 'Return or Refunded',
            explain: 'You can return your product within 7 days of receiving it. To request a refund.',
            img: 'https://cdn-icons-png.flaticon.com/128/18327/18327092.png'
        },
        {
            head: 'Customer Support',
            explain: '24/7 customer support that is respectful and helpful "Your satisfaction is our top priority.',
            img: 'https://cdn-icons-png.flaticon.com/128/2020/2020773.png'
        },

    ]

    return (
        <div>
            <div className={styles.title}>About Us</div>
            <br /><br /><br />
            <div className={styles.description}>HM Store is Pakistan's most trusted ecommerce platform for tech products. We offer high-quality products,True Wireless Earphones, Smartwatch, Bluetooth Headphones, Bluetooth Speakers, power-banks, Gaming Headsets and much more. free cash on delivery, and a 100% satisfaction guarantee. Shop with confidence today!
                <br /><br />
                Here are some of the benefits of shopping at HM Store:
                <ul>
                    <li>Most trusted ecommerce platform in Pakistan</li>
                    <li>Wide selection of high-quality tech products</li>
                    <li> Free cash on delivery in Pakistan</li>
                    <li> 100% satisfaction guarantee</li>
                    <li> 100% Money Back guarantee</li>
                    <li> 24/7 customer support</li>
                </ul>
            </div>
            <br /><br /><br /><br />
            <div className={styles.services}>
                {service.map((service, index) =>
                (
                    <div key={index} >
                        <div className={styles.cards}>
                            <img className={styles.servicesimg} src={service.img} />
                            <div className={styles.heading}> {service.head}
                            </div><br />
                            <p>{service.explain}</p>
                        </div>
                    </div>
                ))}
            </div>
            <br /><br /><br />
        </div>
    )
}

export default About