<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	import Card from '$lib/card.svelte';

	function bold(link: string) {
		if (link === $page.url.pathname) {
			return 'font-bold';
		} else {
			return '';
		}
	}
</script>

<nav class="w-full p-6 bg-red-700">
	<a href="/" class={$page.url.pathname === '/' ? 'font-bold' : ''}>home</a>
	<Card slika="/761932_poster.jpg" ime="Mona Kisa"></Card>
	<Card slika="/kofetarica2_bigimage.avif" ime="kavicarka"></Card>
	<a href="/kalkulator">Kalkulator,</a>
	<a href="/trgovina">Trgovina,</a>
	<a href="/todooooo">Todooooo,</a>
	<a href="/stevial">Števila,</a>
	<a href="/postes">Posti,</a>
	<a href="/besedilnikus">Besedilnikus,</a>
</nav>

<div class="w-full h-screen bg-slate-400">
	<slot />
</div>
