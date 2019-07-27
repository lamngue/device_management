import React, { Component } from 'react'
import Modal from './modal';
class SearchAndAddDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.searchDevice = this.searchDevice.bind(this);
    }

    openModal() {
        this.setState({ show: true });
    }
    closeModal() {
        this.setState({ show: false });
    }
    searchDevice(e) {
        this.props.searchDevice(e.target.value);
    }
    render() {
        return (
            <div>
                <div className="row" style={{ margin: 'auto' }}>
                    <div className="col-6">
                        <div className="form-group has-search">
                            <input onChange={this.searchDevice} id="searchBox" type="text" className="form-control" placeholder="Search by code" />
                        </div>
                    </div>
                    <div className="col-4">
                        <button id="button-add" onClick={this.openModal} type="button" className="btn btn-success">Thêm mới</button>
                    </div>
                </div>
                <Modal saveDevice={this.props.saveDevice} show={this.state.show} closeModal={this.closeModal} />
            </div>
        )
    }
}
export default SearchAndAddDevice;