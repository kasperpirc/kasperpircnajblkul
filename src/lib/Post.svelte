<script lang="ts">
	import type { UserPost } from '$lib';

	export let post: UserPost;

	function addLike() {
		post.likes = post.likes + 1;
	}
</script>

<div class="grid-">
	<div class="font-bold bg-black text-white rounded-full text-center">
		{post.text}
		<div class="text-xs">to so tvoji posti</div>
	</div>

	<div class="bg-amber-700 rounded-2xl border border-black text-centered flex justify-between">
		{new Date(post.timestamp).toLocaleString()}
		<button on:click={addLike} class="">💙{post.likes}</button>
	</div>
</div>
