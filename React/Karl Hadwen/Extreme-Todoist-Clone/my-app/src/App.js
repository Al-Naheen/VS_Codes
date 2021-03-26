import React from 'react';
import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';

export const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <Content></Content>
    </div>
  );
}