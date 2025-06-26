import styles from './VideoPlayer.module.scss';
import { iconsVideoPlayer } from '../../../../assets/icons/icons.js';
import { useMediaQuery } from 'react-responsive';

const VideoPlayer = ({ currentTime, duration }) => {
    const isMdScreen = useMediaQuery({ maxWidth: 960 });

    return (
        <div className={styles.videoPlayer}>
            {isMdScreen
                ? (
                    <div className={styles.mobilePlayer}>
                        <button type="button" className="btn-transparent">
                            <img src={iconsVideoPlayer.pause} alt="Pause" />
                        </button>
                        <div className={styles.progressWrapper}>
                            <span className={styles.time}>{currentTime}</span>
                            <div className={styles.progressBar}>
                                <div className={styles.progress}></div>
                            </div>
                            <span className={styles.time}>{duration}</span>
                        </div>
                        <button type="button" className="btn-transparent">
                            <img src={iconsVideoPlayer.volume} alt="Volume" />
                        </button>
                    </div>
                )
                : (
                    <>
                        <div className={styles.progressWrapper}>
                            <div className={styles.timeWrapper}>
                                <span className={styles.time}>{currentTime}</span>
                                <span className={styles.time}>{duration}</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.progress}></div>
                            </div>
                        </div>
                        <div></div>
                        <div className={styles.btnsWrapper}>
                            <div className={styles.leftBtns}>
                                <button type="button" className="btn-transparent">
                                    <img src={iconsVideoPlayer.pause} alt="Pause" />
                                </button>
                                <button type="button" className="btn-transparent">
                                    <img src={iconsVideoPlayer.next} alt="next" />
                                </button>
                                <div className={styles.volume}>
                                    <button type="button" className="btn-transparent">
                                        <img src={iconsVideoPlayer.volume} alt="Volume" />
                                    </button>
                                    <div className={styles.progressBar}>
                                        <div className={styles.progress}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.rightBtns}>
                                <button type="button" className="btn-transparent">
                                    <img src={iconsVideoPlayer.subtitles} alt="Subtitles" />
                                </button>
                                <button type="button" className="btn-transparent">
                                    <img src={iconsVideoPlayer.videoSettings} alt="Video settings" />
                                </button>
                                <button type="button" className="btn-transparent">
                                    <img src={iconsVideoPlayer.size} alt="Size" />
                                </button>
                                <button type="button" className="btn-transparent">
                                    <img src={iconsVideoPlayer.fullScreen} alt="Full screen" />
                                </button>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default VideoPlayer;
