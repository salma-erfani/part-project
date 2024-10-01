import Input from "../util/Input"
import SwitchInput from "../util/SwitchInput"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

const Navbar = ({ includeSearchBar }) => {
    return (
        <nav className="navbar">
            <img src="assets/images/chingal-logo.png" alt="chingal logo" />
            <div className="controls">
                {includeSearchBar &&
                    <Input id='search' type='text' placeholder='جستجو' icon={<SearchRoundedIcon />} />
                }
                <SwitchInput />
            </div>
        </nav>
    )
}

export default Navbar