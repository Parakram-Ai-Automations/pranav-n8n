import type { ICredentialType, INodeProperties, Icon } from 'n8n-workflow';

export class MicrosoftOAuth2Api implements ICredentialType {
	name = 'microsoftOAuth2Api';

	extends = ['oAuth2Api'];

	icon: Icon = 'file:icons/Microsoft.svg';

	displayName = 'Microsoft OAuth2 API';

	documentationUrl = 'microsoft';

	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		// Info about the tenantID
		// https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols#endpoints
		// Endpoints `/common` can only be used for multitenant apps
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'string',
			default: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'string',
			default: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
		},
		{
			displayName: 'Microsoft Graph API Base URL',
			name: 'baseUrl',
			type: 'options',
			options: [
				{
					name: 'Global (https://graph.microsoft.com)',
					value: 'https://graph.microsoft.com',
				},
				{
					name: 'US Government (https://graph.microsoft.us)',
					value: 'https://graph.microsoft.us',
				},
				{
					name: 'US Government DOD (https://dod-graph.microsoft.us)',
					value: 'https://dod-graph.microsoft.us',
				},
				{
					name: 'China (https://microsoftgraph.chinacloudapi.cn)',
					value: 'https://microsoftgraph.chinacloudapi.cn',
				},
			],
			default: 'https://graph.microsoft.com',
			required: true,
			description:
				'The base URL for the Microsoft Graph API. Select the correct endpoint for your cloud environment.',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: 'response_mode=query',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
	];
}
