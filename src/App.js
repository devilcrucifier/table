import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table'
import "react-table/react-table.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tableData: [],
    };
  }

  componentDidMount() {    
    var that = this;
    var url = 'https://jsonplaceholder.typicode.com/posts'
  
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      that.setState({ tableData: data });
    });
  }
  render() {
    const data = Object.values(this.state.tableData);
    const columns = [
      {
        Header: '#',
        accessor: 'id',
        width: 100,
        sortable: false,
      },
      {
        Header: 'Title',
        accessor: 'title',
        sortable: false,
      },
      {
        Header: 'User Id',
        accessor: 'userId',
        width: 150,
        sortable: false,
        },
      {
        Header: 'Size',
        id: 'body',
        width: 150,
        sortable: false,
        Cell: data => data.original.body.length
      },
    ];
    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          className="-striped -highlight"
        />
    </div>
    );
  }
}

export default App;
