import { Button } from 'antd-mobile';
import type { UserAddButonProps } from './userAddButtonFeature';

const UserAddButton = ({ onClick }: UserAddButonProps) => (
	<Button color='primary' onClick={onClick}>
		Add user
	</Button>
);

export default UserAddButton;
