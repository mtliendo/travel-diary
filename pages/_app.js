import '../styles/globals.css'
import { Amplify } from 'aws-amplify'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const config = {
	aws_project_region: process.env.NEXT_PUBLIC_region,
	Auth: {
		region: process.env.NEXT_PUBLIC_region,
		userPoolId: process.env.NEXT_PUBLIC_userpoolId,
		userPoolWebClientId: process.env.NEXT_PUBLIC_userPoolWebClientId,
		identityPoolId: process.env.NEXT_PUBLIC_identityPoolId,
	},
	Storage: {
		AWSS3: {
			bucket: process.env.NEXT_PUBLIC_bucket,
			region: process.env.NEXT_PUBLIC_region,
		},
	},
	aws_appsync_graphqlEndpoint: process.env.NEXT_PUBLIC_appSyncURL,
	aws_appsync_region: process.env.NEXT_PUBLIC_region,
	aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
}

Amplify.configure(config)

export default function App({ Component, pageProps }) {
	return (
		<AmplifyProvider>
			<Component {...pageProps} />
		</AmplifyProvider>
	)
}
