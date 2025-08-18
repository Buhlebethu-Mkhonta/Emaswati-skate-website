<script>
	export let icon = "bx bx-heart";
	export let title = "Title";
	export let description = "Description";
	export let className = "";
</script>

<div class={`card bg-base-100 border border-base-300 ${className}`}>
	<div class="card-body items-center text-center">
		<i class={`text-3xl text-primary ${icon}`}></i>
		<h3 class="card-title mt-2">{title}</h3>
		<p>{description}</p>
	</div>
</div>


