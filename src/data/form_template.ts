import { type Z_Form } from "@/@types";
import { generateUUID } from "@/server/utils";

const formId = generateUUID();
const sectionId = generateUUID();
const questionId = generateUUID();
const optionId = generateUUID();

const formTemplate: Prettify<Z_Form> = {
	id: formId,
	formTitle: "Untitled Form",
	formDescription: "",
	defaultPointValue: 12,
	formScore: [],
	isQuizMode: false,
	createdAt: new Date(),
	updatedAt: new Date(),
	formSections: [
		{
			formId: formId,
			formSectionID: sectionId,
			sectionTitle: "Section 1",
			sectionDesc: "Description 1",
			formQuestions: [
				{
					formSectionID: sectionId,
					question: "",
					questionID: questionId,
					questionType: "varchar",
					required: false,
					score: 12,
					sequence: 0,
					jumpToSectionBasedOnAnswer: false,
					options: [
						{
							optionValue: "",
							optionID: optionId,
							nextSectionID: null,
							correct: null,
							questionID: questionId
						}
					]
				}
			],
			seqNumber: 0,
			nextSectionID: null
		}
	]
};

export default formTemplate;
