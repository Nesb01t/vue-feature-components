import { defineStore } from "pinia";
import { ref } from "vue";

const HealthStore = () => {
  return defineStore(`health`, () => {
    const health = ref(100);

    const add = (val: number): void => {
      health.value += val;
    };
    const increment = (): void => {
      health.value++;
    };
    const decrease = (val: number): void => {
      health.value -= val;
    };
    return {
      health,
      add,
      increment,
      decrease,
    };
  });
};

export const useHealthStore = HealthStore();
