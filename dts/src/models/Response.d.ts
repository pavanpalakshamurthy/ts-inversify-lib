import Record from './Record';
export default class Response {
    private _records;
    constructor(records: Record[]);
    /**
     * Getter record
     * @return {Record[]}
     */
    /**
    * Setter record
    * @param {Record[]} value
    */
    records: Record[];
}
