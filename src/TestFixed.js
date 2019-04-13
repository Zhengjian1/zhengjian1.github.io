import React, { Component } from 'react';
import './TestFixed.css';
import { getData } from './service/api';

let dom = null;
let flag = true;

class TestFixed extends Component {

  content = React.createRef()

  state = {
    data: [],
    page: 1,
    total_page: 1,
  }

  getContenData = (params) => {
    let me = this;

    getData(params).then(function(response) {
      return response.json()
    }).then(function(json) {
      const { data } = me.state;
      const { list, total_page} = json.data.feeds
      const newData = list;

      me.setState({ data: data.concat(newData),page: params.page, total_page }, () => flag = true);
    });
  }

  componentDidMount(){
    this.getContenData({page: 1});

    // dom = ReactDOM.findDOMNode(this);
     dom = this.content.current;
    // console.log(dom)
    window.addEventListener('scroll', this.handleScroll)
    // dom.style.background='red'
  }

  componentWillUnmount(){
    
  }

  handleScroll = (e) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const documentHeight = dom.offsetTop + dom.clientHeight;
    // console.log(
    //   'scrolltop:'+ scrollTop,
    //   'clientHeight:'+ clientHeight,
    //   'documentHeight:' + documentHeight
    // )
    let { page } = this.state;
    const { total_page } = this.state;

    if (scrollTop + clientHeight > documentHeight - 50 && page <= total_page && flag){
      flag = false;
      page += 1;
      this.getContenData({page});
    }

  }

  render() {
    const { data, page, total_page } = this.state;

    return (
      <div className="App">
      <div>title</div>
        <div className='content' ref={this.content} >
          {
            data.length > 0 && data.map((item, index) => (
              <div className='item' key={index}>
                  <img src={item.data.doc_thumbnail} />
                  <span className='title'>{item.nickname}</span> 
              </div>  
            ))
          } 
          {data.length > 0 && !flag && page < total_page ?  <div className='loading'>加载中...</div> : ''}
          {data.length > 0 && page >= total_page ?  <div className='floor'>到底了</div> : ''}

        </div>
        <div className='footer'>关注</div>
      </div>
    );
  }
}

export default TestFixed;
