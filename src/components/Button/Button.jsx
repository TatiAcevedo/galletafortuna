import "./Button.css"

const Button = ({ handlerClick }) => {
  return (
    <button className="switch_btn" onClick={handlerClick}>
      
        <i class='bx bx-loader'></i>
    </button>
  )
}

export default Button