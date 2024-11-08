import { UserForm } from '~/forms';
import { UserAddButton, UserAddModal } from '~/features/user';

const DefaultPage = () => (
	<div>
		<div>
			<UserAddButton />
		</div>
		<div>
			<UserAddModal
				content={<UserForm initialValues={{ age: 18 }} />}
				onClose={() => {}}
				visible={true} />
		</div>
	</div>
);

export default DefaultPage;
