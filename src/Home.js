import React from 'react';
import './Home.css'
import { FaTwitter, FaArrowRight } from 'react-icons/fa';


class Home extends React.Component{
    constructor(props){
        console.log(props.data.quotes[0].quote)
        super(props)
        this.state = {
            quote: props.data.quotes[0].quote,
            author: props.data.quotes[0].author,
            current: 0,
            link: 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + '"' + props.data.quotes[0].quote + '" ' + props.data.quotes[0].author
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
            current: x,
            link: 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + '"' + this.props.data.quotes[x].quote + '" ' + this.props.data.quotes[x].author 
        })
    }

    render() {
        return(
            <div>
                <div className="centered">
                    <blockquote>
                        "{this.state.quote}"
                    </blockquote>
                    <footer>
                        <cite>
                            {this.state.author}
                        </cite>
                    </footer>
                    <div className="buttons">
                        <a href={this.state.link}>
                            <FaTwitter className="twitter"/>
                        </a>
                        <a onClick={e => this.handleClick(e)}>
                            <FaArrowRight className="arrow" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home