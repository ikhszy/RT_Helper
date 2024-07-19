import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';
import { useEffect, useState } from 'react';



const ProductScreen = () => {
    const [product, setProduct] = useState({});
    
    const { id: productId } = useParams();
    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${productId}`);
            setProduct(data);
        }
        fetchProduct();
    }, [productId]);

  return (

    <><Link className='btn btn-dark my-2' to="/">
          Back to List
      </Link><Row>
              <Col md={5}>
                  <Image src={product.image} alt={product.name} fluid />
              </Col>
              <Col md={4}>
                  <ListGroup variant='flush'>
                      <ListGroupItem>
                          <h3>{product.name}</h3>
                      </ListGroupItem>
                      <ListGroupItem>
                          <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                      </ListGroupItem>
                      <ListGroupItem>
                          Price: ${product.price}
                      </ListGroupItem>
                    <ListGroupItem>
                          Description: {product.description}
                      </ListGroupItem>
                  </ListGroup>
              </Col>
              <Col md={3}>
                <Card variant="flush">
                <ListGroup>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                price:
                            </Col>
                            <Col>
                                <strong>
                                    ${product.price}
                                </strong>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                status:
                            </Col>
                            <Col>
                                <strong>
                                    {product.countInStock > 0 ? 'In Stock'  : 'Out of Stock'}
                                </strong>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button 
                            className='btn-block'
                            type='button'
                            disabled={product.countInStock===0}
                        >
                        Add to Cart    
                        </Button>
                    </ListGroupItem>
                </ListGroup>
                </Card>
              </Col>
          </Row>
          </>
  )
};

export default ProductScreen