import { GenericException } from "./exception/exception.model";


export interface GenericResponse<T> {
    responseData: T | null;
    success?: boolean;
    message: string;
    violations: string| number | null;
    timestamp: string;
  }
  export class GenericResponseOptions {

    success?: boolean;

    message!: string;
  
  
    violations: GenericException | null;
  
   
    timestamp!: string;
  
    
    path!: string;
  
    constructor(message: string, success: boolean = true, violations: any | null = null, path: string) {
      this.message = message;
      this.success = success;
      this.violations = violations;
      this.timestamp = new Date().toISOString();
      this.path = path;
    }
  }
