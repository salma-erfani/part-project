const SwitchInput = () => {
    let selected = 'light'

    return (
        <div className="switch-container">
            <div className={"switch-item " + (selected === 'light' && 'selected')}>
                <input type="radio" id="light" name="theme" value="light" />
                <label htmlFor="light" hidden>light</label>
                <img src={selected === 'light' ? "assets/images/sun-white.svg" : "assets/images/sun-gray.svg"} alt="sun" />
            </div>
            <div className={"switch-item " + (selected === 'dark' && 'selected')}>
                <input type="radio" id="dark" name="theme" value="dark" />
                <label htmlFor="dark" hidden>dark</label>
                <img src={selected === 'dark' ? "assets/images/moon-white.svg" : "assets/images/moon-gray.svg"} alt="moon" />
            </div>
        </div>
    )
}

export default SwitchInput