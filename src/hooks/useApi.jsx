import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/slices/user'

const useApi = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const sendRequest = useCallback(async (url, options = {}) => {
        setLoading(true)
        setError(null)
        const dispatch = useDispatch()

        try {
            const response = await fetch(url, options)

            // 401
            if (response.status === 401) {
                console.log('unauthenticated, logging out...')
                dispatch(logout())
                return
            }

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`)
            }

            const result = await response.json()
            setData(result)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }, [])

    return { data, loading, error, sendRequest }
}

export default useApi
