import React from 'react';
import PT from 'prop-types';


class EmojiResultRow extends React.Component {
    // constructor (props) {
    // super(props);
    // }

    render () {

        const image = `em em-${this.props.title.toLowerCase()}`
        return (
            <div>
                <i className={image?image:this.props.symbol}></i>
                <span>   {this.props.title.toLowerCase()}</span>
            </div>
        );
    }
    
    static propTypes = {
    title: PT.string.isRequired,
    symbol: PT.string.isRequired
    };

};

export default EmojiResultRow;