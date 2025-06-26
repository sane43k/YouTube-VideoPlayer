import styles from './Checkbox.module.scss';

const Checkbox = ({ label }) => {
    return (
        <label className={styles.toggle}>
            <span className={styles.toggle__label}>{label}</span>
            <input type="checkbox" className={styles.toggle__input} />
            <span className={styles.toggle__slider}></span>
        </label>
    );
};

export default Checkbox;