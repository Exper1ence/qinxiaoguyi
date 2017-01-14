/**
 * Created by Exper1ence on 2017/1/13.
 */
import React, {PropTypes} from 'react';
import Component from '../Component';
import Fill from '../Fill';
import HeartBeat from '../HeartBeat';
import Arrow from '../Arrow';
import util from '../util';
import Transition from '../Transition';
import Text from '../Text';

class Synopsis extends Component {
    _init() {
        require.ensure(['../index', './bg.png'], () => {
            const {Page, Iioi,}=require('../index');
            setTimeout(() => {
                this.setState({
                    content: (
                        <Page
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            backgroundImage={`url(${require('./bg.png')})`}
                            children={[<Arrow/>, (
                                <Iioi style={{
                                    position: 'absolute',
                                    left: '50%',
                                    marginLeft: '-68px',
                                    top: '50%',
                                    marginTop: '-150px',
                                }} word='琴'/>
                            ), (
                                <Iioi style={{
                                    position: 'absolute',
                                    right: '50%',
                                    marginRight: '-68px',
                                    top: '50%',
                                    marginTop: '-150px',
                                }} word='箫' delay={.5}/>
                            ), (
                                <Iioi style={{
                                    position: 'absolute',
                                    left: '50%',
                                    marginLeft: '-68px',
                                    top: '50%',
                                    marginTop: '-75px',
                                }} word='古' delay={1}/>
                            ), (
                                <Iioi style={{
                                    position: 'absolute',
                                    right: '50%',
                                    marginRight: '-68px',
                                    top: '50%',
                                    marginTop: '-75px',
                                }} word='艺' delay={1.5}/>
                            ), (
                                <Transition
                                    style={{
                                        marginTop: '50px',
                                        fontSize: '20px',
                                        opacity:0,
                                        transition:'opacity .5s ease-in'
                                    }}
                                    to={{opacity:1}}
                                    delay={3}
                                    duration={.5}
                                    component={Text}
                                    children='招生简章'
                                />
                            )]}
                        />
                    ),
                });
            }, 2000);
        });
        return {
            state: {content: null}
        }
    }
    
    _run({}, {content,}) {
        return (
            <Fill
                h v
                children={[<Transition
                    style={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        zIndex: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        transition: 'opacity .5s ease',
                    }}
                    to={content ? {opacity: 0,} : null}
                    done={content ? {display: 'none',} : null}
                    duration={.5}
                    children={<HeartBeat run={!content} ref='beat'/>}
                    component={Fill}
                    h v
                />, content,]}
            />
        )
    }
}
Synopsis.propTypes = {};
Synopsis.defaultProps = {};
export default Synopsis;

// {/*< Lazy onLoad={() => {*/}
//     {/*this.refs.curtain.element.style.opacity = 0;*/}
//     {/*util.setTimeout(() => {*/}
//         {/*this.refs.curtain.element.style.display = 'none';*/}
//         {/*this.refs.beat.stop();*/}
//     {/*}, 500);*/}
// {/*}}/>*/}