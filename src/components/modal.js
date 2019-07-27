import React, { Component } from 'react'

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maSP: this.props.deviceInfo ? this.props.deviceInfo.maSP : '',
            ten: this.props.deviceInfo ? this.props.deviceInfo.ten : '',
            dvt: this.props.deviceInfo ? this.props.deviceInfo.dvt : '',
            trongLuong: this.props.deviceInfo ? this.props.deviceInfo.trongLuong : '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSave(e) {
        e.preventDefault();
        const device = {
            maSP: this.state.maSP,
            ten: this.state.ten,
            dvt: this.state.dvt,
            trongLuong: this.state.trongLuong
        }
        this.props.saveDevice(device);
        //close modal va set value input ve trong
        this.props.closeModal();
        this.setState({
            maSP: '',
            ten: '',
            dvt: '',
            trongLuong: ''
        });
    }

    render() {
        return (
            <div>
                <div className="bg-modal" style={this.props.show ? { display: 'flex' } : { display: 'none' }}>
                    <div className="modal-contents">

                        <div className="close" onClick={this.props.closeModal}>X</div>

                        <form action="">
                            <div className="form-group row">
                                <label htmlFor="colFormLabel" className="col-sm-4 col-form-label">Mã</label>
                                <div className="col-sm-8">
                                    <input type="text" value={this.state.maSP} onChange={this.handleChange} name="maSP" className="form-control" id="ma-sp" placeholder="Nhập Mã" />
                                </div>
                                <label htmlFor="colFormLabel" className="col-sm-4 col-form-label">Tên</label>
                                <div className="col-sm-8">
                                    <input type="text" value={this.state.ten} onChange={this.handleChange} name="ten" className="form-control" id="ten-sp" placeholder="Nhập tên" />
                                </div>
                                <label htmlFor="colFormLabel" className="col-sm-4 col-form-label">Đvt</label>
                                <div className="col-sm-8">
                                    <input type="text" value={this.state.dvt} onChange={this.handleChange} name="dvt" className="form-control" id="dvt" placeholder="Nhập đvt" />
                                </div>
                                <label htmlFor="colFormLabel" className="col-sm-4 col-form-label">Trọng lượng</label>
                                <div className="col-sm-8">
                                    <input value={this.state.trongLuong} type="text" onChange={this.handleChange} name="trongLuong" className="form-control" id="trong-luong" placeholder="Nhập trọng lượng" />
                                </div>
                            </div>
                        </form>
                        <button id="save" onClick={this.handleSave} type="submit" className="btn btn-success">Save</button>
                        <button id='close' onClick={this.props.closeModal} type="submit" className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Modal;