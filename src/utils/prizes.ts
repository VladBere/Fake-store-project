export const prizes = [
    { name: '5% OFF', probability: 0.3, color: '', index: 0 },
    { name: '10% OFF', probability: 0.25, color: '', index: 1 },
    { name: '15% OFF', probability: 0.2, color: '', index: 2 },
    { name: '20% OFF', probability: 0.15, color: '', index: 3 },
    { name: 'Free Item', probability: 0.05, color: '', index: 4 },
    { name: 'Try Again', probability: 0.05, color: '', index: 5 }
]

export function getRandomPrize() {
    const random = Math.random()
    let cumulativeProbability = 0

    for (const prize of prizes) {
        cumulativeProbability += prize.probability
        if (random <= cumulativeProbability) {
            return prize
        }
    }

    return prizes[prizes.length - 1] // Fallback to last prize
}

export function getPrizeByIndex(index: number) {
    return prizes[index % prizes.length]
}
