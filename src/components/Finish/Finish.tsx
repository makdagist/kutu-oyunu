import React from 'react';

import finishImg from '@/assets/finish.svg';
import { Button } from '@/components';

interface IFinish {
	moves: number;
	onPlayClick: () => void;
	onQuitClick: () => void;
}

export const Finish: React.FC<IFinish> = ({
	moves,
	onPlayClick,
	onQuitClick
}) => {
	return (
		<div
			className='flex flex-col h-screen w-screen items-center justify-center text-3xl selection:bg-text selection:text-bg'
			data-testid='finish'
		>
			<div>Tebrikler</div>
			<div>
				<span className='font-bold'>{moves}</span> hareket ile kazandın
			</div>
			<img src={finishImg} alt='finish' draggable={false} />
			<div className='flex gap-8'>
				<Button onClick={onPlayClick}>Tekrar Oyna</Button>
				<Button onClick={onQuitClick}>Çık</Button>
			</div>
		</div>
	);
};
