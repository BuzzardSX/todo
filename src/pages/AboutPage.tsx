import { EditableText, Text } from '~/libs/react/components';
import Button from '~/libs/react/components/Button';

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
