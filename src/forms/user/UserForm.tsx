import { Form, Input } from 'antd-mobile';

const UserForm = ({ initialValues }) => (
	<Form initialValues={initialValues} layout='horizontal'>
		<Form.Item label='Age' name='age'>
			<Input type='number' />
		</Form.Item>
	</Form>
);

export default UserForm;
