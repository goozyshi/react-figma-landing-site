import './App.css'
import Navbar from '~/components/Navbar'
import Home from '~/components/Home'
import Services from '~/components/Services'
import About from '~/components/About'
import Products from '~/components/Products'

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Services/>
			<About/>
			<Products/>
		</>
	)
}

export default App
