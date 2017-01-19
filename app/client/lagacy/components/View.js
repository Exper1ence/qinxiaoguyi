/**
 * Created by Exper1ence on 2016/12/31.
 */
import React, {PropTypes} from 'react';
import Component from './Component';

class View extends Component {
    _run({style,}) {
        return (
            <div
                {...this.props}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    boxSizing: 'border-box',
                    alignItems: 'flex-start',
                    ...style,
                }}
            />
        );
    }
}
View.propTypes = {};
View.defaultProps = {};
export default View;