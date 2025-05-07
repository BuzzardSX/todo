import { type FormEventHandler, useState } from 'react';

const EditableText = () => {
	const [content, setContent] = useState('');

	const inputHandler: FormEventHandler<HTMLDivElement> = (e) => {
		setContent(e.currentTarget.innerHTML);
	};

	return (
		<div
			contentEditable
			dangerouslySetInnerHTML={{ __html: content }}
			onInput={inputHandler}
		/>
	);
};

export default EditableText;
