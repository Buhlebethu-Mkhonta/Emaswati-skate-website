<script>
	export let name = "Team Member";
	export let role = "Role";
	export let image = "/images/swazi-park-6-a4d0dc84.jpg";
	export let instagram = "";
	export let facebook = "";
	export let youtube = "";
	export let twitter = "";
	
	import { Image } from 'astro:assets';
</script>

<div class="card bg-base-100  shadow-sm border border-base-300">
	<figure class="avater pt-10">
        <div class="w-50 mask mask-circle">
            <img 
                src={`${image}?w=300&h=300&fit=cover&format=webp&q=80`} 
                alt={`Team member ${name}`}
                loading="lazy"
                decoding="async"
            />
        </div>
	</figure>
	<div class="card-body items-center text-center">
		<h2 class="card-title">{name}</h2>
		<p class="opacity-80">{role}</p>
		{#if instagram || facebook || youtube || twitter}
			<div class="card-actions">
				{#if instagram}
					<a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-xl hover:text-primary" ><i class="bx bxl-instagram"></i></a>
				{/if}
				{#if facebook}
					<a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="text-xl hover:text-primary" ><i class="bx bxl-facebook"></i></a>
				{/if}
				{#if youtube}
					<a href={youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="text-xl hover:text-primary"><i class="bx bxl-youtube"></i></a>
				{/if}
				{#if twitter}
					<a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="text-xl hover:text-primary"><i class="bx bxl-twitter"></i></a>
				{/if}
			</div>
		{/if}
	</div>
</div>


