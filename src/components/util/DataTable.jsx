import { useNavigate } from "react-router-dom"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useDispatch, useSelector } from "react-redux"
import { selectShowData, selectSortedOn, setShowData, setSortedOn, toggleSortedOn } from "../../store/slices/data"
import { useEffect } from "react"

const sortRecords = (data, sortedOn, isNumeric = false) => {
    const { column, type } = sortedOn

    return data.slice().sort((a, b) => {
        let aValue = a[column]
        let bValue = b[column]

        if (isNumeric) {
            aValue = parseFloat(aValue)
            bValue = parseFloat(bValue)
        } else {
            aValue = typeof aValue === 'string' ? aValue.toLowerCase() : aValue
            bValue = typeof bValue === 'string' ? bValue.toLowerCase() : bValue
        }

        let result = 0
        if (aValue < bValue) {
            result = -1
        } else if (aValue > bValue) {
            result = 1
        }

        return type === 'desc' ? result * -1 : result
    })
}

const DataTable = ({ labels, data }) => {
    const navigate = useNavigate()
    const sortedOn = useSelector(selectSortedOn)
    const showData = useSelector(selectShowData)
    const dispatch = useDispatch()

    const handleClickRow = (id) => {
        navigate(`${id}/edit`)
    }

    const handleClickColumn = (column) => {
        if (sortedOn?.column === column) {
            dispatch(toggleSortedOn())
        }
        else {
            dispatch(setSortedOn(column))
        }
    }

    useEffect(() => {
        const sortedRecords = sortedOn ? sortRecords(showData, sortedOn, sortedOn.column === 'age') : sortRecords(showData, { column: 'id', type: 'asc' }, true)
        dispatch(setShowData(sortedRecords))
    }, [sortedOn])

    return (
        <div className="datatable">
            <table dir="rtl">
                <thead>
                    <tr>
                        {Object.keys(labels).map(key =>
                            <th key={key} onClick={() => handleClickColumn(key)} className={sortedOn?.column === key && 'selected'}>
                                <div>
                                    <p>{labels[key]}</p>
                                    {sortedOn?.column === key && (sortedOn?.type === 'asc' ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />)}
                                </div>
                            </th>
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