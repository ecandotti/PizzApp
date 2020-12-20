import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Search from './pages/Search'
import Adding from './pages/Adding'
import Header from './components/Header'
import Main from './pages/Main'
import PersonnalCard from './pages/PersonnalCard'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mainArr: [],
            title: ''
        }
        this.changeTitle = this.changeTitle.bind(this)
        this.updateData = this.updateData.bind(this)
    }

    changeTitle(reqTitle) {
        this.setState({
            title: reqTitle
        })
    }

    async updateData() {
        let response = await fetch('https://pizzapifire.herokuapp.com/contacts/list')
        let req = await response.json()
        this.setState({
            mainArr: req
        })
    }

    componentDidMount(){
        this.updateData().then(() => { console.log('Data updated !') }).catch(err => {console.log(err)})
        console.log('Data updating...')
    }

    render(){
        return (
            <div className="flex flex-col flex-nowrap bg-gray-500 w-full h-full text-white">
                <Router>
                    <Header  title={this.state.title}/>
                    <Switch>
                        <Route exact path="/">
                            <Main changeTitle={this.changeTitle}/>
                        </Route>  
                        <Route path="/adding">
                            <Adding updateData={this.updateData} changeTitle={this.changeTitle}/>
                        </Route>
                        <Route path="/search">
                            <Search updateData={this.updateData} mainArr={this.state.mainArr} changeTitle={this.changeTitle}/>
                        </Route>
                        <Route path="/profile/:_id">
                            <PersonnalCard mainArr={this.state.mainArr} updateData={this.updateData}/>
                        </Route>
                    </Switch>
                    <Navigation title={this.state.title} changeTitle={this.changeTitle} />
                </Router>
            </div>
        )
    }
}

export default App