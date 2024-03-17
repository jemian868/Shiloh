import axios from "axios"

const store = ()=>{

	async function get() {
		const response = await axios.get('http://192.168.0.104:8001/test')

		return response.data
	}

	async function create(payload) {
		const response =  await axios.post('http://192.168.0.104:8001/test',payload)

		return response.data
	}

	async function modify(payload) {
		const response =  await axios.patch('http://192.168.0.104:8001/test',payload)

		return response.data
	}

	async function remove(payload) {
		const response =  await axios.post('http://192.168.0.104:8001/test/delete',payload)

		return response.data
	}

	async function find() {
		const data = 'find'

		return data
	}

	return {
			get, create, modify, remove, find
	}
}

export default store