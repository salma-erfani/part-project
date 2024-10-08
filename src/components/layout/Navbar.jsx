import { useEffect, useState } from "react"
import Input from "../util/Input"
import SwitchInput from "../util/SwitchInput"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import { useDispatch, useSelector } from "react-redux"
import { selectQuery, setQuery } from "../../store/slices/data"

const Navbar = ({ includeSearchBar }) => {
    const [searchInput, setSearchInput] = useState('')
    const dispatch = useDispatch()
    const query = useSelector(selectQuery)

    useEffect(() => {
        if (query !== searchInput) {
            setSearchInput(query)
        }
    }, [query])


    const onClickSearch = (e) => {
        e.preventDefault()
        dispatch(setQuery(searchInput))
    }

    return (
        <nav className="navbar">
            <img src="assets/images/chingal-logo.png" alt="chingal logo" />
            <div className="controls">
                {includeSearchBar &&
                    <form>
                        <Input
                            id='search'
                            type='text'
                            placeholder='جستجو'
                            icon={<SearchRoundedIcon />}
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                            onClick={onClickSearch}
                        />
                    </form>
                }
                <SwitchInput />
            </div>
        </nav>
    )
}

export default Navbar