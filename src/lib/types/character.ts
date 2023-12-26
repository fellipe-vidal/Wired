import { z } from 'zod';

export const CharacterSchema = z.object({
	name: z.string(),
	metatype: z.string(),
	attributes: z.string(),
	qualities: z.string(),
	skills: z.string(),
	amps: z.string(),
	weapons: z.string(),
	equipment: z.string(),
	contacts: z.string(),
	'physical-monitor': z.string(),
	'stun-monitor': z.string(),
	armor: z.string()
});
export type Character = z.infer<typeof CharacterSchema>;
