import Button from "../util/Button"
import BreadCrumbs from "./BreadCrumbs"

const ContentHeader = ({ includeAddButton, onClickAdd }) => {
    return (
        <header className="content-header">
            <BreadCrumbs />
            {includeAddButton &&
                <Button onClick={onClickAdd}>کاربر جدید</Button>
            }
        </header>
    )
}

export default ContentHeader