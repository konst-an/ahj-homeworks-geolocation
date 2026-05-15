export default function parseCoordinates(value) {
    if (!value) {
        throw new Error('Пустая строка');
    }

    const cleaned = value
        .trim()
        .replace('[', '')
        .replace(']', '')
        .replace('−', '-');

    const parts = cleaned.split(',');

    if (parts.length !== 2) {
        throw new Error('Неверный формат');
    }

    const lat = parseFloat(parts[0].trim());
    const lng = parseFloat(parts[1].trim());

    if (Number.isNaN(lat) || Number.isNaN(lng)) {
        throw new Error('Неверные координаты');
    }

    return {
        lat,
        lng,
    };
}