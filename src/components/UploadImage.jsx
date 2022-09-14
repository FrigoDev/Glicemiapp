import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from 'react-bootstrap';

const tamañoImg = (image,estados) => {
    let img = image.replace(/^data:image\/[a-z]+;base64,/, "");
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let img_base64 = new Image();
    img_base64.src = "data:image/jpg;base64," + img;
    img_base64.onload = function () {
        canvas.width = 100;
        canvas.height = 100;
        ctx.drawImage(img_base64, 0, 0, 100, 100);
        let dataURL = canvas.toDataURL("image/jpg");
        estados(dataURL);
    }
    
}


const UploadImage = ({ image }) => {
    const [file, setFile] = useState('');
    const [previewUrl, setPreviewUrl] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                tamañoImg(fileReader.result,image)
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
                <Button variant="primary" onClick={onClick}>Subir imagen</Button>
            </div>
            {previewUrl && <img src={previewUrl} alt="preview" />}
        </div>
    );
}
export default UploadImage;