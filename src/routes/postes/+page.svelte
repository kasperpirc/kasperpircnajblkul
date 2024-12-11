<script lang="ts">
	import type { UserPost } from '$lib';
	import Post from '$lib/Post.svelte';
	let posts: UserPost[] = [
		{ text: 'Hello Kasper!', timestamp: Date.now(), likes: 0 },
		{ text: 'Najbol kul post!', timestamp: Date.now(), likes: 0 }
	];
</script>

<div class="flex flex-col gap-2">
	{#each posts as post}
		<Post {post}></Post>
	{/each}
</div>
