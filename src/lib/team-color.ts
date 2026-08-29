/** Cor de identidade (uniforme/escudo) dos times mais tradicionais das competições
 * cobertas pelo site, para colorir gráficos sem depender de extração automática
 * de imagem (que se mostrou pouco confiável — ex: escudos com detalhes/fundo
 * que fazem a "cor predominante" calculada não bater com a cor real do time). */

// Palavra-chave (buscada como substring do nome do time, case-insensitive e sem
// acentos) -> cor hexadecimal. A ordem importa: entradas mais específicas devem
// vir antes de entradas mais genéricas que poderiam colidir com elas (ex: "inter
// milan" antes de "milan", para não capturar o Inter quando o time é o Milan).
const KNOWN_TEAM_COLORS: [keyword: string, hex: string][] = [
  // Brasileirão Série A
  ['flamengo', '#E31E24'],
  ['palmeiras', '#0C6B3D'],
  ['corinthians', '#1E2A38'],
  ['mineiro', '#3A2318'],
  ['fluminense', '#8C1D40'],
  ['cruzeiro', '#0B3D91'],
  ['bahia', '#0F4C9C'],
  ['bragantino', '#C81E2C'],
  ['coritiba', '#0F8C3B'],
  ['paranaense', '#B01E28'],
  ['sao paulo', '#B7202B'],
  ['gremio', '#005CA9'],
  ['internacional', '#D2122E'],
  ['botafogo', '#0E0E0E'],
  ['vasco', '#0D1A2B'],
  ['santos', '#141414'],
  ['fortaleza', '#005C97'],
  ['sport', '#B10A2B'],
  ['ceara', '#0B3D91'],
  ['vitoria', '#B7292E'],
  ['juventude', '#0F7B3E'],
  ['mirassol', '#E0AC00'],
  // Premier League
  ['manchester city', '#6CABDD'],
  ['arsenal', '#EF0107'],
  ['liverpool', '#C8102E'],
  ['chelsea', '#034694'],
  ['manchester united', '#DA291C'],
  ['tottenham', '#132257'],
  ['newcastle', '#241F20'],
  ['aston villa', '#670E36'],
  ['west ham', '#7A263A'],
  ['brighton', '#0057B8'],
  ['wolverhampton', '#FDB913'],
  ['wolves', '#FDB913'],
  ['everton', '#003399'],
  ['crystal palace', '#1B458F'],
  ['fulham', '#1A1A1A'],
  ['brentford', '#E30613'],
  ['nottingham', '#DD0000'],
  ['bournemouth', '#DA291C'],
  ['leeds', '#FFCD00'],
  ['sunderland', '#EB172B'],
  ['burnley', '#6C1D45'],
  // La Liga
  ['real madrid', '#2B3990'],
  ['barcelona', '#A50044'],
  ['atletico madrid', '#CB3524'],
  ['sevilla', '#D31145'],
  ['real betis', '#0BB363'],
  ['villarreal', '#E8B400'],
  ['athletic', '#EE2523'],
  ['real sociedad', '#0033A0'],
  ['valencia', '#EE3524'],
  ['celta', '#4A90D9'],
  ['osasuna', '#D2122E'],
  ['girona', '#CB1517'],
  ['las palmas', '#E8C200'],
  ['getafe', '#005999'],
  ['rayo vallecano', '#E2001A'],
  ['mallorca', '#CC0000'],
  ['alaves', '#1F4E8C'],
  // Serie A (Itália)
  ['inter milan', '#010E80'],
  ['internazionale', '#010E80'],
  ['milan', '#FB090B'],
  ['juventus', '#1C1C1C'],
  ['napoli', '#0090D4'],
  ['roma', '#8E1F2F'],
  ['lazio', '#4FA8D8'],
  ['atalanta', '#1E71B8'],
  ['fiorentina', '#5C2D91'],
  ['torino', '#7B1E1E'],
  ['bologna', '#8B1D2C'],
  ['udinese', '#1A1A1A'],
  ['genoa', '#B71234'],
  ['cagliari', '#9E1B32'],
  ['parma', '#E0B400'],
  ['como', '#003DA5'],
  ['verona', '#002B5C'],
  ['lecce', '#E0B400'],
  ['empoli', '#003DA5'],
  ['monza', '#B7202B'],
  ['venezia', '#FF6E00'],
  ['cremonese', '#B7202B'],
  ['pisa', '#003DA5'],
  // Bundesliga
  ['bayern', '#DC052D'],
  ['dortmund', '#F5D000'],
  ['leipzig', '#DD0741'],
  ['leverkusen', '#E32221'],
  ['frankfurt', '#E1000F'],
  ['wolfsburg', '#65B32E'],
  ['monchengladbach', '#1A1A1A'],
  ['mönchengladbach', '#1A1A1A'],
  ['freiburg', '#B7202B'],
  ['hoffenheim', '#1961B5'],
  ['union berlin', '#EB1923'],
  ['stuttgart', '#E0001C'],
  ['bremen', '#1A9C4A'],
  ['mainz', '#C3141E'],
  ['augsburg', '#BA3733'],
  ['koln', '#ED1C24'],
  ['köln', '#ED1C24'],
  ['hamburg', '#0C1C8C'],
  ['heidenheim', '#B7202B'],
  ['pauli', '#8B4513'],
  // Ligue 1
  ['paris saint-germain', '#004170'],
  ['psg', '#004170'],
  ['marseille', '#2FA0DC'],
  ['monaco', '#E2001A'],
  ['lyon', '#1A2E5A'],
  ['lille', '#C8102E'],
  ['lens', '#E0B400'],
  ['rennes', '#E2001A'],
  ['nice', '#D2122E'],
  ['strasbourg', '#1A50A0'],
  ['toulouse', '#6C2C91'],
  ['nantes', '#E0AC00'],
  ['reims', '#E2001A'],
  ['brest', '#E2001A'],
  ['auxerre', '#1A3A8C'],
  ['angers', '#1A1A1A'],
  ['le havre', '#1A50A0'],
  ['metz', '#8C1D40'],
  ['paris fc', '#1A2E5A'],
];

