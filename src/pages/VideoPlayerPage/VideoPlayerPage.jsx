import VideoList from '../../components/ui-kit/video/VideoList/VideoList';
import styles from './VideoPlayerPage.module.scss';
import Checkbox from './../../components/ui-kit/Checkbox/Checkbox';
import VideoCard from './../../components/ui-kit/video/VideoCard/VideoCard';
import cover from '../../assets/images/cover_22.svg';
import user from '../../assets/icons/users/user_8.svg';
import IconLink from './../../components/ui-kit/IconLink/IconLink';

const VideoPlayerPage = () => {
    return (
        <section className={styles.videoPlayerSection}>
            <div className={styles.mainVideoWrapper}>
                <VideoCard
                    src={cover}
                    alt="Cover 22"
                    currentTime="1:34"
                    duration="19:00"
                    title="Dude You Re Getting A Telescope"
                    info="123k views"
                    isMainVideo={true}
                    likes="123k"
                    dislikes="435k"
                ></VideoCard>
                <div className={styles.videoInfo}>
                    <IconLink
                        href="#"
                        src={user}
                        alt="User"
                    ></IconLink>
                    <div className={styles.description}>
                        <div className={styles.channel}>
                            <div className={styles.channelInfo}>
                                <h2 className="h2-26pt">Food & Drink</h2>
                                <p className="text-13pt">245K subscribed</p>
                            </div>
                            <button type="button" className="btn-red">Subscribe 2.3m</button>
                            <button type="button" className="btn-transparent">Subscribe</button>
                        </div>
                        <p className="text-13pt">Published on 14 Jun 2019</p>
                        <p className="text-16pt">
                            A successful marketing plan relies heavily on the pulling-power of advertising copy.
                            Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince
                            consumers to take action. There is no magic formula to write perfect ad copy;
                            it is based on a number of factors, including ad placement, demographic,
                            even the consumer’s mood when they see your ad.
                        </p>
                        <p className="text-20pt">Show more</p>
                    </div>
                </div>
            </div>
            <VideoList
                className={styles.videosWrapper}
                header="Next"
            >
                <Checkbox label='AUTOPLAY'></Checkbox>
            </VideoList>
        </section>
    );
};

export default VideoPlayerPage;