<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<main>
	<div>
	  <h2 id = "about-me"> About me </h2>
	  <p> I just start learning front-end and I already like it! I know C++ and base of Java and Python, but HTML looks very different. My CSS skills just go brrrrrr (yet, I hope). All this is new to me, but I will improve my skills and make this site better. </p>
	</div>
  </main>
