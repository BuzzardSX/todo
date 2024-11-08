import { UserForm } from '~/forms';
import { UserAddButton, UserAddModal } from '~/features/user';

const initialValues = { age: 18 };

const DefaultPage = () => {
	return (
		<div>
			<div>
				<UserAddButton />
			</div>
			<div>
				<UserAddModal
					content={<UserForm initialValues={initialValues} />}
					onClose={() => {}}
					visible={true} />
			</div>
		</div>
	);
}

export default DefaultPage;
