import "./styles/App.scss"
import SignIn from "./components/sign-in/SignIn"
import { useDispatch, useSelector } from "react-redux"
import { login, selectUsername } from "./store/slices/user"
import { useEffect } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./components/layout/Dashboard"
import NotFoundPage from "./components/layout/NotFoundPage"
import Users from "./components/user/Users"
import Toast from "./components/util/Toast"
import { hideToast } from "./store/slices/toast"
import { selectQuery, selectSortedOn, setQuery, setSortedOn } from "./store/slices/data"

const AppRoutes = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return (
            <Route path="/sign-in" element={<SignIn />} />
        )
    }
    else return (
        <Route
            path="/dashboard/*"
            element={
                <Routes>
                    <Route element={<Dashboard />}>
                        <Route index element={<Navigate to='/dashboard/users' />} />
                        <Route path="users/*" element={<Users />} />
                    </Route>
                </Routes>
            }
        />
    )
}

const withAuthenticated = (Component) => ({ username }) => {
    return <Component isLoggedIn={username} />
}

const App = () => {
    const username = useSelector(selectUsername)
    const dispatch = useDispatch()
    const { showToast, message, type } = useSelector(state => state.toast)
    const query = useSelector(selectQuery)
    const sortedOn = useSelector(selectSortedOn)

    const storedUsername = localStorage.getItem('username')
    if (storedUsername && !username) {
        dispatch(login(storedUsername))
    }

    // check in session storage for query and sortedOn
    useEffect(() => {
        const storedQuery = sessionStorage.getItem('query')
        const storedSortColumn = sessionStorage.getItem('sortColumn')
        const storedSortType = sessionStorage.getItem('sortType')

        if (storedQuery && storedQuery !== query) {
            dispatch(setQuery(storedQuery))
        }

        if (storedSortColumn !== sortedOn?.column || storedSortType !== sortedOn?.type) {
            dispatch(setSortedOn({ column: storedSortColumn, type: storedSortType }))
        }
    }, [])

    // check in local storage for saved theme
    useEffect(() => {
        const theme = localStorage.getItem('theme')
        const body = document.body
        if (theme === 'light') {
            body.classList.add('light-theme')
        }
        else {
            body.classList.remove('light-theme')
        }
    }, [])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={username ? <Navigate to='/dashboard' replace /> : <Navigate to='/sign-in' replace />} />
                    <Route path="/not-found" element={<NotFoundPage />} />
                    {withAuthenticated(AppRoutes)}
                    <Route path="*" element={<Navigate to="/not-found" />} />
                </Routes>
            </BrowserRouter>
            {showToast && <Toast message={message} type={type} onClose={() => dispatch(hideToast())} />}
        </>
    )
}

export default App