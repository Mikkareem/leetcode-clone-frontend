export function camelCase(a: string): string {
    let lower = a.toLowerCase().split("")
    lower[0] = String.fromCharCode(lower[0].charCodeAt(0) - 32)
    let camel = lower.join("")
    return camel
}