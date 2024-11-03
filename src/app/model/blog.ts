export class Blog {
  public get photo(): String {
    return this._photo;
  }
  public set photo(value: String) {
    this._photo = value;
  }
  public get score(): number {
    return this._score;
  }
  public set score(value: number) {
    if ((this._score > 0 && value < 0) || value > 0) {
      this._score += value;
    }
  }
  public get date(): string {
    return this._date;
  }
  public set date(value: string) {
    this._date = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  constructor(
    private _photo: String,
    private _title: string,
    private _description: string,
    private _date: string,
    private _score: number
  ) {}
}
