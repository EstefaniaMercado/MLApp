import React, { useEffect } from 'react'
import { Button, Col, Row } from 'reactstrap'
import { HeaderSearch } from './HeaderSearch'
import { useDispatch, useSelector } from 'react-redux'
import { itemStartLoading } from '../actions/item'
import { TagsItems } from './TagsItems'
export const DetailsItem = ({ match }) => {
  const itemId = match.params.id
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(itemStartLoading(itemId))
  }, [itemId, dispatch])

  const { item } = useSelector(state => state.item.item);
  return (
    <>
      <HeaderSearch></HeaderSearch>
      <Row>
        <Col md='1'></Col>
        <Col className="tags" md='10'>
          <TagsItems></TagsItems>
        </Col>
      </Row>
      <Row >
        <Col md='1'></Col>
        <Col id="details" md="10">
          {item ?
            <>
              <Row>
                <Col md='1'></Col>
                <Col md='7'>
                  <img alt="item" src={item.picture}></img>
                </Col>
                <Col md='1'></Col>
                <Col className="details" md='3'>
                  <p>{item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos</p>
                  <h2 className="title">{item.title}</h2>
                  <h2 className="amount">${item.price.amount}</h2>
                  <Button className="btn-buy">Comprar</Button>
                </Col>
              </Row>
              <Row>
                <Col className="description" md='9'>
                  <h3>Descripción del producto</h3>
                  <p>{item.description}</p>
                </Col>
              </Row>
            </> : <p className="not-found">No hay publicaciones que coincidan con tu búsqueda.</p>
          }
        </Col>
      </Row>
    </>
  )
}
