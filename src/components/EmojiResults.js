import React from 'react';
import PT from 'prop-types';
import EmojiResultRow from './EmojiResultRow';

class EmojiResults extends React.Component {
    render () {
        return (
            <div>

            {this.props.EmojiData.map((emojiItem) => {
                return (
            <EmojiResultRow 
                key={emojiItem.title}
                title={emojiItem.title}
                symbol={emojiItem.symbol}
            />
                );

            })

            }

            </div>

        );
    }
    static propTypes = {
        EmojiData: PT.array.isRequired
    };
};

export default EmojiResults;