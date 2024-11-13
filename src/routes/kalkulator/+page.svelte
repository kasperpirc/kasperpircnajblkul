<script lang="ts">
	type Operator = '+' | '-' | '*' | '/';
	let num1 = 0;
	let num2 = 0;
	let op: Operator = '+';
	let resultat = 0;
	$: {
		if (op === '+') {
			resultat = num1 + num2;
		} else if (op === '-') {
			resultat = num1 - num2;
		} else if (op === '*') {
			resultat = num1 * num2;
		} else if (op === '/') {
			resultat = num1 / num2;
		}
	}
	function randomNumber() {
		num1 = Math.floor(Math.random() * 10000);
		num2 = Math.floor(Math.random() * 10000);
	}
</script>

<h1 class="text-4xl">Kalkulator</h1>
<input bind:value={num1} type="number" placeholder="0" />
<select bind:value={op}>
	<option value="+">+</option>
	<option value="-">-</option>
	<option value="*">*</option>
	<option value="/">/</option>
</select>
<button on:click={randomNumber} class="bg-lime-600 p-1 rounde-md">Naključno</button>
<input bind:value={num2} type="number" placeholder="0" />

<p>{num1}{op}{num2} = {resultat}</p>
