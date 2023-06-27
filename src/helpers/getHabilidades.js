import { habilidades } from "../data/habilidades"

export const getHabilidades = (category) => {
    if(category === 'all') return habilidades
    return habilidades.filter(habilidad => habilidad.category === category)
}