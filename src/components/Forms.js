

import React, { useState } from "react";
import moment from "moment-timezone";
import DateTimePicker from 'react-datetime-picker';

// import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';

const MARKET_TYPE = {
  'Stock': 'Stock',
  'Forex': 'Forex',
  'Crypto': 'Crypto',
  'Options': 'Options',
  'Futures': 'Futures',
}
const PORTFOLIO_TYPE = {
  'Portfolio': 'Portfolio'
}

const TRADE_ACTION_TYPE = {
  'Buy': 'Buy',
  'Sell': 'Sell'
}



export const GeneralInfoForm = () => {
  const [birthday, setBirthday] = useState("");
  const [value, onChange] = useState(new Date());

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Trade information</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Select Market</Form.Label>
                <Form.Select id="market" defaultValue={MARKET_TYPE.Stock}>
                  <option value={MARKET_TYPE.Stock}>{MARKET_TYPE.Stock}</option>
                  <option value={MARKET_TYPE.Forex}>{MARKET_TYPE.Forex}</option>
                  <option value={MARKET_TYPE.Crypto}>{MARKET_TYPE.Crypto}</option>
                  <option value={MARKET_TYPE.Options}>{MARKET_TYPE.Options}</option>
                  <option value={MARKET_TYPE.Futures}>{MARKET_TYPE.Futures}</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2" id="symbol">
                <Form.Label>Symbol</Form.Label>
                <Form.Control required type="text" placeholder="Stock Symbol" />
              </Form.Group>

              <Form.Group className="mb-2" id="date">
                <Form.Label>Date</Form.Label>
                <div>
                  <DateTimePicker onChange={onChange} value={value} className="date-picker-container form-control" />
                </div>
              </Form.Group>



              <Form.Group className="mb-2" id="price">
                <Form.Label>Price</Form.Label>
                <Form.Control required type="number" placeholder="price" />
              </Form.Group>

              <Form.Group className="mb-2" id="fee">
                <Form.Label>Fee</Form.Label>
                <Form.Control required type="number" placeholder="fee" />
              </Form.Group>



            </Col>
            <Col md={6} className="mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Select Portfolio</Form.Label>
                <Form.Select id="portfolio" defaultValue={PORTFOLIO_TYPE.Portfolio}>
                  <option value={PORTFOLIO_TYPE.Portfolio}>{PORTFOLIO_TYPE.Portfolio}</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Action</Form.Label>
                <Form.Select id="portfolio" defaultValue={TRADE_ACTION_TYPE.Buy}>
                  <option value={TRADE_ACTION_TYPE.Buy}>{TRADE_ACTION_TYPE.Buy}</option>
                  <option value={TRADE_ACTION_TYPE.Sell}>{TRADE_ACTION_TYPE.Sell}</option>
                </Form.Select>
              </Form.Group>


              <Form.Group className="mb-2" id="share">
                <Form.Label>Share / Contracts</Form.Label>
                <Form.Control required type="number" placeholder="No." />
              </Form.Group>

              <Form.Group className="mb-2" id="commission">
                <Form.Label>Commission</Form.Label>
                <Form.Control required type="number" placeholder="commission" />
              </Form.Group>



            </Col>
          </Row>

          <div className="mt-3">
            <Button variant="primary" type="submit">Save</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
