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
            state: {dir: 1}
        }
    }
    
    _run({children, style,}, {dir}) {
        return (
            <Transition
                style={{
                    position: 'fixed',
                    bottom: '10px',
                    width: '40px',
                    height: '24px',
                    left: '50%',
                    marginLeft: '-20px',
                    transition: 'bottom .5s ease',
                }}
                to={dir > 0 ? {bottom: '10px'} : {bottom: '30px'}}
                done={() => this.setState({dir: -dir})}
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