import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Button({ text }) {
    const theme = useContext(ThemeContext)
    return <button style ={{backgroundColor: theme }}>{text}</button>
}

export default Button