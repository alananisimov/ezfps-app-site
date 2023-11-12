export interface advSettings {
    csPath: string;
    dotaPath: string;
    mode: string;
  };
  export type ConfigData = {
    mode: string
    dota_path: string
    cs_path: string
  }
  export type AppConfig = {
    linux: { mode: string; dota_path: string; cs_path: string };
    macos: { mode: string; dota_path: string; cs_path: string };
    windows: { mode: string; dota_path: string; cs_path: string };
    default: { mode: string; dota_path: string; cs_path: string };
  };