import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface PreferencesStore {
  enableThumbnails: boolean;
  enableAutoplay: boolean;
  sourceOrder: string[];

  setEnableThumbnails(v: boolean): void;
  setEnableAutoplay(v: boolean): void;
  setSourceOrder(v: string[]): void;
}

export const usePreferencesStore = create(
  persist(
    immer<PreferencesStore>((set) => ({
      enableThumbnails: true,
      enableAutoplay: true,
      sourceOrder: [
    "primewire",
    "filmxy",
    "autoembed",
    "m4ufree",
    "catflix",
    "hdrezka",
    "whvx",
    "ee3",
    "nites",
    "insertunit",
    "soapertv",
    "tugaflix",
    "nsbx",
    "moviplus",
  ],
      setEnableThumbnails(v) {
        set((s) => {
          s.enableThumbnails = v;
        });
      },
      setEnableAutoplay(v) {
        set((s) => {
          s.enableAutoplay = v;
        });
      },
      setSourceOrder(v) {
        set((s) => {
          s.sourceOrder = v;
        });
      },
    })),
    {
      name: "__MW::preferences",
    },
  ),
);
