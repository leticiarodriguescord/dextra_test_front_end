import React from 'react';
import { Table, Button } from 'antd';
import './index.css';

const ItemTable = ({ listComics, history }) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (item) => {
        return (
          <div >
            <Button className="button-details" shape="round" onClick={() => { history.push('/comicDetails', { item }) }} >Details</Button>
          </div>
        )
      }
    },
  ];
  const dataSource = listComics.map(item => {
      return {
      key: item.id,
      title: item.title,
      actions: item
    }
  });

  return (
    <div>
      <div className="header">
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )

}

export default ItemTable;
