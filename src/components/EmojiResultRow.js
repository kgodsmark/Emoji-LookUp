import React from 'react';
import PT from 'prop-types';


class EmojiResultRow extends React.Component {
    constructor (props) {
    super(props);
    }

    render () {
        return (
            <div>
                <p>{this.props.symbol}   {this.props.title}</p>
            </div>
        );
    }
    
    static propTypes = {
    title: PT.string.isRequired,
    symbol: PT.string.isRequired
    };

};

export default EmojiResultRow;