import React, { Component } from "react";

import { connect } from "react-redux";
import { getSuperHeroes } from "../../redux/superheroes.js";

import Item from "./Item";

class List extends Component {
    componentDidMount() {
        this.props.getSuperHeroes(this.props.offset);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.offset !== this.props.offset && nextProps.offset < Math.floor(1471)){
           this.props.getSuperHeroes(nextProps.offset); 
        }
    }

    // filter the data ... data.filter
    // add props to the state... new state that gets updated as value changes


    render() {
        const { data, loading, errMsg, searchTerm} = this.props;

        // const superheroesFilter = data.filter((superhero, i) => {
        //     return superhero.name === "3-D Man") 
        // }); 

        // how to pass props down from parent within a class?
        // how to remove special characters from this input value and regular values? 

        const superHeroesComponents = data
            .filter((superhero, i) => {
                if(!searchTerm) return true;
                return superhero.name.toLowerCase().replace(/[^a-z0-9]/g, '').includes(searchTerm.toLowerCase().replace(/[^a-z0-9]/g, ''));
            })
            .map((superhero, i) => <Item key={superhero.name + i} {...superhero}></Item>)

        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div>
                    {superHeroesComponents}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.superheroes;
}

export default connect(mapStateToProps, { getSuperHeroes })(List);
