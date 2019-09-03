import React,{Component} from 'react';
import './Register.css';

class Register2 extends Component{
   
    render(){
        return(
            <div align="center">
                <h1 align="center">Customer Details</h1>
                    <form className="form1" >
                    <div class="form-group formgroup">
                         <label ><b>What is your occupation?</b></label>
                            <select className="form-control"   onChange={this.props.onChange}  value={this.props.occuption}  name="occuption" id="occuption">
                                <option value="professional">professional</option>
                                <option value="Semi-professional">Semi-professional</option>
                                <option value="Executive">Executive</option>
                                <option value="Manager">Manager</option>
                                <option value="ffice Staff">Office Staff</option>
                                <option value="Production">Production</option>
                                <option value="Media personality">Media personality</option>
                                <option value="SProfessional sports person">SProfessional sports person</option>
                                <option value="Self-employed IT consultant">Self-employed IT consultant</option>
                                <option value="Doctor (junior)">Doctor (junior)</option>
                                <option value="Doctor (medical)">Doctor (medical)</option>
                                <option value="Nurse">Nurse</option>
                                <option value="Forces personnel">Forces personnel</option>
                                <option value="Dentist">Dentist</option>
                                <option value="Barrister">Barrister</option>
                                <option value="Trades">Trades</option>
                                <option value="Sales">Sales</option>
                                <option value="Service">Service</option>
                                <option value="Driver">Driver</option>
                                <option value="Unskilled">Unskilled</option>
                                <option value="Other employment">Other employment</option>
                         </select>
                         </div>
                      <div className="form-group formgroup" >
                            <label><b>first Name</b></label>
                                    <div >
                                        <input type="text" className="form-control "  name="firstName" id="firstName" value={this.props.firstName}   onChange={this.props.onChange} required />
                                        <div className="errorMsg">{this.props.firstNameError}</div>
                                     </div>
                        </div>
                        <div className="form-group formgroup" >
                            <label><b>Middle Name</b></label>
                                    <div >
                                        <input type="text" className="form-control "  name="middleName" id="middleName" value={this.props.middleName}   onChange={this.props.onChange} required />
                                        <div className="errorMsg">{this.props.middleNameError}</div>
                                     </div>
                        </div>
                        <div className="form-group formgroup" >
                            <label><b>Sur Name</b></label>
                                    <div >
                                        <input type="text" className="form-control "  name="surName" id="surName" value={this.props.surName}   onChange={this.props.onChange} required />
                                        <div className="errorMsg">{this.props.surNameError}</div>
                                     </div>
                        </div>
                        <div class="form-group formgroup">
                            <label><b>Date Of Birth</b></label>
                            <input type= "date" class="form-control"  onChange={this.props.onChange}   value={this.props.dob} name="dob" id="dob" placeholder=" enter the Date of birth"/>
                        </div>  
                        <div className="form-group">
                        <button  id="btn5" className="btn btn-primary"  onClick={this.props.prev}>Prev</button>
                         <button  id="btn6" className="btn btn-success" onClick={this.props.next}>Next</button>
                </div>               
           
    </form>
    
            </div>
        )
    }
}
export default Register2;