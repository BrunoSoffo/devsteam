import styles from './button.module.css'

export default function Button({children, fullWidth}){
    return(
        <button className={`${styles.button} ${fullWidth && styles.fullwidth}`}>{children}</button>
        // O "${...}" é uma sintaxe usada para interpolar uma expressão JavaScript em uma string
        // ${fullWidth && styles.fullwidth}: Nesta parte, a variável fullWidth é uma propriedade booleana que determina se o botão deve ter largura total ou não. O && é o operador lógico "E" em JavaScript. Se fullWidth for verdadeiro, a classe styles.fullwidth será adicionada à lista de classes do botão. Caso contrário, essa classe não será incluída
        )
}