<template>
  <div
    class="tw-transition tw-duration-500 tw-ease-out-in tw-rounded-full tw-p-1"
    :class="{
      'hover:tw-text-yellow-400': colorTheme === 'tw-dark',
      'hover:tw-text-blue-400': colorTheme === 'tw-light',
    }"
  >
    <button
      class="tw-rounded-md tw-p-2 tw-bg-secondary"
      @click="setColorTheme(colorTheme === 'tw-light' ? 'tw-dark' : 'tw-light')"
    >
      <svg
        v-if="colorTheme === 'tw-dark'"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 20 20"
        class="tw-text-secondary tw-text-2xl tw-cursor-pointer"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <svg
        v-else
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 20 20"
        class="tw-text-secondary tw-text-2xl tw-cursor-pointer"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from '@nuxtjs/composition-api'

type TColorThemes = 'tw-light' | 'tw-dark'

const getInitialTheme = (): TColorThemes => {
  if (!process?.client) return 'tw-light'

  if (window?.localStorage) {
    const storedPrefs: TColorThemes = window.localStorage.getItem(
      'color-theme'
    ) as TColorThemes

    if (storedPrefs === 'tw-light' || storedPrefs === 'tw-dark') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')

    if (userMedia.matches) return 'tw-dark'
  }
  // If you want to use dark theme as the default, return 'dark' instead
  return 'tw-light'
}

export default defineComponent({
  name: 'DarkToggle',

  setup(/* _, ctx: SetupContext */) {
    const colorTheme: Ref<TColorThemes> = ref(getInitialTheme())

    const setColorTheme = (theme: TColorThemes) => {
      const root = window.document.documentElement
      root.classList.remove('tw-light')
      root.classList.remove('tw-dark')

      root.classList.add(theme)
      localStorage.setItem('color-theme', theme)

      colorTheme.value = theme
    }

    onMounted(() => {
      // document.querySelector('html')?.classList.add('tw-dark')
      setColorTheme(colorTheme.value)
    })

    return { colorTheme, setColorTheme }
  },
})
</script>

<style lang="scss" scoped></style>
