import React, { Component } from 'react';

class Container extends Component {
    constructor(props) {
        super (props);
        this.state = {
            trangthai : 0
        }
    }


    renderButton = () => {
        return (
            <div className="row">
                <div className="btn btn-group">
                    <div className="btn btn-block btn-info" onClick={() => this.editClick()}>Edit</div>
                    <div className="btn btn-block btn-warning" >Remove</div>

                </div>

           </div>
        )

    }

    renderForm = () => {
        return (
            <div className="row">
                <div className="form-group">
                    <input ref={(dulieunhap) => {this.trunggian = dulieunhap}} defaultValue={this.props.title} type="text" name="ten" className="form-control"></input>
                </div>
                <div className="form-group">
                <div className="btn btn-block btn-danger"onClick={() => this.saveClick()}>Save</div>
                </div>
           
             </div>
        )
    }

    displayCheck = () => {
        if (this.state.trangthai === 0) {
            return this.renderButton();
        } 
        return this.renderForm ();
        
    }

    editClick = () => {
        this.setState({
            trangthai : 1
        });
    }

    saveClick = () => {
        this.setState({
            trangthai : 0
        });
        console.log(this.trunggian.value)
    }

    render() {
        return (
            
                
                <section>
                <div className="container">
                    <div className="row align-items-center">
                    <div className={"col-lg-6"+ " " + this.props.vitri1}>
                        <div className="p-5">
                        <img className="img-fluid rounded-circle" src={this.props.anh}  />
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="p-5">
                        <h2 className="display-4">{this.props.title}</h2>
                        <p>{this.props.content}</p>
                        {this.displayCheck()}
                        
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                
          );
        }
    }

export default Container;