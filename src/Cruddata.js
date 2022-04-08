import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



export default function CrudData() {

    const [data, setData] = useState({ student: [] });

    useEffect(() => {

        const getData = async () => {
            var response = await axios.get(
                'https://62136ddcf43692c9c604517b.mockapi.io/studentteacherdata'
            );            
            setData({ student: response.data });
        };
        getData();
    }, []);

    return (
        <div className="table">
            <div>
        <h1>Student's Details</h1>
           
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Class</td>
                        <td>Teacher</td>
                    </tr>
                </thead>

                <tbody>
                    {data.student.map((data) => (
                        <tr key={data.id}>
                            <td> {data.id} </td>
                            <td> {data.name} </td>
                            <td> {data.class} </td>
                            <td> {data.teacher} </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
            </div>
            <div className="table1">

                &nbsp;<br /><Button variant="contained" component={Link} to="/registerstudent">Register Student</Button> &nbsp;
                
            </div>
        </div>
    )
}

