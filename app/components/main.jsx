import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
  constructor(props){
    super(props);
    this.state = {number: 0};
    this.update = this.random_number.bind(this);
  } 

  random_number(){
    this.setState({number:Math.floor(Math.random() * 10) + 1 })
  }

  // componentWillMount(){
  //   alert("generador de numeros");  
  // }

  // componentDidMount(){
  //   alert("este componente ya se monto")
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log('nextProps ',nextProps.name);
  //   console.log('props ',this.props.name); 
  // }


  render(){
    return  <div> 
              <h2> {this.props.name} </h2>
              <span>My Component {this.state.number}<br></br></span>
              <button onClick={this.update}> Generar </button>
            </div>
  }
}

HelloWorld.defaultProps = {
  name:'Generador Aleatorio'
};

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('container')
);
