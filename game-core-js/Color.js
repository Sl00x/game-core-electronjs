class Color {
    fromRGBA = (r, g, b, a) => {
        return (`rgba(${r}, ${g}, ${b}, ${a})`);
    }

    fromName = (color) => {
        return (`${color}`);
    }

    fromHex = (hexCode) => {
        return (`${hexCode}`);
    }
} export default Color;