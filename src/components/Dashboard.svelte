<script lang="ts">
  import LayoutAdmin from '../layouts/LayoutAdmin.svelte'

  let output = 'begin'
  let loading = false
  let error = ''
  let iteration = 0

  const search =
    'Cancer-causing chemicals found in 87% of household objects tested in ...'

  const data = [
    {
      input:
        'DOOM PORTED TO THE NINTENDO 3DS DOWNLOAD GAMEPLAY 11.14 ( NO CFW)',
      output: 'DOOM',
    },
    { input: 'How to get DOOM on your NDS/DSi/3DS/2DS!', output: 'DOOM' },
    { input: 'DOOM 3: BFG EDITION Launch Trailer', output: 'DOOM' },
    {
      input: 'List of notable WADs - The Doom Wiki at DoomWiki.org',
      output: 'DOOM',
    },
    {
      input:
        'Dread Ep 06 - "Doom" clone for Amiga 500 - The Intro, Menu and More...',
      output: 'DOOM',
    },
    {
      input:
        'Dread Ep 06 - "Doom" clone for Amiga 500 - The Intro, Menu and More...',
      output: 'DOOM',
    },
    {
      input: 'Doom Amiga 500',
      output: 'DOOM',
    },
    {
      input: 'Europe Is in the Middle of a Messy Nuclear Slowdown',
      output: 'NOT DOOM',
    },
    {
      input: 'Europe Is in the Middle of a Messy Nuclear Slowdown',
      output: 'NOT DOOM',
    },
    {
      input: 'Delhi: Tihar inmate swallows mobile phone during checking ...',
      output: 'NOT DOOM',
    },
    {
      input: "NASA's Band-Aid Gadget Puts Astronaut Cells In Bio-Ink To ...",
      output: 'NOT DOOM',
    },
    {
      input: 'Steal and Decrease Turn Meter Champion List - AyumiLove',
      output: 'NOT DOOM',
    },
    {
      input: 'cancer',
      output: 'NOT DOOM',
    },
  ]

  const config = {
    iterations: 300,
    log: true,
    logPeriod: 10,
    callback: (status) => {
      error = status.error
      iteration = status.iterations
    },
    layers: [10],
  }
  async function run() {
    const { recurrent } = brain
    const { LSTM } = recurrent

    console.log('__________LOADING', loading)
    const network = new LSTM()
    network.train(data, config)

    // output = network.run('Doom 64 Free Download PC Game Full Version') // 'happy'

    const res = new Promise((resolve, reject) => {
      loading = true
      resolve(network.run('Doom 64 Free Download PC Game Full Version'))
    }) as Promise<string>

    output = await res
    loading = false
    console.log('__________', output)
    console.log('__________LOADING', loading)
  }
</script>

<svelte:head>
  <script src="/scripts/brain.js"></script>
</svelte:head>

<LayoutAdmin>
  <div class="container">
    <button on:click={run}> Run </button>

    <p>{search} - {output}</p>

    <p>{error}</p>
    <p>{iteration}</p>
  </div>
</LayoutAdmin>

<style>
  p {
    font-size: 1em;
  }
</style>
