import React, { Component } from 'react'

export class Details extends Component {
    constructor() {
        super();
        this.state = {
            data : [],
            seconds: 0,
            loading: false,
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
                loading: true,
                seconds : 0
            })
            await this.fetchData(this.props.characterID);
        }
    }

    async fetchData(urlAPI) {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${urlAPI}`);
        const dataAPI = await res.json();
        await this.setState({
            ...this.state,
            loading: false,
            data: dataAPI
        })
    }

    render() {
        const {name, gender, image, species, status } = this.state.data;        
        console.log(this.state.loading);
        return (
            <div className="details-field">
                {this.state.loading ? <h2>LOADING</h2> : <div>                <h2>Name: { name }</h2>
                <p>Gender: {gender}</p>
                <img src={image} alt={name} />
                <p>Species: {species}</p>
                <p>Status: {status}</p>
                <p>Location: { this.state.data.location?.name }</p>
                <p>Timer:{this.state.seconds}</p>
                    </div>}

            </div>
        )
    }
}

export default Details
