import { Form, Input } from 'antd-mobile';
import { useInitialValues } from './hooks';

const UserForm = () => {
	const initialValues = useInitialValues();

	return (
		<Form initialValues={initialValues} layout='horizontal'>
			<Form.Item label='Age' name='age'>
				<Input />
			</Form.Item>
		</Form>
	);
};

export default UserForm;
