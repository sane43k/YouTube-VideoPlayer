import styles from './Aside.module.scss';
import { iconsAside } from './../../assets/icons/icons';
import IconTextLink from './../ui-kit/IconTextLink/IconTextLink';

const Aside = () => {
    return (
        <aside className={styles.asideSection}>
            <nav className={styles.navigation}>
                <ul className={styles.mainMenuList}>
                    <li className={styles.mainMenuList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.home}
                            alt="Home"
                            text="Home"
                            active={true}
                        ></IconTextLink>
                    </li>
                    <li className={styles.mainMenuList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.trending}
                            alt="Trending"
                            text="Trending"
                        ></IconTextLink>
                    </li>
                    <li className={styles.mainMenuList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.subscriptions}
                            alt="Subscriptions"
                            text="Subscriptions"
                        ></IconTextLink>
                    </li>
                    <li className={styles.mainMenuList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.library}
                            alt="Library"
                            text="Library"
                        ></IconTextLink>
                    </li>
                </ul>
                <ul className={styles.menuList}>
                    <li className={styles.menuList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.history}
                            alt="History"
                            text="History"
                        ></IconTextLink>
                    </li>
                    <li className={styles.menuList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.watchLater}
                            alt="Watch later"
                            text="Watch later"
                        ></IconTextLink>
                    </li>
                    <li className={styles.menuList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.favourites}
                            alt="Favourites"
                            text="Favourites"
                        ></IconTextLink>
                    </li>
                    <li className={styles.menuList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.likedVideos}
                            alt="Liked videos"
                            text="Liked videos"
                        ></IconTextLink>
                    </li>
                    <li className={styles.menuList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.music}
                            alt="Music"
                            text="Music"
                        ></IconTextLink>
                    </li>
                    <li className={styles.menuList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.games}
                            alt="Games"
                            text="Games"
                        ></IconTextLink>
                    </li>
                    <li className={styles.menuList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.showMore}
                            alt="Show more"
                            text="Show more"
                        ></IconTextLink>
                    </li>
                </ul>
                <h3 className="h3-18pt">Subscriptions</h3>
                <ul className={styles.subList}>
                    <li className={styles.subList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.user1}
                            alt="User 1"
                            text="Gussie Singleton"
                            user={true}
                        ></IconTextLink>
                    </li>
                    <li className={styles.subList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.user2}
                            alt="User 2"
                            text="Nora Francis"
                            user={true}
                        ></IconTextLink>
                    </li>
                    <li className={styles.subList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.user3}
                            alt="User 3"
                            text="Belle Briggs"
                            user={true}
                        ></IconTextLink>
                    </li>
                    <li className={styles.subList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.user4}
                            alt="User 4"
                            text="Eunice Cortez"
                            user={true}
                        ></IconTextLink>
                    </li>
                    <li className={styles.subList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.user5}
                            alt="User 5"
                            text="Emma Hanson"
                            user={true}
                        ></IconTextLink>
                    </li>
                    <li className={styles.subList__item}>
                        <IconTextLink
                            href="#"
                            src={iconsAside.user6}
                            alt="User 6"
                            text="Leah Berry"
                            user={true}
                        ></IconTextLink>
                    </li>
                </ul>
                <IconTextLink
                    href="#"
                    src={iconsAside.settings}
                    alt="settings"
                    text="settings"
                ></IconTextLink>
            </nav>
        </aside>
    );
};

export default Aside;