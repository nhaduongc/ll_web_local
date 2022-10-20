<script>
  $: open = false;

  const burgerLine = `h-1 w-10 my-1 rounded-full bg-white transition ease transform duration-300`;

  // Close menu on button click
  const handleButtonClick = (event) => {
    if (!event.target.closest("a")) return;

    open = false;
  };
</script>

<button
  class="lg:hidden flex flex-col h-12 w-12 rounded justify-center items-center group"
  on:click={() => (open = !open)}
>
  <div class="flex flex-col items-center justify-center scale-75 md:scale-100">
    <div
      class={[burgerLine, open ? "rotate-45 translate-y-3" : ""].join(" ")}
    />
    <div class={[burgerLine, open ? "opacity-0" : "opacity-100"].join(" ")} />
    <div
      class={[burgerLine, open ? "-rotate-45 -translate-y-3" : ""].join(" ")}
    />
  </div>
</button>
<div
  class={[
    "fixed lg:relative -z-10 lg:z-0",
    "inset-0 lg:inset-auto",
    "flex justify-center items-center lg:justify-start lg:items-start",
    "bg-green/90 lg:bg-transparent",
    open ? "opacity-100 visible" : "opacity-0 invisible",
    "transition-all lg:visible lg:opacity-100",
  ].join(" ")}
  on:click={handleButtonClick}
>
  <slot />
</div>
