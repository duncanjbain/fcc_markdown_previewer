import React from 'react';

const Emoji = props => (
    <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    area-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
        </span>
);

export default Emoji;