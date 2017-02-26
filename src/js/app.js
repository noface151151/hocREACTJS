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
    changeTitle() {
        setTimeout(function () {
            console.log('vao')
            this.state.title = 'Thay đổi header'
            this.setState(this.state)
        }.bind(this), 1000);


    }
    render() {

        return (

            <div>
                <button onClick={this.changeTitle}>Click</button>
                <Header title={this.state.title} />
                {this.state.name}
                <Footer />
            </div>
        );
    }
}

export default App;