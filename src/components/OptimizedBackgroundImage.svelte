<!-- OptimizedBackgroundImage.svelte -->
<script>
  export let imagePath;
  export let className = '';
  export let alt = 'Background image';
</script>

<div class={`background-image ${className}`}>
  <picture>
    <!-- Mobile image -->
    <source
      media="(max-width: 640px)"
      srcset={`${imagePath}?w=640&h=800&fit=cover&format=webp&q=80`}
      type="image/webp"
    />
    <!-- Tablet image -->
    <source
      media="(max-width: 1024px)"
      srcset={`${imagePath}?w=1024&h=800&fit=cover&format=webp&q=80`}
      type="image/webp"
    />
    <!-- Desktop image -->
    <source
      srcset={`${imagePath}?w=1920&h=1080&fit=cover&format=webp&q=80`}
      type="image/webp"
    />
    <!-- Fallback image -->
    <img
      src={imagePath}
      alt={alt}
      loading="eager"
      decoding="async"
      style="width: 100%; height: 100%; object-fit: cover;"
    />
  </picture>
</div>

<style>
  .background-image {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  picture {
    width: 100%;
    height: 100%;
    display: block;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
