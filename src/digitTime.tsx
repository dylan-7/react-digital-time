import * as React from 'react'

export default function DigitTime({ time, dotStyle }: { time: string, dotStyle: object }) {
    const [hh, mm, ss] = time?.split(':')
    // 一个数字总共7条边线
    const trapezoid: number[] = [1, 2, 3, 4, 5, 6, 7]
    // 边线的样式编号，对应的编号组成数字
    const numberLine: {[prop: string]: number[]} = {
        '0': [1, 2, 3, 5, 6, 7],
        '1': [3, 6],
        '2': [1, 3, 4, 5, 7],
        '3': [1, 3, 4, 6, 7],
        '4': [2, 3, 4, 6],
        '5': [1, 2, 4, 6, 7],
        '6': [1, 2, 4, 5, 6, 7],
        '7': [1, 3, 6],
        '8': [1, 2, 3, 4, 5, 6, 7],
        '9': [1, 2, 3, 4, 6, 7],
    }
    const digitNumber = (value: string, index: number) => {
        return (
            <div className="digital-clock-digit" key={index}>
                {trapezoid.map((divNumber, i) => {
                    const isActive = numberLine[value].includes(divNumber) // 当前数字是否包含这个编号
                    return (
                        <div
                            key={i}
                            className={`digital-clock-shape ${isActive ? `digital-clock${divNumber}-shape` : `digital-clock${divNumber}-shape passive`}`}
                        ></div>
                    )
                })}
            </div>
        )
    }
    return (
        <div className="digital-clock-number digital-clock-time">
            <div className="digital-clock-two">
                {hh.split('').map((v, i) => digitNumber(v, i))}
            </div>
            <span className="digital-separate">
                <span className="dot" style={dotStyle}></span>
                <span className="dot" style={dotStyle}></span>
            </span>
            <div className="digital-clock-two">
                {mm.split('').map((v, i) => digitNumber(v, i))}
            </div>
            <div className="digital-clock-two">
                {ss.split('').map((v, i) => digitNumber(v, i))}
            </div>
        </div>
    )
}
