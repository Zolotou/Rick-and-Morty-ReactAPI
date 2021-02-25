import {Component} from "react";

class Card extends Component {
    render(){
       const {name, image, id} = this.props;
       return (
           <div onClick={() => this.props.handleCharacter(id)} className="Card">
               <h2>{name}</h2>
               <img src={image} alt={name} />
           </div>
       )
    }
}

export default Card;