import styles from './IconTextLink.module.scss';

const IconTextLink = ({ href, src, alt, text, user = false, active = false }) => {
    return (
        <a 
            href={href} 
            className={`${user ? styles.userTextLink : styles.iconTextLink} ${active ? styles.active : ''}`}
        >
            <span className={styles.iconWrapper}>
                <img src={src} alt={alt} />
            </span>
            {text}
        </a>
    );
};

export default IconTextLink;