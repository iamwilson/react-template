interface ISharedActionModel {
	type: string;
}

export interface IActionModel extends ISharedActionModel {
	error: {};
	response: {};
	value: any;
}
