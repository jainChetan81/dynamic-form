import { z } from "zod";

export const Z_QUESTION_TYPE = z.enum(["date", "varchar", "mChoice", "cb", "dd", "int", "file", "address", "photo"]);
export const FORM_OPTION = z.object({
	optionID: z.string().uuid(),
	optionValue: z.string(),
	correct: z.boolean().nullable(),
	nextSectionID: z.string().uuid().nullable(),
	questionID: z.string().uuid().nullable()
});
export const FORM_QUESTION = z.object({
	questionID: z.string().uuid(),
	question: z.string(),
	questionType: Z_QUESTION_TYPE,
	required: z.boolean(),
	score: z.number().nullable(),
	sequence: z.number().nonnegative(),
	jumpToSectionBasedOnAnswer: z.boolean().nullable(),
	formSectionID: z.string().uuid().nullable(),
	options: z.array(FORM_OPTION)
});

export const FORM_SCORE = z.object({
	formId: z.string().uuid().nullable(),
	low: z.number().nullable(),
	high: z.number().nullable(),
	result: z.string().nullable(),
	id: z.string().uuid()
});
export const FORM_SECTION = z.object({
	formSectionID: z.string().uuid(),
	sectionTitle: z.string(),
	sectionDesc: z.string(),
	seqNumber: z.number(),
	nextSectionID: z.string().uuid().nullable(),
	formId: z.string().uuid().nullable(),
	formQuestions: z.array(FORM_QUESTION)
});
export const Z_FORM = z.object({
	id: z.string().uuid(),
	formTitle: z.string(),
	formDescription: z.string(),
	defaultPointValue: z.number(),
	isQuizMode: z.boolean(),
	createdAt: z.date(),
	updatedAt: z.date(),
	formScore: z.array(FORM_SCORE),
	formSections: z.array(FORM_SECTION)
});

export type Z_Form = z.infer<typeof Z_FORM>;