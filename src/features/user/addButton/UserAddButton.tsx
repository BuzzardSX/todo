import { Button } from 'antd-mobile';

const UserAddButton = ({ onClick }) => (
	<Button color='primary' onClick={onClick}>
		Add user
	</Button>
);

export default UserAddButton;
