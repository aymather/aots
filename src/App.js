import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'

const App = () => {

	const [page, setPage] = useState('home')

	return (
		<div className='app'>
			<Navbar />
		</div>
	)
}

export default App
