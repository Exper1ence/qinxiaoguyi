/**
 * Created by Exper1ence on 2017/1/13.
 */
import React, {PropTypes} from 'react';
import Component from '../Component';
import Fill from '../Fill';

class Qxgy extends Component {
    _run({children,}) {
        if (ENV.debug) {
            return(
                <Fill h v
                      style={{
                          fontFamily: 'Microsoft YaHei,Arial,Helvetica,sans-serif',
                      }}
                      children={children}
                />
            )
        }
        else {
            return(
                <Fill h v
                      style={{
                          fontFamily: 'Microsoft YaHei,Arial,Helvetica,sans-serif',
                      }}
                      children={children}
                />
            )
        }
    }
}
Qxgy.propTypes = {};
Qxgy.defaultProps = {};
export default Qxgy;