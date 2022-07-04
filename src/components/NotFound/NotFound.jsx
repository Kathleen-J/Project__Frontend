import { Link } from 'react-router-dom';
import css from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={css.img}>
            <img src={require('./NotFound.png')} alt="Not Found" className={css.notFound}/>
            <Link to='/' className={css.main}>На главную</Link>
        </div>
    )
}

export default NotFound;