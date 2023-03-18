<script lang="ts">
  /**
   * @file src\components\PhraseSelector.svelte
   * @property {Array} phrases - array of phrases from the captions file
   * @description Given an array of phrases, including phraseDuration generate a bar graph
   * showing each duration and the number of phrases of that duration
   */

  import { scaleBand, scaleLinear } from "d3-scale";

  export let phrases;

  let data = generateGraphData(phrases);

  console.log(data)

  let width = 400;
  let height = 300;

  const margin = { top: 20, right: 20, bottom: 20, left: 180 };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  $: xDomain = data.map((d) => d.duration);
  $: yDomain = data.map((d) => +d.phraseCount);

  $: yScale = scaleBand().domain(xDomain).range([0, innerHeight]).padding(0.1);
  $: xScale = scaleLinear()
    .domain([0, Math.max.apply(null, yDomain)])
    .range([0, innerWidth]); 

  function generateGraphData(phrases) {
	let data = [];
	let pauseDurations = phrases.map((phrase) => phrase.pause);
	let uniqueDurations = [...new Set(pauseDurations)];
	uniqueDurations.forEach((duration) => {
	  let phraseCount = pauseDurations.filter((d) => d === duration).length;
	  data.push({ pause: duration, phraseCount: phraseCount });
	});
	// sort uniqueDurations into ascending order on pause
	data.sort((a, b) => a.pause - b.pause);
	return data;
  }
</script>

 <svg {width} {height}>
  <g transform={`translate(${margin.left},${margin.top})`}>
    {#each xScale.ticks() as tickValue}
      <g transform={`translate(${xScale(tickValue)},0)`}>
        <line y2={innerHeight} stroke="black" />
        <text text-anchor="middle" dy=".7em" y={innerHeight + 3}>
          {tickValue}
        </text>
      </g>
    {/each}
    {#each data as d}
      <text
        text-anchor="end"
        x="-3"
        dy=".3em"
        y={yScale(d.country) + yScale.bandwidth() / 2}
      >
        {d.country}
      </text>
      <rect
        x="0"
        y={yScale(d.country)}
        width={xScale(d.population)}
        height={yScale.bandwidth()}
      />
    {/each}
  </g>
</svg>

<style>
</style>
