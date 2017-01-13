/**
 * Created by Exper1ence on 2017/1/13.
 */
import React, {PropTypes} from 'react';
import Component from '../Component';
import Full from '../Full';
import HeartBeat from '../HeartBeat';
import Arrow from '../Arrow';

class Lazy extends Component {
    _init({onLoad}) {
        require.ensure(['../index', './bg.png'], () => {
            const Page = require('../Page').default;
            setTimeout(() => {
                this.setState({
                    content: (
                        <Page
                            backgroundImage={`url(${require('./bg.png')})`}
                            children={<Arrow/>}
                        />
                    ),
                });
                onLoad();
            }, 100);
        });
        return {
            state: {content: null}
        }
    }
    
    _run({}, {content}) {
        return content;
    }
}
Lazy.propTypes = {
    onLoad: PropTypes.func,
};
Lazy.defaultProps = {
    onLoad: () => null,
};

class Synopsis extends Component {
    _run() {
        return (
            <Full width>
                <Full width height
                      style={{
                          backgroundColor: 'white',
                          transition: 'opacity .5s ease',
                          position: 'absolute',
                          zIndex: 5,
                          justifyContent: 'center',
                          alignItems: 'center',
                      }}
                      ref='curtain'
                      children={<HeartBeat ref='beat'/>}
                />
                <Lazy onLoad={() => {
                    this.refs.curtain.element.style.opacity = 0;
                    setTimeout(() => {
                        this.refs.curtain.element.style.display = 'none';
                        this.refs.beat.stop();
                    }, 1000);
                }}/>
            </Full>
        )
    }
}
Synopsis.propTypes = {};
Synopsis.defaultProps = {};
export default Synopsis;