const fetch = require('node-fetch');
const userToken = 'SUA TOKEN AQUI';
const inviteCode = 'SEU SERVIDOR AQUI';

fetch(`https://discord.com/api/v8/invites/${inviteCode}`, {
				method: 'POST',
				headers: {
					authorization: `${userToken}`,
				},
			}).then(userRes => userRes.json())
			.then(console.log);