function normalize(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, ''); // remove acentos
}

/** Paleta usada como fallback para times sem cor de identidade conhecida. */
export const DEFAULT_FALLBACK_COLORS = [
  '#d1590f',
  '#1b2947',
  '#7686a8',
  '#b3450c',
  '#3d517d',
  '#e57426',
  '#8a5a2b',
  '#4a6b5a',
  '#6b4c8a',
  '#2b6b7a',
];

/** Busca a cor de identidade conhecida de um time pelo nome (casa própria de
 * palavras-chave, não depende de bater o nome exato retornado pela API).
 * Retorna `null` se o time não estiver na lista — o chamador deve usar uma
 * cor de fallback nesse caso. */
export function lookupTeamColor(teamName: string): string | null {
  const normalized = normalize(teamName);
  for (const [keyword, hex] of KNOWN_TEAM_COLORS) {
    if (normalized.includes(keyword)) return hex;
  }
  return null;
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
  const toHex = (v: number) =>
    Math.max(0, Math.min(255, Math.round((v + m) * 255)))
      .toString(16)
      .padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

interface ColorEntry {
  hex: string;
  /** true = cor de identidade real do time (ex: veio de lookupTeamColor) —
   * nunca é alterada, mesmo que fique parecida com outra cor já usada. */
  protect?: boolean;
}

/**
 * Recebe cores na ordem de prioridade (ex: posição na tabela) e afasta o
 * matiz de qualquer cor **não protegida** que fique parecida demais com uma
 * cor já "reservada" antes dela, mantendo a luminosidade original — evita
 * que uma cor de fallback aleatória coincida com uma cor de identidade real
 * já usada por outro time. Cores marcadas com `protect: true` (identidade
 * real conhecida do time) nunca são alteradas — a precisão da cor real tem
 * prioridade sobre a distinção visual nesse caso; times reais com cores
 * parecidas (ex: dois times "vermelho e preto") contam com linhas finas no
 * gráfico para continuar dando pra distinguir numa sobreposição.
 */
export function pickDistinctColors(colors: ColorEntry[]): string[] {
  const used: [number, number, number][] = [];
  return colors.map(({ hex, protect }) => {
    let [h, s, l] = hexToHsl(hex);
    if (!protect) {
      if (s < 8) s = 12; // dá "o que afastar" para cores quase sem saturação (preto/cinza)
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
    }
    used.push([h, s, l]);
    return hslToHex(h, s, l);
  });
}
