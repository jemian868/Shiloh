import axios from "axios"

const store = ()=>{

	async function get() {
		// const data = [
		//     {image:'background.png', firstname:'Bryan', lastname:'Villarubia', gender:'Male', address:'Molave ZDS'},
		//     {image:'background.png', firstname:'Jemimah', lastname:'Villarubia', gender:'Female', address:'Molave ZDS'},
		//     {image:'background.png', firstname:'Jemian', lastname:'Villarubia', gender:'Female', address:'Molave ZDS'},
		//     {image:'background.png', firstname:'Jian', lastname:'Villarubia', gender:'Male', address:'Molave ZDS'}
		// ]

		const response = await axios.get('http://192.168.0.104:8001/profiles')

		console.log(response.data)
		return response.data
	}

	async function create(payload) {
		const response =  await axios.post('http://192.168.0.104:8001/profiles',payload)

		return response.data
	}

	function modify() {
		const data = [
			{image:'background.png', firstname:'Bryan', lastname:'Villarubia', gender:'Male', address:'Molave ZDS'},
			{image:'background.png', firstname:'Jemimah', lastname:'Villarubia', gender:'Male', address:'Molave ZDS'},
			{image:'background.png', firstname:'Jemian', lastname:'Villarubia', gender:'Male', address:'Molave ZDS'}
		]

		return data
	}

	function remove() {
		const data = [
			{image:'background.png', firstname:'Bryan', lastname:'Villarubia', gender:'Male', address:'Molave ZDS'},
			{image:'background.png', firstname:'Jemimah', lastname:'Villarubia', gender:'Male', address:'Molave ZDS'},
			{image:'background.png', firstname:'Jemian', lastname:'Villarubia', gender:'Male', address:'Molave ZDS'}
		]

		return data
	}

	function find() {
		const data = [
			{image:'background.png', firstname:'Bryan', lastname:'Villarubia', gender:'Male', address:'Molave ZDS'},
			{image:'background.png', firstname:'Jemimah', lastname:'Villarubia', gender:'Male', address:'Molave ZDS'},
			{image:'background.png', firstname:'Jemian', lastname:'Villarubia', gender:'Male', address:'Molave ZDS'}
		]

		return data
	}

	return {
			get, create, modify, remove, find
	}
}

export default store