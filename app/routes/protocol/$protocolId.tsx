import { useParams } from 'react-router';

export default function ProtocolView() {
	const params = useParams();
	return (
		<>
			<h3>Protocol:{params.protocolId}</h3>
		</>
	);
}
