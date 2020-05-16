import React from 'react';
import ThemeContext from './ThemeContext';



class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            quote: props.data.quotes[0].quote,
            author: props.data.quotes[0].author,
            current: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        var x = Math.floor(Math.random()*102);
        while (x === this.current) { 
            x = Math.floor(Math.random()*102);
        }

        this.setState({
            quote: this.props.data.quotes[x].quote,
            author: this.props.data.quotes[x].author,
            current: x
        })
    }

    render() {
        return(
            <div>
                <h2>
                    {this.state.quote}
                </h2>
                <h1>
                    {this.state.author}
                </h1>
                <button onClick={e => this.handleClick(e)}>
                    Next
                </button>
            </div>
        )
    }
}


export default Home