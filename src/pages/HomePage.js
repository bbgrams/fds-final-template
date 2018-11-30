import React, { Component } from 'react';
import ProductList from '../containers/ProductList';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    const { location } = this.props;
    // I23
    console.log(location.search);
    const p = new URLSearchParams(location.search);
    console.log(p.get('category'));
    const category = p.get('category');
    return (
      <Layout>
        <h1>Home</h1>
        {/* I21 */}
        <Link to="/">All</Link>
        <Link to="/?category=coffee">COFFEE</Link>
        <Link to="/?category=drink">DRINK</Link>
        <Link to="/?category=icecream">ICE CREAM</Link>
        <Link to="/?category=ccino">CCINO</Link>
        {/* I24 */}
        {/* 카테고리 */}
        <ProductList key={category} category={category} />
      </Layout>
    );
  }
}
