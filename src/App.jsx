import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import StockPage from './pages/StockPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<LandingPage />} />
      <Route path='about' element={<AboutUsPage />} />
      <Route path='services' element={<ServicesPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='remodeling-projects' element={<PortfolioPage />} />
      <Route path='stocks' element={<StockPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App

