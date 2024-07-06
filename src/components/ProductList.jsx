import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Laptop',
    description: 'Laptop potente para trabajo y juegos',
    price: 999.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Smartphone',
    description: 'Smartphone de última generación',
    price: 799.99,
    image: 'https://via.placeholder.com/150'
  }
  // Añade más productos aquí
];

const ProductList = () => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;

