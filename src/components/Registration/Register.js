import React,{Component} from 'react';
import './Register.css';

class Register extends Component{
   
    render(){
        return(
            <div align="center">
                <h1 align="center">Mortagages + Signips</h1>
                    <form className="form1" >
                    <div className="form-group formgroup">
                        <label ><b>I'm thinking about</b></label>
                            <select className="form-control"  onChange={this.props.onChange}  value={this.props.operationType} name="operationType" id="operationType">
                                <option value="Buying my first home">Buying my first home</option>
                                <option value="Moving to another home">Moving to another home</option>
                                <option value="Remortgaging">Remortgaging</option>
                                <option value="Buying a second home">Buying a second home</option>
                                <option value="Buying a property to let"> Buying a property to let</option>
                                <option value="Remortgaging my buy to let property">Remortgaging my buy to let property</option>
 
                         </select>
                            <div className="div" >
                            <input   type="text" className="form-control div1" id=" "  />
                            </div>
                      </div>

                      <div className="form-group formgroup" >
                            <label><b>How much do you think the property will cost?</b></label>
                                    <div className="input-symbol-euro">
                                        {/* <div id="propertyCost">{this.props.propertyCost}</div> */}
                                        <input type="text" className="form-control"  name="propertyCost" id="propertyCost" value={this.props.propertyCost}  min="1"  step="1" onChange={this.props.onChange} required />
                                        <div className="errorMsg">{this.props.propertyCostError}</div>
                                     
                                     </div>
                        </div>
                        <div className="form-group formgroup" >
                            <label><b>How much deposit do you have?</b></label>
                                    <div className="input-symbol-euro">
                                        <input type="number" className="form-control "  name="deposit" id="deposit"  value={this.props.deposit} min="1"  step="1" onChange={this.props.onChange} required />
                                        <div className="errorMsg">{this.props.depositError}</div>
                                     </div>
                        </div>    

                          <div className="form-group">
                         <button  id="btn2" className="btn btn-success" onClick={this.props.next}>Next</button>
                </div>      
    </form>
    
            </div>
        )
    }
}
export default Register;