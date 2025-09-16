<script>
	export let category = '';
	export let title = '';
	export let description = '';
	export let icon = '';
	export let color = 'blue';
	export let currentAmount = 0;
	export let goalAmount = null;
	export let donorCount = 0;
	export let showProgress = true;
	export let donationAmounts = [50, 100, 250];

	// Color configurations - using site theme
	const colorConfigs = {
		blue: {
			bg: 'from-base-100 to-base-200',
			border: 'border-primary/20',
			icon: 'bg-primary',
			text: 'text-primary',
			progress: 'bg-primary',
			button: 'btn-primary',
			buttonHover: 'hover:bg-primary/90 hover:border-primary/90',
			outlineButtonHover: 'hover:bg-primary hover:text-white hover:border-primary'
		},
		green: {
			bg: 'from-base-100 to-base-200',
			border: 'border-secondary/20',
			icon: 'bg-secondary',
			text: 'text-secondary',
			progress: 'bg-secondary',
			button: 'btn-secondary',
			buttonHover: 'hover:bg-secondary/90 hover:border-secondary/90',
			outlineButtonHover: 'hover:bg-secondary hover:text-white hover:border-secondary'
		},
		purple: {
			bg: 'from-base-100 to-base-200',
			border: 'border-accent/20',
			icon: 'bg-accent',
			text: 'text-accent',
			progress: 'bg-accent',
			button: 'btn-accent',
			buttonHover: 'hover:bg-accent/90 hover:border-accent/90',
			outlineButtonHover: 'hover:bg-accent hover:text-white hover:border-accent'
		}
	};

	const config = colorConfigs[color] || colorConfigs.blue;
	const progressPercentage = goalAmount ? Math.min((currentAmount / goalAmount) * 100, 100) : 0;

	function selectDonation(amount) {
		// Emit event to parent component
		const event = new CustomEvent('donationSelected', {
			detail: { category, amount }
		});
		window.dispatchEvent(event);
	}
</script>

<div class="donation-card bg-gradient-to-br {config.bg} border-2 {config.border} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
	<div class="text-center mb-6">
		<div class="inline-flex items-center justify-center w-16 h-16 {config.icon} text-white rounded-full mb-4">
			<i class="{icon} text-2xl"></i>
		</div>
		<h3 class="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
		<p class="text-gray-600">{description}</p>
	</div>
	
	{#if showProgress && goalAmount}
		<div class="mb-6">
			<div class="flex justify-between items-center mb-2">
				<span class="text-sm font-medium text-gray-600">Progress</span>
				<span class="text-sm font-bold {config.text}">SZL {currentAmount.toLocaleString()} / SZL {goalAmount.toLocaleString()}</span>
			</div>
			<div class="w-full bg-gray-200 rounded-full h-3">
				<div class="{config.progress} h-3 rounded-full transition-all duration-500" style="width: {progressPercentage}%"></div>
			</div>
			<p class="text-xs text-gray-500 mt-1">{Math.round(progressPercentage)}% of goal reached</p>
		</div>
	{:else if !showProgress}
		<div class="mb-6">
			<div class="flex justify-between items-center mb-2">
				<span class="text-sm font-medium text-gray-600">Total Raised</span>
				<span class="text-sm font-bold {config.text}">SZL {currentAmount.toLocaleString()}</span>
			</div>
		</div>
	{/if}

	<div class="space-y-3 mb-6">
		<div class="flex justify-between">
			<span class="text-sm text-gray-600">Donors:</span>
			<span class="text-sm font-semibold {config.text}">{donorCount}</span>
		</div>
	</div>

	<div class="space-y-2">
		{#each donationAmounts as amount}
			<button class="w-full btn btn-outline {config.button.replace('btn-', 'btn-outline-')} rounded-full {config.outlineButtonHover} transition-all duration-200" on:click={() => selectDonation(amount)}>
				{#if amount === donationAmounts[0]}
					<i class="fa-solid fa-heart mr-2"></i>
				{/if}
				Donate SZL {amount}
			</button>
		{/each}
		<button class="w-full btn btn-outline {config.button.replace('btn-', 'btn-outline-')} rounded-full {config.outlineButtonHover} transition-all duration-200" on:click={() => selectDonation('custom')}>
			Custom Amount
		</button>
	</div>
</div>

<style>
	.donation-card {
		transition: all 0.3s ease;
	}
	
	.donation-card:hover {
		transform: translateY(-5px);
	}
</style>
