import React,{Component} from 'react';
import './Register.css';
import axios from 'axios';
import config from '../../config.json';
import swal from 'sweetalert';
import {withRouter} from 'react-router-dom';
class Register3 extends Component{
   

    handleFinish=(e)=>{
        e.preventDefault();
        let registerData={
            operationType:this.props.operationType,
            propertyCost:this.props.propertyCost,
            deposit:this.props.deposit,
            occupation:this.props.occuption,
            customerName:this.props.firstName,
            dateOfBirth:this.props.dob, 
            phoneNumber:this.props.phoneNumber,
            email:this.props.email
         }
         console.log(registerData);
             axios.post(config.url+'createMortgage/',registerData).then((response)=>{
             console.log(response.data) 
             localStorage.setItem("loginId",response.data.loginId);
             localStorage.setItem("password",response.data.password);
             localStorage.setItem("transactionAccountNumer",response.data.transactionAccountNumer);
             localStorage.setItem("mortageAccountNumber",response.data.mortageAccountNumber);
              this.props.history.push('/accountDetails');
           
         }).catch((error)=>{ 
             console.log(error);        
         });
        
    }
    render(){
        return(
            <div align="center">
                <h1 align="center">contact  Details</h1>
                    <form className="form1" >
                      <div className="form-group formgroup" >
                            <label><b> what is your preffered contact phone number?</b></label>
                                        <input type="number" className="form-control "  name="phoneNumber" id="phoneNumber" value={this.props.phoneNumber}   onChange={this.props.onChange} required />
                                        <div className="errorMsg">{this.props.phoneNumberError}</div>
                        </div>
                        <div className="form-group formgroup" >
                            <label><b>what is your email Address?</b></label>
                                        <input type="email" className="form-control "  name="email" id="email"  value={this.props.email} onChange={this.props.onChange} required />
                                        <div className="errorMsg">{this.props.emailError}</div>
                        </div>
                        <div className="form-group formgroup" >
                            <label><b>please confirm your  email address</b></label>
                                        <input type="email" className="form-control "  name="confirmEmail" id="confirmEmail"  value={this.props.confirmEmail} onChange={this.props.onChange} required />
                                        <div className="errorMsg">{this.props.confirmEmailError}</div>
                        </div>
                        <div className="form-group">
                        <button id="btn7" className="btn btn-primary"  onClick={this.props.prev}>Prev</button>
                         <button id="btn8" className="btn btn-success" onClick={this.handleFinish}>Next</button>
                </div> 
                    
           
    </form>
    
            </div>
        )
    }
}
export default withRouter(Register3);