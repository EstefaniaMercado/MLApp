import React, { useEffect, useState } from "react"
import { Col, Row, Button, Input } from 'reactstrap'
import logo from '../assets/img/Logo_ML.png'
import search from '../assets/img/ic_Search.png'
import { useHistory } from "react-router-dom"

export const HeaderSearch = () => {
  const [query, setQuery] = useState("")
  const history = useHistory()

  const onChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    const params = new URLSearchParams()
    if (query) {
      params.append("search", query)
    } else {
      params.delete("search")
    }
  }, [query, history])

  const onSearch = () => {
    const params = new URLSearchParams()
    if (query) {
      params.append("search", query)
    } else {
      params.delete("search")
    }
    history.push({ pathname: '/items', search: params.toString() })
  }

  return (
    <>
      <Row className="header">
        <Col md="1"></Col>
        <Col md="1" className="text-center">
          <img src={logo} alt="ML-logo"></img>
        </Col>
        <Col md="9" className="input-button">
          <Input placeholder="Nunca dejes de buscar" onChange={onChange} value={query}></Input>
          <Button onClick={() => onSearch()}>
            <img src={search} alt="search"></img>
          </Button>
        </Col>
      </Row>
    </>
  )
}