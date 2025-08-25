<script>
  export let title = "Our Partners";
  export let subtitle = "Proudly supported by organizations that believe in our mission";
  export let partners = [];
  export let speed1 = 30; // Animation speed for first row in seconds
  export let speed2 = 35; // Animation speed for second row in seconds
  export let logoWidth = "w-48";
  export let logoHeight = "h-20";
  export let backgroundColor = "bg-primary/70";
  export let showTwoRows = false;

  // Number of times to repeat the partner list to ensure no gaps
  const repeatCount = Math.max(3, Math.ceil(10 / Math.max(1, partners.length)));
</script>

<section class="py-20 {backgroundColor} overflow-hidden">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-4">{title}</h2>
    {#if subtitle}
      <p class="text-center text-base-content/70 mb-12">{subtitle}</p>
    {/if}
    
    <!-- First Row - Scrolling Left -->
    <div class="relative overflow-hidden">
      <div 
        class="flex animate-scroll-left" 
        style="--scroll-speed: {speed1}s; --repeat-count: {repeatCount};"
      >
        {#each Array(repeatCount) as _, i}
          <div class="flex flex-shrink-0 items-center space-x-8">
            {#each partners as partner}
              <a 
                href={partner.website} 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center justify-center {logoWidth} {logoHeight} "
              >
                <span class="text-gray-800 font-bold text-lg text-center px-2">
                  {partner.name}
                </span>
              </a>
            {/each}
          </div>
        {/each}
      </div>
    </div>

    {#if showTwoRows}
      <!-- Second Row - Scrolling Right -->
      <div class="relative overflow-hidden mt-8">
        <div 
          class="flex animate-scroll-right" 
          style="--scroll-speed: {speed2}s; --repeat-count: {repeatCount};"
        >
          {#each Array(repeatCount) as _, i}
            <div class="flex flex-shrink-0 items-center space-x-8">
              {#each partners as partner}
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-center justify-center {logoWidth} {logoHeight} "
                >
                  <span class="text-gray-800 font-bold text-lg text-center px-2">
                    {partner.name}
                  </span>
                </a>
              {/each}
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  /* Infinite Scroll Animations */
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-100% / var(--repeat-count)));
    }
  }

  @keyframes scroll-right {
    0% {
      transform: translateX(calc(-100% / var(--repeat-count)));
    }
    100% {
      transform: translateX(0);
    }
  }

  .animate-scroll-left {
    animation: scroll-left var(--scroll-speed) linear infinite;
    width: calc(100% * var(--repeat-count));
  }

  .animate-scroll-right {
    animation: scroll-right var(--scroll-speed) linear infinite;
    width: calc(100% * var(--repeat-count));
  }

  /* Pause animation on hover */
  .animate-scroll-left:hover,
  .animate-scroll-right:hover {
    animation-play-state: paused;
  }
</style>