import { lazy } from 'react';
import { Form } from 'antd-mobile';

interface UserFormValues {
	name: string;
	age: number;
}

type UserFormInstance = ReturnType<typeof Form.useForm<UserFormValues>>[0];

export interface UserFormProps {
	form: UserFormInstance
}

export const UserForm = lazy(() => import('./user'));

export { default as LoadingUserForm } from './loadingUser';
