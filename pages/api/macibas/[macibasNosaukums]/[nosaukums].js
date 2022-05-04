import { macibas } from '../../../../data'

export default function handler({ query: { nosaukums, macibasNosaukums }}, res) {
    const macibasFiltered = macibas.filter((maciba) => maciba.macibasNosaukums === macibasNosaukums)

    if (macibasFiltered.length > 0) {
        const macibasDarbi = macibasFiltered[0].darbi
        macibasDarbi.filter((darbs) => {
            darbs.nosaukums === nosaukums && res.status(200).json(darbs) // (if found)
        })
        // if (filtered.length > 0) res.status(200).json(filtered[0]);
        // else res.status(404).json({ message: `Darbs not found. GIVEN DARBS: '${nosaukums}'`})
        res.status(404).json({ message: `Darbs not found. GIVEN DARBS: '${nosaukums}'`})
    } else res.status(404).json({ message: `Maciba not found. GIVEN MACIBA: '${macibasNosaukums}'`})
}