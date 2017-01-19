/**
 * Created by Exper1ence on 2017/1/14.
 */
import React, {PropTypes} from 'react';
import Component from '../Component';
import View from '../View';
import {propTypes, defaultProps} from '../types';
import Image from '../Image';
import Text from '../Text';
import Transition from '../Transition';

class Iioi extends Component {
    _init({}) {
        return {
            state: {
                iioiDone: false,
            }
        }
    }
    
    _run({style, word, delay,}, {iioiDone,}) {
        return (
            <Transition
                style={{
                    width: '58px',
                    height: '58px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: '#000',
                    opacity: 0,
                    transition: `opacity 1s ease-in`,
                    ...style,
                }}
                to={iioiDone ? null : {opacity: 11}}
                done={iioiDone ? null : () => this.setState({iioiDone: true,})}
                delay={.5}
                duration={1}
                src={require('./../../../Word/bg.png')}
                children={word ? (
                        <Transition
                            style={{
                                opacity: 0,
                                transition: `opacity .5s ease-in`,
                            }}
                            to={iioiDone ? {opacity: 1} : null}
                            duration={.5}
                            delay={delay}
                            children={word}
                            component={Text}
                        />
                    ) : null}
                component={Image}
            />
        );
    }
}
Iioi.propTypes = {};
Iioi.defaultProps = {
    delay: 0,
};
export default Iioi;