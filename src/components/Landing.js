import {Link} from 'react-router-dom';
//styles
import '../styles/components/Landing.scss';

function Landing() {
  return (
    <section className='landing'>
        <h1 className='landing__title'>we are the Adalabers.</h1>
        <Link to='/adalabers' className='landing__link'>Get to know us</Link>
    </section>
    );
}

export default Landing;