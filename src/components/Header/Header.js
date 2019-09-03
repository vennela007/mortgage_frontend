import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import home from './home.png';
import ing from './ing-logo.jpg';
import './Header.css';
class Header extends Component{


    render(){
       
        return(
            <div>
                <div className="main">
                    <ul>
                        <li><img src={ing} width="100px" height="100px"/></li>
                        <li className="titlespace"><h2 className="title">ING MORTGAGE</h2></li>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            
                {/* <div className="header-right">
                    <Link to='/listOfProducts'><img src={home} className="logo" height="50px" width="50px"/></Link>
                    <Link to='/analysis'><button className="btn btn-outline-primary"><b>Dashboard</b></button></Link>
        
                    <select onChange={this.handleSelect}>
                        <option value="en">ENGLISH</option>
                        <option value="sp">SPANISH</option>
                    </select>
                    
               </div> */}
            </div>
        )
    }
}
export default Header;