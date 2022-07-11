import s from './Button.module.css'
export default function Button(params) {
    return ( <div className={s.container}><button type="button" className={s.btnMore}>Load more</button></div>)
}