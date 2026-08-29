/** Utilitários para estimar e diferenciar a cor predominante de um time a partir do escudo. */

const colorCache = new Map<string, Promise<string | null>>();

/**
 * Estima a cor predominante de uma imagem (ex: escudo de time) desenhando-a
 * num canvas pequeno e tirando a média dos pixels visíveis, ignorando fundo
 * transparente e pixels quase-brancos/quase-pretos (fundo neutro e contorno,
 * que raramente são a cor "de identidade" do escudo).
 *
 * Retorna `null` se a imagem não existir, não carregar, ou se o navegador
 * bloquear a leitura do canvas por CORS — nesses casos o chamador deve usar
 * uma cor de fallback.
 */
export function getDominantColor(url: string | null | undefined): Promise<string | null> {
  if (!url) return Promise.resolve(null);
  const cached = colorCache.get(url);
  if (cached) return cached;

  const promise = new Promise<string | null>((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    const timeout = setTimeout(() => resolve(null), 2000);

    img.onload = () => {
      clearTimeout(timeout);
      try {
        const size = 24;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return resolve(null);
        ctx.drawImage(img, 0, 0, size, size);
        const { data } = ctx.getImageData(0, 0, size, size);

        let r = 0;
        let g = 0;
        let b = 0;
        let count = 0;
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] < 128) continue; // pixel transparente
          const pr = data[i];
          const pg = data[i + 1];
          const pb = data[i + 2];
          const brightness = (pr + pg + pb) / 3;
          if (brightness > 235 || brightness < 20) continue; // fundo branco / contorno preto
          r += pr;
          g += pg;
          b += pb;
          count++;
        }
        if (count === 0) return resolve(null);
        resolve(rgbToHex(Math.round(r / count), Math.round(g / count), Math.round(b / count)));
      } catch {
        resolve(null); // canvas "tainted" por CORS ou outro erro de leitura
      }
    };
    img.onerror = () => {
      clearTimeout(timeout);
      resolve(null);
    };
    img.src = url;
  });

  colorCache.set(url, promise);
  return promise;
}

export function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((v) =>
        Math.max(0, Math.min(255, v))
          .toString(16)
          .padStart(2, '0')
      )
      .join('')
  );
}

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  const d = max - min;
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case r:
        h = ((g - b) / d) % 6;
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }
  return [h, s * 100, l * 100];
}

function hslToHex(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360;
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let [r, g, b] = [0, 0, 0];
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return rgbToHex(Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255));
}

/**
 * Recebe cores na ordem de prioridade (ex: posição na tabela) e afasta o
 * matiz de qualquer cor parecida demais com uma cor já "reservada" antes
 * dela, mantendo saturação/luminosidade originais — evita que dois times
 * com cores próximas (ex: dois times "de vermelho") fiquem indistinguíveis
 * no mesmo gráfico.
 */
export function pickDistinctColors(colors: string[]): string[] {
  const used: [number, number, number][] = [];
  return colors.map((hex) => {
    let [h, s, l] = hexToHsl(hex);
    let attempts = 0;
    while (
      used.some(([usedHue, , usedLightness]) => {
        const hueDiff = Math.min(Math.abs(h - usedHue), 360 - Math.abs(h - usedHue));
        return hueDiff < 18 && Math.abs(l - usedLightness) < 12;
      }) &&
      attempts < 6
    ) {
      h = (h + 45) % 360;
      attempts++;
    }
    used.push([h, s, l]);
    return hslToHex(h, s, l);
  });
}
