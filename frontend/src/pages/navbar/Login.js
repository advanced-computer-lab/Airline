import React ,{Component} from 'react';
import Loader from "react-loader-spinner";
class Login extends Component{
    render(){
        return(
            <div>
                <Loader
        type="Circles"
        color="#000"
        height={100}
        width={100}
        timeout={1000}
      />
      <h1>
                Login
            </h1>
            </div>
            
        )
    }
}
export default Login