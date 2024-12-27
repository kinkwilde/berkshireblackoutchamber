<script>
	import { base } from '$app/paths';

	const currentYear = new Date().getFullYear();
</script>

<footer class="py-8">
	<div class="container grid grid-cols-3 items-center gap-4">
		<p class="text-night mb-0 text-left text-sm uppercase">All rights reserved.</p>
		<a href="{base}/" class="mx-auto hover:no-underline"
			><img src="./logo.png" alt="logo" class="max-w-32" /></a
		>
		<p class="text-night mb-0 text-right text-sm uppercase">
			Copyright {currentYear} &copy; Blackout Chamber
		</p>
	</div>
</footer>
