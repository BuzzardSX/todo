import { Form, Input } from 'antd-mobile';

const UserForm = ({ form, initialValues }) => (
	<Form
		form={form}
		initialValues={initialValues}
		layout='horizontal'
	>
		<Form.Item label='Name' name='name' required>
			<Input />
		</Form.Item>
		<Form.Item label='Age' name='age' required>
			<Input type='number' />
		</Form.Item>
	</Form>
);

export default UserForm;
