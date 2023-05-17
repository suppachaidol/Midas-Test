function getClockAngle(time: string): number {
    const t = time.split(":")
    const hours = parseInt(t[0])
    const minutes = parseInt(t[1])

    const hourAngle = ((hours % 12) + minutes / 60)*30;
    const minuteAngle = minutes * 6;
    let angle = Math.abs(hourAngle - minuteAngle);
    if(angle > 180) angle = 360 - angle
    return angle
}

console.log(getClockAngle("09:00"))
console.log(getClockAngle("17:30"))