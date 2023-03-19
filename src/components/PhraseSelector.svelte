<script lang="ts">
  /**
   * @file src\components\PhraseSelector.svelte
   * @property {Array} phrases - array of phrases from the captions file
   * @description Given an array of phrases, including phraseDuration generate a bar graph
   * showing each duration and the number of phrases of that duration
   */

  import { Plotly } from "plotly.js-dist-min";

  export let phrases;

  const PAUSE_BINS = 100; // define the number of intervals to divide the pause durations into
  const WIDTH = 800;
  const HEIGHT = 600;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const innerHeight = HEIGHT - margin.top - margin.bottom;
  const innerWidth = WIDTH - margin.left - margin.right;
  const BAR_WIDTH = innerWidth / PAUSE_BINS;
  const BAR_PADDING = 2;

  var y0 = [];
  var y1 = [];
  for (var i = 0; i < 50; i++) {
    y0[i] = Math.random();
    y1[i] = Math.random() + 1;
  }

  var trace1 = {
    y: y0,
    type: "box",
  };

  var trace2 = {
    y: y1,
    type: "box",
  };

  var data = [trace1, trace2];

  // Plotly.newPlot("chart", data);

//  let graphData;

/*  function generateGraphData(phrases) {
    let data = [];
    let pauseDurations = phrases.map((phrase) => phrase.pause);
    let uniqueDurations = [...new Set(pauseDurations)];
    uniqueDurations.forEach((duration) => {
      let phraseCount = pauseDurations.filter((d) => d === duration).length;
      data.push({ pause: duration, phraseCount: phraseCount });
    });
    // sort uniqueDurations into ascending order on pause
    data.sort((a, b) => a.pause - b.pause);
    // get the min and max pause durations
    let minPause = Math.min.apply(null, pauseDurations);
    let maxPause = Math.max.apply(null, pauseDurations);
    // calculate duration to divide maxPause-minPause into PAUSE_BINS intervals
    let duration = (maxPause - minPause) / PAUSE_BINS;
    // create an array of PAUSE_BINS intervals
    let intervals = [];
    for (let i = 0; i < PAUSE_BINS; i++) {
      const minInterval = minPause + i * duration;
      const maxInterval = minPause + (i + 1) * duration;
      intervals[i] = {
        index: i,
        label: `${minPause + (i + 1) * duration}`,
        phraseCount: 0,
      };
      // extract from data the entries where pause is in the interval
      let intervalData = data.filter(
        (d) => d.pause >= minInterval && d.pause < maxInterval
      );
      // sum the phraseCount for the interval
      intervalData.forEach((d) => {
        intervals[i].phraseCount += d.phraseCount;
      });
    }
    //	return intervals;

    return data;

  } */ 
</script>

<div id="chart" />

<h1>hello</h1>

<!--    <svg class="chart" height="420" width="120">
        <g transform="translate(0,0)">
            <rect height="50" width="19"></rect>
            <text y="47" x="9.5" dy=".35em">5</text>
        </g>
        <g transform="translate(20,0)">
            <rect height="100" width="19"></rect>
            <text x="97" y="9.5" dy=".35em">10</text>
        </g>
        <g transform="translate(40,0)">
            <rect height="120" width="19"></rect>
            <text x="117" y="9.5" dy=".35em">12</text>
        </g>
    </svg> -->

<!-- <svg {WIDTH} {HEIGHT}>
  <g transform={`translate(${margin.left},${margin.top})`}> 
	 {#each graphData as d}
      <g transform={`translate(${d.index*BAR_WIDTH},0)`}>
		<rect x="0" y="0" width={BAR_WIDTH-BAR_PADDING} height={d.phraseCount} />
      </g>
    {/each} 
 </g> -->
<!--    {#each graphData as d} -->
<!-- <g transform={0,yScale(d.phraseCount)+d.index*5}> -->
<!--	  <g transform="translate(0,{d.index*10})"> -->
<!--	  <text
		text-anchor="end"
		x="-3"
		dy="1em"
		y={yScale(d.phraseCount) + yScale.bandwidth() / 2}
	  >
		{d.phraseCount} - {d.index*10} - {yScale(d.index)}
	  </text>
	  <rect
		x="0"
		y={yScale(d.index)}
		width={xScale(d.phraseCount)}
		height={9}
	  /> -->
<!--	  </g> -->
<!--	{/each} -->

<!--   <text
        text-anchor="end"
        x="-3"
        dy=".3em"
        y={yScale(d.phraseCount) + yScale.bandwidth() / 2}
      >
        {d.phraseCount}
      </text> 
      <rect
        x="0"
        y={yScale(d.phraseCount)+d.index+2}
        width={xScale(d.index)}
        height={yScale.bandwidth()}
      />
    {/each} -->

<style>
</style>
