import AddUserForm from "./AddUserForm"

const AddUser = ({ onCancel }) => {
    return (
        <div className="modal-container">
            <div className="backdrop" onClick={onCancel} />
            <div className="modal"><AddUserForm onCancel={onCancel} /></div>
        </div>
    )
}

export default AddUser