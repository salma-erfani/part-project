import "./styles/App.scss"
import SignIn from "./components/sign-in/SignIn"
import { useSelector } from "react-redux"
import { selectUsername } from "./store/slices/user"
import { useEffect } from "react"

const App = () => {
    const username = useSelector(selectUsername)

    useEffect(() => {console.log('username is:', username)}, [username])

    return (
        <>
            <SignIn />
        </>
    )
}

export default App