import React, { Component } from 'react'
import Modal from './modal';
class Device extends Component {
    constructor(props) {
        super();
        this.state = {
            showModal: false
        }
        this.onDeleteDevice = this.onDeleteDevice.bind(this);
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    showModal(e) {
        this.props.getItemId(e.target.value)
        this.setState({
            showModal: true
        });
    }
    closeModal() {
        this.setState({
            showModal: false
        });
    }
    onDeleteDevice(e) {
        this.props.deleteDevice(e.target.value);
    }
    render() {
        return (
            <>
                <tr className='data' id={this.props.tt}>
                    <th className='text-center' scope="row">{this.props.tt + 1}</th>
                    <td className='text-center'>{this.props.showDevice.maSP}</td>
                    <td className='text-center'>{this.props.showDevice.ten}</td>
                    <td className='text-center'>{this.props.showDevice.dvt}</td>
                    <td className='text-center'>{this.props.showDevice.trongLuong}</td>
                    <td className='text-center'>
                        <button onClick={this.onDeleteDevice} value={this.props.tt} type="button" className="btn btn-danger delete">Xóa</button>
                        <button onClick={this.showModal} id="edit-device" type="button" value={this.props.tt} className="btn btn-warning edit">Sửa</button>
                    </td>
                </tr>
                <Modal
                    saveDevice={this.props.saveDevice}
                    show={this.state.showModal}
                    closeModal={this.closeModal}
                    deviceInfo={this.props.showDevice} />
            </>
        )
    }
}
export default Device;
