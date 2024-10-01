import { useNavigate } from "react-router-dom"

const DataTable = ({ labels, data }) => {
    const navigate = useNavigate()

    const handleClickRow = (id) => {
        navigate(`${id}/edit`)
    }

    return (
        <div className="datatable">
            <table dir="rtl">
                <thead>
                    <tr>
                        {Object.keys(labels).map(key =>
                            <th key={key}>{labels[key]}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, idx) =>
                        <tr key={idx} onClick={() => handleClickRow(item.id)}>
                            {Object.keys(item).filter(k => k !== 'id').map(key =>
                                <td key={key}>
                                    {item[key]}
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable