import React, { Component } from 'react'

class ErrorBoundari extends Component {

    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error: ' + error)
        console.log('ErrorInfo: ' + errorInfo)
    }

    render() {
        if(this.state.hasError) {
            return <p><b>Error: </b>Something went wrong</p>
        }

        return this.props.children
    }
}

export default ErrorBoundari
