import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./Accordion";

function App() {
  return (
    <div>
      <Accordion titleValue={'Menu'} collapsed={true} />
      <Accordion titleValue={'users'} collapsed={false} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}

export default App;
