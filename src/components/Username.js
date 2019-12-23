import React from 'react';

class Username extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text:'',
            submitted:'',
        }
    }
    inputText = (e) => {
        this.setState({ text: e.target.value });
    }
    async sendToLocalStorage(){
        console.log(this.state.submitted);
        localStorage.removeItem('1');
        localStorage.setItem(1, JSON.stringify(this.state.text));
        await this.setState({ submitted: this.state.text});
        await this.setState({text: ''});
    }

    render(){
        return(
            <div>
                Username:
                <input type="text" value={this.state.text} onChange={this.inputText}/>
                <button onClick={() => this.sendToLocalStorage()}>Submit</button>
                {JSON.parse(localStorage.getItem('1')) !=  null && 
                <div>
                   Current username is: {JSON.parse(localStorage.getItem('1'))} 
                </div>}
            </div>
        )
    }

}

export default Username


