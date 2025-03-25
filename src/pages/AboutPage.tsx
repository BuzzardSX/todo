import { Button, Text } from '~/libs/react/components';

interface EditableTextProps {
	content: string;
}

const EditableText = ({ content }: EditableTextProps) => {
	return (
		<div contentEditable />
	);
};

const AboutPage = () => (
	<div>
		<div>
			<p contentEditable={true} onInput={() => console.log('!!!')}>
				Default text.
			</p>
		</div>
		<div>
			<Button>Default</Button>
		</div>
		<div>
			<Button type='primary'>Primary</Button>
		</div>
		<Text>About us</Text>
	</div>
);

export default AboutPage;
