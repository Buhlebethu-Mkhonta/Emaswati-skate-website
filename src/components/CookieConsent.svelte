<script>
	import { onMount } from "svelte";

	let isVisible = false;

	const COOKIE_NAME = "es_consent";
	const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

	function getCookie(name) {
		const cookies = document.cookie.split(";").map((c) => c.trim());
		for (const cookie of cookies) {
			if (cookie.startsWith(name + "=")) {
				return cookie.substring(name.length + 1);
			}
		}
		return null;
	}

	function setCookie(name, value, maxAgeSeconds) {
		document.cookie = `${name}=${value}; max-age=${maxAgeSeconds}; path=/; SameSite=Lax`;
	}

	function acceptAll() {
		setCookie(COOKIE_NAME, "accepted", ONE_YEAR_SECONDS);
		isVisible = false;
	}

	function declineAll() {
		setCookie(COOKIE_NAME, "declined", ONE_YEAR_SECONDS);
		isVisible = false;
	}

	onMount(() => {
		const consent = getCookie(COOKIE_NAME);
		isVisible = consent === null;
	});
</script>

{#if isVisible}
<div class="fixed inset-x-0 bottom-0 z-50">
    <div class="mx-auto max-w-6xl px-4 pb-4">
        <div class="alert bg-base-200 shadow border border-base-300">
            <div class="flex-1">
                <span>
                    We use cookies to enhance your experience and analyze site usage. See our
                    <a href="/privacy/" class="link link-primary link-hover underline">Privacy Policy</a> for details.
                </span>
            </div>
            <div class="flex items-center gap-2">
                <button class="btn btn-ghost" on:click={declineAll} aria-label="Decline all cookies">Decline</button>
                <button class="btn btn-primary" on:click={acceptAll} aria-label="Accept all cookies">Accept</button>
            </div>
        </div>
    </div>
</div>
{/if}


