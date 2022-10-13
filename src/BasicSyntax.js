export function romanToInteger(str) {
    let result = 0;
    const dict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    for (let i = 0; i < str.length; i++) {
        const curr = dict[str[i]];
        const next = dict[str[i + 1]];
        if (curr < next) {
            result -= curr;
        } else {
            result += curr;
        }
    }
    return result;
}
