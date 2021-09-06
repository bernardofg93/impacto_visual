import React from 'react';
import { useDropzone } from 'react-dropzone';

export const DropFile = () => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <div>
            <section className="container__drop-file">
                <div {...getRootProps({ className: 'dropzone' })} className="box__drop-zone">
                    <input {...getInputProps()} />
                    <i
                        className="fas fa-cloud-upload-alt txt-upload"
                    />
                    <p className="txt-upload">Sube aquí tu archivo</p>
                </div>
                <aside>
                    <ul>{files}</ul>
                </aside>
            </section>
        </div>
    )
}