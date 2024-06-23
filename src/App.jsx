import './App.css'
import Navbar from '~/components/Navbar'
import Home from '~/components/Home'
import Services from '~/components/Services'
import About from '~/components/About'
import Products from '~/components/Products'
import Blog from '~/components/Blog'
import Newsletter from '~/components/Newsletter'
import Myfooter from '~/components/Myfooter'
function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Services/>
			<About/>
			<Products/>
			<Blog/>
			<Newsletter/>
			<Myfooter/>
		</>
	)
}

export default App
