import { Button } from 'antd-mobile';
import { UserForm } from '~/forms';
import { useInitialValues } from './hooks';

const UserAddButton = () => {
	const initialValues = useInitialValues();

	return (
		<div>
			<div>
				<Button>Add user</Button>
			</div>
			<div>
				<UserForm initialValues={initialValues} />
			</div>
		</div>
	);
};

export default UserAddButton;
