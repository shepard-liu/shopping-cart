import './utilities.scss';

import React from 'react';

const RMBIcon: React.FunctionComponent<any> = (props) => {
    return <img className={(props.className || '') + " rmg-sign "} src="../assets/rmb.svg" />;
};

export { RMBIcon };