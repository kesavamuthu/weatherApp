import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import Config from "../config";
import "./searchBar.css";

let cities = Config.cities;
function SearchBar(props) {
  const [inputState, setInputState] = useState("");
  const [suggestionList, setSuggestions] = useState([]);
  return (
    <Form>
      <Form.Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="autocomplete" style={{ width: "100%" }}>
            <Form.Control
              placeholder="City name"
              style={{ width: "70%", display: "inline" }}
              value={inputState}
              onChange={(event) => {
                setInputState(event.target.value);
                autoComplete(event);
              }}
            />
            <div
              id="myInputautocomplete-list"
              className="autocomplete-items"
              style={{ width: "68%", overflow: "auto" }}
              onClick={choiceSelector}
            >
              {suggestionListShower(suggestionList, inputState)}
            </div>
            <Button
              className="m-2"
              variant="primary"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                let tmp = inputState;
                props.onSubmit(tmp);
                setInputState("");
              }}
            >
              Submit
            </Button>
          </div>
        </Col>
        <Col></Col>
      </Form.Row>
    </Form>
  );

  function autoComplete(event) {
    let value = event.target.value;
    if (!value) {
      flusher();
      return;
    }
    setSuggestions(
      cities.filter((e) => {
        return e.toLowerCase().indexOf(value.toLowerCase()) > -1;
      })
    );
  }

  function flusher() {
    setSuggestions([]); //used to reset the show list after selected
  }

  function choiceSelector(event) {
    if (event.target.dataset.value) {
      setInputState(event.target.dataset.value);
      flusher();
    }
  }
}

function suggestionListShower(suggestionList, inputState) {
  console.log(suggestionList, inputState);
  return suggestionList.map((e, i) => {
    return (
      <div key={i} data-value={e}>
        <strong data-value={e}>{e.substr(0, inputState.length)}</strong>
        {e.substr(inputState.length)}
      </div>
    );
  });
}

export default SearchBar;
