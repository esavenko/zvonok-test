import { defineStore } from 'pinia'
import { useApi } from '../composables/useApi.ts'

interface IWeatherStore {
  isLoading: boolean
  weather: any
}

export const useWeatherStore = defineStore('weather', {
  state: (): IWeatherStore => ({
    isLoading: true,
    weather: [],
  }),
  actions: {
    async getWeather() {
      this.isLoading = true

      await useApi()
      // await fetch('https://cat-fact.herokuapp.com/facts').then((r) =>
      //   r.json().then((d) => {
      //     this.isLoading = false
      //     this.weather = d
      //   }),
      // )
    },
  },
})
