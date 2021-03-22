import React, { useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import { HeaderSearch } from './HeaderSearch'
import { useDispatch, useSelector } from 'react-redux'
import { searchStartLoading } from '../actions/item'
import shipping from '../assets/img/ic_shipping.png'
import { useHistory } from "react-router-dom"
import { TagsItems } from './TagsItems'

export const ListItems = ({ location }) => {
  const searchPath = location.search
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(searchStartLoading(searchPath))
  }, [searchPath, dispatch])

  const { items } = useSelector(state => state.item.search);

  const goDescription = (id) => {
    history.push(`/items/${id}`)
  }

  return (
    <>
      <HeaderSearch></HeaderSearch>
      <Row>
        <Col md='1'></Col>
        <Col className="tags" md="10">
          <TagsItems></TagsItems>
        </Col>
      </Row>
      <Row >
        <Col md='1'></Col>
        <Col id="list" md="10" className="p-0">
          {items ? items.map((item) => (
            <Row key={`item_${item.id}`} onClick={() => goDescription(item.id)}>
              <Col md='2' className="p-0 text-center">
                <img className="picture" alt="item" src={item.picture}></img>
              </Col>
              <Col md='4' className="details">
                <p className="amount">${item.price.amount}<span>{item.free_shipping && <img className="shipping" alt="shipping" src={shipping}></img>}</span></p>
                <p className="title">{item.title}</p>
              </Col>
              <Col md='4'></Col>
              <Col md='2'>
                <p className="address">{item.address}</p>
              </Col>
            </Row>
          ))
            : <p className="not-found">No hay publicaciones que coincidan con tu búsqueda.</p>
          }
        </Col>
      </Row>
    </>
  )
}
