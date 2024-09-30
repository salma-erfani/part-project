import Button from "../util/Button"

const ContentHeader = () => {
    return (
        <header className="content-header">
            <div className="breadcrumbs">
                <img src="assets/images/Arrow-Left-1.svg" alt="<" />
                <p>لیست کاربران</p>
            </div>
            <Button>کاربر جدید</Button>
        </header>
    )
}

export default ContentHeader