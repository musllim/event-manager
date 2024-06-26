import { SERVER_URL, type Event as event } from "schema";
import type z from "zod";
import { useToken } from "./getToken";

export type Event = z.infer<typeof event> & {
	id: number;
	isTicketAvailable: boolean;
	createdAt: string;
};
export async function getRole() {
	const token = useToken();
	if (token == null) return;
	const request = await fetch(`${SERVER_URL}/role`, {
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${token}`,
		},
	});
	if (request.ok) {
		const response = await request.json();
		return { data: response };
	}

	localStorage.clear();
	return;
}
