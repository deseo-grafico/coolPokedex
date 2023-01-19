


type MyMapDummyType = string | number
export const nums: Array<number> = [1, 2, 3, 4, 5, 6]
const map: Map<MyMapDummyType, string>= new Map()

map.set("carlos", "tartas")
map.set("natalia", "f secos")
map.set(1232, "chocolate")


const a: number = 2
const b: string = "sa"
const c: boolean = true

const div = document.querySelector<HTMLElement>(".my_div")
const input = document.querySelector<HTMLInputElement>(".my_input")
input!.value = "asdadss"