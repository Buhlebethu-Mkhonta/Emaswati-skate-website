<![CDATA[<script>
    export let imagePath = '/images/background.jpg';
    export let className = '';
</script>

<div class={`background-image ${className}`}>
    <picture>
        <!-- Mobile image -->
        <source
            media="(max-width: 640px)"
            srcset={`${imagePath}?w=640&h=800&fit=cover&format=webp`}
            type="image/webp"
        />
        <!-- Tablet image -->
        <source
            media="(max-width: 1024px)"
            srcset={`${imagePath}?w=1024&h=800&fit=cover&format=webp`}
            type="image/webp"
        />
        <!-- Desktop image -->
        <source
            srcset={`${imagePath}?w=1920&h=1080&fit=cover&format=webp`}
            type="image/webp"
        />
        <!-- Fallback image -->
        <img
            src={`${imagePath}?w=1920&h=1080&fit=cover`}
            alt=""
            class="absolute inset-0 w-full h-full object-cover -z-10"
            loading="eager"
            decoding="async"
            fetchpriority="high"
        />
    </picture>
</div>

<style>
    .background-image {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .background-image::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.5) 100%
        );
        z-index: -5;
    }
</style>]]>
