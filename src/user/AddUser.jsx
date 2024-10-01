import AddUserForm from "./AddUserForm"

const AddUser = () => {
    return (
        <div className="modal-container">
            <div className="backdrop" />
            <div className="modal"><AddUserForm /></div>
        </div>
    )
}

export default AddUser