interface EditableTextProps {
	content: string;
}

const EditableText = ({ content }: EditableTextProps) => {
	return (
		<div contentEditable />
	);
};

export default EditableText;
