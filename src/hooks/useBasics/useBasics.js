import { create } from "zustand";

const useBasic = create((set) => ({
  screenSize: "SMALL_SCREEN",
  setScreenSize: (screenWidth) => {
    let myScreenSize;
    if (screenWidth < 768) {
      myScreenSize = "SMALL_SCREEN";
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      myScreenSize = "MEDIUM_SCREEN";
    } else if (screenWidth >= 1024) {
      myScreenSize = "LARGE_SCREEN";
    }
    set((state) => ({
      ...state,
      screenSize: myScreenSize,
    }));
  },
}));

export default useBasic;
