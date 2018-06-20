import React from 'react';

import ProductList from './ProductList';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageSize: '8',
      productSize: '24'
    }
  }

  componentWillMount() {
    
  }


  componentDidMount(){
  }

  _setPageSize = (event) => {
    this.setState({pageSize: event.target.value});
  }

  productSize = (val) => {
      // do not forget to bind getData in constructor
      this.setState({productSize: val});
  }

  render() {

    return (
      <div className="c-header">
        <div className="o-container">
          <div className="o-row">
            <div className="o-col--12">
              <h5>All products</h5>
            </div>
          </div>

          <div className="o-row">
            <div className="o-col--6">
              {this.state.productSize} products
            </div>
            <div className="o-col--6">
              <div className="u-text--right">
                <select onChange={this._setPageSize.bind(this)}>
                  <option defaultValue value="8">8 per page</option>
                  <option value="16">16 per page</option>
                  <option value="24">24 per page</option>
                </select>
              </div>
            </div>
          </div>
          <div className="o-row">
            <div className="o-col--12">
              <ProductList pageSize={this.state.pageSize} productSize={this.productSize} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
