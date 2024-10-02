import { useRef, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'

const AvatarUpload = ({ fileSrc, setFileSrc }) => {
    const fileInputRef = useRef(null)

    const handleAvatarClick = () => {
        fileInputRef.current.click()
    }

    const handleFileChange = e => {
        const file = e.target.files[0]
        if (file) {
            setFileSrc(URL.createObjectURL(file))
        }
    }

    return (
        <div className="avatar-container">
            <div className="avatar" onClick={handleAvatarClick}>
                {fileSrc ? (
                    <img
                        src={fileSrc}
                        alt="Selected avatar"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                ) : (
                    <PersonIcon />
                )}
            </div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
                accept="image/*"
            />
        </div>
    )
}

export default AvatarUpload