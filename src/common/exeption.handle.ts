export class ExeptionHandle {
  public code: number;
  public status: string;
  result: any;

  constructor(code, status, result) {
    this.code = code;
    this.status = status;
    this.result = result;
  }
}
