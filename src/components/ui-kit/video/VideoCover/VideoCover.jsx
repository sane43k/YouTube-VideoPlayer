import styles from './VideoCover.module.scss';
import VideoPlayer from './../VideoPlayer/VideoPlayer';

const VideoCover = ({ src, alt, currentTime, duration, isMainVideo = false }) => {
    return (
        <div class={isMainVideo ? styles.mainVideoCover : styles.videoCover}>
            <img src={src} alt={alt} />
            {isMainVideo
                ? (
                    <VideoPlayer
                        currentTime={currentTime}
                        duration={duration}
                    ></VideoPlayer>
                )
                : (
                    <div class={styles.duration}>
                        <p class="text-14pt">{duration}</p>
                    </div>
                )
            }
        </div>
    );
};

export default VideoCover;