import type { IApiRef } from '../types'
import { watch } from 'vue'

export const watchApi = <T extends IApiRef<any, any>>(
  apiFn: (...args: any) => T,
  cb: (response: ReturnType<typeof apiFn>) => void,
): void => {
  const response = apiFn()

  watch(response.isLoading, () => {
    if (response.isLoading.value) return
    if (typeof cb === 'function') cb(response)
  })
}
