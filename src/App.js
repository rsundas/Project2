import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Employee: [],
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      genderChecked: "",
      addressDetails: "",
      companyName: "",
      designation: ""
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
    this.setState({ addressDetails: e.target.value })
  }
  handleChangeCname = (e) => {
    this.setState({ companyName: e.target.value })
  }
  handleChangedesignation = (e) => {
    this.setState({ designation: e.target.value })
  }

  saveDetails = () => {
    if(this.state.firstName === null || this.state.firstName === "")
    {
      alert("Enter First Name.....");
      return false;
    }
    if(this.state.lastName === null || this.state.lastName === "")
    {
      alert("Enter Last Name....");
      return false;
    }
    if(this.state.dateOfBirth === null || this.state.dateOfBirth === "")
    {
      alert("Enter the Date of Birth");
      return false;
    }
    if(this.state.genderChecked === null || this.state.genderChecked === "")
    {
      alert ("Select the Gender....");
      return false;
    }
    if(this.state.addressDetails === null || this.state.addressDetails === "")
    {
      alert("Enter Address....");
      return false;
    }
    if(this.state.companyName === null || this.state.companyName === "")
    {
      alert("Enter the Company Name....");
      return false;
    }
    if(this.state.designation === null || this.state.designation === "")
    {
      alert ("Enter the designation");
      return false;
    }
    var { Employee } = this.state;
    var obj = {};
    obj.firstName = this.state.firstName;
    obj.lastName = this.state.lastName;
    obj.dateOfBirth = this.state.dateOfBirth;
    obj.genderChecked = this.state.genderChecked;
    obj.addressDetails = this.state.addressDetails;
    obj.companyName = this.state.companyName;
    obj.designation = this.state.designation;

    Employee.push(obj);
    
    this.setState({firstName : "", lastName : "", dateOfBirth : "", genderChecked :"", addressDetails : "", companyName : "", designation :""});
    this.setState({ Employee: Employee });
  }
  
  cancelDetails = (e) => {
    this.setState({firstName : "", lastName : "", dateOfBirth : "", genderChecked :"", addressDetails : "", companyName : "", designation :""});
   
  }
  editRow = (value) =>{
  //this.state = {value};
  //this.refs.myTextInput.value = this.state.firstName;
  //   var newData = this.state.value.slice(); //copy array
  //   newData.splice(index, 1); //remove element
  //   this.setState({data: newData});
  //  console.log(value);
    //var newEmployee = this.state.value;
    
    // var array = this.state;
    // var index = array.indexOf(e.target.value)
    // array.splice(index, 1);
    // this.setState({state: array });
   // console.log(newEmployee);
    
    // var index = newEmployee.indexOf(value.target.value);
    // delete newEmployee[index];
    // this.state = newEmployee.value;
    //this.setState(this.state);
    //newEmployee = this.state.value;
    //this.setState(this.state.value);
    //this.state.firstName = newEmployee.firstName;
    this.setState({firstName: value.firstName})
   console.log(this.state);
    //var {Employee} 
    
  }
  deleteRow = (value) => {
   // console.log(value);
  //  this.state = {value};
  //  this.state.splice(index, 1);
    
  }
  render() {
    //const {firstName, lastName, genderChecked, companyName,designation, dateOfBirth} = this.state;
    var isEnable = true;
    Object.keys(this.state).forEach((val) => {
      if (!this.state[val])
        isEnable = false;
    }); 
    var { Employee } = this.state;
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Employee Details:</h1>
          </header>
        </div>
        <div className="App-form">
          <form id='form1'>

            <label htmlFor="Fname"> First Name:
          <input type='text' value={this.state.firstName} placeholder='Your first name...' refs="myTextInput" name='firstName' id="fn" onChange={this.handleChangeFname} />
            </label>

            <label htmlFor="Lname"> Last Name:
          <input type='text' value={this.state.lastName} placeholder='Your last name...' name='lastName' id="ln" onChange={this.handleChangelname} />
            </label>
            <br />
            <label htmlFor='DOB'> D.O.B:(dd/mm/yyyy)
          <input type="date" name="dateofbirth" id="dob" value={this.state.dateOfBirth} onChange={this.handleChangeDob} />
            </label>

            <div className='radioopt'>
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

            <label htmlFor="address"> Address:
          <textarea rows="4" cols="30" value={this.state.addressDetails} placeholder='Adress...' name='addressDetails' id="add" onChange={this.handleChangeAdress} />
            </label>
            <br />
            <label htmlFor="Cname"> Company:
          <input type='text' value={this.state.companyName} placeholder='Company name...' name='companyName' id="cmpy" onChange={this.handleChangeCname} />
            </label>

            <label htmlFor="designation"> Designation:
          <input type='text' value={this.state.designation} placeholder='Designation...' name='designation' id="deg" onChange={this.handleChangedesignation} />
            </label>

          </form>
          <div>
            <button className="sub-btn" onClick={this.saveDetails.bind(this)}  disabled={!isEnable}> Save </button>
            <button className="sub-btn" onClick={this.cancelDetails}  disabled={!isEnable} > Cancel </button>
          </div>
        </div>

        <div>
          <ReactTable
            columns={[
              {
                Header: "Details",
                columns: [
                  {
                    Header: "First Name",
                    accessor: 'firstName',

                  },
                  {
                    Header: "Last Name",
                    accessor: 'lastName',
                  },
                  {
                    Header: "DOB",
                    accessor:'dateOfBirth',
                  },
                  {
                    Header: "Gender",
                    accessor: 'genderChecked',  
                  },
                  {
                    Header: "Address",
                    accessor: 'addressDetails',
                  },
                  {
                    Header: "Company",
                    accessor: 'companyName',
                  },
                  {

                    Header: "Designation",
                    accessor: 'designation',

                  },
                  {
                    Header : "Edit Options",
                    id :'click-me-button',
                    Cell: ({row:value}) => (<button onClick={this.editRow({value})}>Edit</button>),
                  },
                  {
                    Cell:({row:value}) => (<button onClick={this.deleteRow({value})}> Delete </button>)
                  },
                ],
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
            data={Employee}
          />
        </div>
      </div>
    );
  }
}

export default App;
