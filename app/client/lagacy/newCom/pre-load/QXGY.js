/**
 * Created by Exper1ence on 2017/1/15.
 */
import React, {PropTypes} from 'react';
import createClass from '../createClass';
import Fill from '../Fill';

export default createClass({
    render({children,}) {
        return (
            <Fill
                h v
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Microsoft YaHei,Arial,Helvetica,sans-serif',
                }}
                children={children}
            />
        );
    },
});