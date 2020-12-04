import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import DarkModeButton from './components/DarkModeButton'
import Navigation from './components/Navigation'
import Liste from './components/Liste'
import Adding from './components/Adding'
import Header from './components/Header'
import Main from './components/Main'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            clientArray: [],
            title: 'Accueil'
        }
        this.updateData = this.updateData.bind(this)
        this.changeTitle = this.changeTitle.bind(this)
    }

    updateData() {
        fetch('https://cors-anywhere.herokuapp.com/http://176.189.0.162:8181/clients/list')
            .then(response => response.json())
            .then(req => {
                this.setState({
                clientArray: req
                })
            })
            .then(console.log(this.state.clientArray))
    }

    componentDidMount() {
        this.updateData()
    }

    changeTitle(reqTitle) {
        this.setState({
            title: reqTitle
        })
    }

    render(){
        return (
            <div className="flex flex-col flex-nowrap bg-gray-100 dark:bg-gray-800 w-screen h-screen">
                <DarkModeButton className="fixed"/>
                <Router>
                    <Header  title={this.state.title}/>
                    <Switch>
                        <Route exact path="/">
                            <Main />
                        </Route> 
                        <Route path="/list">
                            <Liste clientArray={this.state.clientArray}/>
                        </Route> 
                        <Route path="/adding">
                            <Adding updateData={this.updateData}/>
                        </Route> 
                    </Switch>
                    <Navigation title={this.state.title} changeTitle={this.changeTitle}/>
                </Router>
            </div>
        )
    }
}

export default App