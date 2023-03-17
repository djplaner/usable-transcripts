<script lang="ts">
  import { configStore } from "./stores";

  import TranscriptFormatter from "./components/TranscriptFormatter.svelte";

  export let courseId: number;
  export let editMode: boolean;
  export let csrfToken: string;
  export let currentObject: string;
  export let currentDetail: string;

  $configStore = {
    courseId: courseId,
    editMode: editMode,
    csrfToken: csrfToken,
    currentObject: currentObject,
    currentDetail: currentDetail,
  };

  let files;
  let captions = null;

  /**
   * @function processFiles
   * @description Called when a file is selected, assumes a captions file and parses it
   * @todo
   * - Check if file is actually captions and handle it
   * - provide mechanism to modify paragraph space
   * - export to word doc or some such?
   */
  function processFiles() {

    // need to be able to reset the file input 
    // - loading the same filename will cause an error otherwise
    const fileInput = document.getElementById("subsFile");

    // only reading the first file TODO
    let file = files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onerror = (file) => {
      console.log(`reading error for ${file} - ${reader.error}`);
    };
    reader.onload = () => {
      captions = reader.result;
      //console.log(`Captions: ${captions}`)
    };
    // reset everything
    files = [];
    file = null;
    fileInput.value = "";
  }
</script>

<div class="usable-file">
  <input
    type="file"
    class="usable-file-selector"
    id="subsFile"
    accept=".vtt, .srt"
    bind:files
    on:change|preventDefault={() => processFiles()}
  />
  <label for="subsFile">🇨‌🇨‌ &gt; transcript</label>
</div>

{#if captions}
  <TranscriptFormatter bind:captions />
{/if}

<!-- <sl-drawer label="transcript" class="drawer-overview">
  {content}
  <sl-button slot="footer" variant="primary">Close</sl-button>
</sl-drawer>
-->
<style>
  .usable-file-selector {
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    position: absolute;
  }

  .usable-file label {
    display: inline-block;
    padding: 8px 14px;
    color: #2d3b45;
    background-color: #f5f5f5;
    border-color: #c7cdd1;
    /*border: 1px solid; */
    border-radius: 3px;
    cursor: pointer;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    margin-bottom: 0;
  }
</style>
