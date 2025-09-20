import { useState } from 'react';
import styles from './css/Help.module.css';
import Navbar from './Navbar';

const Help = () => {

    const [show, setShow] = useState(null);

    return (
        <div>
            <div className={styles.title}>Help</div>
            <div className={styles.pblock}>
                <div className={styles.block}>
                    <div className={styles.question}
                        onClick={() => setShow(show === 1 ? null : 1)}>
                        How do I place an order?
                        {show === 1 && (
                            <div className={styles.answer}>
                                Browse products, add them to your cart, and proceed to checkout. Enter your shipping details and payment method to confirm.
                            </div>
                        )}
                    </div>
                </div>
                <hr />

                <div className={styles.block}>
                    <div className={styles.question}
                        onClick={() => setShow(show === 2 ? null : 2)}>
                        What payment methods are accepted?
                        {show === 2 && (
                            <div className={styles.answer}>
                                We accept credit/debit cards, JazzCash, EasyPaisa, and cash on delivery (if available in your area).
                            </div>
                        )}
                    </div>
                </div>
                <hr />

                <div className={styles.block}>
                    <div className={styles.question}
                        onClick={() => setShow(show === 3 ? null : 3)}>
                        Shipping & Delivery
                        {show === 3 && (
                            <div className={styles.answer}>
                                Standard delivery: 3–7 business days.
                                Express delivery: 1–3 business days.
                                (Exact times vary by location.)
                            </div>
                        )}
                    </div>
                </div>
                <hr />

                <div className={styles.block}>
                    <div className={styles.question}
                        onClick={() => setShow(show === 4 ? null : 4)}>
                        Returns & Refunds
                        {show === 4 && (
                            <div className={styles.answer}>
                                You can return items within 14 days of delivery if they are unused and in original packaging.
                            </div>
                        )}
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Help;