export const socialLinks: {
	friendlyName: string;
	isWebmention?: boolean;
	link: string;
	name: string;
}[] = [
	{
		friendlyName: "GitHub Profile",
		link: "https://github.com/vedant-asati03",
		name: "mdi:github",
	},
	{
		friendlyName: "Discord Community",
		link: "https://discord.gg/QDJqZneMVB",
		name: "mdi:discord",
	},
];

export type SocialLink = typeof socialLinks[0];
