import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const productos = [
  {
    id: 1,
    categoria: 'laptops',
    nombre: 'Laptop Ultrabook',
    descripcion: 'Procesador Intel Core i7, 16GB RAM, SSD 512GB',
    precio: 1899.00,
    imagen: '/assets/img/productos/Ultrabook.jpeg'
  },
  {
    id: 2,
    categoria: 'laptops',
    nombre: 'Laptop Gaming Dell',
    descripcion: 'Intel Core i5-10Gen RAM 32GB SSD 1TB 4GB GTX1650 15.6"',
    precio: 5000.00,
    imagen: '/assets/img/productos/Dell.jpeg'
  },
  {
    id: 3,
    categoria: 'laptops',
    nombre: 'Laptop Gamer Lenovo',
    descripcion: 'Laptop Gamer Lenovo IdeaPad Gaming 3 15ARH7 15.6pulgadas 16:9 R7 7000 16GB RAM 512GB SSD',
    precio: 3800.00,
    imagen: '/assets/img/productos/lenovo.jpeg'
  },
  {
    id: 4,
    categoria: 'laptops',
    nombre: 'Laptop Lenovo Ideapad',
    descripcion: 'Laptop Lenovo IdeaPad Gaming 3 15ARH7 15.6pulgadas 16:9 R7 7000 16GB RAM 512GB SSD',
    precio: 3500.00,
    imagen: '/assets/img/productos/Lenovo ideapad.jpeg'
  },
  {
    id: 5,
    categoria: 'laptops',
    nombre: 'Laptop Acer',
    descripcion: 'Laptop Acer A3 15ARH7 15.6pulgadas 16:9 R7 7000 16GB RAM 512GB SSD',
    precio: 2000.00,
    imagen: '/assets/img/productos/LaptopAcer.jpeg'
  },
  {
    id: 6,
    categoria: 'laptops',
    nombre: 'Laptop Ultrabook Surface 5',
    descripcion: 'Laptop UltrabookM13 Surface 5 Gen12 15ARH7 15.6pulgadas 16:9 R7 7000 16GB RAM 512GB SSD',
    precio: 4300.00,
    imagen: '/assets/img/productos/UltrabookM13.jpeg'
  },
  {
    id: 7,
    categoria: 'accesorios',
    nombre: 'Control PS5 DualSense Edge',
    descripcion: 'Controlador inalámbrico',
    precio: 755.25,
    imagen: '/assets/img/productos/MANDO-DUALSENSE-EDGE-PARA-PS5-BLANCO.jpeg'
  },
  {
    id: 8,
    categoria: 'accesorios',
    nombre: 'AirPods Max',
    descripcion: 'Controlador inalámbrico',
    precio: 1016.90,
    imagen: '/assets/img/productos/airpodsmax.jpg'
  },
  {
    id: 9,
    categoria: 'accesorios',
    nombre: 'iPhone 14 Pro',
    descripcion: '256GB 8GB RAM',
    precio: 4531.51,
    imagen: '/assets/img/productos/Iphone14pro256gb.jpeg'
  },
  {
    id: 10,
    categoria: 'accesorios',
    nombre: 'iPhone 14 Pro Max',
    descripcion: '512GB 12GB RAM',
    precio: 5286.77,
    imagen: '/assets/img/productos/iphone14promax.jpeg'
  },
  {
    id: 11,
    categoria: 'accesorios',
    nombre: 'iPhone 14 Pro',
    descripcion: '512GB 12GB RAM',
    precio: 4909.14,
    imagen: '/assets/img/productos/iphone14pro.jpeg'
  },
  {
    id: 12,
    categoria: 'accesorios',
    nombre: 'MacBook Air 13',
    descripcion: 'Apple M1 8GB RAM 256GB SSD',
    precio: 6042.00,
    imagen: '/assets/img/productos/macbook-air-13-m1.jpeg'
  },
];

const ProductList = () => {
  return (
    <Container>
      <Row>
        {productos.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
