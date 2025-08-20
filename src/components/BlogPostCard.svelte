<script lang="ts">
  export let title: string;
  export let description: string;
  export let image: string;
  export let url: string;
  export let pubDate: string;
  export let tags: string[] = [];
  export let featured: boolean = false;
  export let alt: string = title;

  // Format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
</script>

<div class={`bg-base-100 border border-base-200 rounded-lg shadow p-4 flex flex-col justify-between ${featured ? 'md:col-span-2 md:flex-row gap-6 items-center' : ''}`}>
  <img
    src={image}
    alt={alt}
    class={`rounded-lg ${featured ? 'w-full md:w-1/2 h-56 object-cover mb-0' : 'w-full h-36 object-cover mb-3'}`}
    loading="lazy"
  />
  <div class={featured ? 'md:w-1/2' : ''}>
    {#if featured}
      <span class="inline-block bg-warning text-warning-content text-xs font-bold px-2 py-1 rounded mb-2">Featured</span>
    {/if}
    <h3 class={featured ? 'text-2xl font-bold mb-2' : 'text-lg font-bold mb-1'}>
      {title}
    </h3>
    <p class="mb-2 text-base-content/80">{description}</p>
    <div class="flex flex-wrap gap-2 mb-2">
      {#each tags as tag}
        <span class="bg-base-200 text-xs px-2 py-1 rounded">{tag}</span>
      {/each}
    </div>
    <div class="flex items-end">
      <div class="flex-1"></div>
      <a href={url} class="ml-auto mt-2 hover:underline ">Read Now</a>
    </div>
    <span class="text-xs text-base-content/60">{formatDate(pubDate)}</span>
  </div>
</div>
