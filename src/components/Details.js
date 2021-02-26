import React, { Component } from 'react'

export class Details extends Component {
    constructor() {
        super();
        this.state = {
            data : [],
            seconds: 0
        }
        this.fetchData = this.fetchData.bind(this);
        this.tick = this.tick.bind(this);
    }

    tick() {
        let newSecond = this.state.seconds + 1;
        this.setState({
            ...this.state,
            seconds: newSecond
        })      
      }    

      componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

    async componentDidUpdate(prevProps) {
        
        // Typical usage (don't forget to compare props):
        if (this.props.characterID !== prevProps.characterID) {
            this.setState({
                data: await this.fetchData(this.props.characterID),
                seconds : 0
            })
            
        }
    }

    async fetchData(urlAPI) {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${urlAPI}`);
        const data = await res.json();
        return data;

    }

    render() {
        const {name, gender, image, species, status } = this.state.data;        
        
        return (
            <div className="details-field">
                <h2>Name: { name }</h2>
                <p>Gender: {gender}</p>
                <img src={image} alt={name} />
                <p>Species: {species}</p>
                <p>Status: {status}</p>
                <p>Location: { this.state.data.location?.name }</p>
                <p>Timer:{this.state.seconds}</p>
            </div>
        )
    }
}

export default Details
