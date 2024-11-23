import { Picker } from '~/libs/date';

const value = new Date(new Date().setDate(3)).getTime();

const AboutPage = () => (
	<div>
		<div>
			<Picker value={value} />
		</div>
		<div>About us</div>
	</div>
);

export default AboutPage;
