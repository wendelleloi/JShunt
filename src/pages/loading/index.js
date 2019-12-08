import React, { Component } from 'react';

export default class LoaderComponent extends Component {

  state = {
    loading: true
  }

  componentDidMount() { 
    if(this.props.loading === true) return

    if(this.props.loading === false) {
      this.setState({loading:false})
    }

  }
  render() {
    return(
      <p>carregando...</p>
    )
  }
}
