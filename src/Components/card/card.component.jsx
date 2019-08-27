import React from 'react';
import './card.styles.css'

export class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            img: "https://robohash.org/1"
        }
    }
    componentDidMount(){
        fetch(`https://robohash.org/${this.props.monster.id + 10 }`)
        .then(data => this.setState({img: `https://robohash.org/${this.props.monster.id}` }))
    }
    render(){
        return(
            <div className = "monster-card col-sm-12 col-md-4 col-lg-3"> 
                <div className = "col-sm-12 inner-card">
                    <img src={this.state.img} alt=""/> 
                    <h5> {this.props.monster.name}  </h5>
                    <p>{this.props.monster.email}</p>

                </div>
            
            </div>
        )
    }

}