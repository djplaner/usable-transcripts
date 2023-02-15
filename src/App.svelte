<script lang="ts">
  import { configStore } from "./stores";
  import { parseSubs } from "frazy-parser";

  export let courseId: number;
  export let editMode: boolean;
  export let csrfToken: string;
  export let currentPage: string;

  $configStore = {
    courseId: courseId,
    editMode: editMode,
    csrfToken: csrfToken,
    currentPage: currentPage,
  };

  let files;
  let content;
  let phrases;

  function processFiles() {
    console.log("---- hello");
    for (const file of files) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        content = reader.result;
        phrases = parseSubs(content);
        console.log(phrases);
      };
    }
  }
</script>

<label for="subFile">Upload Subtitles</label>
<input
  type="file"
  id="subsFile"
  accept=".vtt"
  bind:files
  on:change={processFiles}
/>

{#if files}
  {content}
{/if}

<style>
</style>
