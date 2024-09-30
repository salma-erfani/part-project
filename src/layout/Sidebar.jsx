const Sidebar = () => {
    let selected = 'home'

    return (
        <aside className="sidebar">
            <div className={"sidebar-item " + (selected === 'home' && 'selected')}>
                <img src="assets/images/Home.svg" alt="home icon" />
                <p>خانه</p>
            </div>
            <div className={"sidebar-item " + (selected === 'stats' && 'selected')}>
                <img src="assets/images/Statistics.svg" alt="statistics icon" />
                <p>لیست کاربران</p>
            </div>
            <div className="divider" />
            <div className="sidebar-item">
                <img src="assets/images/Logout.svg" alt="logout icon" />
                <p>خروج</p>
            </div>
        </aside>
    )
}

export default Sidebar