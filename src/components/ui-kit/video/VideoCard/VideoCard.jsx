import styles from './VideoCard.module.scss';
import VideoCover from './../VideoCover/VideoCover';
import { iconsMainVideo } from './../../../../assets/icons/icons';

const VideoCard = ({ src, alt, currentTime, duration, title, info, author, isMainVideo = false, likes, dislikes }) => {
    return (
        <div className={isMainVideo ? styles.mainVideoCard : styles.videoCard}>
            <VideoCover
                isMainVideo={isMainVideo}
                src={src}
                alt={alt}
                currentTime={currentTime}
                duration={duration}
            ></VideoCover>
            {
                isMainVideo
                    ? <h1 className="h1-26pt">{title}</h1>
                    : <h4 className="h4-16pt">{title}</h4>
            }
            <div className={styles.description}>
                {
                    isMainVideo
                        ? (
                            <>
                                <p className="text-20pt">{info}</p>
                                <div className={styles.btnsWrapper}>
                                    <button type="button" className="btn-grey">
                                        <img src={iconsMainVideo.like} alt="Like" />
                                        {likes}
                                    </button>
                                    <button type="button" className="btn-grey">
                                        <img src={iconsMainVideo.dislike} alt="Dislike" />
                                        {dislikes}
                                    </button>
                                    <button type="button" className="btn-grey">
                                        <img src={iconsMainVideo.share} alt="Share" />
                                        Share
                                    </button>
                                    <button type="button" className="btn-transparent">
                                        <img src={iconsMainVideo.more} alt="More" />
                                    </button>
                                </div>
                            </>
                        )
                        : (
                            <>
                                <p className="text-13pt">{info}</p>
                                <p className="text-13pt">{author}</p>
                            </>
                        )
                }
            </div>
        </div>
    );
};

export default VideoCard;