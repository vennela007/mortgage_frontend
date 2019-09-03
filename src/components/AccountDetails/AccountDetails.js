import React,{Component} from 'react';
import './AccountDetails.css';


class AccountDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            loginId:localStorage.getItem("loginId"),
            password:localStorage.getItem("password"),
            transactionAccountNumer:localStorage.getItem("transactionAccountNumer"),
            mortageAccountNumber:localStorage.getItem("mortageAccountNumber")


        }
    }

    handleLogin=()=>{
        this.props.history.push("/login");
    }
    render(){
        return(
            <div>
                <h4>Congratulations, your mortgage has been granted: </h4>
                    <div className="details">
                        <div><b>LOGIN ID:</b>{this.state.loginId}</div>
                        <div><b>PASSWORD:</b>{this.state.password}</div>
                        <div><b>CURRENT ACCOUNT NUMBER:</b>{this.state.transactionAccountNumer}</div>
                        <div><b>MORTGAGE ACCOUNT NUMBER:</b>{this.state.mortageAccountNumber}</div>
                        <button className="btn btn-outline-primary" onClick={this.handleLogin}>Login</button>
                        </div>

            </div>
        )
    }
}
export default AccountDetails;