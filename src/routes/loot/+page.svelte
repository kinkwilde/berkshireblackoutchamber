<script>
	import Construction from '$lib/components/Construction.svelte';
	import Version from '$lib/components/Version.svelte';

	import { dayzVersion, wipeDate } from '$lib/stores/global';

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let grandTotal = writable(0);
	let accordionData = writable([]);

	const fetchAndParseXML = async () => {
		try {
			const response = await fetch('types.xml');
			if (!response.ok) throw new Error('Failed to load XML file');

			const xmlString = await response.text();
			parseXML(xmlString);
		} catch (error) {
			console.error('Error:', error);
			alert('Error loading XML data. Check console for details.');
		}
	};

	const parseXML = (xmlString) => {
		const parser = new DOMParser();
		const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
		const types = xmlDoc.getElementsByTagName('type');

		const parsedCategories = {};
		let totalItems = 0;

		Array.from(types).forEach((type) => {
			const categoryNode = type.getElementsByTagName('category')[0];
			const categoryName = categoryNode ? categoryNode.getAttribute('name') : 'Uncategorized';
			const nominalValue = parseInt(
				type.getElementsByTagName('nominal')[0]?.textContent || '0',
				10
			);

			if (!parsedCategories[categoryName]) {
				parsedCategories[categoryName] = { items: [], totalNominal: 0 };
			}

			parsedCategories[categoryName].items.push(type);
			parsedCategories[categoryName].totalNominal += nominalValue;
			totalItems += nominalValue;
		});

		const categoryData = Object.entries(parsedCategories)
			.map(([name, data]) => ({
				name,
				items: data.items,
				totalNominal: data.totalNominal,
				percentage: ((data.totalNominal / totalItems) * 100).toFixed(1)
			}))
			.sort((a, b) => {
				if (a.name === 'Uncategorized') return 1;
				if (b.name === 'Uncategorized') return -1;
				return a.name.localeCompare(b.name);
			});

		grandTotal.set(totalItems);
		accordionData.set(categoryData);
	};

	const toggleAccordion = (event) => {
		const panel = event.target.closest('button').nextElementSibling;
		if (panel) {
			panel.classList.toggle('hidden');
		}
	};

	const lastWipeDate = new Date($wipeDate);

	let lastWipeElapsed = '';

	function calculateElapsedTime() {
		const now = new Date();
		const elapsedTime = now - lastWipeDate;

		const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
		const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));

		lastWipeElapsed = `${days} Day${days !== 1 ? 's' : ''}, ${hours} Hour${hours !== 1 ? 's' : ''}, ${minutes} Minute${minutes !== 1 ? 's' : ''}`;
	}

	onMount(() => {
		fetchAndParseXML();
		calculateElapsedTime();
		const interval = setInterval(calculateElapsedTime, 60000);
		return () => clearInterval(interval);
	});
</script>

<Construction />
<div class="container py-12">
	<div class="mb-12">
		<h1 class="text-center">Loot Table Overview</h1>
		<div class="mb-4 text-center">Last Wipe: {lastWipeElapsed}</div>
		<div class="mx-auto mb-4 max-w-prose text-center [&_p:last-of-type]:mb-0">
			<p>
				<span class="block font-bold">Search the Loot Table</span>
				<span>Coming Soon</span>
			</p>
		</div>
		<Version />
	</div>
	<div
		class="mb-4 grid grid-cols-2 gap-4 rounded-md border border-purple-900 bg-purple-900 p-4 text-white"
	>
		<div class="text-left">
			<p class="mb-0 text-sm font-bold uppercase">Total Items: {$grandTotal}</p>
		</div>
		<div class="text-right">
			<p class="mb-0 text-sm font-bold uppercase">{$dayzVersion}</p>
		</div>
	</div>
	<div>
		{#each $accordionData as { name, totalNominal, percentage, items }}
			<div class="mb-4">
				<button
					class="accordion w-full rounded-md border border-gray-200 bg-gray-50 p-4 text-left text-sm font-medium uppercase text-black focus:outline-none"
					on:click={toggleAccordion}
				>
					{name} ({items.length} Items) {percentage}%
				</button>
				<div class="hidden bg-white p-4">
					<p class="mb-4 text-sm font-bold uppercase">
						Total Items: {totalNominal}
					</p>
					<div class="overflow-x-auto bg-white">
						<table class="w-full min-w-max table-auto border-collapse">
							<thead>
								<tr>
									<th
										class="border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold"
									>
										Name
									</th>
									<th
										class="border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold"
									>
										Nominal
									</th>
									<th
										class="border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold"
									>
										Min
									</th>
								</tr>
							</thead>
							<tbody>
								{#each items as item}
									<tr>
										<td class="border border-gray-200 px-4 py-2 text-sm">
											{item.getAttribute('name')}
										</td>
										<td class="border border-gray-200 px-4 py-2 text-sm">
											{item.getElementsByTagName('nominal')[0]?.textContent || '0'}
										</td>
										<td class="border border-gray-200 px-4 py-2 text-sm">
											{item.getElementsByTagName('min')[0]?.textContent || '0'}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
