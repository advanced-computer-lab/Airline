import React ,{Component} from 'react';
import { menuItems } from './menuItems';
import "./navbar.css"

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <div className="nav-m">
                <div>
                    <li>
                        <a className="airline" href="/">Airline</a>
                        </li></div>
                <u1 className="navMenu">
                    {menuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                                </li>
                        )
                    })}
                </u1>
                </div>
            </nav>
        )
    }
}
export default Navbar;