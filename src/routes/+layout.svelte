<script>
	import '../app.css';

	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-gray-100">
	<Nav />
	<div class="flex-grow bg-white">
		{@render children()}
	</div>
	<Footer />
</div>
