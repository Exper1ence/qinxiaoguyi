/**
 * Created by Exper1ence on 2016/12/30.
 */
import React from 'react';
import {render} from 'react-dom';
import {
    Container, Component,
    Wrapper, Padding, Text, Responsive,
    Button, Navigator, View, Footer,
    Link,
} from './components';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import 'babel-polyfill';

const DEBUG = false;
class MathRobot extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
    }
    
    run({children,}) {
        return (
            <Wrapper style={{}}>
                {children}
            </Wrapper>
        )
    }
}
class Content extends Component {
    init() {
        this.attrs = {
            time: .3,
        };
        return {
            bottom: 0,
            transition: '',
        }
    }
    
    run({}, {bottom, transition,}) {
        if (DEBUG) {
            return (
                <Container children={'hehe'}/>
            )
        }
        else {
            return (
                <Container
                    style={{
                        color: '#fff',
                        backgroundColor: '#563D7C',
                        position: 'absolute',
                        bottom,
                        transition,
                        height: '100%',
                    }}
                    onDragVertical={(e, diff) => {
                        const offset = Math.max(0, -diff);
                        this.setState({bottom: offset + 'px', transition: ''});
                        if (offset == 0)return e.targetTouches[0];
                    }}
                    onSwipeUp={() => {
                        const {time}=this.attrs;
                        this.setState({bottom: '100%', transition: `bottom ${time}s`});
                    }}
                    onSwipeDown={() => {
                        const {time}=this.attrs;
                        this.setState({bottom: 0, transition: `bottom ${time}s`});
                    }}
                    children={'fuck'}
                />
            )
        }
    }
}
class Test extends Component {
    run() {
        return (
            <div>test</div>
        )
    }
}
class Doc extends Component {
    run() {
        return (
            <div>doc</div>
        )
    }
}
// render(<MathRobot/>, document.getElementById('math-robot'));
render((
    <Router history={browserHistory}>
        <Route path="/" component={MathRobot}>
            <IndexRoute component={Content}/>
            <Route path="/test" component={Test}/>
            <Route path="/doc" component={Doc}/>
        </Route>
    </Router>
), document.getElementById('math-robot'));