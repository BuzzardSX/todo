import { UserAddButton, UserAddModal } from '~/features/user';

const DefaultPage = () => (
	<div>
		<div>
			<UserAddButton />
		</div>
		<div>
			<UserAddModal content={<div>Yes</div>} onClose={() => {}} visible={true} />
		</div>
	</div>
);

export default DefaultPage;
