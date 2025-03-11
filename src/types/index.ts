import type { Ref, UnwrapRef } from 'vue'

export interface IApiRef<T = null, E = null> {
  isLoading: Ref<UnwrapRef<boolean>>
  data: Ref<UnwrapRef<T | null>>
  error: Ref<UnwrapRef<E | null>>
}

export interface IApiParams {
  query?: string
  body?: RequestInit['body'] | Record<string, any>
  signal?: AbortSignal
  server: string
}
