import React from 'react';
import './App.scss';
import Card from "./components/Card";
import {useUsers} from "./components/hooks/useUsers";
import {Col} from "react-bootstrap";

function App() {
  const {administrators, standardUsers} = useUsers()

  return (
    <div className="App">
      <Col md={6} xs={12}>
        <Card title={'Administrators'} data={administrators} key={'administrators'}/>
      </Col>
      <Col md={6} xs={12}>
        <Card title={'Standard Users'} data={standardUsers} key={'standard'}/>
      </Col>
    </div>
  );
}

export default App;
