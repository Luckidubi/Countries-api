import { Component } from "react";
import NotFound from '/pages/NotFound'


export default class ErrorBoundary extends Component {
  constructor(props){
    super(props);
    this.state =  { error : false}
  }
  
  
  static getDerivedStateFromError(error) {
    return { error: true };
  }
  
  render() {
    const { error } = this.state;
    
    const { children } = this.props;
    
    if (error) return <NotFound error={error} />;
    
    return children;
  }
}

  

  