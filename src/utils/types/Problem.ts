export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
	img?: string;
};

export interface ProblemDetail {
	id: string
	problemNo: number
	title: string
	description: string
	difficulty: string
	likes: number
	dislikes: number
	examples: {
		input: string
		output: string
		explanation?: string
	}[]
	constraints: string[]
	testcases: Testcase[]
}

export type Testcase = {
	id: number
	input: string
	output: string
}

export type LanguageType = 'C' | 'CPP' | 'Java' | 'Python' | 'Javascript'