import { DataSource, } from 'typeorm';

export interface DatabaseProvider {
  datasource: DataSource;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}