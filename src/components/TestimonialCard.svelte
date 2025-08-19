<script>
    export let name = '';
    export let testimonial = '';
    export let image = '';
    export let role = '';
</script>

<div class="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
    <div class="flex items-center mb-4">
        <img 
            src={image} 
            alt={name} 
            class="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
            <h3 class="font-bold text-lg">{name}</h3>
            {#if role}
                <p class="text-gray-600 text-sm">{role}</p>
            {/if}
        </div>
    </div>
    <blockquote class="text-gray-700 italic">
        "{testimonial}"
    </blockquote>
</div>

<style>
    /* Add any additional styles here if needed */
</style>
