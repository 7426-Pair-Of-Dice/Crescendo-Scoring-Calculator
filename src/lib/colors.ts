export function lowerColorBrightness(hexColor: string): string {
    const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
        const bigint = parseInt(hex.slice(1), 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    };

    const rgbToHsl = ({ r, g, b }: { r: number; g: number; b: number }): { h: number; s: number; l: number } => {
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 0, s = 0, l = (max + min) / 2;
        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) :
                max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h /= 6;
        }
        return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
    };

    const hslToRgb = ({ h, s, l }: { h: number; s: number; l: number }): { r: number; g: number; b: number } => {
        s /= 100;
        l /= 100;
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = l - c / 2;
        let r = 0, g = 0, b = 0;

        if (h < 60) { r = c; g = x; }
        else if (h < 120) { r = x; g = c; }
        else if (h < 180) { g = c; b = x; }
        else if (h < 240) { g = x; b = c; }
        else if (h < 300) { r = x; b = c; }
        else { r = c; b = x; }

        return {
            r: Math.round((r + m) * 255),
            g: Math.round((g + m) * 255),
            b: Math.round((b + m) * 255)
        };
    };

    const rgbToHex = ({ r, g, b }: { r: number; g: number; b: number }): string => {
        const toHex = (c: number) => c.toString(16).padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    const rgb = hexToRgb(hexColor);
    const hsl = rgbToHsl(rgb);
    hsl.l = 10;
    const adjustedRgb = hslToRgb(hsl);
    return rgbToHex(adjustedRgb);
}

export function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
