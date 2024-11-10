import { useEffect } from 'react';
import { Form } from 'antd-mobile';

type FormInstance<Values> = ReturnType<typeof Form.useForm<Values>>[0]

export const useFormReinitialization =
	<Values>(form: FormInstance<Values>, initialValues: Values) => {
		useEffect(
			() => {
				console.log('Affected');
			},
			[initialValues]
		);
	};
