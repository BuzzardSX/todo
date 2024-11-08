import { Button } from 'antd-mobile';
import { UserForm } from '~/forms';
import { useFormInitialValues } from './hooks';

const UserAddButton = () => {
	const formInitialValues = useFormInitialValues();

	return (
		<div>
			<div>
				<Button color='primary'>Add user</Button>
			</div>
			<div>
				<UserForm initialValues={formInitialValues} />
			</div>
		</div>
	);
};

export default UserAddButton;
