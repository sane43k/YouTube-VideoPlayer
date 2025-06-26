import styles from './IconLink.module.scss';

const IconLink = ({ href, src, alt, newTab = false, className, children }) => {
    return (
        <a 
            href={href} 
            className={`${styles.iconLink} ${className}`} 
            target={newTab ? '_blank' : '_self'}
        >
            <img src={src} alt={alt}/>
            {children}
        </a>
    );
};

export default IconLink;