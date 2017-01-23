import Component from '../components/Component';
import './style.scss';
import Loading from '../Loading';
import ReactTimeout from 'react-timeout';
import {args, width, height,} from '../components/react-arguments';
import ScrollSensitive from '../ScrollSensitive';
import Image from '../Image';
import Fade from '../Fade';
import Scroll from '../Scroll';
import Edge from '../Edge';

@ReactTimeout
export default class QXGY extends Component {
    awake() {
        return {
            state: {
                content: null,
                removeLoading: !!0,
            }
        }
    }
    
    render({}, {content, removeLoading,}, {setTimeout}) {
        return (
            <div className='full-size'>
                {[
                    removeLoading ? null : (
                            <Loading render={({Page, Words, ReturnTop}) => {
                                this.setState({
                                    content: (
                                        [<ReturnTop key={1}/>,
                                            <div className='aict ofhi' style={{
                                                backgroundImage: `url(${require('./bg.png')})`,
                                                height: 3000,
                                                width: '100%',
                                                flexDirection: 'column',
                                            }}
                                            >
                                                {[
                                                    <Words key={0}/>,
                                                    <Fade key={1}
                                                          min={30}
                                                          max={400}
                                                          render={
                                                              style => (
                                                                  <Image
                                                                      style={{
                                                                          ...style,
                                                                          width: width - 20, height: 200
                                                                      }}
                                                                      src={require('./1.png')}
                                                                  />
                                                              )
                                                          }
                                                    />,
                                                    <Fade
                                                        key={2}
                                                        min={120}
                                                        max={600}
                                                        render={
                                                            style => (
                                                                <div
                                                                    className='jcct mtmd'
                                                                    style={{
                                                                        ...style,
                                                                        width: width - 60,
                                                                    }}
                                                                >
                                                                    古琴艺术梅庵派第四代传人劳拉老师，师承国家非物质文化传人王永昌先生。授传十八首梅庵派古琴曲，擅用梅庵技法弹奏其他琴曲。传统古琴艺术宣传、推广者。在授学生已遍布全国近十个省市。
                                                                </div>
                                                            )
                                                        }
                                                    />,
                                                    <Fade key={3}
                                                          min={300}
                                                          max={800}
                                                          render={
                                                              style => (
                                                                  <Image
                                                                      className='mtmd'
                                                                      style={{
                                                                          ...style,
                                                                          width: width - 20, height: 200
                                                                      }}
                                                                      src={require('./2.png')}
                                                                  />
                                                              )
                                                          }
                                                    />,
                                                    <Fade key={4}
                                                          min={600}
                                                          max={1000}
                                                          render={
                                                              style => (
                                                                  <Scroll
                                                                      min={600}
                                                                      max={1000}
                                                                      render={
                                                                          scroll => (
                                                                              <Image
                                                                                  className='mtmd'
                                                                                  style={{
                                                                                      ...style,
                                                                                      width: 200, height: 200,
                                                                                      borderRadius: 100,
                                                                                      transform: `rotate(${scroll.transform}deg)`,
                                                                                      backgroundSize: 'cover',
                                                                                      marginRight: -150,
                                                                                  }}
                                                                                  src={require('./2.png')}
                                                                              />
                                                                          )
                                                                      }
                                                                  />
                                                              )
                                                          }
                                                    />,
                                                    <Fade key={5}
                                                          min={700}
                                                          max={1100}
                                                          render={
                                                              style => (
                                                                  <Scroll
                                                                      min={700}
                                                                      max={1100}
                                                                      render={
                                                                          scroll => (
                                                                              <Image
                                                                                  className='mtmd'
                                                                                  style={{
                                                                                      ...style,
                                                                                      width: 250, height: 250,
                                                                                      borderRadius: 250,
                                                                                      transform: `rotate(${scroll.transform}deg)`,
                                                                                      backgroundSize: 'cover',
                                                                                      marginLeft: -200,
                                                                                      marginTop: -50,
                                                                                  }}
                                                                                  src={require('./2.png')}
                                                                              />
                                                                          )
                                                                      }
                                                                  />
                                                              )
                                                          }
                                                    />,
                                                    <Edge key={6}
                                                          min={1000}
                                                          max={1400}
                                                          render={
                                                              style => (
                                                                  <div
                                                                      className='jcfe'
                                                                      style={{
                                                                          width: width - 20,
                                                                          height: 200,
                                                                      }}
                                                                  >
                                                                      <Image
                                                                          key={1}
                                                                          className='mtmd'
                                                                          style={{
                                                                              width: style.width, height: 200,
                                                                              backgroundSize: 'cover'
                                                                          }}
                                                                          src={require('./2.png')}
                                                                      />
                                                                  </div>
                                                              )
                                                          }
                                                    />,
                                                    <Edge key={7}
                                                          min={1200}
                                                          max={1600}
                                                          render={
                                                              style => (
                                                                  <div
                                                                      className='mtmd'
                                                                      style={{
                                                                          width: width - 20,
                                                                          height: 200,
                                                                      }}
                                                                  >
                                                                      <Image
                                                                          key={1}
                                                                          className='mtmd'
                                                                          style={{
                                                                              width: style.width, height: 200,
                                                                              backgroundSize: 'cover'
                                                                          }}
                                                                          src={require('./2.png')}
                                                                      />
                                                                  </div>
                                                              )
                                                          }
                                                    />,
                                                ]}
                                            </div>
                                        ]
                                    )
                                });
                                this.refs.loading.hide();
                                setTimeout(this.setState.bind(this, {removeLoading: !0}), 500);
                            }} key={0} ref='loading'/>
                        ),
                    content,
                ]}
            </div>
        )
    }
}
QXGY.defaultProps = {};