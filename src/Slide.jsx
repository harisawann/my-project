import styles from './css/Navbar.module.css'
import About from './About'
import { useState, useEffect } from 'react'
import Home from './Home'
import Listing from './Listing'
import { Link } from "react-router"

const Slide = () => {
    const [show, setshow] = useState(false)

    useEffect(() => {
        if (show) {
            document.body.classList.add("menu-open");
            document.body.style.overflow = "hidden";
            document.body.style.backgroundColor = "white";
        } else {
            document.body.classList.remove("menu-open");
            document.body.style.overflow = "auto";
            document.body.style.backgroundColor = "white";
        }
    }, [show]);


    return (
        <div>
            <div className={styles.nav}>
                <div className={styles.navbar}>
                    <div className={styles.menuup}>
                        <img
                            className={styles.menu}
                            onClick={() => { setshow(!show) }}
                            src="https://cdn-icons-png.flaticon.com/128/3917/3917215.png"
                        />
                        <div className={`${styles.section2} ${show ? styles.active : ""}`}>
                            {show && (
                                <>


                                    <div className={styles.heading}>
                                        <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/128/3917/3917033.png" />
                                        <div className={styles.headingtext}>
                                            <Link to="/home" onClick={() => setshow(!show)}>Home</Link>
                                        </div>
                                    </div>
                                    <div className={styles.heading}>
                                        <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/128/9238/9238294.png" />
                                        <div className={styles.headingtext}>
                                            <Link to="/listing" onClick={() => { setshow(!show); }}>Products</Link>
                                        </div>
                                    </div>
                                    <div className={styles.heading}>
                                        <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/128/3916/3916720.png" />
                                        <div className={styles.headingtext}>
                                            <Link to="/about" onClick={() => { setshow(!show); }}>About</Link>
                                        </div>
                                    </div>
                                    <div className={styles.heading}>
                                        <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/128/3095/3095610.png" />
                                        <div className={styles.headingtext}>Contact</div>
                                    </div>
                                    <div className={styles.heading}>
                                        <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/128/3916/3916693.png" />
                                        <div className={styles.headingtext}>
                                            <Link to="/help" onClick={() => { setshow(!show); }}>Help</Link>
                                        </div>
                                    </div>

                                </>
                            )}
                        </div>
                    </div>
                    <div className={styles.section1}>
                        <img
                            className={styles.logo}
                            src="https://i.pinimg.com/736x/1d/15/5b/1d155b07cb2ad9daf581f5f559f7ac4a.jpg"
                        />
                    </div>

                    <div className={styles.section3}>
                        <div className={styles.heading}>
                            <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/128/3916/3916598.png" />
                            <div className={styles.headingtext}>Cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Slide
