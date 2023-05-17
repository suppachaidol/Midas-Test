function getHandScore(input: string): number {
    const cards = input.split(" ");

    let suits: string[] = []
    let nums: number[] = []
    for (let i = 0; i < cards.length; i++) {
        let suit = cards[i][0]
        let num = cards[i].substring(1)
        let num_check = checkFace(num)
        suits.push(suit)
        nums.push(num_check)
    }
    if (checkSameRank(nums) !== 0) {
        return checkSameRank(nums)
    }
    const scoreObj: { s: number, c: number, h: number, d: number } = { s: 0, c: 0, h: 0, d: 0 }

    for (let i = 0; i < suits.length; i++) {
        if (suits[i] === "S") {
            scoreObj.s += nums[i]
        } else if (suits[i] === "C") {
            scoreObj.c += nums[i]
        } else if (suits[i] === "H") {
            scoreObj.h += nums[i]
        } else if (suits[i] === "D") {
            scoreObj.d += nums[i]
        } else {
            break
        }
    }
    
    let score = Math.max(...Object.values(scoreObj))
    return score

}
function checkSameRank(cardArr: number[]): number {
    if (cardArr[0] === 11 && cardArr.every((n) => n === cardArr[0])) {
        return 35
    } else if (cardArr.every((n) => n === cardArr[0])) {
        return 32.5
    } else {
        return 0
    }
}
function checkFace(card: string): number {
    const face = ["J", "Q", "K"]
    if (card === "A") {
        return 11
    } else if (face.includes(card)) {
        return 10
    } else {
        return parseInt(card)
    }
}
console.log(getHandScore("S8 S10 CA"));
console.log(getHandScore("S8 D8 C8"));
console.log(getHandScore("SA DA CA"));
