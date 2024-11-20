<script lang="ts">
	type Task = {
		text: string;
		status: boolean;
	};

	let newTask: string = '';

	let tasks: Task[] = [
		{
			text: 'Skuham kosilo',
			status: true
		},
		{
			text: 'igram igrice',
			status: true
		}
	];
	function add() {
		tasks = [
			...tasks,
			{
				text: newTask,
				status: false
			}
		];
		newTask = '';
	}
</script>

<div class="flex justify-center">
	<div class="bg-yellow-500 w-6/12 rounded-2xl text-4xl">
		<h3 class="text-2xl text-center text-white">ZADOLŽITVE</h3>
		{#each tasks as task}
			<p>
				<button on:click={() => (task.status = !task.status)}>{task.status ? '❌' : '✔️'}</button
				>{task.text}
			</p>
		{/each}
		<div>
			<input bind:value={newTask} type="text" />
			<button on:click={add} class="bg-rose-700 rounded-xl px 2xl">Dodaj zadolžitev</button>
		</div>
	</div>
</div>
