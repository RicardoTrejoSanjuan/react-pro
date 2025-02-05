import {
  BrowserRouter,
  Navigate,
  NavLink,
  NavLinkRenderProps,
  Route,
  Routes,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';

export const Navigation = () => {
  const activeStyle = ({ isActive }: NavLinkRenderProps) => {
    return isActive ? 'text-cyan-400 transition-all' : '';
  };

  return (
    <BrowserRouter>
      <nav className='flex justify-center gap-5 p-5 bg-gray-500 text-white'>
        <ul className='flex gap-5'>
          <li>
            <NavLink to='/home' className={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={activeStyle}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='home' element={<HomePage />} />
        <Route path='about' element={<h1>About Page</h1>} />
        <Route path='contact' element={<h1>Contact Page</h1>} />
        <Route path='/*' element={<Navigate to='/home' replace />} />
      </Routes>
    </BrowserRouter>
  );
};
