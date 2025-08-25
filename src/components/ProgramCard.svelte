<script>
  export let icon = "bx bx-skateboard";
  export let title = "Program";
  export let description = "Program description";
</script>

<div class="card relative w-full max-w-xs h-64 bg-primary overflow-hidden border border-base-300 transition-all duration-300 justify-self-center hover:bx-shadow-lg shadow-lg">
  <!-- Icon and Title (Fixed) -->
  <div class="flex flex-col items-center justify-center h-full text-white z-20">
    <i class="{icon} text-4xl mb-4"></i>
    <h3 class="text-xl font-bold">{title}</h3>
  </div>
  <!-- Description (Slides Up on Hover) -->
  <div class="absolute top-0 w-full h-full bg-white/90 p-4 text-center transform translate-y-full transition-transform duration-500 ease-in-out z-10 description-slide">
    <div class="flex flex-col items-center justify-center h-full">
      <p class="text-gray-800 text-center">{description}</p>
      <div class="mt-4 w-12 h-1 bg-primary rounded"></div> <!-- Decorative bar -->
    </div>
  </div>
</div>

<style>
  .card:hover .description-slide {
    transform: translateY(0);
  }

  .description-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>