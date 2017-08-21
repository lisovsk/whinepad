import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Suggest extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.defaultValue};
    }
    getValue() {
        return this.state;
    }
    render() {
        const randomid = Math
            .random()
            .toString(16)
            .substring(2);
        return (
        < div > 
            < input 
                list = { randomid }
                defaultValue = {
                    this.props.defaultValue
                }
                id = {
                    this.props.id
                } /> 
            < datalist 
                id = {
                    randomid
                } > 
                {
                    this
                    .props
                    .options
                    .map((item, idx) => < option value = {
                        item
                    }
                    key = {
                        idx
                    } />)
                } 
            </ datalist > 
        </ div >);
    }
}
Suggest.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string)
};
export default Suggest