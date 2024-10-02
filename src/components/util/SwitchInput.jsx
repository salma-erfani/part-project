import { useState } from "react"
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined'
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded'

const SwitchInput = () => {
    const [theme, setTheme] = useState('dark')

    const storedTheme = localStorage.getItem('theme')
    if (storedTheme && storedTheme !== theme) {
        setTheme(storedTheme)
    }

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(nextTheme)
        // update local storage
        localStorage.setItem('theme', nextTheme)
        // toggle body class
        const bodyElement = document.body
        if (nextTheme === 'light') {
            bodyElement.classList.add('light-theme')
        }
        else {
            bodyElement.classList.remove('light-theme')
        }
    }

    return (
        <div className="switch-container">
            <div className={"switch-item " + (theme === 'dark' && 'selected')} onClick={toggleTheme}>
                <input type="radio" id="dark" name="theme" value="dark" />
                <label htmlFor="dark" hidden>dark</label>
                <button>
                    {theme === 'dark' ? <ModeNightRoundedIcon /> : <ModeNightOutlinedIcon />}
                </button>
            </div>
            <div className={"switch-item " + (theme === 'light' && 'selected')} onClick={toggleTheme}>
                <input type="radio" id="light" name="theme" value="light" />
                <label htmlFor="light" hidden>light</label>
                <button>
                    {theme === 'light' ? <LightModeRoundedIcon /> : <LightModeOutlinedIcon />}
                </button>
            </div>
        </div>
    )
}

export default SwitchInput