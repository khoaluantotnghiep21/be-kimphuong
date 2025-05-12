import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, HttpStatus } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface GenericResponse<T> {
  responseData: T;
  message: string;
  success: boolean;
  violations: any;
  timestamp: string;
  path: string;
}

@Injectable()
export class TransformerResponseInterceptor<T> implements NestInterceptor<T, GenericResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<GenericResponse<T>> {
    return next.handle().pipe(
      map(data => ({ 
        responseData: data,
        message: 'Success',
        success: true,
        violations: null,
        timestamp: new Date().toISOString(),
        path: context.switchToHttp().getRequest().url,
      })),
      catchError(err => {
        const status = err instanceof HttpException ? err.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        return throwError(() => new HttpException({
          message: err.message || 'Internal server error',
          success: false,
          violations: err.response?.message || null,
          timestamp: new Date().toISOString(),
          path: context.switchToHttp().getRequest().url,
        }, status));
      })
    );
  }
} 