<script>
	export let icon = "bx bx-heart";
	export let title = "Get Involved";
	export let description = "How to help";
	export let href = "/";
	export let cta = "Learn More";
</script>

<div class="card bg-primary/20 border border-white/20">
	<div class="card-body items-center text-center">
		<i class={`text-4xl ${icon}`}></i>
		<h3 class="card-title">{title}</h3>
		<p>{description}</p>
		<a href={href} class="btn btn-primary text-white">{cta}</a>
	</div>
</div>


