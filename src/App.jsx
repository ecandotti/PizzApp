import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import DarkModeButton from './components/DarkModeButton'
import Navigation from './components/Navigation'
import Search from './components/Search'
import Adding from './components/Adding'
import Header from './components/Header'
import Main from './components/Main'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            clientArray: [],
            residenceArray: [],
            title: ''
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

        fetch('https://cors-anywhere.herokuapp.com/http://176.189.0.162:8181/residences/list')
            .then(response => response.json())
            .then(req => {
                this.setState({
                residenceArray: req
                })
            })
            .then(console.log(this.state.residenceArray))
    }

    componentDidMount() {
        this.updateData()
        this.setState({ title: 'Accueil' })
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
                        <Route path="/adding">
                            <Adding updateData={this.updateData}/>
                        </Route>
                        <Route path="/search">
                            <Search clientArray={this.state.clientArray} residenceArray={this.state.residenceArray}/>
                        </Route>
                    </Switch>
                    <Navigation title={this.state.title} changeTitle={this.changeTitle}/>
                </Router>
            </div>
        )
    }
}

export default App