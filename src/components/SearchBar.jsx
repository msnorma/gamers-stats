import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';

function SearchBar() {
  return (
    <InputGroup className="m-auto" size="lg" style={{width: '50%'}}>
      <Form.Control
        aria-label="Large"
        aria-describedby="inputGroup-sizing-default"
      />
      <Button>search icon</Button>
    </InputGroup>
  );
}

export default SearchBar;
