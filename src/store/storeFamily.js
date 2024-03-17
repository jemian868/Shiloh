const store = ()=>{

	function get() {
		const data = [
		    {img_name:'background.png', familyname:'Tatoy'},
		    {img_name:'background.png', familyname:'Villarubia'},
		    {img_name:'background.png', familyname:'Lamis'},
		    {img_name:'background.png', familyname:'Reyes'}
		]

        return data
	}

	function create() {
        let data = 'create'

		return data
	}

	function modify() {
		const data = 'modify'

		return data
	}

	function remove() {
		const data = 'remove'

		return data
	}

	function find() {
		const data = 'find'

		return data
	}

	return {
			get, create, modify, remove, find
	}
}

export default store