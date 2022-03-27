import { Meta, Story } from '@storybook/react';
import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

export default {
  title: 'ScrollToTop',
  component: ScrollToTop,
} as Meta;

function Navigation() {
  const componentDidMount = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (componentDidMount.current) {
      return;
    }
    componentDidMount.current = true;
    navigate('/routeTwo');
  }, [navigate]);

  return (
    <nav style={{ position: 'fixed' }}>
      <Link to='/routeOne'>Route One</Link> <Link to='/routeTwo'>Route Two</Link>
    </nav>
  );
}

function RouteOne() {
  return <div style={{ height: '200vh', paddingTop: 16 }}>Route 1</div>;
}

function RouteTwo() {
  return <div style={{ height: '200vh', paddingTop: 16 }}>Route 2</div>;
}

const Template: Story = function Template() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path='/routeOne' element={<RouteOne />} />
        <Route path='/routeTwo' element={<RouteTwo />} />
      </Routes>
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
