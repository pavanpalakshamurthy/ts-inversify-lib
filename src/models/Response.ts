import Record from './Record';


export default class Response {
    
    private _records: Record[];

    constructor(records: Record[]) {
        this._records = records;
    }

    /**
     * Getter record
     * @return {Record[]}
     */
	public get records(): Record[] {
		return this._records;
	}

    /**
     * Setter record
     * @param {Record[]} value
     */
	public set records(value: Record[]) {
		this._records = value;
	}
   
    
}