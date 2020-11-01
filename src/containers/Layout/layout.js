import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
