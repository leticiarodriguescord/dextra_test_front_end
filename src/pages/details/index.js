import React, { useState, useEffect } from 'react';
import { Layout, Button} from 'antd';
import './index.css';

const { Header, Footer, Content } = Layout;

const ComicDetails = (props) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const item = props.location.state.item;
    setItem(item)
  }, [item]);
  return (
    <div className="details-container">
      <Layout className="layout">
        <Header className="header">Details</Header>
        <Content>
          <div className="details-container-content">
            <div><span className="title">Title: </span><span>{item.title}</span></div>
            <div><span className="title" >Description: </span><span>{item.description ? item.description : 'No data'}</span></div>
            <div><span className="title">Autores: </span><span>{ item.creators !== undefined && item.creators.items.length > 0 ? item.creators.items.map(item=> ` ${item.name} ` ) : 'No data'}</span></div>
            <div className="thumbnail"><span className="title">Thumbnail:</span><img src={item.thumbnail && `${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Heroes" /></div>
          </div>
        </Content>
        <Footer>
          <div><Button className="button-details" shape="round" onClick={() => props.history.goBack()} >Cancel</Button></div>
        </Footer>
      </Layout>
    </div>
  );
}

export default ComicDetails;