import React from 'react';
import { Card } from 'antd';
import './index.css';
const { Meta } = Card;
const ItemCard = ({ listComics, history }) => {

  return (
    <div className="comic-content">
      {listComics.length > 0 && listComics.map((item, index) => {
        return (
          <div className="item-comic-content" key={index}>
            <Card hoverable cover={<img alt="example" src={item.thumbnail && `${item.thumbnail.path}.${item.thumbnail.extension}`} />}>
              <Meta title={item.title} />
              <div className="button-details" onClick={() => { history.push('/comicDetails', { item }) }}>Details</div>
            </Card>
            <div>
            </div>
          </div>
        )
      })}
      {listComics.length === 0 && <div>No data</div>}
    </div>
  )

}

export default ItemCard;