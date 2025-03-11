import { runtimeConfig } from '../../config/runrimeConfig.ts'

export const useApi = async (route: string, ops?: any): Promise<void> => {
  const api = runtimeConfig.API
  const server = ops?.server ?? 'api'
  const url = ``

  await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'no-cors',
  }).then((r) => r.json())
}
