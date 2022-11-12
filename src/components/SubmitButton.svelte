<script lang="ts">
  export let loading: boolean, text: string

  let refClock: any,
    ref: any,
    clock = false

  async function timer(
    func: () => void,
    time: number,
    response?: string
  ): Promise<string> {
    const promiseTimer = (): Promise<string> =>
      new Promise((resolve) => {
        setTimeout(() => {
          func()
          resolve(response || '')
        }, time)
      })

    return await promiseTimer()
  }

  async function handleChange() {
    const height = ref.offsetHeight,
      width = ref.offsetWidth
    if (loading) {
      clock = true
      refClock.style = ''
      ref.style = ''
      await timer(() => {
        ref.style.opacity = 0
        refClock.style.zIndex = 1
        refClock.innerText = ''
        refClock.style.opacity = 1
        refClock.style.display = 'initial'
        refClock.setAttribute('data-clock', 'true')
      }, 100)

      refClock.style.borderRadius = '50%'
      refClock.style.left = width / 2 - height / 2 + 'px'
      refClock.style.right = width / 2 - height / 2 + 'px'
      return
    } else {
      ref.style.opacity = 0
      refClock.setAttribute('data-clock', 'false')
      refClock.style.display = 'initial'
      refClock.style.borderRadius = '10px'
      refClock.style.left = '0'
      refClock.style.right = '0'
      refClock.style.zIndex = 1
      refClock.style.background = 'var(--color-second)'
      refClock.style.borderColor = 'var(--color-second)'

      await timer(() => {
        refClock.style.left = '0'
        refClock.style.right = '0'

        refClock.setAttribute('data-clock', 'false')
        refClock.style.borderRadius = '30px'
        refClock.style.background = 'var(--color-arrd)'
      }, 400)

      await timer(() => {
        ref.style.opacity = 1
        refClock.style.opacity = 0
      }, 300)

      await timer(() => {
        clock = false
        refClock.style = ''
        ref.style = ''
      }, 300)
      clock = false
    }
  }

  $: if (clock !== loading) {
    handleChange()
  }
</script>

<div class="container">
  <button class="buttonValid" disabled={loading} bind:this={ref} type="submit">
    {text}
  </button>
  <div
    class="clock"
    data-invisible={!loading}
    bind:this={refClock}
    data-clock={clock}
  />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .buttonValid,
  .clock {
    border: 3px solid
      hsl(var(--color-red-hue), var(--color-red-sat), var(--color-red-light));
    background: hsl(
      var(--color-red-hue),
      var(--color-red-sat),
      var(--color-red-light)
    );
    padding: 7px;
  }

  .buttonValid,
  .clock {
    background: hsl(
      var(--color-red-hue),
      var(--color-red-sat),
      var(--color-red-light)
    );
  }

  .clock {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 300ms ease-in-out;
    opacity: 0;
    text-align: center;
  }

  .clock[data-invisible='true'] {
    z-index: -1;
    display: none;
  }

  .clock[data-clock='true'] {
    border-radius: 50%;
    background: white;
  }

  .clock[data-clock='true']:before,
  .clock[data-clock='true']:after {
    content: '';
    position: absolute;
    background: hsl(
      var(--color-blue-hue),
      var(--color-blue-sat),
      var(--color-blue-light)
    );
    height: 2px;
    left: 50%;
    border-radius: 10px;
    transform-origin: 0;
    opacity: 0;
    top: calc(50% - 1px);
  }

  .clock[data-clock='true']:before {
    right: 5%;
    animation: 1000ms 100ms linear clock infinite;
  }

  .clock[data-clock='true']:after {
    right: 10%;
    animation: 5000ms 100ms linear clock infinite;
  }

  @keyframes clock {
    from {
      transform: rotate(0deg);
      opacity: 1;
    }

    to {
      transform: rotate(360deg);
      opacity: 1;
    }
  }
</style>
