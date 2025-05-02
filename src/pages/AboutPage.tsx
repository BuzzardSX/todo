import { EditableText, Text } from '~/libs/react/components';
import Button from '~/libs/react/components/Button';
import HeadOutlet from '~/libs/react/components/HeadOutlet';

const AboutPage = () => (
	<div>
		<HeadOutlet>
			WTF
		</HeadOutlet>
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
