import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [{ title: 'New Remix SPA' }, { name: 'description', content: 'Welcome to Remix (SPA Mode)!' }];
};

export default function Index() {
	return (
		<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
			<h1>Welcome to Remix (SPA Mode)</h1>
			<ul>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/protocol">View Protocol</a>
				</li>
			</ul>
		</div>
	);
}
