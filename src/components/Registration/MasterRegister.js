import React,{Component} from 'react';
import Register from './Register';
import Register2 from './Register2';
import Register3 from './Register3';
import Steps from './Steps';
import axios from 'axios';
import config from '../../config.json';


 class  MasterRegister extends Component{
     constructor(props){
         super(props);
         this.state={
             step:1,
             operationType:'',
             propertyCost:'',
             propertyCostError:'',
             deposit:'',
             depositError:'',
             employmentStatus:'',
             occuption:'',
             contractType:'',
             jobStartDate:'' ,
             title:'',
             firstName:'',
             firstNameError:'',
             middleName:'',
             middleNameError:'',
             surName:'',
             surNameError:'',
             dob:'',
             phoneNumber:'',
             phoneNumberError:'',
             email:'',
             emailError:'',
             confirmEmail:'',
             confirmEmailError:''
         }
       
     }

   validate=()=>{
       let isError=false;
       const errors={
        propertyCostError:'',
        depositError:'',
        firstNameError:'',
        middleNameError:'',
        surNameError:'',
        phoneNumberError:'',
        emailError:'',
        confirmEmailError:''

       }
       if(this.state.propertyCost <100000){
        isError = true;
        errors.propertyCostError = 'Please enter a the minimum property cost';
    }
    if(this.state.deposit<0){
        isError=true;
        errors.depositError="The deposit amount should not be negative";
    }
       if(this.state.step>1){
           if(this.state.firstName<1){
               isError=true;
               errors.firstNameError="First name cannot be null";
           }
           if((this.state.firstName) !== 'undefined'){
               if(!(this.state.firstName).match(/^[a-zA-Z ]*$/)){
                   isError=true;
                   errors.firstNameError=" please enter the alphabet characters only";
               }
           }
           if(this.state.middleName<1){
            isError=true;
            errors.middleNameError="Middle name cannot be null";
        }
        if((this.state.middleName) !== 'undefined'){
            if(!(this.state.middleName).match(/^[a-zA-Z ]*$/)){
                isError=true;
                errors.middleNameError=" please enter the alphabet characters only";
            }
        }
        if(this.state.surName<1){
            isError=true;
            errors.surNameError="surName name cannot be null";
        }
        if((this.state.surName) !== 'undefined'){
            if(!(this.state.surName).match(/^[a-zA-Z ]*$/)){
                isError=true;
                errors.surNameError=" please enter the alphabet characters only";
            }
        }
       }

       if(this.state.step>2){
           if(this.state.phoneNumber<1){
               isError=true;
               errors.phoneNumberError="please enter the phone number";
           }
           if((this.state.phoneNumber) !== 'undefined'){
               if(!(this.state.phoneNumber).match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
                   isError=true;
                   errors.phoneNumberError="please enter the valid phone number";
               }
           }
           if(this.state.email.indexOf('@') === -1){
            isError = true;
            errors.emailError = 'Please enter a valid email address';
        }
        if(this.state.email !== this.state.confirmEmail){
            isError = true;
            errors.confirmEmail = 'email must match';
        }
       }
       this.setState({ ...this.state, ...errors})
       return isError;
   }

          
     next=(e)=>{
         e.preventDefault();
         const err=this.validate()
         if(!err){
             this.setState({
                    step:this.state.step+1,
                    propertyCostError:'',
                    depositError:'',
                    firstNameError:'',
                    middleNameError:'',
                    surNameError:'',
                    phoneNumberError:'',
                    emailError:'',
                    confirmEmailError:''
             })
         }
         

     
     }
     prev=()=>{
        const err = this.validate()
        if(!err){
            this.setState({step:this.state.step - 1})
        }
    }
    handleOnChange=(e)=>{
        this.setState({[e.target.id]: e.target.value})
    }

 

    render() {
        switch (this.state.step) {
            case 1:
              return <div>
                  <Steps step={this.state.step}/>
                  <Register id="register"
                     operationType={this.state.operationType}
                     propertyCost={this.state.propertyCost}
                     propertyCostError={this.state.propertyCostError}
                     deposit={this.state.deposit}
                     depositError={this.state.depositError}
                     onChange={this.handleOnChange.bind(this)}
                     next={this.next.bind(this)}/>
                  </div>
            case 2:
              return <div>
                  <Steps step={this.state.step}/>
                  <Register2
                     occuption={this.state.occuption}
                     firstName={this.state.firstName}
                     firstNameError={this.state.firstNameError}
                     middleName={this.state.middleName}
                     middleNameError={this.state.middleNameError}
                     surName={this.state.surName}
                     surNameError={this.state.surNameError}
                     dob={this.state.dob}
                     onChange={this.handleOnChange.bind(this)}
                     next={this.next.bind(this)}
                     prev={this.prev.bind(this)}/>
                  </div>
            case 3:
              return <div>
                  <Steps step={this.state.step}/>
                  <Register3
                   operationType={this.state.operationType}
                   propertyCost={this.state.propertyCost}
                   deposit={this.state.deposit}
                   occuption={this.state.occuption}
                   firstName={this.state.firstName}
                   dob={this.state.dob}
                    phoneNumber={this.state.phoneNumber}
                    phoneNumberError={this.state.phoneNumberError}
                    email={this.state.email}
                    emailError={this.state.emailError}
                    confirmEmail={this.state.confirmEmail}
                    confirmEmailError={this.state.confirmEmailError}
                     onChange={this.handleOnChange.bind(this)}
                     next={this.next.bind(this)}
                     prev={this.prev.bind(this)}/>
                  </div>
           
            default:
              return null
          }
      }
 }
 export default MasterRegister;



