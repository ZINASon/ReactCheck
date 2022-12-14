import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ElForm = () => {
  return (
    <div className='form1' style={{width:"700px" }} >
      <h1 style={{alignContent:"center"}}> Formulaire: </h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter userName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="Enter LastName" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check Me " />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>




    </div>
  )
}

export default ElForm
