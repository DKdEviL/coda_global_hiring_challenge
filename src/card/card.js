import React,{Component} from 'react';
import './card.css';
import Modal from '../modal/modal'



class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalTrigger: false
        }
    }

    modalHandler = () => {
        this.setState({
            modalTrigger: !this.state.modalTrigger
        })
    }
    

    render() {
        return (
            <section className="section-card" onClick={this.modalHandler}>
                <header>{this.props.category}</header>
                <div>
                    <img className="product-image" src={this.props.imageURL} />

                </div>
                <div>
                    <h4 className="Name">{this.props.name}</h4>
                    <label>{this.props.label}</label>
                </div>
                <div>
                    <strong>${this.props.price}</strong>
                </div>
                <Modal show={this.state.modalTrigger} modalClosed={this.modalHandler}>
                    <div>
                        <img className="product-image" src={this.props.imageURL} />
                        <h5 className="Name">{this.props.name}</h5>
                        <h6 className="Name">Item No. : {this.props.id}</h6>
                        <p className="description">{this.props.description}</p>
                    </div>
                </Modal>
            </section>
        )
    }
};

export default Card;