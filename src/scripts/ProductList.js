import React from 'react';

import ReactPaginate from 'react-paginate';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [],
      pageSize: parseInt(this.props.pageSize),
      page: 1,
      totalPages: 0,
      data: [],
      offset: 0
    }
  }

  componentWillMount() {
    
  }

  componentWillReceiveProps(newProps) {
    if( newProps.pageSize !== this.props.pageSize ) {
      this._getProductsFunction();
    }
  }

  componentDidMount() {
    this._getProductsFunction();
  }

  _handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.pageSize);

    this.setState({offset: offset}, () => {
      this._getProductsFunction();
    });
  };

  _getProductsFunction = () => {
    fetch('https://raw.githubusercontent.com/BookingBoss/reactjs-test/master/productsData.json')
    .then(results => {
        return results.json();
      }).then(data => {
        this.setState({totalPages: Object.keys(data).length});

        this.props.productSize(Object.keys(data).length);

        this.setState({data: data, pageCount: Math.ceil(this.state.totalPages / this.props.pageSize)});

        let startCount = this.state.offset;
        let endCount = parseInt(this.props.pageSize) + this.state.offset;
        
        let pictures = [];
        
        for(let i = startCount; i < endCount; i++) {
          
          pictures.push(
            <div className="o-col--3" key={data[i].id}>
              <div className="c-products--card">
                <div className="c-products--thumb">
                  <img className="img-responsive" src={data[i].product_image} />
                </div>
                <hr />
                <div className="c-products--details">
                  <div className="c-products--details__title">{data[i].product_name}</div>
                  <div className="c-products--details__desc">{data[i].description}</div>
                  <div className="c-products--details__price">{data[i].price}</div>
                </div>
              </div>
            </div>
          );

          this.setState({pictures: pictures});
        }

    });
  }

  render() {

    return (
      
      <div className="c-products">
        <div className="o-container">
          <div className="o-row o-flex">
              {this.state.pictures}
          </div>
          <div className="o-row">
            <div className="o-col--12">
              <div className="u-clearfix">
                <ReactPaginate previousLabel={"< Previous page"}
                               nextLabel={"Next page >"}
                               breakLabel={"..."}
                               breakClassName={"break-me"}
                               pageCount={this.state.pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this._handlePageClick}
                               containerClassName={"pagination"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
