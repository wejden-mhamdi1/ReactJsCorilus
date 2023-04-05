import React from 'react';
import Box from '@mui/material/Box';
import axios from 'axios' ;
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';

const EMPLOYEE_API_URL="http://localhost:8089/file/getAll";
export default function ShowSplitedFile() {
    const [files,setFiles]=  useState(null);

    const Show=()=>{
      axios.get("http://localhost:8089/file/getAll").then(response =>{
        const files= response.data;
        setFiles(files)
      })
    }
    function filesList(){
        axios.get(EMPLOYEE_API_URL).then(
            response =>{
                const files= response.data;
                setFiles(files);
                
                
            })
    }
    
   
    
    useEffect(()=>{
      filesList()
        
    },[]
    )
    const columns: GridColDef[] = [
      { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'fileName',
          headerName: 'fileName',
          width: 150,
          
         
        },
        {
          field: 'fileType',
          headerName: 'fileType',
          width: 150,
          
        },
        {
          field: 'status',
          headerName: 'status',
          width: 150,
          
        },
        
        {
          field: 'actions',
          headerName: 'Actions',
          width: 150,
          renderCell:(params)=>{
            return(
              <div>
                
                <a href={'/list/show'} > showData </a>
                <a href={'/list/Split/'+`${params.row.id}`} >splited</a>
              </div>
            )
          }
        },

       ];
      console.log(files);
      
      const rows =files ? files?.map((e)=>{
        
        return{
          id: e.id,
          fileName: e.fileName,
          fileType: e.fileType,
          status:e.status 
        }}):[];
       
    
        
       
      
      
  return (
 


<div style={{marginTop:50}}>
   
    

    <Box sx={{ height: 400, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={[4]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box></div>
  );
}

