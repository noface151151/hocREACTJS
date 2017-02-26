import React from 'react'
import Title from './title'

class Header extends React.Component {
    render() {
        return (
            <Title titleHeader={this.props.title}/>
        )
    }
}
export default Header;