import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0,
        }
    }
    render(){
        return(
            <div className="userCard ">
                <h1>Name : Ankit saini</h1>
                <h1>name = {this.props.name}</h1>
                <h1>count = {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })
                }
                 }>click me</button>
                <h2>Location: loharu</h2>
                <h3>Contact: sainiankit8102001@gmail.com</h3>
            </div>
            
        )
    }
}

export default UserClass;