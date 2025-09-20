import styles from './css/Navbar.module.css'
import About from './About'
import { useState } from 'react'
import Home from './Home'
import Listing from './Listing'
import { Link } from "react-router"


const Navbar = () => {

    const [show,setshow]=useState(false)

    return (
        <div>
            <div className={styles.nav}>
                <div className={styles.navbar}>
                    <div className={styles.section1} >
                        <img className={styles.logo} src="https://i.pinimg.com/736x/1d/15/5b/1d155b07cb2ad9daf581f5f559f7ac4a.jpg"></img>
                    </div>
                    <div className={styles.section2}>
                        <div className={styles.heading}>
                            <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/128/3917/3917033.png"></img>
                            <div className={styles.headingtext} >
                                <Link to="/home" > Home </Link>
                            </div>
                        </div>
                        <div className={styles.heading}>
                            <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/128/9238/9238294.png"></img>
                            <div className={styles.headingtext} >
                                <Link to="/listing" > Products </Link>
                            </div>
                        </div>
                        <div className={styles.heading}>
                            <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/128/3916/3916720.png" ></img>
                            <div className={styles.headingtext}>
                                <Link to="/about" > About </Link>
                            </div>
                        </div>
                        <div className={styles.heading}>
                            <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/128/3095/3095610.png"></img>
                            <div className={styles.headingtext} >Contact
                            </div>
                        </div>
                        <div className={styles.heading}>
                            <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/128/3916/3916693.png"></img>
                            <div className={styles.headingtext} >
                                <Link to="/help" > Help </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.section3}>
                        <div className={styles.heading} >
                            <img className={styles.icons} src="https://cdn-icons-png.flaticon.com/128/3916/3916598.png"></img>
                            <div className={styles.headingtext} >Cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar