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

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={username ? <Navigate to='/dashboard' replace /> : <Navigate to='/sign-in' replace />} />
                    <Route path="/not-found" element={<NotFoundPage />} />
                    {!username &&
                        <Route path="/sign-in" element={<SignIn />} />
                    }
                    {username &&
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
                    }
                    <Route path="*" element={<Navigate to="/not-found" />} />
                </Routes>
            </BrowserRouter>
            {showToast && <Toast message={message} type={type} onClose={() => dispatch(hideToast())} />}
        </>
    )
}

export default App