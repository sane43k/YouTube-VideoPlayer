import styles from './Search.module.scss';
import search from '../../../assets/icons/search_black.svg';

const Search = ({ className }) => {
    return (
        <div className={`${styles.searchWrapper} ${className}`}>
            <input type="text" placeholder="Search"/>
            <button type="button" className="btn-transparent">
                <img src={search} alt="Search"/>
            </button>
        </div>
    );
};

export default Search;