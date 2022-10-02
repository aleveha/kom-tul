export interface Subject {
	credits: number;
	exam: string;
	name: string;
	required: boolean;
	range: string;
	semester: string;
	shortName: string;
	teacher: string;
}

interface AcademicYear {
	number: number;
	subjects: Subject[];
}

export interface FieldOfStudy {
	code: string;
	name: string;
	years?: AcademicYear[];
}
