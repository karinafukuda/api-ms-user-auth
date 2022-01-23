export default class DatabaseError extends Error {
  constructor(public message: string, public error?: any) {
    super(message);
  }
}
