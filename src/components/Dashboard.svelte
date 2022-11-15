<script lang="ts">
  import LayoutAdmin from '../layouts/LayoutAdmin.svelte'
  import IntersectionObs from './IntersectionObs.svelte'

  function test() {
    console.log('test')
  }
</script>

<LayoutAdmin>
  <p>Mon slot</p>
  <IntersectionObs callback={test} />
</LayoutAdmin>

<style>
  p {
    font-size: 3em;
  }
</style>
