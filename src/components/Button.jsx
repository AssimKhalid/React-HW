import style from './Button.module.css';
const Button = ({children}) =>(
<button className={`${style.blue} ${style.btn}`}>{children}</button>
);

export default Button;