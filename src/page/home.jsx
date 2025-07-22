import Header from '../layouts/Header';
import Button from '../components/Button.jsx'
const Home = () => (
    <>
    <Header />
    <section className='hero-section'>
        <h1>Welcom to Tech Hub</h1>
        <p>Your Gateway To Technology Learning</p>
        <Button>Join Tech Hub</Button>
    </section>
    </>
);

export default Home;