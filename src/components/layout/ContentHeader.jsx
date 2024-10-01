import Button from "../util/Button"

const ContentHeader = ({ includeAddButton, onClickAdd }) => {
    return (
        <header className="content-header">
            <div className="breadcrumbs">
                <img src="assets/images/Arrow-Left-1.svg" alt="<" />
                <p>لیست کاربران</p>
            </div>
            {includeAddButton &&
                <Button onClick={onClickAdd}>کاربر جدید</Button>
            }
        </header>
    )
}

export default ContentHeader