
const Button = ({ children, onClick, appearence = "default", className, style }) => {
  return (
    <button className={`button ${appearence} ${className}`} onClick={onClick} style={style} >

      {children}

    </button>
  )
}

export default Button