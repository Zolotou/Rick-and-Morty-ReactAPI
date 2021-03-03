import {Component} from "react";
import Card from "./Card";
import loading from "../assets/Loading.gif";

class List extends Component {
    render() {
         if(!this.props.data) return <img src={loading}></img>
        return ( <div className="List">
            { this.props.data.map((res) => (<Card key={res.id} id={res.id} image={res.image} name={res.name} handleCharacter={this.props.handleCharacter} />)) }
        </div>

        )
    }
}

export default List;