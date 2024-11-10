import { Form, Input } from 'antd-mobile';
import { useFormReinitialization } from '~/mods/antdMobile';
import { useInitialValues } from './hooks';
import { UserFormProps } from '../forms';

const UserForm = ({ form }: UserFormProps) => {
	const { values } = useInitialValues();

	useFormReinitialization(form, values);

	return (
		<Form
			form={form}
			initialValues={values}
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
