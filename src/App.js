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
      designation: "",
      indexToEdit: -1,
      indexToDelete: -1
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

  validateForm = () => {

    var d = new Date(this.state.dateOfBirth);
    var today = new Date();

    var dob = this.state.dateOfBirth;
    var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;

    if (this.state.firstName === null || this.state.firstName === "") {
      alert("Enter First Name.....");
      return false;
    }
    if (!/^[a-zA-Z]*$/g.test(this.state.firstName)) {
      alert("Enter the valid First name");
      return false;  
    }
    if (this.state.lastName === null || this.state.lastName === "") {
      alert("Enter Last Name....");
      return false;  
    }
    if(!/^[a-zA-Z]*$/g.test(this.state.lastName)) {
      alert("Enter the valid Last name");
      return false;
    }
    if(this.state.dateOfBirth === null || this.state.dateOfBirth === "") {
      alert("Enter the Date of Birth");
      return false;  
    }
   
    if (dob === null || dob === "" || !pattern.test(dob) || d > today) {
      alert("Invalid date of birth");
      return false;

    }
    if (this.state.genderChecked === null || this.state.genderChecked === "") {
      alert("Select the Gender....");
      return false;  
    }
    if (this.state.addressDetails === null || this.state.addressDetails === "") {
      alert("Enter Address....");
      return false;  
    }
    if (this.state.companyName === null || this.state.companyName === "") {
      alert("Enter the Company Name....");
      return false;  
    }
    if (this.state.designation === null || this.state.designation === "") {
      alert("Enter the designation");
      return false;
    }
 }

  saveDetails = () => {
    debugger;
    if(this.validateForm() === false)
    {
      return false;
    }
    else
    var { Employee } = this.state;
    var obj = {};
    if (this.state.indexToEdit !== -1) {
      obj = Employee[this.state.indexToEdit];

    }
    else{
    console.log(obj);
    console.log(this.state);
    if(obj.firstName === this.state.firstName || obj.lastName === this.state.lastName || obj.dateOfBirth === this.state.dateOfBirth || obj.genderChecked === this.state.genderChecked || obj.addressDetails === this.state.addressDetails || obj.companyName === this.state.companyName || obj.designation === this.state.designation)
    //if(obj.firstName === Employee.firstName || obj.lastName === Employee.lastName || obj.dateOfBirth === Employee.dateOfBirth || obj.genderChecked === Employee.genderChecked || obj.addressDetails === Employee.addressDetails || obj.companyName === Employee.companyName || obj.designation === Employee.designation)
    {
      alert ("The Details already exist.... ");
      return false;
    }
  }
    obj.firstName = this.state.firstName;
    obj.lastName = this.state.lastName;
    obj.dateOfBirth = this.state.dateOfBirth;
    obj.genderChecked = this.state.genderChecked;
    obj.addressDetails = this.state.addressDetails;
    obj.companyName = this.state.companyName;
    obj.designation = this.state.designation;
    //console.log(obj);
    if (this.state.indexToEdit === -1)
      Employee.push(obj);
    else
      this.setState({ indexToEdit: -1 });
    this.setState({ firstName: "", lastName: "", dateOfBirth: "", genderChecked: "", addressDetails: "", companyName: "", designation: "" });
    this.setState({ Employee: Employee });
    //console.log(Employee);
    //console.log(this.state);
  }

  cancelDetails = (e) => {
    this.setState({ firstName: "", lastName: "", dateOfBirth: "", genderChecked: "", addressDetails: "", companyName: "", designation: "" });

  }
  editRow = (value) => {
    var { Employee } = this.state;
    this.setState({ firstName: value.firstName })
    this.setState({ lastName: value.lastName })
    this.setState({ genderChecked: value.genderChecked })
    this.setState({ companyName: value.companyName })
    this.setState({ designation: value.designation })
    this.setState({ dateOfBirth: value.dateOfBirth })
    this.setState({ addressDetails: value.addressDetails })
    var indexToEdit = Employee.findIndex((ele) => {
      return ele.firstName === value.firstName;
    });
    this.setState({ indexToEdit: indexToEdit });
    //console.log(indexToEdit);
  }
  deleteRow = (value) => {
    var numberOfElement = 1;
    var { Employee } = this.state;
    var indexToDelete = Employee.findIndex((ele) => {
      return ele.firstName === value.firstName;
    });
    var removedElement = Employee.splice(indexToDelete, numberOfElement);
    console.log(removedElement);
    this.setState({ Employee: Employee });
    console.log(indexToDelete);

  }
  render() {

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
            <button className="sub-btn" onClick={this.saveDetails.bind(this)} > Save </button>
            <button className="sub-btn" onClick={this.cancelDetails}> Cancel </button>
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
                    accessor: 'dateOfBirth',
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
                    Header: "Edit Options",
                    id: 'click-me-button',
                    Cell: ({ row: value }) => (<button onClick={() => this.editRow(value)}>Edit</button>),
                  },
                  {
                    Cell: ({ row: value }) => (<button onClick={() => this.deleteRow(value)}> Delete </button>)
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
