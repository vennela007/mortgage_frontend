import React,{Component} from 'react';
import axios from 'axios';
import config  from '../../config.json';
import './AccountSummary.css';

class Transactions extends Component{
    constructor(props){
        super(props);
        this.state={
            transactionDetails:[],
            accountType:localStorage.getItem("accountType")
        }
    }
    componentDidMount() {
     
        this.getData().then(response => {
            console.log(response.data)
          this.setState({ transactionDetails: response.data });
        });
       
    
      }
      getData = () => {
    
        return new Promise((resolve, reject) => {
            var accountNumber=localStorage.getItem("accountNumber");
          axios.get(config.url+'transactionSummary/'+accountNumber).then((response)=> {
            resolve(response);
          console.log(response);
          }).catch((error)=> {
            reject(error);
          });
        });
      }
      handleBack=()=>{
          this.props.history.push("/accountSummary");
      }
    render(){
        return(
            <div>
                <button id="btn6" className="btn btn-outline-primary" onClick={this.handleBack}>Back</button>
                <h4>Transaction summary  of {this.state.accountType}</h4>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Account Number</th>
      <th scope="col">Amount</th>
      <th scope="col">Transaction type</th>
      <th scope="col">Comments</th>
      <th scope="col">Transaction Date</th>
      <th scope="col">Closing Balance</th>

    </tr>
  </thead>
  <tbody>
    {
        this.state.transactionDetails.map((item,i)=>{
            return(
                <tr key={i}>
                    <td>{item.accountNumber}</td>
                    <td>{item.amount}</td>
                    <td>{item.transactionType}</td>
                    <td>{item.comments}</td>
                    <td>{item.transactionDate}</td>
                    <td>{item.closingBalance}</td>
            
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
export default Transactions;