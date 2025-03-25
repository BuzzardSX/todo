import { Button, EditableText, Text } from '~/libs/react/components';

const AboutPage = () => (
	<div>
		<div>
			<EditableText />
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
