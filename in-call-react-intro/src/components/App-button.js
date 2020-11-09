import React, { Component } from 'react'


import "./App.css";
class App extends Component{
    state = {
        name: "",
        count: 0,
    };
//??
    componentDidMount() {
        this.setState({
        name: "Mr. Robot",
        });
    }
    //this counts up from count on line 8
    AddOne() {
        let newCount = this.state.count + 1;
        this.setState({
        count: newCount,
        });
    }
    //this counts down from count on line 8
    MinusOne = () => {
        let countDown = this.state.count - 1;
        this.setState({
        count: countDown,
        });
    };
    //this sets count to 0 from count on line 8
    Reset = () => {
        this.setState({
        count: 0,
        });
    };
        //line 44 name ref line 7 name
        //line 46 count ref line 8 name
       //?? can i call AddOne on line 50?
        //line 52 ref to app.css

    render() {
        return (
        <div style={{ textAlign: "center", marginTop: 5 }}>
            Good Afternoon {this.state.name} 
            <div style={styles.buttonDivStyle}>
            <span>{this.state.count}</span>
            <button
                onClick={() =>
                this.setState({
                    count: this.state.count + 1,
                })
                }
                className="plus-button-style"
            >
                +
            </button>{" "}
            <button onClick={this.MinusOne}>-</button>
            <button onClick={this.Reset} className="plus-button-style">
                Reset
            </button>
            </div>
        </div>
        );
        }
    }
    
    const styles = {
    buttonDivStyle: {
        marginTop: 10,
    },
    };
    
    export default App;

