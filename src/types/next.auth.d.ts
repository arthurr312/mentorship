import type { User } from 'next-auth';
import 'next-auth/jwt';

type UserId = number;

declare module 'next-auth/jwt' {
	interface JWT {
		id: UserId;
		email: string;
	}
}

declare module 'next-auth' {
	interface Session {
		user: User & {
			email: string;
			id: UserId;
		};
	}
}