
export default class Request {
    
    private _id: number;

    private _date: Date;

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter date
     * @return {Date}
     */
	public get date(): Date {
		return this._date;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter date
     * @param {Date} value
     */
	public set date(value: Date) {
		this._date = value;
	}
    
}