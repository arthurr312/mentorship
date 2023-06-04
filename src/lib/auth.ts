import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import { prisma } from './prisma';

function getGitHubCredentials() {
	const clientId = process.env.GITHUB_CLIENT_ID;
	const clientSecret = process.env.GITHUB_CLIENT_SECRET;

	if (!clientId || !clientSecret) {
		throw new Error('GitHub credentials are missing');
	}

	return { clientId, clientSecret };
}

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt'
	},
	pages: {
		signIn: '/login'
	},
	providers: [
		GitHubProvider({
			clientId: getGitHubCredentials().clientId,
			clientSecret: getGitHubCredentials().clientSecret
		})
	],
	adapter: PrismaAdapter(prisma),
	callbacks: {
		redirect() {
			return '/produto';
		}
	}
};