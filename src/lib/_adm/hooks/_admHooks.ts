import { useEffect } from 'react';
import { Form } from 'antd-mobile';

type FormInstance<Values> = ReturnType<typeof Form.useForm<Values>>[0]

export const useFormReinitialization = <Values = any>(form: FormInstance<Values>) => {
	useEffect(
		() => {
			console.warn('Affected.');

			console.log(form.getFieldsValue());
		},
		[]
	);
};
