import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <p style={{fontSize:'2em'}}>TC</p>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Trey Cottingham</h1>
                <p>Full-Stack Web Developer.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Resume</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
