import { useState } from "react"
import axios from "axios";



export default function UploadView() {
    const [selectedFile, setSelectedFile] = useState(null);
    
    const handlSubmit = e => {
        e.preventDefault();
        const file = e.target.file.files[0];
        const formData = new FormData();
        formData.append('image', file, file.name);

axios
.post('какой-то адрес, куда скажет бекэнщик', formData)
.then(console.log)
.catch(console.error)


    }
    
    return <form onSubmit={handlSubmit}>
        <input type="file" name ="file" />
        <button type="submit">Загрузить</button>
    </form>
}