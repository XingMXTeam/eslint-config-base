import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
    static propTypes = {
        data: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.array
        ])
    }

    render() {
        const children = this.props.data;
        map((entity) => {
            const { key, data, ...other } = entity;
            const child = Array.isArray(data) ? <List
                {...other}
                data={data}
            /> : <Text
                {...other}
                data={data}
            />;
            return <li key={key}>{child}</li>;
        });

        return <ul>{children}</ul>;
    }
}

class Text extends React.Component {
    static propTypes = {
        data: React.PropTypes.string
    }

    render() {
        return <span>{this.props.data}</span>;
    }
}



export default function (node) {
    const data = [
        // Data structure should provide stable keys.
        { key: '0', data: 'Foo' },
        {
            key: '1',
            data: [
                { key: '1/1', data: 'a' },
                { key: '1/2', data: 'b' },
                { key: '1/3', data: 'c' }
            ]
        }
    ];

    ReactDOM.render(<List data={data} ref={'test'}/>, node);
}