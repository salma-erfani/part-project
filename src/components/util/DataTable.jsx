const DataTable = ({ labels, data }) => {
    return (
        <div className = "datatable">
            <table dir="rtl">
                <tr>
                    {Object.keys(labels).map(key =>
                        <th key={key}>{labels[key]}</th>
                    )}
                </tr>
                {data.map((item, idx) =>
                    <tr key={idx}>
                        {Object.keys(item).filter(k => k !== 'id').map(key =>
                            <td key={key}>{item[key]}</td>
                        )}
                    </tr>
                )}
            </table>
        </div>
    )
}

export default DataTable