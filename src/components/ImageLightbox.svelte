<!--ImageLightbox.svelte-->
<script lang="ts">
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    
    export let isOpen = false;
    export let imageUrl = '';
    export let altText = '';
    
    function handleClose() {
        isOpen = false;
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            handleClose();
        }
    }

    function handleImageContainerKeydown(event: KeyboardEvent) {
        // Allow keyboard interaction with the image container
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            // Don't close on Enter/Space for the image container
        }
    }

    // Listen for custom events from the gallery
    onMount(() => {
        const handleOpenLightbox = (event: CustomEvent) => {
            imageUrl = event.detail.imageUrl;
            altText = event.detail.altText;
            isOpen = true;
        };

        document.addEventListener('openLightbox', handleOpenLightbox as EventListener);

        return () => {
            document.removeEventListener('openLightbox', handleOpenLightbox as EventListener);
        };
    });
</script>

<svelte:window on:keydown={handleKeydown}/>

{#if isOpen}
    <div 
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
        tabindex="0"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        on:click={handleClose}
        on:keydown={handleKeydown}
        transition:fade={{ duration: 200 }}
    >
        <div 
            class="relative max-w-[90vw] max-h-[90vh]" 
            role="button"
            tabindex="0"
            on:click|stopPropagation
            on:keydown={handleImageContainerKeydown}
        >
            <button 
                type="button"
                class="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
                on:click={handleClose}
                aria-label="Close lightbox"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <img 
                src={imageUrl} 
                alt={altText} 
                class="max-w-full max-h-[90vh] object-contain"
            />
        </div>
    </div>
{/if}
