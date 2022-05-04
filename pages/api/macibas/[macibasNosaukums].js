import { macibas } from '../../../data'

export default function handler({ query: { macibasNosaukums }}, res) {
    const filtered = macibas.filter((maciba) => maciba.macibasNosaukums === macibasNosaukums)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0]);
    } else {
        res.status(404).json({ message: `Maciba not found. GIVEN MACIBA: '${macibasNosaukums}'`})
    }
}