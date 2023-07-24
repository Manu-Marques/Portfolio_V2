import "./styles.css";
import logo from '../../../src/assets/logo.png';

export default function Loader() {
  return (
    <div className="loader" id="loader">
      <img className='loader-logo' src={logo} alt="logo" />
      <p className="loader-text">Loading...</p>
    </div>
  )
}