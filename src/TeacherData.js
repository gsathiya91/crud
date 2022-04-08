import React from 'react';
import axios from 'axios';


class TeacherData extends React.Component {
    constructor() {
        super();
        this.state = {
            teacher : []
        };
    }
    async componentDidMount() {
        var response = await axios.get(
            'https://62136ddcf43692c9c604517b.mockapi.io/teacherdata'
        );
        await this.setState({ teacher : response.data});
        console.log(response.data);
    }
    render() {
      
        return(
            <>
           
             <table border = {1}>
                  <thead>
                      <tr>
                          <td>Id</td>
                          <td>Name</td>
                          <td>Class</td>
                          <td>Subject</td>
                      </tr>
                  </thead>
                  <tbody>
                      {this.state.teacher.map((data) => (
                          <tr key = {data.id}>
                              <td> {data.id} </td>
                              <td> {data.name} </td>
                              <td> {data.class} </td>
                              <td> {data.subject} </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
            </>
        )
    }
}

export default TeacherData;