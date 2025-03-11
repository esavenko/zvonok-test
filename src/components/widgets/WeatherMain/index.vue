<script setup lang="ts">
import { WeatherDetail } from '@/components/features/WeatherDetail'
import { WeatherHome } from '@/components/features/WeatherHome'
import { Container } from '@/components/layout/Container'
import { computed, onBeforeMount, ref } from 'vue'
import { useWeatherStore } from '@/store/useWeatherStore.ts'
const weatherStore = useWeatherStore()
const tabs = [
  { component: WeatherHome, name: 'Главная' },
  { component: WeatherDetail, name: 'Погода за неделю' },
]
const currentTab = ref(0)
const test = computed(() => weatherStore.weather)
onBeforeMount(() => {
  weatherStore.getWeather()
})
</script>

<template>
  <Container>
    {{ test }}
    <header class="weatherMain">
      <div class="weatherMain__tabs">
        <button
          v-for="(tab, idx) in tabs"
          :key="tab.name"
          :class="['weatherMain__tab', { active: idx === currentTab }]"
          type="button"
          @click="currentTab = idx"
        >
          {{ tab.name }}
        </button>
      </div>
      <div class="weatherMain__select">select</div>
    </header>
    <div class="weatherMain__body">
      <Transition name="fadeDelay" mode="out-in">
        <Component :is="tabs[currentTab].component" />
      </Transition>
    </div>
  </Container>
</template>

<style scoped lang="scss">
@use '@/assets/scss/valiables' as *;

.weatherMain {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__tabs {
    display: flex;
    align-items: center;
    background: $primaryBg;
    border-radius: 10px;
  }

  &__tab {
    background: transparent;
    border: none;
    outline: none;
    color: $primaryHover;
    font-size: 22px;
    font-weight: 500;
    cursor: pointer;
    padding: 10px 15px;

    &.active {
      color: $primary;
    }

    &:first-child {
      border-right: 0.5px solid $primaryHover;
    }
  }
}
</style>
