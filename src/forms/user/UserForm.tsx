import { Form, Input } from 'antd-mobile';

const UserForm = ({ form, initialValues }) => (
	<Form
		form={form}
		initialValues={initialValues}
		layout='horizontal'
		onFinish={(values) => console.log(values)}
	>
		<Form.Item label='Age' name='age' required>
			<Input type='number' />
		</Form.Item>
	</Form>
);

export default UserForm;
