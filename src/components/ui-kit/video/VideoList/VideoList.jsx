import styles from './VideoList.module.scss';
import images from '../../../../assets/images/images.js';
import VideoCard from './../VideoCard/VideoCard';

const videos = [
    {
        src: images.cover10,
        alt: 'Cover 10',
        duration: '8:00',
        title: 'Baby Monitor Technology',
        info: '123k views',
        author: 'Dollie Blair',
    },
    {
        src: images.cover11,
        alt: 'Cover 11',
        duration: '8:00',
        title: 'A Good Autoresponder',
        info: '123k views',
        author: 'Dollie Blair',
    },
    {
        src: images.cover13,
        alt: 'Cover 13',
        duration: '8:00',
        title: 'Selecting The Right Hotel',
        info: '123k views',
        author: 'Dollie Blair',
    },
    {
        src: images.cover20,
        alt: 'Cover 20',
        duration: '8:00',
        title: 'Advertising Outdoors',
        info: '123k views',
        author: 'Dollie Blair',
    },
    {
        src: images.cover21,
        alt: 'Cover 21',
        duration: '2:56',
        title: 'Moon Gazing',
        info: '67k views',
        author: 'Dollie Blair',
    },
    {
        src: images.cover6,
        alt: 'Cover 6',
        duration: '23:41',
        title: 'Cristiano Ronaldo 100 Legendary Goals',
        info: '11m views',
        author: 'kGZ',
    },
];

const VideoList = ({ className, header, children }) => {
    return (
        <div className={`${styles.videoList} ${className}`}>
            <div class={styles.header}>
                <h2 class="h2-26pt">{header}</h2>
                {children}
            </div>
            {
                videos.map((video) => {
                    return (
                        <VideoCard
                            src={video.src}
                            alt={video.alt}
                            duration={video.duration}
                            title={video.title}
                            info={video.info}
                            author={video.author}
                        ></VideoCard>
                    );
                })
            }
        </div>
    );
};

export default VideoList;