import "./Button.css"

const Button = ({ handlerClick }) => {
  return (
    <button className="switch_btn" onClick={handlerClick}>
      
        <i className='bx bx-loader'></i>
    </button>
  )
}

export default Button