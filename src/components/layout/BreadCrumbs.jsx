import { Link, useLocation } from "react-router-dom"

const BreadCrumbs = () => {
    const { pathname } = useLocation()

    const items = []

    if (pathname.startsWith('/dashboard/users')) {
        items.push({ label: 'لیست کاربران', link: '/dashboard/users' })
    }

    if (pathname.includes('edit')) {
        items.push({ label: 'ویرایش کاربر', link: pathname })
    }

    return (
        <div className="breadcrumbs">
            {items.map((item, idx) =>
                <div key={idx}>
                    <img src="assets/images/Arrow-Left-1.svg" alt="<" />
                    <Link to={item.link}><p>{item.label}</p></Link>
                </div>
            )}
        </div>
    )
}

export default BreadCrumbs