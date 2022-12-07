<script>
  import { onMount } from "svelte";

  export let items = [],
    reverse = false,
    topColour = "bg-white",
    bottomColour = "bg-white",
    speed = 90; // pixels per second

  let list;

  const transform = reverse ? "rotate-[-2deg]" : "rotate-[2deg]";

  const trackWidth = "w-[calc(100%_+_40px)] max-w-[calc(100%_+_40px) -ml-4";

  const justify = reverse ? "justify-end" : "justify-start";

  const animation = reverse ? "animate-marquee-reverse" : "animate-marquee";

  let time = 0;
  let distance = 0;

  onMount(() => {
    distance = list.offsetWidth; // Width of list

    time = distance / speed;
  });
</script>

<div
  class={[
    topColour,
    bottomColour,
    "relative z-10 h-[140px] flex flex-col overflow-hidden",
  ].join(" ")}
>
  <div class={[topColour, "flex-1"].join(" ")} />
  <div class={[bottomColour, "flex-1"].join(" ")} />
  <div
    class={[
      trackWidth,
      "absolute top-1/2 -translateY-[1/2] -left-[20px] h-0 flex items-center",
    ].join(" ")}
  >
    <div
      class={[
        transform,
        justify,
        "bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.15)] py-[7px] overflow-x-hidden",
        "w-full flex",
      ].join(" ")}
    >
      <ul
        class={[animation, "flex justify-start"].join(" ")}
        style:animation-duration={`${time}s`}
        bind:this={list}
      >
        {#each { length: 20 } as _, i}
          {#each items as item}
            <li
              class="text-green uppercase font-bold whitespace-nowrap px-6"
              aria-hidden={i !== 0}
            >
              <span class="text-body-lead">{item}</span>
            </li>
          {/each}
        {/each}
      </ul>
    </div>
  </div>
</div>
