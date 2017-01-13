/**
 * Created by Exper1ence on 2017/1/13.
 */
import React, {PropTypes} from 'react';
import View from '../View';
import Component from '../Component';
import {Provider} from 'react-redux';
import store from './store';
import Full from '../Full';

class Qxgy extends Component {
    _run({children,}) {
        if (ENV.debug) {
            return (
                <Provider store={store} style={{height: '100%'}}>
                    <Full width height>
                        {children}
                    </Full>
                </Provider>
            )
        }
        else {
            return (
                <div style={{height: '100%', backgroundColor: 'blue'}}>test</div>
            )
        }
    }
}
Qxgy.propTypes = {};
Qxgy.defaultProps = {};
export default Qxgy;