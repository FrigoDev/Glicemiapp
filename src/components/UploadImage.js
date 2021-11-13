import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from 'react-bootstrap';


const UploadImage = ({ image }) => {
    const [file, setFile] = useState('');
    const [previewUrl, setPreviewUrl] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                image(fileReader.result);
            }
            fileReader.readAsDataURL(file);
        } else {
            image('');
        }
    }, [file]);

    const onChange = e => {
        let selected = e.target.files[0];
        setFile(selected);
        setIsValid(true);
    }

    const onClick = () => {
        const fileInput = document.getElementById('imageInput');
    }

    const onDrop = acceptedFiles => {
        setFile(acceptedFiles[0]);
        setIsValid(true);
    }

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*'
    });

    return (
        <div className="upload-image">
            <div {...getRootProps()}>
                <input id="imageInput" {...getInputProps()} />
                <Button variant="dark" onClick={onClick}>Subir imagen</Button>
            </div>
            {previewUrl && <img src={previewUrl} alt="preview" />}
        </div>
    );
}
export default UploadImage;