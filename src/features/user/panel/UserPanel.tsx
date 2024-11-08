import { UserForm } from '~/forms';
import { useInitialValues } from './hooks';

const UserPanel = () => {
	const initialValues = useInitialValues();

	return (
		<div>
			<UserForm initialValues={initialValues} />
		</div>
	);
};

export default UserPanel;
