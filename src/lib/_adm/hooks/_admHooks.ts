import { useEffect } from 'react';
import { Form } from 'antd-mobile';

type FormInstance<T> = ReturnType<typeof Form.useForm<T>>[0]

export const useFormReinitialization = () => {
	useEffect(
		() => {
			console.log('Affected.')
		},
		[]
	);
};
