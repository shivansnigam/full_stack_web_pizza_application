import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../actions/pizzaAction";

const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();

  return (
    <div className="filter-container p-4 mt-4">
      <Form>
        <Row className="align-items-center">
          <Col>
            <Form.Control
              value={searchkey}
              onChange={(e) => setsearchkey(e.target.value)}
              placeholder="Search pizza"
              className="filter-input"
            />
          </Col>
          <Col>
            <select
              className="form-select filter-select"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <option>All</option>
              <option>Veg</option>
              <option>Non-Veg</option>
            </select>
          </Col>
          <Col>
            <Button
              className="filter-button"
              onClick={() => {
                dispatch(filterPizza(searchkey, category));
              }}
            >
              🔍 Search
            </Button>
          </Col>
        </Row>
      </Form>
      <style>
        {`
          .filter-container {
            background: linear-gradient(135deg, #f6d365, #fda085);
            border-radius: 15px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
          }

          .filter-container:hover {
            transform: translateY(-5px);
          }

          .filter-input {
            border: 2px solid #fff;
            border-radius: 10px;
            padding: 10px;
            transition: all 0.3s ease;
          }

          .filter-input:focus {
            border-color: #ff6b6b;
            box-shadow: 0 0 10px rgba(255, 107, 107, 0.6);
          }

          .filter-select {
            border: 2px solid #fff;
            border-radius: 10px;
            padding: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .filter-select:hover {
            border-color: #ffa502;
          }

          .filter-button {
            background: #ff6b6b;
            border: none;
            border-radius: 10px;
            padding: 10px 20px;
            color: #fff;
            transition: background 0.3s ease;
          }

          .filter-button:hover {
            background: #d63447;
          }

          @media (max-width: 576px) {
            .filter-container {
              padding: 2rem 1rem;
            }

            .filter-button {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Filters;