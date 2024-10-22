import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Card.Img variant="top" src={product.imagen} />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>{product.descripcion}</Card.Text>
        <Card.Text>${product.precio.toFixed(2)}</Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;


