import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function ListComponent() {
    const [list,setList]=useState([]);
    const [file,setFile]=useState(null);
   const [result, setResult] = useState('');

    const show=()=>{
        axios.get("http://localhost:8089/file/getAlll")
        .then(response=>{
           const list=response.data;
          console.log(list);
            setList(list);
        })
    }
useEffect(()=>{
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://localhost:8089/file/download/1", requestOptions)
    .then(response => response.text())
    .then(result => setResult(result))
    .catch(error => console.log('error', error));
}, []);





    const ajout = () =>{
        var formdata = new FormData();
formdata.append("file",  file);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};


fetch("http://localhost:8089/file/upload", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }
    
   
  return (
    <div>
        {list.map(elt=> 
           <p>{elt.name}</p>
        )}
 
        <form onSubmit={(e)=>{ e.preventDefault();
          ajout();}}>
            <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
        <button type="submit">submit file</button></form>
        
        {result}

    </div>
    
  )
}
//rfc

