import React from 'react'
import Title from './title'

class Header extends React.Component {
    handleChange(event) {
        const title=event.target.value;
        this.props.changeTitle(title)
    }
    render() {
        return (
            <div>
                <Title titleHeader={this.props.title} />
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}
export default Header;