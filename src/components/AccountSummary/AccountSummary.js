import React,{Component} from 'react';
import axios from 'axios';
import config  from '../../config.json';
import './AccountSummary.css';

class AccountSummary extends Component{
    constructor(props){
        super(props);
        this.state={
            accountDetails:[]
        }
    }
    componentDidMount() {
     
        this.getData().then(response => {
            console.log(response.data)
          this.setState({ accountDetails: response.data });
        });
       
    
      }
      getData = () => {
    
        return new Promise((resolve, reject) => {
            var customerId=localStorage.getItem("customerId");
          axios.get(config.url+'summary/'+customerId).then((response)=> {
            resolve(response);
          console.log(response);
          }).catch((error)=> {
            reject(error);
          });
        });
      }
      handleLogout=()=>{
          this.props.history.push("/login");
      }
      handleTransaction=(item)=>{
          localStorage.setItem("accountNumber",item.accountNumber);
          localStorage.setItem("accountType",item.accountType);
          this.props.history.push('/transactions/'+item.accountNumber);

      }
    render(){
        return(
            <div>
                <button id="btn6" className="btn btn-outline-primary" onClick={this.handleLogout}>logout</button>
                <h4>Account summary</h4>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Account Number</th>
      <th scope="col">Account Type</th>
      <th scope="col">Balance</th>
      <th scope="col">Creation Date</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        this.state.accountDetails.map((item,i)=>{
            return(
                <tr key={i}>
                    <td>{item.accountNumber}</td>
                    <td>{item.accountType}</td>
                    <td>{item.balance}</td>
                    <td>{item.creationDate}</td>
                    <td><button  id="btn5" className="btn btn-outline-primary" onClick={()=>this.handleTransaction(item)}>Transactions</button></td>
                </tr>
            )
        })
    }
   
   
  </tbody>
</table>
            </div>
        )
    }
}
export default AccountSummary;