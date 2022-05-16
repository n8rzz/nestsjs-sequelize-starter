export interface IDatabaseConfigAttributes {
  database?: string;
  dialect?: string;
  host?: string;
  password?: string;
  port?: number | string;
  urlDatabase?: string;
  username?: string;
}

export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
  test: IDatabaseConfigAttributes;
  production: IDatabaseConfigAttributes;
}
