interface AppConfig {
  IDENTITY_API: string;
  GAME_API: string;
}
export const config: AppConfig = {
  IDENTITY_API: import.meta.env.VITE_IDENTITY_API_URL ?? "",
  GAME_API: import.meta.env.VITE_GAME_API_URL ?? ""
}