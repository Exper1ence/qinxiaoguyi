/**
 * Created by Exper1ence on 2017/1/14.
 */
import React, {PropTypes} from 'react';
import Component from '../Component';
import Container from '../Container';
import {propTypes, defaultProps} from '../types';
import Image from '../Image';
import Transition from '../Transition';


class Arrow extends Component {
    _init({}) {
        return {
            state: {
                flag: false
            }
        }
    }
    
    _run({children, style,}, {flag}) {
        return (
            <Transition
                style={{
                    position: 'fixed',
                    bottom: 10,
                    width: 40,
                    height: 24,
                    left: '50%',
                    marginLeft: -20,
                    transition: 'bottom .5s ease',
                }}
                to={flag ? {bottom: 10} : {bottom: 30}}
                done={() => this.setState({flag: !flag})}
                duration={.5}
                src={require('./arrow.png')}
                component={Image}
            />
        );
    }
}
Arrow.propTypes = {};
Arrow.defaultProps = {};
export default Arrow;