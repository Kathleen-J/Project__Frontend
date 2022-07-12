import css from './Loading.module.css';

const Loading = () => {
    return (
        <div className={css.img}>
            <img src={require('./loading.png')} alt="loading" className={css.loading}/>
        </div>
    )
}

export default Loading;