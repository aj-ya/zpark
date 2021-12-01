import './App.scss';
import React from 'react';
import NavigateLog from './Redirect'
class App extends React.Component {
  state = {
    redirect: false,
    loggedIn: false,
  }
  componentDidMount() {
    if(window.localStorage.getItem('username')!==null)
    this.id = setTimeout(() => this.setState({redirect:true,loggedIn:true}), 4000)
    else
    this.id = setTimeout(() => this.setState({redirect:true,loggedIn:false}), 4000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <NavigateLog isLoggedIn={this.state.loggedIn} />
      :     <div className='wrapper'><div id="App" className="fade-in-out"><img src='zpark-start.png' alt='logo'/></div></div>
  }
}
export default App;
