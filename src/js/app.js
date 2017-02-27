import React from 'react';
import Header from './header'
import Footer from './footer'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Đây là header',
            name: 'Đỗ Ngọc Nam'
        }
        this.changeTitle = this.changeTitle.bind(this)

    }
    changeTitle(title) {

        this.state.title = title
        this.setState(this.state)
    }
    render() {

        return (

            <div>
                <Header changeTitle={this.changeTitle} title={this.state.title} />
                <Footer />
            </div>
        );
    }
}

export default App;