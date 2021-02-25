import {Component} from "react";
import Card from "./Card";

class List extends Component {
    render() {
         if(!this.props.data) return <span>Loading</span> 
        console.log(this.props)
        return ( <div>
            { this.props.data.map((res) => (<Card key={res.id} image={res.image} name={res.name} />)) }
        </div>

        )
    }
}

export default List;