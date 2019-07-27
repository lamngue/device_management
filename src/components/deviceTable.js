import React, { Component } from 'react'
import Device from './device';
class DeviceTable extends Component {
    constructor(props) {
        super();
    }
    render() {
        const devices = this.props.devices
        .map((device, index) => {
            return <Device getItemId={(id) => this.props.getItemId(id)}
                saveDevice={this.props.saveDevice} deleteDevice={this.props.deleteDevice}
                tt={index}
                key={index}
                showDevice={device}
            />
        });

        return (
            <div>
                <table id="devices" className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">Thứ tự</th>
                            <th scope="col" className="text-center">Mã</th>
                            <th scope="col" className="text-center">Tên</th>
                            <th scope="col" className="text-center">ĐVT</th>
                            <th scope="col" className="text-center">Trọng lượng</th>
                            <th scope="col" className="text-center">Xóa/Sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*render devices*/}
                        {devices}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default DeviceTable;