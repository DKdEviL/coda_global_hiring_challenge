import React, {Component} from 'react';
import './App.css';
import Card from './card/card';
import Modal from './modal/modal';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      product_list : [],
      temp_list: [],
      searchValue: '',
    };
    this.temp = []
    this.result = []
  }

  componentDidMount(){
    fetch("http://starlord.hackerearth.com/recipe")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            product_list: this.state.product_list.concat(result),
            temp_list: this.state.temp_list.concat(result)
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
  }
  submitHandler = (event) => {
    
    this.setState({searchValue: event.target.value})
    this.temp = this.state.product_list;
    
    this.result = this.temp.filter(product => product.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    console.log(this.result);
    this.setState({temp_list: this.result})
    event.preventDefault();
  }
  changeHandler = (event) => {
    this.setState({searchValue: event.target.value})
    
    event.preventDefault();
  }

  render() {
  return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.submitHandler}>
            <label>Search Items:  
              <input className="input" placeholder="Search by Item Name..." type="text" onChange={this.changeHandler}  value={this.state.searchValue} />
            </label>
            <input type="submit" value="submit" />
          </form>
          <div className="product-container">
          <div >
            {this.state.temp_list.map(item =>(
              <Card
                name={item.name} 
                label={item.label}
                id={item.id}
                category={item.category}
                description={item.description}
                price={item.price}
                imageURL={item.image}/>
            ))}
          </div>
          </div>
            {/* {this.state.product_list.map(item => (
              <Card>
                <h1>{item.name}: <h6>{item.id}</h6></h1>
                <img src={item.image} />
              </Card> 
            ))} */}
        </header>
        
      </div>
    );
  }
}

export default App;
