<script lang="ts">
  /**
   * @file src\components\PhraseSelector.svelte
   * @property {Array} phrases - array of phrases from the captions file
   * @description Given an array of phrases, including phraseDuration generate a bar graph
   * showing each duration and the number of phrases of that duration
   */

  import { onMount } from "svelte/internal";

  import { newPlot } from "plotly.js-dist-min";

  export let phrases;

  // generate one array of y values per trace

  const PAUSE_BINS = 50;
/*  let trace1 = {
    y: y0,
    type: "box",
  };

  let trace2 = {
    y: y1,
    type: "box",
  }; */

//  let data = [trace1, trace2];

  onMount(async () => {
	let durations = generateGraphData(phrases)
	let data = [
		{
			x:durations,
			type: "histogram",
		}
	];
	let layout = {
		title: "Pause Durations",
		xaxis: {
			title: "Pause Duration (seconds)",
		},
		yaxis: {
			title: "Phrase Count",
		},
//		"boxpoints": "all"
	};

	newPlot("chart", data, layout);
  });

  //  let graphData;

  function generateGraphData(phrases) {
    let data = [];
	let staticBins = [ 
		{ min: 0, max: 0.25, phraseCount: 0 },
		{ min: 0.25, max: 0.5, phraseCount: 0 },
		{ min: 0.5, max: 0.75, phraseCount: 0 },
		{ min: 0.75, max: 1, phraseCount: 0 },
		{ min: 1, max: 1.5, phraseCount: 0 },
		{ min: 1.5, max: 2, phraseCount: 0 },
		{ min: 2, max: 3, phraseCount: 0 },
		{ min: 3, max: 4, phraseCount: 0 },
		{ min: 5, max: 10000, phraseCount: 0 },
	]
    let pauseDurations = phrases.map((phrase) => phrase.pause);

	// loop thru pauseDurations and update the count in staticBins
	pauseDurations.forEach((duration) => {
		staticBins.forEach((bin) => {
			if (duration >= bin.min && duration < bin.max) {
				bin.phraseCount++;
			}
		})
	});

	return staticBins.map((bin) => bin.phraseCount);

    let uniqueDurations = [...new Set(pauseDurations)];
    uniqueDurations.forEach((duration) => {
      let phraseCount = pauseDurations.filter((d) => d === duration).length;
      data.push({ pause: duration, phraseCount: phraseCount });
    });
    // sort uniquemaiDurations into ascending order on pause
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

	// remove the data[0] element
	data.shift()

	let intervalsData = intervals.map((d) => (parseFloat(d.label)*10));
	return intervalsData;

//    return data; 

  } 
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
