<script lang="ts">
	let besedilo = '';
	let dolzina = 0;
	let MaxDolzina = 300;
	function urediBesedilo(f: string) {
		switch (f) {
			case 'velike':
				besedilo = besedilo.toUpperCase();
				break;
			case 'male':
				besedilo = besedilo.toLowerCase();
				break;
		}
	}
	function naključnaBarva() {
		let barva = ['blue', 'green', 'red', 'yellow', 'orange', 'purpule', 'amber', 'rose'];
		let moc = [500, 600, 700, 800, 900];
		return (
			'text-' +
			barva[Math.floor(Math.random() * barva.length)] +
			'-' +
			moc[Math.floor(Math.random() * moc.length)]
		);
	}

	$: {
		dolzina = besedilo.length;
	}
</script>

<div class="flex flex-col items-center justify-center min-h-screen gap-4">
	<h3 class="text-red-800 text-4xl">Besedilnikus</h3>
	<textarea
		maxlength={MaxDolzina}
		bind:value={besedilo}
		class="w-1/2 border-4 border-black rounded-lg"
	></textarea>
	<div class="grid grid-cols-3 gap-4">
		<button
			on:click={() => urediBesedilo('velike')}
			class=" bg-yellow-500 text-white rounded-full text-center p-4">Velike ČRKE</button
		>
		<button
			on:click={() => urediBesedilo('male')}
			class=" bg-yellow-500 text-white rounded-full text-center p-4">Male ČRKE</button
		>
		<p>{dolzina}/{MaxDolzina}</p>
	</div>
	<div class="flex flex-wrap w-1/2 gap-1">
		{#each besedilo.split(' ') as beseda}
			<span class={naključnaBarva()}>{beseda}</span>
		{/each}
	</div>
</div>
