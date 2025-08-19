<script>
  let email = "";
  let submitted = false;
  function handleSubmit(e) {
    e.preventDefault();
    if (email) {
      submitted = true;
      // Here you would send the email to your backend/newsletter service
    }
  }
</script>

<div class="newsletter-section bg-primary text-primary-content py-10 px-4 md:px-0 flex flex-col items-center">
  <div class="w-full max-w-2xl mx-auto flex flex-col items-center">
    <h2 class="text-2xl md:text-3xl font-bold mb-2 text-center">Sign Up for Our Newsletter</h2>
    <p class="mb-6 text-center text-base-content/80">Stay up to date with the latest news, events, and opportunities from Emaswati Skate!</p>
    {#if !submitted}
      <form class="flex flex-col md:flex-row gap-3 w-full justify-center" on:submit|preventDefault={handleSubmit}>
        <input
          type="email"
          class="input input-bordered w-full md:w-72 focus:border-base-100"
          placeholder="Enter your email address"
          bind:value={email}
          required
        />
        <button type="submit" class="btn btn-base-100 text-primary font-bold">Subscribe</button>
      </form>
    {:else}
      <div class="text-base-content bg-base-100 rounded-lg px-4 py-2 mt-2 shadow">Thank you for subscribing!</div>
    {/if}
  </div>
</div>

<style>
  .newsletter-section {
    position: relative;
    z-index: 1;
  }
</style>
