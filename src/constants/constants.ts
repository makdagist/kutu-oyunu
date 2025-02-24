import { IMenuItem, Level, LevelRangeSize } from '@/models';

export const MENU: IMenuItem[] = [
	{ title: 'Oyunu Başlat', link: '/play', id: 1 },
	{ title: 'Ayarlar', link: '/settings', id: 2 },
	{ title: 'Skor', link: '/score', id: 3 }
];

export const CARDS_AMOUNT = {
	[Level.One]: 12,
	[Level.Two]: 24,
	[Level.Three]: 36,
	[Level.Four]: 48,
	[Level.Five]: 60
};

export const LEVEL_RANGE_SIZE = {
	[LevelRangeSize.Small]: { width: '16px', height: '16px' },
	[LevelRangeSize.Medium]: { width: '24px', height: '24px' },
	[LevelRangeSize.Large]: { width: '32px', height: '32px' }
};
