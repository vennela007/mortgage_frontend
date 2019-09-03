import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import home from './home.png';
import ing from './ing-logo.jpg';
import './Header.css';
import { withTranslation} from 'react-i18next';

class Header extends Component{

    handleSelect = (event) =>{

        let { i18n } = this.props;
        
        i18n.changeLanguage(event.target.value);
        
        }

    render(){
        let { t } = this.props;
        return(
            <div>
                <div className="main">
                    <ul>
                        <li><img src={ing} width="100px" height="100px"/></li>
                        <li className="titlespace"><h2 className="title">{t('title')}</h2></li>
                        <li className="dropdown1">
                        <select onChange={this.handleSelect}>
                        <option value="en">ENGLISH</option>
                        <option value="sp">SPANISH</option>
                    </select>
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
export default withTranslation()(Header);