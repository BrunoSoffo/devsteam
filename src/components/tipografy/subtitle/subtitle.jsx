import styles from './subtitle.module.css'

export default function Subtitle({children}) {
    // "props" e "{props.children}" é uma propriedade que passsamos dentro da função, para q ela altere seu valor pelo valor do filho
    // "{children}" é uma outra forma de pegarmoso valor do filho
    return(
        <h2 className={styles.subtitle}>{children}</h2>
    )
}