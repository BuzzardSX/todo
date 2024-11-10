import { Form, Input } from 'antd-mobile';
import { useFormReinitialization } from '~/lib/_adm';
import { useInitialValues } from './hooks';
import { UserFormProps } from '../forms';

const UserForm = ({ form }: UserFormProps) => {
	const [initialValues] = useInitialValues();

	useFormReinitialization(form, initialValues);

	return (
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
}

export default UserForm;
