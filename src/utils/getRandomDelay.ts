export function getRandomDelay(min = 1200, max = 3500) {
  // Simulates "thinking" time
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomDelay = () => new Promise(resolve => setTimeout(resolve, getRandomDelay()));