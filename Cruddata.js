import React from 'react';
import axios from 'axios';
import './index.css'
import { Button } from '@mui/material';
import { 
    Link,
    useNavigate
   } from 'react-router-dom';

class CrudData extends React.Component {
    constructor() {
        super();
        this.state = {
            student: []
        };
    }
    async componentDidMount() {
        var response = await axios.get(
            'https://62136ddcf43692c9c604517b.mockapi.io/studentteacherdata'
        );
        await this.setState({ student: response.data });
    }
    render() {
        const navigate = useNavigate();
        return (
            <div className="table">
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
                        {this.state.student.map((data) => (
                            <tr key={data.id}>
                                <td> {data.id} </td>
                                <td> {data.name} </td>
                                <td> {data.class} </td>
                                <td> {data.teacher} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                &nbsp;<br /><Button variant="contained" component={Link} to="/registerstudent">Register Student</Button> &nbsp;
                </div>
            </div>
        )
    }
}

export default CrudData;
