import { Form, Input } from 'antd-mobile';
import { useInitialValues } from './hooks';

const UserForm = () => {
	const initialValues = useInitialValues();

	return (
		<Form initialValues={initialValues}>
			<Form.Item name='age'>
				<Input />
			</Form.Item>
		</Form>
	);
};

export default UserForm;
