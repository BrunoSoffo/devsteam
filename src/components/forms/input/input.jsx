import styles from './input.module.css'

export default function Input({fullWidth, ...props}){
    // ao passar "...props", colocamos todos os outros parâmetros de um input normal
    return(
        <input className={`${styles.input} ${fullWidth &&  styles.fullwidth}`} {...props}/>
    )
}