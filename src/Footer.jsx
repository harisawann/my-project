import styles from './css/Footer.module.css'

const Footer = () => {
    return (
        <div>
            <div className={styles.foot}>
                <div className={styles.tagline} >Don't Miss Out!</div><br/><br/><br/>
                <div className={styles.description} >Be the first to hear about our hot drops, secret sales & more.
                    Join the HMSTORE fam now!</div><br/><br/>               
            </div>
        </div>
    )
}

export default Footer