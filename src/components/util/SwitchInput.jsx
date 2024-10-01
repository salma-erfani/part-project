import { useState } from "react"

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
            <div className={"switch-item " + (theme === 'light' && 'selected')} onClick={toggleTheme}>
                <input type="radio" id="light" name="theme" value="light" />
                <label htmlFor="light" hidden>light</label>
                <img src={theme === 'light' ? "assets/images/sun-white.svg" : "assets/images/sun-gray.svg"} alt="sun" />
            </div>
            <div className={"switch-item " + (theme === 'dark' && 'selected')} onClick={toggleTheme}>
                <input type="radio" id="dark" name="theme" value="dark" />
                <label htmlFor="dark" hidden>dark</label>
                <img src={theme === 'dark' ? "assets/images/moon-white.svg" : "assets/images/moon-gray.svg"} alt="moon" />
            </div>
        </div>
    )
}

export default SwitchInput