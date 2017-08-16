import React from 'react';
import Select, { Option } from 'antd/lib/select';
import Button from 'antd/lib/button';

class App extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1>Hello antd</h1>
                <div>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>
                <div>
                    <Select defaultValue="lucy" style={{ width: 120 }} >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>Disabled</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Select defaultValue="lucy" style={{ width: 120 }} allowClear disabled>
                        <Option value="lucy">Lucy</Option>
                    </Select>
                </div>
            </div>
        )
    }
}

export default App;