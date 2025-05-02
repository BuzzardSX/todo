import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

const HeadOutlet = ({ children }: { children: ReactNode }) => {
	return (
		<>
			{createPortal(children, document.head)}
		</>
	);
};

export default HeadOutlet;
