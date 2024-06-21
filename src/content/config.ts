// 1. Import utilities from `astro:content`
import { optional, type set } from 'astro/zod';
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const schema = z.object({
	role: z.string(),
	year: z.number().optional(),
	info: z.string().optional(),
	description: z.string().optional(),
	// Credits
	credits: z.object({
	  writer: z.string().optional(),
	  director: z.string().optional(),
	  technical_director: z.string().optional(),
	  lighting_designer: z.string().optional(),
	  sound_designer: z.string().optional(),
	  set_designer: z.string().optional(),
	  projection_designer: z.string().optional(),
	  stage_manager: z.string().optional(),
	  costume_designer: z.string().optional(),
	  props_designer: z.string().optional(),
	  producer: z.string().optional(),
	  production_company: z.string().optional(),
	}).optional(),
	location: z.string().optional(),
	// Media
	media: z.object({
	  path: z.string().optional(),
	  thumbnail: z.string().optional(),
	  thumbnail_alt: z.string().optional(),
	  thumbnail_caption: z.string().optional(),
	}).optional(),
  });

// 3. Export a single `collections` object to register your collection(s)

export const collections = { schema };
