import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config.json';
import {Link} from 'react-router-dom';
import { withTranslation} from 'react-i18next';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: {
                loginId: '',
                password: ''
            }
        }
    }

    handleChange = (event) => {
        const { loginData } = this.state;  
        loginData[event.target.name] = event.target.value;
        this.setState({ loginData });
    }

     handleSubmit = (event) => {
        event.preventDefault();
        const { loginData } = this.state;
        console.log(loginData);
            axios.post(config.url+'login/',loginData).then((response)=>{
            console.log(response.data) 
            localStorage.setItem("customerId",response.data.customerId)
            this.props.history.push("/accountSummary");
        }).catch((error)=>{ 
            console.log(error);        
        });
     
    }
    render() {
        let { t } = this.props;
        return (
        
            <div >
                 <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">{t('customer Login')}</h5>
            <form className="form-signin">
              <div className="form-label-group">
              <label for="loginId">{t('Login Id')}</label>
                <input type="text" id="loginId" onChange={this.handleChange} name="loginId" className="form-control" placeholder="enter the login Id"required autofocus>
            </input>  
              </div>

              <div className="form-label-group">
              <label for="inputPassword">{t('password')}</label>
                <input type="password" id="inputPassword" onChange={this.handleChange} name="password"  className="form-control" placeholder="enter the password" required>
          </input>     
              </div>
              <button  id="btn1" className="btn btn-lg btn-primary btn-block text-uppercase" onClick={this.handleSubmit}type="submit">{t('Sign in')}</button>
                                 
             </form>
             </div>
                        <Link className="nav-item nav-link login-tag-title" to='/register'>{t('New User? Register')}</Link>
                    </div>
          </div>
        </div>
      </div>
   
 
           
        );
    }
}

export default withTranslation()(Login);