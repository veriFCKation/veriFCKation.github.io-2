<script lang="ts">
	import AboutMe from "./about.svelte";
	//import Projects from "./projects.svelte";
	//export let name: string;

	let src1 = 'https://i.pinimg.com/originals/bd/f0/25/bdf025165c835a6c22eced2a83fd49c3.jpg';

	let newPhotoType = 'display:none';

	async function findDog(){
		const response = await fetch("https://dog.ceo/api/breeds/image/random");
		const data = await response.json();
		if (response.ok){
			newPhotoType = 'display:block';
			//document.getElementById('new-photo').style.display = 'block';
		}
		//console.log([data.message]);
		src1 = data.message;
	}

</script>

<main>
	<h1> Hello, my name is Ksenia</h1>
	
	<div id = "my-photo">
		<img src = {'https://i.pinimg.com/originals/bd/f0/25/bdf025165c835a6c22eced2a83fd49c3.jpg'}>
		<p> I haven't any good photo, so, look at this cute dog </p>
	</div>
	
	<button on:click = {findDog}> 
		I think, this dog looks lonely 
	</button>
	
	<div id = "new-photo" style = {newPhotoType}>
		<p> Ok, let's find a friend! </p>
		<img style = "width:230px" src = {src1} alt = "random-dog">
	</div>

</main>