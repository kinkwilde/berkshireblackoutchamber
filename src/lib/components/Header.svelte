<script>
	import { base } from '$app/paths';
</script>

<header class="relative z-20 py-0 shadow-[0px_0px_15px_5px_rgba(20,20,20,0.5)] lg:py-8">
	<div class="container grid grid-cols-3 items-center gap-4 py-4 lg:py-0">
		<nav class="hidden space-x-4 text-left text-lg uppercase tracking-tight lg:block">
			<a href="{base}/" class="text-night hover:text-red hover:no-underline">Home</a>
			<a href="{base}/server" class="text-night hover:text-red hover:no-underline">Server</a>
		</nav>
		<a href="{base}/" class="mx-auto hover:no-underline"
			><img src="./logo.png" alt="logo" class="max-w-60" /></a
		>
		<nav class="hidden space-x-4 text-right lg:block">
			<a href="{base}/loot" class="text-night hover:text-red uppercase">Loot</a>
			<a href="{base}/contact" class="text-night hover:text-red uppercase">Contact</a>
		</nav>
	</div>
	<button class="bg-red text-smoke group block w-full text-center text-base uppercase lg:hidden">
		<span
			class="group-hover:lg:bg-night block py-4 lg:transition-colors lg:duration-200 lg:ease-in-out group-hover:lg:bg-opacity-10"
		>
			<span class="container block">Menu</span>
		</span>
	</button>
</header>
