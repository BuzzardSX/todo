import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface HeadOutletProps {
	children: ReactNode;
}

const HeadOutlet = ({ children }: HeadOutletProps) => createPortal(children, document.head);

export default HeadOutlet;
