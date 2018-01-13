import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newEmployee :[],
        Employee : [],
        firstName : "",
        lastName : "",
        dateOfBirth:"",
        genderChecked :"",
        addressDetails:"",
        companyName:"",
        designation:""
    };
  }

  handleChangeFname = (e) => {
    this.setState({ firstName: e.target.value })
  }
  handleChangelname = (e) => {
    this.setState({ lastName: e.target.value })
  }
  handleChangeDob = (e) => {
    this.setState({ dateOfBirth: e.target.value })
  }
  handleChangeRadio = (e) => {
    this.setState({ genderChecked: e.target.value })
  }
  handleChangeAdress = (e) => {
    this.setState({addressDetails:e.target.value})
  }
  handleChangeCname = (e) => {
    this.setState({companyName : e.target.value})
  }
  handleChangedesignation = (e) =>{
    this.setState({designation : e.target.value})
  }

  saveDetails = () => {
    var {Employee} = this.state;
    this.setState({Employee : this.state})  
    var obj = {};
    obj.firstName = this.state.firstName;
    obj.lastName = this.state.lastName;
    Employee.push(obj);
    //this.setState({Employee});
   console.log(this.state.Employee);
  }

  cancelDetails = () => {
    //this.state = "";
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Employee Details:</h1>
          </header>
        </div>
        <div className = "App-form">
          <form>

          <label htmlFor = "Fname"> First Name:  
          <input type='text' value={this.state.firstName} placeholder='Your first name...' name='firstName' id="fn" onChange={this.handleChangeFname} />
          </label>

          <label htmlFor = "Lname"> Last Name:  
          <input type='text' value={this.state.lastName} placeholder='Your last name...' name='lastName' id="ln" onChange={this.handleChangelname} />
          </label>
          <br/>
          <label htmlFor='DOB'> D.O.B:(dd/mm/yyyy) 
          <input type="date" name="dateofbirth" id="dob" value={this.state.dateOfBirth} onChange={this.handleChangeDob} />
          </label>

          <div class='radioopt'>
              <label htmlFor='gender'> Gender: </label>
              <label>
                <input type="radio" name="gender" value="Male" onChange={this.handleChangeRadio} checked={
                  this.state.genderChecked === "Male" ? true : false
                } />

                Male
              </label>
              <label>
                <input type="radio" name="gender" value="Female" onChange={this.handleChangeRadio} checked={
                  this.state.genderChecked === "Female" ? true : false
                } />

                Female
              </label>
              <label>
                <input type="radio" name="gender" value="Other" onChange={this.handleChangeRadio} checked={
                  this.state.genderChecked === "Other" ? true : false
                } />

                Other
               </label>
            </div>
              
            <label htmlFor = "address"> Address:  
          <textarea rows="4" cols="30" value={this.state.addressDetails} placeholder='Adress...' name='addressDetails' id="add" onChange={this.handleChangeAdress} />
          </label>
                <br/>
             <label htmlFor = "Cname"> Company:  
          <input type='text' value={this.state.companyName} placeholder='Company name...' name='companyName' id="cmpy" onChange={this.handleChangeCname} />
          </label>

          <label htmlFor = "designation"> Designation:  
          <input type='text' value={this.state.designation} placeholder='Designation...' name='designation' id="deg" onChange={this.handleChangedesignation} />
          </label>

          </form>
          <div>
        <button className="sub-btn" onClick={this.saveDetails} > Save </button>
        <button className="sub-btn" onClick={this.cancelDetails} > Cancel </button>
        </div>
          </div>

          <div>
          <ReactTable
          columns={[
        {
            Header :"Details",
            columns: [
                {
                    Header: "First Name",
                    accessor: this.state.Employee.firstName,
                    
                },
                {
                    Header: "Last Name",
                    accessor: this.state.Employee.lastName,
                },
                {
                    Header: "DOB",
                    accessor: this.state.Employee.dateOfBirth,
                },
                {
                    Header : "Gender",
                    accessor: this.state.Employee.genderChecked,   
                },
                {
                    Header: "Address",
                    accessor: this.state.Employee.addressDetails,
                },
                {
                    Header: "Company",
                    accessor: this.state.Employee.companyName,
                },
                {

                    Header: "Designation",
                    accessor: this.state.designation,
                    
                },
            ],
        },
]}
defaultPageSize={10}
className="-striped -highlight"
/>
            </div>
      </div>
    );
  }
}

export default App;
