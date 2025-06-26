import styles from './Header.module.scss';
import { iconsHeader } from '../../assets/icons/icons.js';
import user from '../../assets/icons/users/user.svg';
import Search from '../ui-kit/Search/Search.jsx';
import IconLink from '../ui-kit/IconLink/IconLink.jsx';

const Header = () => {
    return (
        <header className={styles.headerSection}>
            <div className={styles.btnsSearchWrapper}>
                <div className={styles.btnsWrapper}>
                    <button type="button" className={`${styles.btnBurger} btn-transparent`}>
                        <img src={iconsHeader.menu} alt="Menu" />
                    </button>
                    <IconLink
                        href="https://www.youtube.com/"
                        src={iconsHeader.logo}
                        alt="YouTube logo"
                        newTab={true}
                    ></IconLink>
                </div>
                <Search className={styles.search}></Search>
            </div>
            <div className={styles.iconsWrapper}>
                <IconLink
                    href="#"
                    src={iconsHeader.camera}
                    alt="Camera"
                    className={styles.headerLink}
                ></IconLink>
                <IconLink
                    href="#"
                    src={iconsHeader.dots}
                    alt="Dots"
                    className={styles.headerLink}
                ></IconLink>
                <IconLink
                    href="#"
                    src={iconsHeader.bell}
                    alt="Bell"
                    className={styles.headerLink}
                >
                    <span>3</span>
                </IconLink>
                <button type="button" className="btn-transparent">
                    <img src={iconsHeader.search} alt="Search" />
                </button>
                <IconLink
                    href="#"
                    src={user}
                    alt="User"
                    className={styles.headerLink}
                ></IconLink>
            </div>
        </header>
    );
};

export default Header;