<script lang="ts">
	let stevilo = 0;
	let sodo: boolean;
	let seznamDeliteljev: number[] = [];
	let vsota = 0;

	function jeSodo(num: number) {
		if (num % 2 == 0) return true;
		return false;
	}

	function izpisDeliteljev(num: number) {
		let delitelji: number[] = [];
		for (let i = 1; i < num; i++)
			if (num % i == 0) {
				if (num % i == 0) delitelji.push(i);
			}
		return delitelji;
	}
	function vsotaDeliteljev(nums: number[]) {
		let sestevek = 0;
		for (const i of nums) {
			sestevek += i;
		}
		return sestevek;
	}

	$: {
		sodo = jeSodo(stevilo);
		seznamDeliteljev = izpisDeliteljev(stevilo);
		vsota = vsotaDeliteljev(seznamDeliteljev);
	}
</script>

<div class="flex flex-col gap-2 justify-center min-h-screen">
	<div>
		<input
			bind:value={stevilo}
			class="border-2 border-lime-500 rounded-full text-center text-4xl p-4"
			type="number"
		/>
	</div>
	<div class="grid grid-cols-4 gap-4">
		<div class="bg-red-800 text-white border rounded">
			Število je:
			{sodo ? 'sodo' : 'liho'}
		</div>
		<div></div>
		<div class="bg-red-800 text-white border rounded">
			Seznam deliteljev:
			<ul>
				{#each seznamDeliteljev as st}
					<li>{st}</li>
				{/each}
				<li>{stevilo}</li>
			</ul>
		</div>
		<div class="bg-red-800 text-white border rounded">
			Vsota je:
			{vsota}
		</div>
	</div>
</div>
