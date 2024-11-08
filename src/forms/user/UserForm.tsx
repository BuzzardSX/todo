import { Form, Input } from 'antd-mobile';

const UserForm = () => {
	return (
		<Form>
			<Form.Item name='age'>
				<Input />
			</Form.Item>
		</Form>
	);
};

export default UserForm;
