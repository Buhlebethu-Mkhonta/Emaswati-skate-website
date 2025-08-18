<script>
  export let className = "";
</script>

<div class={`w-full ${className}`}>
  <svg class="w-full h-12 text-base-300" viewBox="0 0 1000 60" aria-hidden="true" role="img">
    <!-- Straighter deck: flatter nose and tail -->
    <path d="M10 22 C 120 18 220 18 320 22 L 680 22 C 780 18 880 18 990 22" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" />
    <!-- Trucks -->
    <line x1="360" y1="22" x2="360" y2="34" stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke" />
    <line x1="640" y1="22" x2="640" y2="34" stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke" />
    <!-- Wheels -->
    <circle cx="360" cy="44" r="6.5" fill="none" stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke" />
    <circle cx="640" cy="44" r="6.5" fill="none" stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke" />
  </svg>
</div>


