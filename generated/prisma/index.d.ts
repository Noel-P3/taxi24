
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Conductores
 * 
 */
export type Conductores = $Result.DefaultSelection<Prisma.$ConductoresPayload>
/**
 * Model Viajes
 * 
 */
export type Viajes = $Result.DefaultSelection<Prisma.$ViajesPayload>
/**
 * Model Pasajeros
 * 
 */
export type Pasajeros = $Result.DefaultSelection<Prisma.$PasajerosPayload>
/**
 * Model Disponibilidad
 * 
 */
export type Disponibilidad = $Result.DefaultSelection<Prisma.$DisponibilidadPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusDisponibilidad: {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO'
};

export type StatusDisponibilidad = (typeof StatusDisponibilidad)[keyof typeof StatusDisponibilidad]


export const StatusViajes: {
  EN_PROCESO: 'EN_PROCESO',
  TERMINADO: 'TERMINADO'
};

export type StatusViajes = (typeof StatusViajes)[keyof typeof StatusViajes]

}

export type StatusDisponibilidad = $Enums.StatusDisponibilidad

export const StatusDisponibilidad: typeof $Enums.StatusDisponibilidad

export type StatusViajes = $Enums.StatusViajes

export const StatusViajes: typeof $Enums.StatusViajes

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Conductores
 * const conductores = await prisma.conductores.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Conductores
   * const conductores = await prisma.conductores.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.conductores`: Exposes CRUD operations for the **Conductores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conductores
    * const conductores = await prisma.conductores.findMany()
    * ```
    */
  get conductores(): Prisma.ConductoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viajes`: Exposes CRUD operations for the **Viajes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Viajes
    * const viajes = await prisma.viajes.findMany()
    * ```
    */
  get viajes(): Prisma.ViajesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pasajeros`: Exposes CRUD operations for the **Pasajeros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pasajeros
    * const pasajeros = await prisma.pasajeros.findMany()
    * ```
    */
  get pasajeros(): Prisma.PasajerosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disponibilidad`: Exposes CRUD operations for the **Disponibilidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disponibilidads
    * const disponibilidads = await prisma.disponibilidad.findMany()
    * ```
    */
  get disponibilidad(): Prisma.DisponibilidadDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Conductores: 'Conductores',
    Viajes: 'Viajes',
    Pasajeros: 'Pasajeros',
    Disponibilidad: 'Disponibilidad'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "conductores" | "viajes" | "pasajeros" | "disponibilidad"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Conductores: {
        payload: Prisma.$ConductoresPayload<ExtArgs>
        fields: Prisma.ConductoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConductoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConductoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductoresPayload>
          }
          findFirst: {
            args: Prisma.ConductoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConductoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductoresPayload>
          }
          findMany: {
            args: Prisma.ConductoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductoresPayload>[]
          }
          create: {
            args: Prisma.ConductoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductoresPayload>
          }
          createMany: {
            args: Prisma.ConductoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConductoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductoresPayload>[]
          }
          delete: {
            args: Prisma.ConductoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductoresPayload>
          }
          update: {
            args: Prisma.ConductoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductoresPayload>
          }
          deleteMany: {
            args: Prisma.ConductoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConductoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConductoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductoresPayload>[]
          }
          upsert: {
            args: Prisma.ConductoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductoresPayload>
          }
          aggregate: {
            args: Prisma.ConductoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConductores>
          }
          groupBy: {
            args: Prisma.ConductoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConductoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConductoresCountArgs<ExtArgs>
            result: $Utils.Optional<ConductoresCountAggregateOutputType> | number
          }
        }
      }
      Viajes: {
        payload: Prisma.$ViajesPayload<ExtArgs>
        fields: Prisma.ViajesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViajesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViajesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesPayload>
          }
          findFirst: {
            args: Prisma.ViajesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViajesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesPayload>
          }
          findMany: {
            args: Prisma.ViajesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesPayload>[]
          }
          create: {
            args: Prisma.ViajesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesPayload>
          }
          createMany: {
            args: Prisma.ViajesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViajesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesPayload>[]
          }
          delete: {
            args: Prisma.ViajesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesPayload>
          }
          update: {
            args: Prisma.ViajesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesPayload>
          }
          deleteMany: {
            args: Prisma.ViajesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViajesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViajesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesPayload>[]
          }
          upsert: {
            args: Prisma.ViajesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesPayload>
          }
          aggregate: {
            args: Prisma.ViajesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViajes>
          }
          groupBy: {
            args: Prisma.ViajesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViajesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViajesCountArgs<ExtArgs>
            result: $Utils.Optional<ViajesCountAggregateOutputType> | number
          }
        }
      }
      Pasajeros: {
        payload: Prisma.$PasajerosPayload<ExtArgs>
        fields: Prisma.PasajerosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasajerosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasajerosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasajerosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasajerosPayload>
          }
          findFirst: {
            args: Prisma.PasajerosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasajerosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasajerosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasajerosPayload>
          }
          findMany: {
            args: Prisma.PasajerosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasajerosPayload>[]
          }
          create: {
            args: Prisma.PasajerosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasajerosPayload>
          }
          createMany: {
            args: Prisma.PasajerosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasajerosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasajerosPayload>[]
          }
          delete: {
            args: Prisma.PasajerosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasajerosPayload>
          }
          update: {
            args: Prisma.PasajerosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasajerosPayload>
          }
          deleteMany: {
            args: Prisma.PasajerosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasajerosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasajerosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasajerosPayload>[]
          }
          upsert: {
            args: Prisma.PasajerosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasajerosPayload>
          }
          aggregate: {
            args: Prisma.PasajerosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasajeros>
          }
          groupBy: {
            args: Prisma.PasajerosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasajerosGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasajerosCountArgs<ExtArgs>
            result: $Utils.Optional<PasajerosCountAggregateOutputType> | number
          }
        }
      }
      Disponibilidad: {
        payload: Prisma.$DisponibilidadPayload<ExtArgs>
        fields: Prisma.DisponibilidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisponibilidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisponibilidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>
          }
          findFirst: {
            args: Prisma.DisponibilidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisponibilidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>
          }
          findMany: {
            args: Prisma.DisponibilidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>[]
          }
          create: {
            args: Prisma.DisponibilidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>
          }
          createMany: {
            args: Prisma.DisponibilidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisponibilidadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>[]
          }
          delete: {
            args: Prisma.DisponibilidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>
          }
          update: {
            args: Prisma.DisponibilidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>
          }
          deleteMany: {
            args: Prisma.DisponibilidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisponibilidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisponibilidadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>[]
          }
          upsert: {
            args: Prisma.DisponibilidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilidadPayload>
          }
          aggregate: {
            args: Prisma.DisponibilidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisponibilidad>
          }
          groupBy: {
            args: Prisma.DisponibilidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisponibilidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisponibilidadCountArgs<ExtArgs>
            result: $Utils.Optional<DisponibilidadCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    conductores?: ConductoresOmit
    viajes?: ViajesOmit
    pasajeros?: PasajerosOmit
    disponibilidad?: DisponibilidadOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ConductoresCountOutputType
   */

  export type ConductoresCountOutputType = {
    Viajes: number
  }

  export type ConductoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Viajes?: boolean | ConductoresCountOutputTypeCountViajesArgs
  }

  // Custom InputTypes
  /**
   * ConductoresCountOutputType without action
   */
  export type ConductoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConductoresCountOutputType
     */
    select?: ConductoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConductoresCountOutputType without action
   */
  export type ConductoresCountOutputTypeCountViajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajesWhereInput
  }


  /**
   * Count Type PasajerosCountOutputType
   */

  export type PasajerosCountOutputType = {
    Viajes: number
  }

  export type PasajerosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Viajes?: boolean | PasajerosCountOutputTypeCountViajesArgs
  }

  // Custom InputTypes
  /**
   * PasajerosCountOutputType without action
   */
  export type PasajerosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasajerosCountOutputType
     */
    select?: PasajerosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PasajerosCountOutputType without action
   */
  export type PasajerosCountOutputTypeCountViajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajesWhereInput
  }


  /**
   * Count Type DisponibilidadCountOutputType
   */

  export type DisponibilidadCountOutputType = {
    conductores: number
  }

  export type DisponibilidadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conductores?: boolean | DisponibilidadCountOutputTypeCountConductoresArgs
  }

  // Custom InputTypes
  /**
   * DisponibilidadCountOutputType without action
   */
  export type DisponibilidadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisponibilidadCountOutputType
     */
    select?: DisponibilidadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisponibilidadCountOutputType without action
   */
  export type DisponibilidadCountOutputTypeCountConductoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConductoresWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Conductores
   */

  export type AggregateConductores = {
    _count: ConductoresCountAggregateOutputType | null
    _avg: ConductoresAvgAggregateOutputType | null
    _sum: ConductoresSumAggregateOutputType | null
    _min: ConductoresMinAggregateOutputType | null
    _max: ConductoresMaxAggregateOutputType | null
  }

  export type ConductoresAvgAggregateOutputType = {
    id: number | null
    disponibilidadId: number | null
    ubicacionLatitud: Decimal | null
    ubicacionLongitud: Decimal | null
  }

  export type ConductoresSumAggregateOutputType = {
    id: number | null
    disponibilidadId: number | null
    ubicacionLatitud: Decimal | null
    ubicacionLongitud: Decimal | null
  }

  export type ConductoresMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    disponibilidadId: number | null
    ubicacionLatitud: Decimal | null
    ubicacionLongitud: Decimal | null
  }

  export type ConductoresMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    disponibilidadId: number | null
    ubicacionLatitud: Decimal | null
    ubicacionLongitud: Decimal | null
  }

  export type ConductoresCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    disponibilidadId: number
    ubicacionLatitud: number
    ubicacionLongitud: number
    _all: number
  }


  export type ConductoresAvgAggregateInputType = {
    id?: true
    disponibilidadId?: true
    ubicacionLatitud?: true
    ubicacionLongitud?: true
  }

  export type ConductoresSumAggregateInputType = {
    id?: true
    disponibilidadId?: true
    ubicacionLatitud?: true
    ubicacionLongitud?: true
  }

  export type ConductoresMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    disponibilidadId?: true
    ubicacionLatitud?: true
    ubicacionLongitud?: true
  }

  export type ConductoresMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    disponibilidadId?: true
    ubicacionLatitud?: true
    ubicacionLongitud?: true
  }

  export type ConductoresCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    disponibilidadId?: true
    ubicacionLatitud?: true
    ubicacionLongitud?: true
    _all?: true
  }

  export type ConductoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conductores to aggregate.
     */
    where?: ConductoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductores to fetch.
     */
    orderBy?: ConductoresOrderByWithRelationInput | ConductoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConductoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conductores
    **/
    _count?: true | ConductoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConductoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConductoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConductoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConductoresMaxAggregateInputType
  }

  export type GetConductoresAggregateType<T extends ConductoresAggregateArgs> = {
        [P in keyof T & keyof AggregateConductores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConductores[P]>
      : GetScalarType<T[P], AggregateConductores[P]>
  }




  export type ConductoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConductoresWhereInput
    orderBy?: ConductoresOrderByWithAggregationInput | ConductoresOrderByWithAggregationInput[]
    by: ConductoresScalarFieldEnum[] | ConductoresScalarFieldEnum
    having?: ConductoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConductoresCountAggregateInputType | true
    _avg?: ConductoresAvgAggregateInputType
    _sum?: ConductoresSumAggregateInputType
    _min?: ConductoresMinAggregateInputType
    _max?: ConductoresMaxAggregateInputType
  }

  export type ConductoresGroupByOutputType = {
    id: number
    nombre: string
    apellido: string
    disponibilidadId: number
    ubicacionLatitud: Decimal | null
    ubicacionLongitud: Decimal | null
    _count: ConductoresCountAggregateOutputType | null
    _avg: ConductoresAvgAggregateOutputType | null
    _sum: ConductoresSumAggregateOutputType | null
    _min: ConductoresMinAggregateOutputType | null
    _max: ConductoresMaxAggregateOutputType | null
  }

  type GetConductoresGroupByPayload<T extends ConductoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConductoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConductoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConductoresGroupByOutputType[P]>
            : GetScalarType<T[P], ConductoresGroupByOutputType[P]>
        }
      >
    >


  export type ConductoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    disponibilidadId?: boolean
    ubicacionLatitud?: boolean
    ubicacionLongitud?: boolean
    disponibilidad?: boolean | DisponibilidadDefaultArgs<ExtArgs>
    Viajes?: boolean | Conductores$ViajesArgs<ExtArgs>
    _count?: boolean | ConductoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conductores"]>

  export type ConductoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    disponibilidadId?: boolean
    ubicacionLatitud?: boolean
    ubicacionLongitud?: boolean
    disponibilidad?: boolean | DisponibilidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conductores"]>

  export type ConductoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    disponibilidadId?: boolean
    ubicacionLatitud?: boolean
    ubicacionLongitud?: boolean
    disponibilidad?: boolean | DisponibilidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conductores"]>

  export type ConductoresSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    disponibilidadId?: boolean
    ubicacionLatitud?: boolean
    ubicacionLongitud?: boolean
  }

  export type ConductoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "disponibilidadId" | "ubicacionLatitud" | "ubicacionLongitud", ExtArgs["result"]["conductores"]>
  export type ConductoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disponibilidad?: boolean | DisponibilidadDefaultArgs<ExtArgs>
    Viajes?: boolean | Conductores$ViajesArgs<ExtArgs>
    _count?: boolean | ConductoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConductoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disponibilidad?: boolean | DisponibilidadDefaultArgs<ExtArgs>
  }
  export type ConductoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disponibilidad?: boolean | DisponibilidadDefaultArgs<ExtArgs>
  }

  export type $ConductoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conductores"
    objects: {
      disponibilidad: Prisma.$DisponibilidadPayload<ExtArgs>
      Viajes: Prisma.$ViajesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      apellido: string
      disponibilidadId: number
      ubicacionLatitud: Prisma.Decimal | null
      ubicacionLongitud: Prisma.Decimal | null
    }, ExtArgs["result"]["conductores"]>
    composites: {}
  }

  type ConductoresGetPayload<S extends boolean | null | undefined | ConductoresDefaultArgs> = $Result.GetResult<Prisma.$ConductoresPayload, S>

  type ConductoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConductoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConductoresCountAggregateInputType | true
    }

  export interface ConductoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conductores'], meta: { name: 'Conductores' } }
    /**
     * Find zero or one Conductores that matches the filter.
     * @param {ConductoresFindUniqueArgs} args - Arguments to find a Conductores
     * @example
     * // Get one Conductores
     * const conductores = await prisma.conductores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConductoresFindUniqueArgs>(args: SelectSubset<T, ConductoresFindUniqueArgs<ExtArgs>>): Prisma__ConductoresClient<$Result.GetResult<Prisma.$ConductoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conductores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConductoresFindUniqueOrThrowArgs} args - Arguments to find a Conductores
     * @example
     * // Get one Conductores
     * const conductores = await prisma.conductores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConductoresFindUniqueOrThrowArgs>(args: SelectSubset<T, ConductoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConductoresClient<$Result.GetResult<Prisma.$ConductoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conductores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductoresFindFirstArgs} args - Arguments to find a Conductores
     * @example
     * // Get one Conductores
     * const conductores = await prisma.conductores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConductoresFindFirstArgs>(args?: SelectSubset<T, ConductoresFindFirstArgs<ExtArgs>>): Prisma__ConductoresClient<$Result.GetResult<Prisma.$ConductoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conductores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductoresFindFirstOrThrowArgs} args - Arguments to find a Conductores
     * @example
     * // Get one Conductores
     * const conductores = await prisma.conductores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConductoresFindFirstOrThrowArgs>(args?: SelectSubset<T, ConductoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConductoresClient<$Result.GetResult<Prisma.$ConductoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conductores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conductores
     * const conductores = await prisma.conductores.findMany()
     * 
     * // Get first 10 Conductores
     * const conductores = await prisma.conductores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conductoresWithIdOnly = await prisma.conductores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConductoresFindManyArgs>(args?: SelectSubset<T, ConductoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conductores.
     * @param {ConductoresCreateArgs} args - Arguments to create a Conductores.
     * @example
     * // Create one Conductores
     * const Conductores = await prisma.conductores.create({
     *   data: {
     *     // ... data to create a Conductores
     *   }
     * })
     * 
     */
    create<T extends ConductoresCreateArgs>(args: SelectSubset<T, ConductoresCreateArgs<ExtArgs>>): Prisma__ConductoresClient<$Result.GetResult<Prisma.$ConductoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conductores.
     * @param {ConductoresCreateManyArgs} args - Arguments to create many Conductores.
     * @example
     * // Create many Conductores
     * const conductores = await prisma.conductores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConductoresCreateManyArgs>(args?: SelectSubset<T, ConductoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conductores and returns the data saved in the database.
     * @param {ConductoresCreateManyAndReturnArgs} args - Arguments to create many Conductores.
     * @example
     * // Create many Conductores
     * const conductores = await prisma.conductores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conductores and only return the `id`
     * const conductoresWithIdOnly = await prisma.conductores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConductoresCreateManyAndReturnArgs>(args?: SelectSubset<T, ConductoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conductores.
     * @param {ConductoresDeleteArgs} args - Arguments to delete one Conductores.
     * @example
     * // Delete one Conductores
     * const Conductores = await prisma.conductores.delete({
     *   where: {
     *     // ... filter to delete one Conductores
     *   }
     * })
     * 
     */
    delete<T extends ConductoresDeleteArgs>(args: SelectSubset<T, ConductoresDeleteArgs<ExtArgs>>): Prisma__ConductoresClient<$Result.GetResult<Prisma.$ConductoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conductores.
     * @param {ConductoresUpdateArgs} args - Arguments to update one Conductores.
     * @example
     * // Update one Conductores
     * const conductores = await prisma.conductores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConductoresUpdateArgs>(args: SelectSubset<T, ConductoresUpdateArgs<ExtArgs>>): Prisma__ConductoresClient<$Result.GetResult<Prisma.$ConductoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conductores.
     * @param {ConductoresDeleteManyArgs} args - Arguments to filter Conductores to delete.
     * @example
     * // Delete a few Conductores
     * const { count } = await prisma.conductores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConductoresDeleteManyArgs>(args?: SelectSubset<T, ConductoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conductores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conductores
     * const conductores = await prisma.conductores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConductoresUpdateManyArgs>(args: SelectSubset<T, ConductoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conductores and returns the data updated in the database.
     * @param {ConductoresUpdateManyAndReturnArgs} args - Arguments to update many Conductores.
     * @example
     * // Update many Conductores
     * const conductores = await prisma.conductores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conductores and only return the `id`
     * const conductoresWithIdOnly = await prisma.conductores.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConductoresUpdateManyAndReturnArgs>(args: SelectSubset<T, ConductoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conductores.
     * @param {ConductoresUpsertArgs} args - Arguments to update or create a Conductores.
     * @example
     * // Update or create a Conductores
     * const conductores = await prisma.conductores.upsert({
     *   create: {
     *     // ... data to create a Conductores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conductores we want to update
     *   }
     * })
     */
    upsert<T extends ConductoresUpsertArgs>(args: SelectSubset<T, ConductoresUpsertArgs<ExtArgs>>): Prisma__ConductoresClient<$Result.GetResult<Prisma.$ConductoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conductores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductoresCountArgs} args - Arguments to filter Conductores to count.
     * @example
     * // Count the number of Conductores
     * const count = await prisma.conductores.count({
     *   where: {
     *     // ... the filter for the Conductores we want to count
     *   }
     * })
    **/
    count<T extends ConductoresCountArgs>(
      args?: Subset<T, ConductoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConductoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conductores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConductoresAggregateArgs>(args: Subset<T, ConductoresAggregateArgs>): Prisma.PrismaPromise<GetConductoresAggregateType<T>>

    /**
     * Group by Conductores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConductoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConductoresGroupByArgs['orderBy'] }
        : { orderBy?: ConductoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConductoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConductoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conductores model
   */
  readonly fields: ConductoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conductores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConductoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disponibilidad<T extends DisponibilidadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisponibilidadDefaultArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Viajes<T extends Conductores$ViajesArgs<ExtArgs> = {}>(args?: Subset<T, Conductores$ViajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conductores model
   */
  interface ConductoresFieldRefs {
    readonly id: FieldRef<"Conductores", 'Int'>
    readonly nombre: FieldRef<"Conductores", 'String'>
    readonly apellido: FieldRef<"Conductores", 'String'>
    readonly disponibilidadId: FieldRef<"Conductores", 'Int'>
    readonly ubicacionLatitud: FieldRef<"Conductores", 'Decimal'>
    readonly ubicacionLongitud: FieldRef<"Conductores", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Conductores findUnique
   */
  export type ConductoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductores
     */
    select?: ConductoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductores
     */
    omit?: ConductoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductoresInclude<ExtArgs> | null
    /**
     * Filter, which Conductores to fetch.
     */
    where: ConductoresWhereUniqueInput
  }

  /**
   * Conductores findUniqueOrThrow
   */
  export type ConductoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductores
     */
    select?: ConductoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductores
     */
    omit?: ConductoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductoresInclude<ExtArgs> | null
    /**
     * Filter, which Conductores to fetch.
     */
    where: ConductoresWhereUniqueInput
  }

  /**
   * Conductores findFirst
   */
  export type ConductoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductores
     */
    select?: ConductoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductores
     */
    omit?: ConductoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductoresInclude<ExtArgs> | null
    /**
     * Filter, which Conductores to fetch.
     */
    where?: ConductoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductores to fetch.
     */
    orderBy?: ConductoresOrderByWithRelationInput | ConductoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conductores.
     */
    cursor?: ConductoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conductores.
     */
    distinct?: ConductoresScalarFieldEnum | ConductoresScalarFieldEnum[]
  }

  /**
   * Conductores findFirstOrThrow
   */
  export type ConductoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductores
     */
    select?: ConductoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductores
     */
    omit?: ConductoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductoresInclude<ExtArgs> | null
    /**
     * Filter, which Conductores to fetch.
     */
    where?: ConductoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductores to fetch.
     */
    orderBy?: ConductoresOrderByWithRelationInput | ConductoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conductores.
     */
    cursor?: ConductoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conductores.
     */
    distinct?: ConductoresScalarFieldEnum | ConductoresScalarFieldEnum[]
  }

  /**
   * Conductores findMany
   */
  export type ConductoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductores
     */
    select?: ConductoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductores
     */
    omit?: ConductoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductoresInclude<ExtArgs> | null
    /**
     * Filter, which Conductores to fetch.
     */
    where?: ConductoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductores to fetch.
     */
    orderBy?: ConductoresOrderByWithRelationInput | ConductoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conductores.
     */
    cursor?: ConductoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductores.
     */
    skip?: number
    distinct?: ConductoresScalarFieldEnum | ConductoresScalarFieldEnum[]
  }

  /**
   * Conductores create
   */
  export type ConductoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductores
     */
    select?: ConductoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductores
     */
    omit?: ConductoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductoresInclude<ExtArgs> | null
    /**
     * The data needed to create a Conductores.
     */
    data: XOR<ConductoresCreateInput, ConductoresUncheckedCreateInput>
  }

  /**
   * Conductores createMany
   */
  export type ConductoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conductores.
     */
    data: ConductoresCreateManyInput | ConductoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conductores createManyAndReturn
   */
  export type ConductoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductores
     */
    select?: ConductoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conductores
     */
    omit?: ConductoresOmit<ExtArgs> | null
    /**
     * The data used to create many Conductores.
     */
    data: ConductoresCreateManyInput | ConductoresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductoresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conductores update
   */
  export type ConductoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductores
     */
    select?: ConductoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductores
     */
    omit?: ConductoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductoresInclude<ExtArgs> | null
    /**
     * The data needed to update a Conductores.
     */
    data: XOR<ConductoresUpdateInput, ConductoresUncheckedUpdateInput>
    /**
     * Choose, which Conductores to update.
     */
    where: ConductoresWhereUniqueInput
  }

  /**
   * Conductores updateMany
   */
  export type ConductoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conductores.
     */
    data: XOR<ConductoresUpdateManyMutationInput, ConductoresUncheckedUpdateManyInput>
    /**
     * Filter which Conductores to update
     */
    where?: ConductoresWhereInput
    /**
     * Limit how many Conductores to update.
     */
    limit?: number
  }

  /**
   * Conductores updateManyAndReturn
   */
  export type ConductoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductores
     */
    select?: ConductoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conductores
     */
    omit?: ConductoresOmit<ExtArgs> | null
    /**
     * The data used to update Conductores.
     */
    data: XOR<ConductoresUpdateManyMutationInput, ConductoresUncheckedUpdateManyInput>
    /**
     * Filter which Conductores to update
     */
    where?: ConductoresWhereInput
    /**
     * Limit how many Conductores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductoresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conductores upsert
   */
  export type ConductoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductores
     */
    select?: ConductoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductores
     */
    omit?: ConductoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductoresInclude<ExtArgs> | null
    /**
     * The filter to search for the Conductores to update in case it exists.
     */
    where: ConductoresWhereUniqueInput
    /**
     * In case the Conductores found by the `where` argument doesn't exist, create a new Conductores with this data.
     */
    create: XOR<ConductoresCreateInput, ConductoresUncheckedCreateInput>
    /**
     * In case the Conductores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConductoresUpdateInput, ConductoresUncheckedUpdateInput>
  }

  /**
   * Conductores delete
   */
  export type ConductoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductores
     */
    select?: ConductoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductores
     */
    omit?: ConductoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductoresInclude<ExtArgs> | null
    /**
     * Filter which Conductores to delete.
     */
    where: ConductoresWhereUniqueInput
  }

  /**
   * Conductores deleteMany
   */
  export type ConductoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conductores to delete
     */
    where?: ConductoresWhereInput
    /**
     * Limit how many Conductores to delete.
     */
    limit?: number
  }

  /**
   * Conductores.Viajes
   */
  export type Conductores$ViajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viajes
     */
    select?: ViajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viajes
     */
    omit?: ViajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesInclude<ExtArgs> | null
    where?: ViajesWhereInput
    orderBy?: ViajesOrderByWithRelationInput | ViajesOrderByWithRelationInput[]
    cursor?: ViajesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViajesScalarFieldEnum | ViajesScalarFieldEnum[]
  }

  /**
   * Conductores without action
   */
  export type ConductoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductores
     */
    select?: ConductoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductores
     */
    omit?: ConductoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductoresInclude<ExtArgs> | null
  }


  /**
   * Model Viajes
   */

  export type AggregateViajes = {
    _count: ViajesCountAggregateOutputType | null
    _avg: ViajesAvgAggregateOutputType | null
    _sum: ViajesSumAggregateOutputType | null
    _min: ViajesMinAggregateOutputType | null
    _max: ViajesMaxAggregateOutputType | null
  }

  export type ViajesAvgAggregateOutputType = {
    id: number | null
    pasajeroId: number | null
    conductorId: number | null
    latitudDesde: Decimal | null
    longitudDesde: Decimal | null
    latitudHasta: Decimal | null
    longitudHasta: Decimal | null
  }

  export type ViajesSumAggregateOutputType = {
    id: number | null
    pasajeroId: number | null
    conductorId: number | null
    latitudDesde: Decimal | null
    longitudDesde: Decimal | null
    latitudHasta: Decimal | null
    longitudHasta: Decimal | null
  }

  export type ViajesMinAggregateOutputType = {
    id: number | null
    pasajeroId: number | null
    conductorId: number | null
    status: $Enums.StatusViajes | null
    latitudDesde: Decimal | null
    longitudDesde: Decimal | null
    latitudHasta: Decimal | null
    longitudHasta: Decimal | null
  }

  export type ViajesMaxAggregateOutputType = {
    id: number | null
    pasajeroId: number | null
    conductorId: number | null
    status: $Enums.StatusViajes | null
    latitudDesde: Decimal | null
    longitudDesde: Decimal | null
    latitudHasta: Decimal | null
    longitudHasta: Decimal | null
  }

  export type ViajesCountAggregateOutputType = {
    id: number
    pasajeroId: number
    conductorId: number
    status: number
    latitudDesde: number
    longitudDesde: number
    latitudHasta: number
    longitudHasta: number
    _all: number
  }


  export type ViajesAvgAggregateInputType = {
    id?: true
    pasajeroId?: true
    conductorId?: true
    latitudDesde?: true
    longitudDesde?: true
    latitudHasta?: true
    longitudHasta?: true
  }

  export type ViajesSumAggregateInputType = {
    id?: true
    pasajeroId?: true
    conductorId?: true
    latitudDesde?: true
    longitudDesde?: true
    latitudHasta?: true
    longitudHasta?: true
  }

  export type ViajesMinAggregateInputType = {
    id?: true
    pasajeroId?: true
    conductorId?: true
    status?: true
    latitudDesde?: true
    longitudDesde?: true
    latitudHasta?: true
    longitudHasta?: true
  }

  export type ViajesMaxAggregateInputType = {
    id?: true
    pasajeroId?: true
    conductorId?: true
    status?: true
    latitudDesde?: true
    longitudDesde?: true
    latitudHasta?: true
    longitudHasta?: true
  }

  export type ViajesCountAggregateInputType = {
    id?: true
    pasajeroId?: true
    conductorId?: true
    status?: true
    latitudDesde?: true
    longitudDesde?: true
    latitudHasta?: true
    longitudHasta?: true
    _all?: true
  }

  export type ViajesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viajes to aggregate.
     */
    where?: ViajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajesOrderByWithRelationInput | ViajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Viajes
    **/
    _count?: true | ViajesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViajesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViajesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViajesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViajesMaxAggregateInputType
  }

  export type GetViajesAggregateType<T extends ViajesAggregateArgs> = {
        [P in keyof T & keyof AggregateViajes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViajes[P]>
      : GetScalarType<T[P], AggregateViajes[P]>
  }




  export type ViajesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajesWhereInput
    orderBy?: ViajesOrderByWithAggregationInput | ViajesOrderByWithAggregationInput[]
    by: ViajesScalarFieldEnum[] | ViajesScalarFieldEnum
    having?: ViajesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViajesCountAggregateInputType | true
    _avg?: ViajesAvgAggregateInputType
    _sum?: ViajesSumAggregateInputType
    _min?: ViajesMinAggregateInputType
    _max?: ViajesMaxAggregateInputType
  }

  export type ViajesGroupByOutputType = {
    id: number
    pasajeroId: number
    conductorId: number
    status: $Enums.StatusViajes
    latitudDesde: Decimal
    longitudDesde: Decimal
    latitudHasta: Decimal
    longitudHasta: Decimal
    _count: ViajesCountAggregateOutputType | null
    _avg: ViajesAvgAggregateOutputType | null
    _sum: ViajesSumAggregateOutputType | null
    _min: ViajesMinAggregateOutputType | null
    _max: ViajesMaxAggregateOutputType | null
  }

  type GetViajesGroupByPayload<T extends ViajesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViajesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViajesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViajesGroupByOutputType[P]>
            : GetScalarType<T[P], ViajesGroupByOutputType[P]>
        }
      >
    >


  export type ViajesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasajeroId?: boolean
    conductorId?: boolean
    status?: boolean
    latitudDesde?: boolean
    longitudDesde?: boolean
    latitudHasta?: boolean
    longitudHasta?: boolean
    pasajero?: boolean | PasajerosDefaultArgs<ExtArgs>
    conductor?: boolean | ConductoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viajes"]>

  export type ViajesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasajeroId?: boolean
    conductorId?: boolean
    status?: boolean
    latitudDesde?: boolean
    longitudDesde?: boolean
    latitudHasta?: boolean
    longitudHasta?: boolean
    pasajero?: boolean | PasajerosDefaultArgs<ExtArgs>
    conductor?: boolean | ConductoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viajes"]>

  export type ViajesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pasajeroId?: boolean
    conductorId?: boolean
    status?: boolean
    latitudDesde?: boolean
    longitudDesde?: boolean
    latitudHasta?: boolean
    longitudHasta?: boolean
    pasajero?: boolean | PasajerosDefaultArgs<ExtArgs>
    conductor?: boolean | ConductoresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viajes"]>

  export type ViajesSelectScalar = {
    id?: boolean
    pasajeroId?: boolean
    conductorId?: boolean
    status?: boolean
    latitudDesde?: boolean
    longitudDesde?: boolean
    latitudHasta?: boolean
    longitudHasta?: boolean
  }

  export type ViajesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pasajeroId" | "conductorId" | "status" | "latitudDesde" | "longitudDesde" | "latitudHasta" | "longitudHasta", ExtArgs["result"]["viajes"]>
  export type ViajesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasajero?: boolean | PasajerosDefaultArgs<ExtArgs>
    conductor?: boolean | ConductoresDefaultArgs<ExtArgs>
  }
  export type ViajesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasajero?: boolean | PasajerosDefaultArgs<ExtArgs>
    conductor?: boolean | ConductoresDefaultArgs<ExtArgs>
  }
  export type ViajesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasajero?: boolean | PasajerosDefaultArgs<ExtArgs>
    conductor?: boolean | ConductoresDefaultArgs<ExtArgs>
  }

  export type $ViajesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Viajes"
    objects: {
      pasajero: Prisma.$PasajerosPayload<ExtArgs>
      conductor: Prisma.$ConductoresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pasajeroId: number
      conductorId: number
      status: $Enums.StatusViajes
      latitudDesde: Prisma.Decimal
      longitudDesde: Prisma.Decimal
      latitudHasta: Prisma.Decimal
      longitudHasta: Prisma.Decimal
    }, ExtArgs["result"]["viajes"]>
    composites: {}
  }

  type ViajesGetPayload<S extends boolean | null | undefined | ViajesDefaultArgs> = $Result.GetResult<Prisma.$ViajesPayload, S>

  type ViajesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViajesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViajesCountAggregateInputType | true
    }

  export interface ViajesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Viajes'], meta: { name: 'Viajes' } }
    /**
     * Find zero or one Viajes that matches the filter.
     * @param {ViajesFindUniqueArgs} args - Arguments to find a Viajes
     * @example
     * // Get one Viajes
     * const viajes = await prisma.viajes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViajesFindUniqueArgs>(args: SelectSubset<T, ViajesFindUniqueArgs<ExtArgs>>): Prisma__ViajesClient<$Result.GetResult<Prisma.$ViajesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Viajes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViajesFindUniqueOrThrowArgs} args - Arguments to find a Viajes
     * @example
     * // Get one Viajes
     * const viajes = await prisma.viajes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViajesFindUniqueOrThrowArgs>(args: SelectSubset<T, ViajesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViajesClient<$Result.GetResult<Prisma.$ViajesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajesFindFirstArgs} args - Arguments to find a Viajes
     * @example
     * // Get one Viajes
     * const viajes = await prisma.viajes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViajesFindFirstArgs>(args?: SelectSubset<T, ViajesFindFirstArgs<ExtArgs>>): Prisma__ViajesClient<$Result.GetResult<Prisma.$ViajesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viajes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajesFindFirstOrThrowArgs} args - Arguments to find a Viajes
     * @example
     * // Get one Viajes
     * const viajes = await prisma.viajes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViajesFindFirstOrThrowArgs>(args?: SelectSubset<T, ViajesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViajesClient<$Result.GetResult<Prisma.$ViajesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Viajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Viajes
     * const viajes = await prisma.viajes.findMany()
     * 
     * // Get first 10 Viajes
     * const viajes = await prisma.viajes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viajesWithIdOnly = await prisma.viajes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViajesFindManyArgs>(args?: SelectSubset<T, ViajesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Viajes.
     * @param {ViajesCreateArgs} args - Arguments to create a Viajes.
     * @example
     * // Create one Viajes
     * const Viajes = await prisma.viajes.create({
     *   data: {
     *     // ... data to create a Viajes
     *   }
     * })
     * 
     */
    create<T extends ViajesCreateArgs>(args: SelectSubset<T, ViajesCreateArgs<ExtArgs>>): Prisma__ViajesClient<$Result.GetResult<Prisma.$ViajesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Viajes.
     * @param {ViajesCreateManyArgs} args - Arguments to create many Viajes.
     * @example
     * // Create many Viajes
     * const viajes = await prisma.viajes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViajesCreateManyArgs>(args?: SelectSubset<T, ViajesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Viajes and returns the data saved in the database.
     * @param {ViajesCreateManyAndReturnArgs} args - Arguments to create many Viajes.
     * @example
     * // Create many Viajes
     * const viajes = await prisma.viajes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Viajes and only return the `id`
     * const viajesWithIdOnly = await prisma.viajes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViajesCreateManyAndReturnArgs>(args?: SelectSubset<T, ViajesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Viajes.
     * @param {ViajesDeleteArgs} args - Arguments to delete one Viajes.
     * @example
     * // Delete one Viajes
     * const Viajes = await prisma.viajes.delete({
     *   where: {
     *     // ... filter to delete one Viajes
     *   }
     * })
     * 
     */
    delete<T extends ViajesDeleteArgs>(args: SelectSubset<T, ViajesDeleteArgs<ExtArgs>>): Prisma__ViajesClient<$Result.GetResult<Prisma.$ViajesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Viajes.
     * @param {ViajesUpdateArgs} args - Arguments to update one Viajes.
     * @example
     * // Update one Viajes
     * const viajes = await prisma.viajes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViajesUpdateArgs>(args: SelectSubset<T, ViajesUpdateArgs<ExtArgs>>): Prisma__ViajesClient<$Result.GetResult<Prisma.$ViajesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Viajes.
     * @param {ViajesDeleteManyArgs} args - Arguments to filter Viajes to delete.
     * @example
     * // Delete a few Viajes
     * const { count } = await prisma.viajes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViajesDeleteManyArgs>(args?: SelectSubset<T, ViajesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Viajes
     * const viajes = await prisma.viajes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViajesUpdateManyArgs>(args: SelectSubset<T, ViajesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viajes and returns the data updated in the database.
     * @param {ViajesUpdateManyAndReturnArgs} args - Arguments to update many Viajes.
     * @example
     * // Update many Viajes
     * const viajes = await prisma.viajes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Viajes and only return the `id`
     * const viajesWithIdOnly = await prisma.viajes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViajesUpdateManyAndReturnArgs>(args: SelectSubset<T, ViajesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Viajes.
     * @param {ViajesUpsertArgs} args - Arguments to update or create a Viajes.
     * @example
     * // Update or create a Viajes
     * const viajes = await prisma.viajes.upsert({
     *   create: {
     *     // ... data to create a Viajes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Viajes we want to update
     *   }
     * })
     */
    upsert<T extends ViajesUpsertArgs>(args: SelectSubset<T, ViajesUpsertArgs<ExtArgs>>): Prisma__ViajesClient<$Result.GetResult<Prisma.$ViajesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Viajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajesCountArgs} args - Arguments to filter Viajes to count.
     * @example
     * // Count the number of Viajes
     * const count = await prisma.viajes.count({
     *   where: {
     *     // ... the filter for the Viajes we want to count
     *   }
     * })
    **/
    count<T extends ViajesCountArgs>(
      args?: Subset<T, ViajesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViajesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Viajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViajesAggregateArgs>(args: Subset<T, ViajesAggregateArgs>): Prisma.PrismaPromise<GetViajesAggregateType<T>>

    /**
     * Group by Viajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViajesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViajesGroupByArgs['orderBy'] }
        : { orderBy?: ViajesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViajesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViajesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Viajes model
   */
  readonly fields: ViajesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Viajes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViajesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pasajero<T extends PasajerosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PasajerosDefaultArgs<ExtArgs>>): Prisma__PasajerosClient<$Result.GetResult<Prisma.$PasajerosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conductor<T extends ConductoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConductoresDefaultArgs<ExtArgs>>): Prisma__ConductoresClient<$Result.GetResult<Prisma.$ConductoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Viajes model
   */
  interface ViajesFieldRefs {
    readonly id: FieldRef<"Viajes", 'Int'>
    readonly pasajeroId: FieldRef<"Viajes", 'Int'>
    readonly conductorId: FieldRef<"Viajes", 'Int'>
    readonly status: FieldRef<"Viajes", 'StatusViajes'>
    readonly latitudDesde: FieldRef<"Viajes", 'Decimal'>
    readonly longitudDesde: FieldRef<"Viajes", 'Decimal'>
    readonly latitudHasta: FieldRef<"Viajes", 'Decimal'>
    readonly longitudHasta: FieldRef<"Viajes", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Viajes findUnique
   */
  export type ViajesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viajes
     */
    select?: ViajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viajes
     */
    omit?: ViajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesInclude<ExtArgs> | null
    /**
     * Filter, which Viajes to fetch.
     */
    where: ViajesWhereUniqueInput
  }

  /**
   * Viajes findUniqueOrThrow
   */
  export type ViajesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viajes
     */
    select?: ViajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viajes
     */
    omit?: ViajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesInclude<ExtArgs> | null
    /**
     * Filter, which Viajes to fetch.
     */
    where: ViajesWhereUniqueInput
  }

  /**
   * Viajes findFirst
   */
  export type ViajesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viajes
     */
    select?: ViajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viajes
     */
    omit?: ViajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesInclude<ExtArgs> | null
    /**
     * Filter, which Viajes to fetch.
     */
    where?: ViajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajesOrderByWithRelationInput | ViajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viajes.
     */
    cursor?: ViajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viajes.
     */
    distinct?: ViajesScalarFieldEnum | ViajesScalarFieldEnum[]
  }

  /**
   * Viajes findFirstOrThrow
   */
  export type ViajesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viajes
     */
    select?: ViajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viajes
     */
    omit?: ViajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesInclude<ExtArgs> | null
    /**
     * Filter, which Viajes to fetch.
     */
    where?: ViajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajesOrderByWithRelationInput | ViajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viajes.
     */
    cursor?: ViajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viajes.
     */
    distinct?: ViajesScalarFieldEnum | ViajesScalarFieldEnum[]
  }

  /**
   * Viajes findMany
   */
  export type ViajesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viajes
     */
    select?: ViajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viajes
     */
    omit?: ViajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesInclude<ExtArgs> | null
    /**
     * Filter, which Viajes to fetch.
     */
    where?: ViajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajesOrderByWithRelationInput | ViajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Viajes.
     */
    cursor?: ViajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    distinct?: ViajesScalarFieldEnum | ViajesScalarFieldEnum[]
  }

  /**
   * Viajes create
   */
  export type ViajesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viajes
     */
    select?: ViajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viajes
     */
    omit?: ViajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesInclude<ExtArgs> | null
    /**
     * The data needed to create a Viajes.
     */
    data: XOR<ViajesCreateInput, ViajesUncheckedCreateInput>
  }

  /**
   * Viajes createMany
   */
  export type ViajesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Viajes.
     */
    data: ViajesCreateManyInput | ViajesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Viajes createManyAndReturn
   */
  export type ViajesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viajes
     */
    select?: ViajesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viajes
     */
    omit?: ViajesOmit<ExtArgs> | null
    /**
     * The data used to create many Viajes.
     */
    data: ViajesCreateManyInput | ViajesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Viajes update
   */
  export type ViajesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viajes
     */
    select?: ViajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viajes
     */
    omit?: ViajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesInclude<ExtArgs> | null
    /**
     * The data needed to update a Viajes.
     */
    data: XOR<ViajesUpdateInput, ViajesUncheckedUpdateInput>
    /**
     * Choose, which Viajes to update.
     */
    where: ViajesWhereUniqueInput
  }

  /**
   * Viajes updateMany
   */
  export type ViajesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Viajes.
     */
    data: XOR<ViajesUpdateManyMutationInput, ViajesUncheckedUpdateManyInput>
    /**
     * Filter which Viajes to update
     */
    where?: ViajesWhereInput
    /**
     * Limit how many Viajes to update.
     */
    limit?: number
  }

  /**
   * Viajes updateManyAndReturn
   */
  export type ViajesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viajes
     */
    select?: ViajesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viajes
     */
    omit?: ViajesOmit<ExtArgs> | null
    /**
     * The data used to update Viajes.
     */
    data: XOR<ViajesUpdateManyMutationInput, ViajesUncheckedUpdateManyInput>
    /**
     * Filter which Viajes to update
     */
    where?: ViajesWhereInput
    /**
     * Limit how many Viajes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Viajes upsert
   */
  export type ViajesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viajes
     */
    select?: ViajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viajes
     */
    omit?: ViajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesInclude<ExtArgs> | null
    /**
     * The filter to search for the Viajes to update in case it exists.
     */
    where: ViajesWhereUniqueInput
    /**
     * In case the Viajes found by the `where` argument doesn't exist, create a new Viajes with this data.
     */
    create: XOR<ViajesCreateInput, ViajesUncheckedCreateInput>
    /**
     * In case the Viajes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViajesUpdateInput, ViajesUncheckedUpdateInput>
  }

  /**
   * Viajes delete
   */
  export type ViajesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viajes
     */
    select?: ViajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viajes
     */
    omit?: ViajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesInclude<ExtArgs> | null
    /**
     * Filter which Viajes to delete.
     */
    where: ViajesWhereUniqueInput
  }

  /**
   * Viajes deleteMany
   */
  export type ViajesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viajes to delete
     */
    where?: ViajesWhereInput
    /**
     * Limit how many Viajes to delete.
     */
    limit?: number
  }

  /**
   * Viajes without action
   */
  export type ViajesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viajes
     */
    select?: ViajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viajes
     */
    omit?: ViajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesInclude<ExtArgs> | null
  }


  /**
   * Model Pasajeros
   */

  export type AggregatePasajeros = {
    _count: PasajerosCountAggregateOutputType | null
    _avg: PasajerosAvgAggregateOutputType | null
    _sum: PasajerosSumAggregateOutputType | null
    _min: PasajerosMinAggregateOutputType | null
    _max: PasajerosMaxAggregateOutputType | null
  }

  export type PasajerosAvgAggregateOutputType = {
    id: number | null
  }

  export type PasajerosSumAggregateOutputType = {
    id: number | null
  }

  export type PasajerosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    status: $Enums.StatusDisponibilidad | null
  }

  export type PasajerosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    status: $Enums.StatusDisponibilidad | null
  }

  export type PasajerosCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    status: number
    _all: number
  }


  export type PasajerosAvgAggregateInputType = {
    id?: true
  }

  export type PasajerosSumAggregateInputType = {
    id?: true
  }

  export type PasajerosMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    status?: true
  }

  export type PasajerosMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    status?: true
  }

  export type PasajerosCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    status?: true
    _all?: true
  }

  export type PasajerosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pasajeros to aggregate.
     */
    where?: PasajerosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasajeros to fetch.
     */
    orderBy?: PasajerosOrderByWithRelationInput | PasajerosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasajerosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasajeros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasajeros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pasajeros
    **/
    _count?: true | PasajerosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasajerosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasajerosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasajerosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasajerosMaxAggregateInputType
  }

  export type GetPasajerosAggregateType<T extends PasajerosAggregateArgs> = {
        [P in keyof T & keyof AggregatePasajeros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasajeros[P]>
      : GetScalarType<T[P], AggregatePasajeros[P]>
  }




  export type PasajerosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasajerosWhereInput
    orderBy?: PasajerosOrderByWithAggregationInput | PasajerosOrderByWithAggregationInput[]
    by: PasajerosScalarFieldEnum[] | PasajerosScalarFieldEnum
    having?: PasajerosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasajerosCountAggregateInputType | true
    _avg?: PasajerosAvgAggregateInputType
    _sum?: PasajerosSumAggregateInputType
    _min?: PasajerosMinAggregateInputType
    _max?: PasajerosMaxAggregateInputType
  }

  export type PasajerosGroupByOutputType = {
    id: number
    nombre: string
    apellido: string
    status: $Enums.StatusDisponibilidad
    _count: PasajerosCountAggregateOutputType | null
    _avg: PasajerosAvgAggregateOutputType | null
    _sum: PasajerosSumAggregateOutputType | null
    _min: PasajerosMinAggregateOutputType | null
    _max: PasajerosMaxAggregateOutputType | null
  }

  type GetPasajerosGroupByPayload<T extends PasajerosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasajerosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasajerosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasajerosGroupByOutputType[P]>
            : GetScalarType<T[P], PasajerosGroupByOutputType[P]>
        }
      >
    >


  export type PasajerosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    status?: boolean
    Viajes?: boolean | Pasajeros$ViajesArgs<ExtArgs>
    _count?: boolean | PasajerosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pasajeros"]>

  export type PasajerosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    status?: boolean
  }, ExtArgs["result"]["pasajeros"]>

  export type PasajerosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    status?: boolean
  }, ExtArgs["result"]["pasajeros"]>

  export type PasajerosSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    status?: boolean
  }

  export type PasajerosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "status", ExtArgs["result"]["pasajeros"]>
  export type PasajerosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Viajes?: boolean | Pasajeros$ViajesArgs<ExtArgs>
    _count?: boolean | PasajerosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PasajerosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PasajerosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PasajerosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pasajeros"
    objects: {
      Viajes: Prisma.$ViajesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      apellido: string
      status: $Enums.StatusDisponibilidad
    }, ExtArgs["result"]["pasajeros"]>
    composites: {}
  }

  type PasajerosGetPayload<S extends boolean | null | undefined | PasajerosDefaultArgs> = $Result.GetResult<Prisma.$PasajerosPayload, S>

  type PasajerosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasajerosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasajerosCountAggregateInputType | true
    }

  export interface PasajerosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pasajeros'], meta: { name: 'Pasajeros' } }
    /**
     * Find zero or one Pasajeros that matches the filter.
     * @param {PasajerosFindUniqueArgs} args - Arguments to find a Pasajeros
     * @example
     * // Get one Pasajeros
     * const pasajeros = await prisma.pasajeros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasajerosFindUniqueArgs>(args: SelectSubset<T, PasajerosFindUniqueArgs<ExtArgs>>): Prisma__PasajerosClient<$Result.GetResult<Prisma.$PasajerosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pasajeros that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasajerosFindUniqueOrThrowArgs} args - Arguments to find a Pasajeros
     * @example
     * // Get one Pasajeros
     * const pasajeros = await prisma.pasajeros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasajerosFindUniqueOrThrowArgs>(args: SelectSubset<T, PasajerosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasajerosClient<$Result.GetResult<Prisma.$PasajerosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pasajeros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasajerosFindFirstArgs} args - Arguments to find a Pasajeros
     * @example
     * // Get one Pasajeros
     * const pasajeros = await prisma.pasajeros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasajerosFindFirstArgs>(args?: SelectSubset<T, PasajerosFindFirstArgs<ExtArgs>>): Prisma__PasajerosClient<$Result.GetResult<Prisma.$PasajerosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pasajeros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasajerosFindFirstOrThrowArgs} args - Arguments to find a Pasajeros
     * @example
     * // Get one Pasajeros
     * const pasajeros = await prisma.pasajeros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasajerosFindFirstOrThrowArgs>(args?: SelectSubset<T, PasajerosFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasajerosClient<$Result.GetResult<Prisma.$PasajerosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pasajeros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasajerosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pasajeros
     * const pasajeros = await prisma.pasajeros.findMany()
     * 
     * // Get first 10 Pasajeros
     * const pasajeros = await prisma.pasajeros.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pasajerosWithIdOnly = await prisma.pasajeros.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasajerosFindManyArgs>(args?: SelectSubset<T, PasajerosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasajerosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pasajeros.
     * @param {PasajerosCreateArgs} args - Arguments to create a Pasajeros.
     * @example
     * // Create one Pasajeros
     * const Pasajeros = await prisma.pasajeros.create({
     *   data: {
     *     // ... data to create a Pasajeros
     *   }
     * })
     * 
     */
    create<T extends PasajerosCreateArgs>(args: SelectSubset<T, PasajerosCreateArgs<ExtArgs>>): Prisma__PasajerosClient<$Result.GetResult<Prisma.$PasajerosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pasajeros.
     * @param {PasajerosCreateManyArgs} args - Arguments to create many Pasajeros.
     * @example
     * // Create many Pasajeros
     * const pasajeros = await prisma.pasajeros.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasajerosCreateManyArgs>(args?: SelectSubset<T, PasajerosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pasajeros and returns the data saved in the database.
     * @param {PasajerosCreateManyAndReturnArgs} args - Arguments to create many Pasajeros.
     * @example
     * // Create many Pasajeros
     * const pasajeros = await prisma.pasajeros.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pasajeros and only return the `id`
     * const pasajerosWithIdOnly = await prisma.pasajeros.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasajerosCreateManyAndReturnArgs>(args?: SelectSubset<T, PasajerosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasajerosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pasajeros.
     * @param {PasajerosDeleteArgs} args - Arguments to delete one Pasajeros.
     * @example
     * // Delete one Pasajeros
     * const Pasajeros = await prisma.pasajeros.delete({
     *   where: {
     *     // ... filter to delete one Pasajeros
     *   }
     * })
     * 
     */
    delete<T extends PasajerosDeleteArgs>(args: SelectSubset<T, PasajerosDeleteArgs<ExtArgs>>): Prisma__PasajerosClient<$Result.GetResult<Prisma.$PasajerosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pasajeros.
     * @param {PasajerosUpdateArgs} args - Arguments to update one Pasajeros.
     * @example
     * // Update one Pasajeros
     * const pasajeros = await prisma.pasajeros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasajerosUpdateArgs>(args: SelectSubset<T, PasajerosUpdateArgs<ExtArgs>>): Prisma__PasajerosClient<$Result.GetResult<Prisma.$PasajerosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pasajeros.
     * @param {PasajerosDeleteManyArgs} args - Arguments to filter Pasajeros to delete.
     * @example
     * // Delete a few Pasajeros
     * const { count } = await prisma.pasajeros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasajerosDeleteManyArgs>(args?: SelectSubset<T, PasajerosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pasajeros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasajerosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pasajeros
     * const pasajeros = await prisma.pasajeros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasajerosUpdateManyArgs>(args: SelectSubset<T, PasajerosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pasajeros and returns the data updated in the database.
     * @param {PasajerosUpdateManyAndReturnArgs} args - Arguments to update many Pasajeros.
     * @example
     * // Update many Pasajeros
     * const pasajeros = await prisma.pasajeros.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pasajeros and only return the `id`
     * const pasajerosWithIdOnly = await prisma.pasajeros.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasajerosUpdateManyAndReturnArgs>(args: SelectSubset<T, PasajerosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasajerosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pasajeros.
     * @param {PasajerosUpsertArgs} args - Arguments to update or create a Pasajeros.
     * @example
     * // Update or create a Pasajeros
     * const pasajeros = await prisma.pasajeros.upsert({
     *   create: {
     *     // ... data to create a Pasajeros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pasajeros we want to update
     *   }
     * })
     */
    upsert<T extends PasajerosUpsertArgs>(args: SelectSubset<T, PasajerosUpsertArgs<ExtArgs>>): Prisma__PasajerosClient<$Result.GetResult<Prisma.$PasajerosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pasajeros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasajerosCountArgs} args - Arguments to filter Pasajeros to count.
     * @example
     * // Count the number of Pasajeros
     * const count = await prisma.pasajeros.count({
     *   where: {
     *     // ... the filter for the Pasajeros we want to count
     *   }
     * })
    **/
    count<T extends PasajerosCountArgs>(
      args?: Subset<T, PasajerosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasajerosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pasajeros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasajerosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasajerosAggregateArgs>(args: Subset<T, PasajerosAggregateArgs>): Prisma.PrismaPromise<GetPasajerosAggregateType<T>>

    /**
     * Group by Pasajeros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasajerosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasajerosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasajerosGroupByArgs['orderBy'] }
        : { orderBy?: PasajerosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasajerosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasajerosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pasajeros model
   */
  readonly fields: PasajerosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pasajeros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasajerosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Viajes<T extends Pasajeros$ViajesArgs<ExtArgs> = {}>(args?: Subset<T, Pasajeros$ViajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pasajeros model
   */
  interface PasajerosFieldRefs {
    readonly id: FieldRef<"Pasajeros", 'Int'>
    readonly nombre: FieldRef<"Pasajeros", 'String'>
    readonly apellido: FieldRef<"Pasajeros", 'String'>
    readonly status: FieldRef<"Pasajeros", 'StatusDisponibilidad'>
  }
    

  // Custom InputTypes
  /**
   * Pasajeros findUnique
   */
  export type PasajerosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasajeros
     */
    select?: PasajerosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasajeros
     */
    omit?: PasajerosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasajerosInclude<ExtArgs> | null
    /**
     * Filter, which Pasajeros to fetch.
     */
    where: PasajerosWhereUniqueInput
  }

  /**
   * Pasajeros findUniqueOrThrow
   */
  export type PasajerosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasajeros
     */
    select?: PasajerosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasajeros
     */
    omit?: PasajerosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasajerosInclude<ExtArgs> | null
    /**
     * Filter, which Pasajeros to fetch.
     */
    where: PasajerosWhereUniqueInput
  }

  /**
   * Pasajeros findFirst
   */
  export type PasajerosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasajeros
     */
    select?: PasajerosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasajeros
     */
    omit?: PasajerosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasajerosInclude<ExtArgs> | null
    /**
     * Filter, which Pasajeros to fetch.
     */
    where?: PasajerosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasajeros to fetch.
     */
    orderBy?: PasajerosOrderByWithRelationInput | PasajerosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pasajeros.
     */
    cursor?: PasajerosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasajeros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasajeros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pasajeros.
     */
    distinct?: PasajerosScalarFieldEnum | PasajerosScalarFieldEnum[]
  }

  /**
   * Pasajeros findFirstOrThrow
   */
  export type PasajerosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasajeros
     */
    select?: PasajerosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasajeros
     */
    omit?: PasajerosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasajerosInclude<ExtArgs> | null
    /**
     * Filter, which Pasajeros to fetch.
     */
    where?: PasajerosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasajeros to fetch.
     */
    orderBy?: PasajerosOrderByWithRelationInput | PasajerosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pasajeros.
     */
    cursor?: PasajerosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasajeros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasajeros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pasajeros.
     */
    distinct?: PasajerosScalarFieldEnum | PasajerosScalarFieldEnum[]
  }

  /**
   * Pasajeros findMany
   */
  export type PasajerosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasajeros
     */
    select?: PasajerosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasajeros
     */
    omit?: PasajerosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasajerosInclude<ExtArgs> | null
    /**
     * Filter, which Pasajeros to fetch.
     */
    where?: PasajerosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasajeros to fetch.
     */
    orderBy?: PasajerosOrderByWithRelationInput | PasajerosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pasajeros.
     */
    cursor?: PasajerosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasajeros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasajeros.
     */
    skip?: number
    distinct?: PasajerosScalarFieldEnum | PasajerosScalarFieldEnum[]
  }

  /**
   * Pasajeros create
   */
  export type PasajerosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasajeros
     */
    select?: PasajerosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasajeros
     */
    omit?: PasajerosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasajerosInclude<ExtArgs> | null
    /**
     * The data needed to create a Pasajeros.
     */
    data: XOR<PasajerosCreateInput, PasajerosUncheckedCreateInput>
  }

  /**
   * Pasajeros createMany
   */
  export type PasajerosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pasajeros.
     */
    data: PasajerosCreateManyInput | PasajerosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pasajeros createManyAndReturn
   */
  export type PasajerosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasajeros
     */
    select?: PasajerosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pasajeros
     */
    omit?: PasajerosOmit<ExtArgs> | null
    /**
     * The data used to create many Pasajeros.
     */
    data: PasajerosCreateManyInput | PasajerosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pasajeros update
   */
  export type PasajerosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasajeros
     */
    select?: PasajerosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasajeros
     */
    omit?: PasajerosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasajerosInclude<ExtArgs> | null
    /**
     * The data needed to update a Pasajeros.
     */
    data: XOR<PasajerosUpdateInput, PasajerosUncheckedUpdateInput>
    /**
     * Choose, which Pasajeros to update.
     */
    where: PasajerosWhereUniqueInput
  }

  /**
   * Pasajeros updateMany
   */
  export type PasajerosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pasajeros.
     */
    data: XOR<PasajerosUpdateManyMutationInput, PasajerosUncheckedUpdateManyInput>
    /**
     * Filter which Pasajeros to update
     */
    where?: PasajerosWhereInput
    /**
     * Limit how many Pasajeros to update.
     */
    limit?: number
  }

  /**
   * Pasajeros updateManyAndReturn
   */
  export type PasajerosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasajeros
     */
    select?: PasajerosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pasajeros
     */
    omit?: PasajerosOmit<ExtArgs> | null
    /**
     * The data used to update Pasajeros.
     */
    data: XOR<PasajerosUpdateManyMutationInput, PasajerosUncheckedUpdateManyInput>
    /**
     * Filter which Pasajeros to update
     */
    where?: PasajerosWhereInput
    /**
     * Limit how many Pasajeros to update.
     */
    limit?: number
  }

  /**
   * Pasajeros upsert
   */
  export type PasajerosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasajeros
     */
    select?: PasajerosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasajeros
     */
    omit?: PasajerosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasajerosInclude<ExtArgs> | null
    /**
     * The filter to search for the Pasajeros to update in case it exists.
     */
    where: PasajerosWhereUniqueInput
    /**
     * In case the Pasajeros found by the `where` argument doesn't exist, create a new Pasajeros with this data.
     */
    create: XOR<PasajerosCreateInput, PasajerosUncheckedCreateInput>
    /**
     * In case the Pasajeros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasajerosUpdateInput, PasajerosUncheckedUpdateInput>
  }

  /**
   * Pasajeros delete
   */
  export type PasajerosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasajeros
     */
    select?: PasajerosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasajeros
     */
    omit?: PasajerosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasajerosInclude<ExtArgs> | null
    /**
     * Filter which Pasajeros to delete.
     */
    where: PasajerosWhereUniqueInput
  }

  /**
   * Pasajeros deleteMany
   */
  export type PasajerosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pasajeros to delete
     */
    where?: PasajerosWhereInput
    /**
     * Limit how many Pasajeros to delete.
     */
    limit?: number
  }

  /**
   * Pasajeros.Viajes
   */
  export type Pasajeros$ViajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viajes
     */
    select?: ViajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viajes
     */
    omit?: ViajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesInclude<ExtArgs> | null
    where?: ViajesWhereInput
    orderBy?: ViajesOrderByWithRelationInput | ViajesOrderByWithRelationInput[]
    cursor?: ViajesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViajesScalarFieldEnum | ViajesScalarFieldEnum[]
  }

  /**
   * Pasajeros without action
   */
  export type PasajerosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasajeros
     */
    select?: PasajerosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasajeros
     */
    omit?: PasajerosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasajerosInclude<ExtArgs> | null
  }


  /**
   * Model Disponibilidad
   */

  export type AggregateDisponibilidad = {
    _count: DisponibilidadCountAggregateOutputType | null
    _avg: DisponibilidadAvgAggregateOutputType | null
    _sum: DisponibilidadSumAggregateOutputType | null
    _min: DisponibilidadMinAggregateOutputType | null
    _max: DisponibilidadMaxAggregateOutputType | null
  }

  export type DisponibilidadAvgAggregateOutputType = {
    id: number | null
  }

  export type DisponibilidadSumAggregateOutputType = {
    id: number | null
  }

  export type DisponibilidadMinAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type DisponibilidadMaxAggregateOutputType = {
    id: number | null
    descripcion: string | null
  }

  export type DisponibilidadCountAggregateOutputType = {
    id: number
    descripcion: number
    _all: number
  }


  export type DisponibilidadAvgAggregateInputType = {
    id?: true
  }

  export type DisponibilidadSumAggregateInputType = {
    id?: true
  }

  export type DisponibilidadMinAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type DisponibilidadMaxAggregateInputType = {
    id?: true
    descripcion?: true
  }

  export type DisponibilidadCountAggregateInputType = {
    id?: true
    descripcion?: true
    _all?: true
  }

  export type DisponibilidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilidad to aggregate.
     */
    where?: DisponibilidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidads to fetch.
     */
    orderBy?: DisponibilidadOrderByWithRelationInput | DisponibilidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisponibilidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disponibilidads
    **/
    _count?: true | DisponibilidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisponibilidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisponibilidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisponibilidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisponibilidadMaxAggregateInputType
  }

  export type GetDisponibilidadAggregateType<T extends DisponibilidadAggregateArgs> = {
        [P in keyof T & keyof AggregateDisponibilidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisponibilidad[P]>
      : GetScalarType<T[P], AggregateDisponibilidad[P]>
  }




  export type DisponibilidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilidadWhereInput
    orderBy?: DisponibilidadOrderByWithAggregationInput | DisponibilidadOrderByWithAggregationInput[]
    by: DisponibilidadScalarFieldEnum[] | DisponibilidadScalarFieldEnum
    having?: DisponibilidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisponibilidadCountAggregateInputType | true
    _avg?: DisponibilidadAvgAggregateInputType
    _sum?: DisponibilidadSumAggregateInputType
    _min?: DisponibilidadMinAggregateInputType
    _max?: DisponibilidadMaxAggregateInputType
  }

  export type DisponibilidadGroupByOutputType = {
    id: number
    descripcion: string
    _count: DisponibilidadCountAggregateOutputType | null
    _avg: DisponibilidadAvgAggregateOutputType | null
    _sum: DisponibilidadSumAggregateOutputType | null
    _min: DisponibilidadMinAggregateOutputType | null
    _max: DisponibilidadMaxAggregateOutputType | null
  }

  type GetDisponibilidadGroupByPayload<T extends DisponibilidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisponibilidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisponibilidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisponibilidadGroupByOutputType[P]>
            : GetScalarType<T[P], DisponibilidadGroupByOutputType[P]>
        }
      >
    >


  export type DisponibilidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
    conductores?: boolean | Disponibilidad$conductoresArgs<ExtArgs>
    _count?: boolean | DisponibilidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibilidad"]>

  export type DisponibilidadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["disponibilidad"]>

  export type DisponibilidadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["disponibilidad"]>

  export type DisponibilidadSelectScalar = {
    id?: boolean
    descripcion?: boolean
  }

  export type DisponibilidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descripcion", ExtArgs["result"]["disponibilidad"]>
  export type DisponibilidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conductores?: boolean | Disponibilidad$conductoresArgs<ExtArgs>
    _count?: boolean | DisponibilidadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DisponibilidadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DisponibilidadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DisponibilidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disponibilidad"
    objects: {
      conductores: Prisma.$ConductoresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descripcion: string
    }, ExtArgs["result"]["disponibilidad"]>
    composites: {}
  }

  type DisponibilidadGetPayload<S extends boolean | null | undefined | DisponibilidadDefaultArgs> = $Result.GetResult<Prisma.$DisponibilidadPayload, S>

  type DisponibilidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisponibilidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisponibilidadCountAggregateInputType | true
    }

  export interface DisponibilidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disponibilidad'], meta: { name: 'Disponibilidad' } }
    /**
     * Find zero or one Disponibilidad that matches the filter.
     * @param {DisponibilidadFindUniqueArgs} args - Arguments to find a Disponibilidad
     * @example
     * // Get one Disponibilidad
     * const disponibilidad = await prisma.disponibilidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisponibilidadFindUniqueArgs>(args: SelectSubset<T, DisponibilidadFindUniqueArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disponibilidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisponibilidadFindUniqueOrThrowArgs} args - Arguments to find a Disponibilidad
     * @example
     * // Get one Disponibilidad
     * const disponibilidad = await prisma.disponibilidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisponibilidadFindUniqueOrThrowArgs>(args: SelectSubset<T, DisponibilidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibilidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadFindFirstArgs} args - Arguments to find a Disponibilidad
     * @example
     * // Get one Disponibilidad
     * const disponibilidad = await prisma.disponibilidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisponibilidadFindFirstArgs>(args?: SelectSubset<T, DisponibilidadFindFirstArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibilidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadFindFirstOrThrowArgs} args - Arguments to find a Disponibilidad
     * @example
     * // Get one Disponibilidad
     * const disponibilidad = await prisma.disponibilidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisponibilidadFindFirstOrThrowArgs>(args?: SelectSubset<T, DisponibilidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disponibilidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disponibilidads
     * const disponibilidads = await prisma.disponibilidad.findMany()
     * 
     * // Get first 10 Disponibilidads
     * const disponibilidads = await prisma.disponibilidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disponibilidadWithIdOnly = await prisma.disponibilidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisponibilidadFindManyArgs>(args?: SelectSubset<T, DisponibilidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disponibilidad.
     * @param {DisponibilidadCreateArgs} args - Arguments to create a Disponibilidad.
     * @example
     * // Create one Disponibilidad
     * const Disponibilidad = await prisma.disponibilidad.create({
     *   data: {
     *     // ... data to create a Disponibilidad
     *   }
     * })
     * 
     */
    create<T extends DisponibilidadCreateArgs>(args: SelectSubset<T, DisponibilidadCreateArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disponibilidads.
     * @param {DisponibilidadCreateManyArgs} args - Arguments to create many Disponibilidads.
     * @example
     * // Create many Disponibilidads
     * const disponibilidad = await prisma.disponibilidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisponibilidadCreateManyArgs>(args?: SelectSubset<T, DisponibilidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disponibilidads and returns the data saved in the database.
     * @param {DisponibilidadCreateManyAndReturnArgs} args - Arguments to create many Disponibilidads.
     * @example
     * // Create many Disponibilidads
     * const disponibilidad = await prisma.disponibilidad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disponibilidads and only return the `id`
     * const disponibilidadWithIdOnly = await prisma.disponibilidad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisponibilidadCreateManyAndReturnArgs>(args?: SelectSubset<T, DisponibilidadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disponibilidad.
     * @param {DisponibilidadDeleteArgs} args - Arguments to delete one Disponibilidad.
     * @example
     * // Delete one Disponibilidad
     * const Disponibilidad = await prisma.disponibilidad.delete({
     *   where: {
     *     // ... filter to delete one Disponibilidad
     *   }
     * })
     * 
     */
    delete<T extends DisponibilidadDeleteArgs>(args: SelectSubset<T, DisponibilidadDeleteArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disponibilidad.
     * @param {DisponibilidadUpdateArgs} args - Arguments to update one Disponibilidad.
     * @example
     * // Update one Disponibilidad
     * const disponibilidad = await prisma.disponibilidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisponibilidadUpdateArgs>(args: SelectSubset<T, DisponibilidadUpdateArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disponibilidads.
     * @param {DisponibilidadDeleteManyArgs} args - Arguments to filter Disponibilidads to delete.
     * @example
     * // Delete a few Disponibilidads
     * const { count } = await prisma.disponibilidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisponibilidadDeleteManyArgs>(args?: SelectSubset<T, DisponibilidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disponibilidads
     * const disponibilidad = await prisma.disponibilidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisponibilidadUpdateManyArgs>(args: SelectSubset<T, DisponibilidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilidads and returns the data updated in the database.
     * @param {DisponibilidadUpdateManyAndReturnArgs} args - Arguments to update many Disponibilidads.
     * @example
     * // Update many Disponibilidads
     * const disponibilidad = await prisma.disponibilidad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disponibilidads and only return the `id`
     * const disponibilidadWithIdOnly = await prisma.disponibilidad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisponibilidadUpdateManyAndReturnArgs>(args: SelectSubset<T, DisponibilidadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disponibilidad.
     * @param {DisponibilidadUpsertArgs} args - Arguments to update or create a Disponibilidad.
     * @example
     * // Update or create a Disponibilidad
     * const disponibilidad = await prisma.disponibilidad.upsert({
     *   create: {
     *     // ... data to create a Disponibilidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disponibilidad we want to update
     *   }
     * })
     */
    upsert<T extends DisponibilidadUpsertArgs>(args: SelectSubset<T, DisponibilidadUpsertArgs<ExtArgs>>): Prisma__DisponibilidadClient<$Result.GetResult<Prisma.$DisponibilidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disponibilidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadCountArgs} args - Arguments to filter Disponibilidads to count.
     * @example
     * // Count the number of Disponibilidads
     * const count = await prisma.disponibilidad.count({
     *   where: {
     *     // ... the filter for the Disponibilidads we want to count
     *   }
     * })
    **/
    count<T extends DisponibilidadCountArgs>(
      args?: Subset<T, DisponibilidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisponibilidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disponibilidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisponibilidadAggregateArgs>(args: Subset<T, DisponibilidadAggregateArgs>): Prisma.PrismaPromise<GetDisponibilidadAggregateType<T>>

    /**
     * Group by Disponibilidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilidadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisponibilidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisponibilidadGroupByArgs['orderBy'] }
        : { orderBy?: DisponibilidadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisponibilidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisponibilidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disponibilidad model
   */
  readonly fields: DisponibilidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disponibilidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisponibilidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conductores<T extends Disponibilidad$conductoresArgs<ExtArgs> = {}>(args?: Subset<T, Disponibilidad$conductoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Disponibilidad model
   */
  interface DisponibilidadFieldRefs {
    readonly id: FieldRef<"Disponibilidad", 'Int'>
    readonly descripcion: FieldRef<"Disponibilidad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Disponibilidad findUnique
   */
  export type DisponibilidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidad to fetch.
     */
    where: DisponibilidadWhereUniqueInput
  }

  /**
   * Disponibilidad findUniqueOrThrow
   */
  export type DisponibilidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidad to fetch.
     */
    where: DisponibilidadWhereUniqueInput
  }

  /**
   * Disponibilidad findFirst
   */
  export type DisponibilidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidad to fetch.
     */
    where?: DisponibilidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidads to fetch.
     */
    orderBy?: DisponibilidadOrderByWithRelationInput | DisponibilidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilidads.
     */
    cursor?: DisponibilidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilidads.
     */
    distinct?: DisponibilidadScalarFieldEnum | DisponibilidadScalarFieldEnum[]
  }

  /**
   * Disponibilidad findFirstOrThrow
   */
  export type DisponibilidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidad to fetch.
     */
    where?: DisponibilidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidads to fetch.
     */
    orderBy?: DisponibilidadOrderByWithRelationInput | DisponibilidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilidads.
     */
    cursor?: DisponibilidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilidads.
     */
    distinct?: DisponibilidadScalarFieldEnum | DisponibilidadScalarFieldEnum[]
  }

  /**
   * Disponibilidad findMany
   */
  export type DisponibilidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilidads to fetch.
     */
    where?: DisponibilidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilidads to fetch.
     */
    orderBy?: DisponibilidadOrderByWithRelationInput | DisponibilidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disponibilidads.
     */
    cursor?: DisponibilidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilidads.
     */
    skip?: number
    distinct?: DisponibilidadScalarFieldEnum | DisponibilidadScalarFieldEnum[]
  }

  /**
   * Disponibilidad create
   */
  export type DisponibilidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadInclude<ExtArgs> | null
    /**
     * The data needed to create a Disponibilidad.
     */
    data: XOR<DisponibilidadCreateInput, DisponibilidadUncheckedCreateInput>
  }

  /**
   * Disponibilidad createMany
   */
  export type DisponibilidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disponibilidads.
     */
    data: DisponibilidadCreateManyInput | DisponibilidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disponibilidad createManyAndReturn
   */
  export type DisponibilidadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * The data used to create many Disponibilidads.
     */
    data: DisponibilidadCreateManyInput | DisponibilidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disponibilidad update
   */
  export type DisponibilidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadInclude<ExtArgs> | null
    /**
     * The data needed to update a Disponibilidad.
     */
    data: XOR<DisponibilidadUpdateInput, DisponibilidadUncheckedUpdateInput>
    /**
     * Choose, which Disponibilidad to update.
     */
    where: DisponibilidadWhereUniqueInput
  }

  /**
   * Disponibilidad updateMany
   */
  export type DisponibilidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disponibilidads.
     */
    data: XOR<DisponibilidadUpdateManyMutationInput, DisponibilidadUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilidads to update
     */
    where?: DisponibilidadWhereInput
    /**
     * Limit how many Disponibilidads to update.
     */
    limit?: number
  }

  /**
   * Disponibilidad updateManyAndReturn
   */
  export type DisponibilidadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * The data used to update Disponibilidads.
     */
    data: XOR<DisponibilidadUpdateManyMutationInput, DisponibilidadUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilidads to update
     */
    where?: DisponibilidadWhereInput
    /**
     * Limit how many Disponibilidads to update.
     */
    limit?: number
  }

  /**
   * Disponibilidad upsert
   */
  export type DisponibilidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadInclude<ExtArgs> | null
    /**
     * The filter to search for the Disponibilidad to update in case it exists.
     */
    where: DisponibilidadWhereUniqueInput
    /**
     * In case the Disponibilidad found by the `where` argument doesn't exist, create a new Disponibilidad with this data.
     */
    create: XOR<DisponibilidadCreateInput, DisponibilidadUncheckedCreateInput>
    /**
     * In case the Disponibilidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisponibilidadUpdateInput, DisponibilidadUncheckedUpdateInput>
  }

  /**
   * Disponibilidad delete
   */
  export type DisponibilidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadInclude<ExtArgs> | null
    /**
     * Filter which Disponibilidad to delete.
     */
    where: DisponibilidadWhereUniqueInput
  }

  /**
   * Disponibilidad deleteMany
   */
  export type DisponibilidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilidads to delete
     */
    where?: DisponibilidadWhereInput
    /**
     * Limit how many Disponibilidads to delete.
     */
    limit?: number
  }

  /**
   * Disponibilidad.conductores
   */
  export type Disponibilidad$conductoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductores
     */
    select?: ConductoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductores
     */
    omit?: ConductoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductoresInclude<ExtArgs> | null
    where?: ConductoresWhereInput
    orderBy?: ConductoresOrderByWithRelationInput | ConductoresOrderByWithRelationInput[]
    cursor?: ConductoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConductoresScalarFieldEnum | ConductoresScalarFieldEnum[]
  }

  /**
   * Disponibilidad without action
   */
  export type DisponibilidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibilidad
     */
    select?: DisponibilidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibilidad
     */
    omit?: DisponibilidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilidadInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ConductoresScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    disponibilidadId: 'disponibilidadId',
    ubicacionLatitud: 'ubicacionLatitud',
    ubicacionLongitud: 'ubicacionLongitud'
  };

  export type ConductoresScalarFieldEnum = (typeof ConductoresScalarFieldEnum)[keyof typeof ConductoresScalarFieldEnum]


  export const ViajesScalarFieldEnum: {
    id: 'id',
    pasajeroId: 'pasajeroId',
    conductorId: 'conductorId',
    status: 'status',
    latitudDesde: 'latitudDesde',
    longitudDesde: 'longitudDesde',
    latitudHasta: 'latitudHasta',
    longitudHasta: 'longitudHasta'
  };

  export type ViajesScalarFieldEnum = (typeof ViajesScalarFieldEnum)[keyof typeof ViajesScalarFieldEnum]


  export const PasajerosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    status: 'status'
  };

  export type PasajerosScalarFieldEnum = (typeof PasajerosScalarFieldEnum)[keyof typeof PasajerosScalarFieldEnum]


  export const DisponibilidadScalarFieldEnum: {
    id: 'id',
    descripcion: 'descripcion'
  };

  export type DisponibilidadScalarFieldEnum = (typeof DisponibilidadScalarFieldEnum)[keyof typeof DisponibilidadScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'StatusViajes'
   */
  export type EnumStatusViajesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusViajes'>
    


  /**
   * Reference to a field of type 'StatusViajes[]'
   */
  export type ListEnumStatusViajesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusViajes[]'>
    


  /**
   * Reference to a field of type 'StatusDisponibilidad'
   */
  export type EnumStatusDisponibilidadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusDisponibilidad'>
    


  /**
   * Reference to a field of type 'StatusDisponibilidad[]'
   */
  export type ListEnumStatusDisponibilidadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusDisponibilidad[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ConductoresWhereInput = {
    AND?: ConductoresWhereInput | ConductoresWhereInput[]
    OR?: ConductoresWhereInput[]
    NOT?: ConductoresWhereInput | ConductoresWhereInput[]
    id?: IntFilter<"Conductores"> | number
    nombre?: StringFilter<"Conductores"> | string
    apellido?: StringFilter<"Conductores"> | string
    disponibilidadId?: IntFilter<"Conductores"> | number
    ubicacionLatitud?: DecimalNullableFilter<"Conductores"> | Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: DecimalNullableFilter<"Conductores"> | Decimal | DecimalJsLike | number | string | null
    disponibilidad?: XOR<DisponibilidadScalarRelationFilter, DisponibilidadWhereInput>
    Viajes?: ViajesListRelationFilter
  }

  export type ConductoresOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    disponibilidadId?: SortOrder
    ubicacionLatitud?: SortOrderInput | SortOrder
    ubicacionLongitud?: SortOrderInput | SortOrder
    disponibilidad?: DisponibilidadOrderByWithRelationInput
    Viajes?: ViajesOrderByRelationAggregateInput
  }

  export type ConductoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConductoresWhereInput | ConductoresWhereInput[]
    OR?: ConductoresWhereInput[]
    NOT?: ConductoresWhereInput | ConductoresWhereInput[]
    nombre?: StringFilter<"Conductores"> | string
    apellido?: StringFilter<"Conductores"> | string
    disponibilidadId?: IntFilter<"Conductores"> | number
    ubicacionLatitud?: DecimalNullableFilter<"Conductores"> | Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: DecimalNullableFilter<"Conductores"> | Decimal | DecimalJsLike | number | string | null
    disponibilidad?: XOR<DisponibilidadScalarRelationFilter, DisponibilidadWhereInput>
    Viajes?: ViajesListRelationFilter
  }, "id">

  export type ConductoresOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    disponibilidadId?: SortOrder
    ubicacionLatitud?: SortOrderInput | SortOrder
    ubicacionLongitud?: SortOrderInput | SortOrder
    _count?: ConductoresCountOrderByAggregateInput
    _avg?: ConductoresAvgOrderByAggregateInput
    _max?: ConductoresMaxOrderByAggregateInput
    _min?: ConductoresMinOrderByAggregateInput
    _sum?: ConductoresSumOrderByAggregateInput
  }

  export type ConductoresScalarWhereWithAggregatesInput = {
    AND?: ConductoresScalarWhereWithAggregatesInput | ConductoresScalarWhereWithAggregatesInput[]
    OR?: ConductoresScalarWhereWithAggregatesInput[]
    NOT?: ConductoresScalarWhereWithAggregatesInput | ConductoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conductores"> | number
    nombre?: StringWithAggregatesFilter<"Conductores"> | string
    apellido?: StringWithAggregatesFilter<"Conductores"> | string
    disponibilidadId?: IntWithAggregatesFilter<"Conductores"> | number
    ubicacionLatitud?: DecimalNullableWithAggregatesFilter<"Conductores"> | Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: DecimalNullableWithAggregatesFilter<"Conductores"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ViajesWhereInput = {
    AND?: ViajesWhereInput | ViajesWhereInput[]
    OR?: ViajesWhereInput[]
    NOT?: ViajesWhereInput | ViajesWhereInput[]
    id?: IntFilter<"Viajes"> | number
    pasajeroId?: IntFilter<"Viajes"> | number
    conductorId?: IntFilter<"Viajes"> | number
    status?: EnumStatusViajesFilter<"Viajes"> | $Enums.StatusViajes
    latitudDesde?: DecimalFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
    longitudDesde?: DecimalFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
    latitudHasta?: DecimalFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
    longitudHasta?: DecimalFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
    pasajero?: XOR<PasajerosScalarRelationFilter, PasajerosWhereInput>
    conductor?: XOR<ConductoresScalarRelationFilter, ConductoresWhereInput>
  }

  export type ViajesOrderByWithRelationInput = {
    id?: SortOrder
    pasajeroId?: SortOrder
    conductorId?: SortOrder
    status?: SortOrder
    latitudDesde?: SortOrder
    longitudDesde?: SortOrder
    latitudHasta?: SortOrder
    longitudHasta?: SortOrder
    pasajero?: PasajerosOrderByWithRelationInput
    conductor?: ConductoresOrderByWithRelationInput
  }

  export type ViajesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ViajesWhereInput | ViajesWhereInput[]
    OR?: ViajesWhereInput[]
    NOT?: ViajesWhereInput | ViajesWhereInput[]
    pasajeroId?: IntFilter<"Viajes"> | number
    conductorId?: IntFilter<"Viajes"> | number
    status?: EnumStatusViajesFilter<"Viajes"> | $Enums.StatusViajes
    latitudDesde?: DecimalFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
    longitudDesde?: DecimalFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
    latitudHasta?: DecimalFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
    longitudHasta?: DecimalFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
    pasajero?: XOR<PasajerosScalarRelationFilter, PasajerosWhereInput>
    conductor?: XOR<ConductoresScalarRelationFilter, ConductoresWhereInput>
  }, "id">

  export type ViajesOrderByWithAggregationInput = {
    id?: SortOrder
    pasajeroId?: SortOrder
    conductorId?: SortOrder
    status?: SortOrder
    latitudDesde?: SortOrder
    longitudDesde?: SortOrder
    latitudHasta?: SortOrder
    longitudHasta?: SortOrder
    _count?: ViajesCountOrderByAggregateInput
    _avg?: ViajesAvgOrderByAggregateInput
    _max?: ViajesMaxOrderByAggregateInput
    _min?: ViajesMinOrderByAggregateInput
    _sum?: ViajesSumOrderByAggregateInput
  }

  export type ViajesScalarWhereWithAggregatesInput = {
    AND?: ViajesScalarWhereWithAggregatesInput | ViajesScalarWhereWithAggregatesInput[]
    OR?: ViajesScalarWhereWithAggregatesInput[]
    NOT?: ViajesScalarWhereWithAggregatesInput | ViajesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Viajes"> | number
    pasajeroId?: IntWithAggregatesFilter<"Viajes"> | number
    conductorId?: IntWithAggregatesFilter<"Viajes"> | number
    status?: EnumStatusViajesWithAggregatesFilter<"Viajes"> | $Enums.StatusViajes
    latitudDesde?: DecimalWithAggregatesFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
    longitudDesde?: DecimalWithAggregatesFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
    latitudHasta?: DecimalWithAggregatesFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
    longitudHasta?: DecimalWithAggregatesFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
  }

  export type PasajerosWhereInput = {
    AND?: PasajerosWhereInput | PasajerosWhereInput[]
    OR?: PasajerosWhereInput[]
    NOT?: PasajerosWhereInput | PasajerosWhereInput[]
    id?: IntFilter<"Pasajeros"> | number
    nombre?: StringFilter<"Pasajeros"> | string
    apellido?: StringFilter<"Pasajeros"> | string
    status?: EnumStatusDisponibilidadFilter<"Pasajeros"> | $Enums.StatusDisponibilidad
    Viajes?: ViajesListRelationFilter
  }

  export type PasajerosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    status?: SortOrder
    Viajes?: ViajesOrderByRelationAggregateInput
  }

  export type PasajerosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PasajerosWhereInput | PasajerosWhereInput[]
    OR?: PasajerosWhereInput[]
    NOT?: PasajerosWhereInput | PasajerosWhereInput[]
    nombre?: StringFilter<"Pasajeros"> | string
    apellido?: StringFilter<"Pasajeros"> | string
    status?: EnumStatusDisponibilidadFilter<"Pasajeros"> | $Enums.StatusDisponibilidad
    Viajes?: ViajesListRelationFilter
  }, "id">

  export type PasajerosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    status?: SortOrder
    _count?: PasajerosCountOrderByAggregateInput
    _avg?: PasajerosAvgOrderByAggregateInput
    _max?: PasajerosMaxOrderByAggregateInput
    _min?: PasajerosMinOrderByAggregateInput
    _sum?: PasajerosSumOrderByAggregateInput
  }

  export type PasajerosScalarWhereWithAggregatesInput = {
    AND?: PasajerosScalarWhereWithAggregatesInput | PasajerosScalarWhereWithAggregatesInput[]
    OR?: PasajerosScalarWhereWithAggregatesInput[]
    NOT?: PasajerosScalarWhereWithAggregatesInput | PasajerosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pasajeros"> | number
    nombre?: StringWithAggregatesFilter<"Pasajeros"> | string
    apellido?: StringWithAggregatesFilter<"Pasajeros"> | string
    status?: EnumStatusDisponibilidadWithAggregatesFilter<"Pasajeros"> | $Enums.StatusDisponibilidad
  }

  export type DisponibilidadWhereInput = {
    AND?: DisponibilidadWhereInput | DisponibilidadWhereInput[]
    OR?: DisponibilidadWhereInput[]
    NOT?: DisponibilidadWhereInput | DisponibilidadWhereInput[]
    id?: IntFilter<"Disponibilidad"> | number
    descripcion?: StringFilter<"Disponibilidad"> | string
    conductores?: ConductoresListRelationFilter
  }

  export type DisponibilidadOrderByWithRelationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    conductores?: ConductoresOrderByRelationAggregateInput
  }

  export type DisponibilidadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DisponibilidadWhereInput | DisponibilidadWhereInput[]
    OR?: DisponibilidadWhereInput[]
    NOT?: DisponibilidadWhereInput | DisponibilidadWhereInput[]
    descripcion?: StringFilter<"Disponibilidad"> | string
    conductores?: ConductoresListRelationFilter
  }, "id">

  export type DisponibilidadOrderByWithAggregationInput = {
    id?: SortOrder
    descripcion?: SortOrder
    _count?: DisponibilidadCountOrderByAggregateInput
    _avg?: DisponibilidadAvgOrderByAggregateInput
    _max?: DisponibilidadMaxOrderByAggregateInput
    _min?: DisponibilidadMinOrderByAggregateInput
    _sum?: DisponibilidadSumOrderByAggregateInput
  }

  export type DisponibilidadScalarWhereWithAggregatesInput = {
    AND?: DisponibilidadScalarWhereWithAggregatesInput | DisponibilidadScalarWhereWithAggregatesInput[]
    OR?: DisponibilidadScalarWhereWithAggregatesInput[]
    NOT?: DisponibilidadScalarWhereWithAggregatesInput | DisponibilidadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Disponibilidad"> | number
    descripcion?: StringWithAggregatesFilter<"Disponibilidad"> | string
  }

  export type ConductoresCreateInput = {
    nombre: string
    apellido: string
    ubicacionLatitud?: Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: Decimal | DecimalJsLike | number | string | null
    disponibilidad: DisponibilidadCreateNestedOneWithoutConductoresInput
    Viajes?: ViajesCreateNestedManyWithoutConductorInput
  }

  export type ConductoresUncheckedCreateInput = {
    id?: number
    nombre: string
    apellido: string
    disponibilidadId: number
    ubicacionLatitud?: Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: Decimal | DecimalJsLike | number | string | null
    Viajes?: ViajesUncheckedCreateNestedManyWithoutConductorInput
  }

  export type ConductoresUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    ubicacionLatitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponibilidad?: DisponibilidadUpdateOneRequiredWithoutConductoresNestedInput
    Viajes?: ViajesUpdateManyWithoutConductorNestedInput
  }

  export type ConductoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    disponibilidadId?: IntFieldUpdateOperationsInput | number
    ubicacionLatitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Viajes?: ViajesUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type ConductoresCreateManyInput = {
    id?: number
    nombre: string
    apellido: string
    disponibilidadId: number
    ubicacionLatitud?: Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: Decimal | DecimalJsLike | number | string | null
  }

  export type ConductoresUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    ubicacionLatitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ConductoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    disponibilidadId?: IntFieldUpdateOperationsInput | number
    ubicacionLatitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ViajesCreateInput = {
    status?: $Enums.StatusViajes
    latitudDesde: Decimal | DecimalJsLike | number | string
    longitudDesde: Decimal | DecimalJsLike | number | string
    latitudHasta: Decimal | DecimalJsLike | number | string
    longitudHasta: Decimal | DecimalJsLike | number | string
    pasajero: PasajerosCreateNestedOneWithoutViajesInput
    conductor: ConductoresCreateNestedOneWithoutViajesInput
  }

  export type ViajesUncheckedCreateInput = {
    id?: number
    pasajeroId: number
    conductorId: number
    status?: $Enums.StatusViajes
    latitudDesde: Decimal | DecimalJsLike | number | string
    longitudDesde: Decimal | DecimalJsLike | number | string
    latitudHasta: Decimal | DecimalJsLike | number | string
    longitudHasta: Decimal | DecimalJsLike | number | string
  }

  export type ViajesUpdateInput = {
    status?: EnumStatusViajesFieldUpdateOperationsInput | $Enums.StatusViajes
    latitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pasajero?: PasajerosUpdateOneRequiredWithoutViajesNestedInput
    conductor?: ConductoresUpdateOneRequiredWithoutViajesNestedInput
  }

  export type ViajesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pasajeroId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusViajesFieldUpdateOperationsInput | $Enums.StatusViajes
    latitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ViajesCreateManyInput = {
    id?: number
    pasajeroId: number
    conductorId: number
    status?: $Enums.StatusViajes
    latitudDesde: Decimal | DecimalJsLike | number | string
    longitudDesde: Decimal | DecimalJsLike | number | string
    latitudHasta: Decimal | DecimalJsLike | number | string
    longitudHasta: Decimal | DecimalJsLike | number | string
  }

  export type ViajesUpdateManyMutationInput = {
    status?: EnumStatusViajesFieldUpdateOperationsInput | $Enums.StatusViajes
    latitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ViajesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pasajeroId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusViajesFieldUpdateOperationsInput | $Enums.StatusViajes
    latitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PasajerosCreateInput = {
    nombre: string
    apellido: string
    status?: $Enums.StatusDisponibilidad
    Viajes?: ViajesCreateNestedManyWithoutPasajeroInput
  }

  export type PasajerosUncheckedCreateInput = {
    id?: number
    nombre: string
    apellido: string
    status?: $Enums.StatusDisponibilidad
    Viajes?: ViajesUncheckedCreateNestedManyWithoutPasajeroInput
  }

  export type PasajerosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDisponibilidadFieldUpdateOperationsInput | $Enums.StatusDisponibilidad
    Viajes?: ViajesUpdateManyWithoutPasajeroNestedInput
  }

  export type PasajerosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDisponibilidadFieldUpdateOperationsInput | $Enums.StatusDisponibilidad
    Viajes?: ViajesUncheckedUpdateManyWithoutPasajeroNestedInput
  }

  export type PasajerosCreateManyInput = {
    id?: number
    nombre: string
    apellido: string
    status?: $Enums.StatusDisponibilidad
  }

  export type PasajerosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDisponibilidadFieldUpdateOperationsInput | $Enums.StatusDisponibilidad
  }

  export type PasajerosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDisponibilidadFieldUpdateOperationsInput | $Enums.StatusDisponibilidad
  }

  export type DisponibilidadCreateInput = {
    descripcion: string
    conductores?: ConductoresCreateNestedManyWithoutDisponibilidadInput
  }

  export type DisponibilidadUncheckedCreateInput = {
    id?: number
    descripcion: string
    conductores?: ConductoresUncheckedCreateNestedManyWithoutDisponibilidadInput
  }

  export type DisponibilidadUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    conductores?: ConductoresUpdateManyWithoutDisponibilidadNestedInput
  }

  export type DisponibilidadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    conductores?: ConductoresUncheckedUpdateManyWithoutDisponibilidadNestedInput
  }

  export type DisponibilidadCreateManyInput = {
    id?: number
    descripcion: string
  }

  export type DisponibilidadUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DisponibilidadScalarRelationFilter = {
    is?: DisponibilidadWhereInput
    isNot?: DisponibilidadWhereInput
  }

  export type ViajesListRelationFilter = {
    every?: ViajesWhereInput
    some?: ViajesWhereInput
    none?: ViajesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ViajesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConductoresCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    disponibilidadId?: SortOrder
    ubicacionLatitud?: SortOrder
    ubicacionLongitud?: SortOrder
  }

  export type ConductoresAvgOrderByAggregateInput = {
    id?: SortOrder
    disponibilidadId?: SortOrder
    ubicacionLatitud?: SortOrder
    ubicacionLongitud?: SortOrder
  }

  export type ConductoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    disponibilidadId?: SortOrder
    ubicacionLatitud?: SortOrder
    ubicacionLongitud?: SortOrder
  }

  export type ConductoresMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    disponibilidadId?: SortOrder
    ubicacionLatitud?: SortOrder
    ubicacionLongitud?: SortOrder
  }

  export type ConductoresSumOrderByAggregateInput = {
    id?: SortOrder
    disponibilidadId?: SortOrder
    ubicacionLatitud?: SortOrder
    ubicacionLongitud?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumStatusViajesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusViajes | EnumStatusViajesFieldRefInput<$PrismaModel>
    in?: $Enums.StatusViajes[] | ListEnumStatusViajesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusViajes[] | ListEnumStatusViajesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusViajesFilter<$PrismaModel> | $Enums.StatusViajes
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PasajerosScalarRelationFilter = {
    is?: PasajerosWhereInput
    isNot?: PasajerosWhereInput
  }

  export type ConductoresScalarRelationFilter = {
    is?: ConductoresWhereInput
    isNot?: ConductoresWhereInput
  }

  export type ViajesCountOrderByAggregateInput = {
    id?: SortOrder
    pasajeroId?: SortOrder
    conductorId?: SortOrder
    status?: SortOrder
    latitudDesde?: SortOrder
    longitudDesde?: SortOrder
    latitudHasta?: SortOrder
    longitudHasta?: SortOrder
  }

  export type ViajesAvgOrderByAggregateInput = {
    id?: SortOrder
    pasajeroId?: SortOrder
    conductorId?: SortOrder
    latitudDesde?: SortOrder
    longitudDesde?: SortOrder
    latitudHasta?: SortOrder
    longitudHasta?: SortOrder
  }

  export type ViajesMaxOrderByAggregateInput = {
    id?: SortOrder
    pasajeroId?: SortOrder
    conductorId?: SortOrder
    status?: SortOrder
    latitudDesde?: SortOrder
    longitudDesde?: SortOrder
    latitudHasta?: SortOrder
    longitudHasta?: SortOrder
  }

  export type ViajesMinOrderByAggregateInput = {
    id?: SortOrder
    pasajeroId?: SortOrder
    conductorId?: SortOrder
    status?: SortOrder
    latitudDesde?: SortOrder
    longitudDesde?: SortOrder
    latitudHasta?: SortOrder
    longitudHasta?: SortOrder
  }

  export type ViajesSumOrderByAggregateInput = {
    id?: SortOrder
    pasajeroId?: SortOrder
    conductorId?: SortOrder
    latitudDesde?: SortOrder
    longitudDesde?: SortOrder
    latitudHasta?: SortOrder
    longitudHasta?: SortOrder
  }

  export type EnumStatusViajesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusViajes | EnumStatusViajesFieldRefInput<$PrismaModel>
    in?: $Enums.StatusViajes[] | ListEnumStatusViajesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusViajes[] | ListEnumStatusViajesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusViajesWithAggregatesFilter<$PrismaModel> | $Enums.StatusViajes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusViajesFilter<$PrismaModel>
    _max?: NestedEnumStatusViajesFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumStatusDisponibilidadFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDisponibilidad | EnumStatusDisponibilidadFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDisponibilidad[] | ListEnumStatusDisponibilidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusDisponibilidad[] | ListEnumStatusDisponibilidadFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusDisponibilidadFilter<$PrismaModel> | $Enums.StatusDisponibilidad
  }

  export type PasajerosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    status?: SortOrder
  }

  export type PasajerosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PasajerosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    status?: SortOrder
  }

  export type PasajerosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    status?: SortOrder
  }

  export type PasajerosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStatusDisponibilidadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDisponibilidad | EnumStatusDisponibilidadFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDisponibilidad[] | ListEnumStatusDisponibilidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusDisponibilidad[] | ListEnumStatusDisponibilidadFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusDisponibilidadWithAggregatesFilter<$PrismaModel> | $Enums.StatusDisponibilidad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusDisponibilidadFilter<$PrismaModel>
    _max?: NestedEnumStatusDisponibilidadFilter<$PrismaModel>
  }

  export type ConductoresListRelationFilter = {
    every?: ConductoresWhereInput
    some?: ConductoresWhereInput
    none?: ConductoresWhereInput
  }

  export type ConductoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisponibilidadCountOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type DisponibilidadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DisponibilidadMaxOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type DisponibilidadMinOrderByAggregateInput = {
    id?: SortOrder
    descripcion?: SortOrder
  }

  export type DisponibilidadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DisponibilidadCreateNestedOneWithoutConductoresInput = {
    create?: XOR<DisponibilidadCreateWithoutConductoresInput, DisponibilidadUncheckedCreateWithoutConductoresInput>
    connectOrCreate?: DisponibilidadCreateOrConnectWithoutConductoresInput
    connect?: DisponibilidadWhereUniqueInput
  }

  export type ViajesCreateNestedManyWithoutConductorInput = {
    create?: XOR<ViajesCreateWithoutConductorInput, ViajesUncheckedCreateWithoutConductorInput> | ViajesCreateWithoutConductorInput[] | ViajesUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: ViajesCreateOrConnectWithoutConductorInput | ViajesCreateOrConnectWithoutConductorInput[]
    createMany?: ViajesCreateManyConductorInputEnvelope
    connect?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
  }

  export type ViajesUncheckedCreateNestedManyWithoutConductorInput = {
    create?: XOR<ViajesCreateWithoutConductorInput, ViajesUncheckedCreateWithoutConductorInput> | ViajesCreateWithoutConductorInput[] | ViajesUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: ViajesCreateOrConnectWithoutConductorInput | ViajesCreateOrConnectWithoutConductorInput[]
    createMany?: ViajesCreateManyConductorInputEnvelope
    connect?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DisponibilidadUpdateOneRequiredWithoutConductoresNestedInput = {
    create?: XOR<DisponibilidadCreateWithoutConductoresInput, DisponibilidadUncheckedCreateWithoutConductoresInput>
    connectOrCreate?: DisponibilidadCreateOrConnectWithoutConductoresInput
    upsert?: DisponibilidadUpsertWithoutConductoresInput
    connect?: DisponibilidadWhereUniqueInput
    update?: XOR<XOR<DisponibilidadUpdateToOneWithWhereWithoutConductoresInput, DisponibilidadUpdateWithoutConductoresInput>, DisponibilidadUncheckedUpdateWithoutConductoresInput>
  }

  export type ViajesUpdateManyWithoutConductorNestedInput = {
    create?: XOR<ViajesCreateWithoutConductorInput, ViajesUncheckedCreateWithoutConductorInput> | ViajesCreateWithoutConductorInput[] | ViajesUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: ViajesCreateOrConnectWithoutConductorInput | ViajesCreateOrConnectWithoutConductorInput[]
    upsert?: ViajesUpsertWithWhereUniqueWithoutConductorInput | ViajesUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: ViajesCreateManyConductorInputEnvelope
    set?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    disconnect?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    delete?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    connect?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    update?: ViajesUpdateWithWhereUniqueWithoutConductorInput | ViajesUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: ViajesUpdateManyWithWhereWithoutConductorInput | ViajesUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: ViajesScalarWhereInput | ViajesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ViajesUncheckedUpdateManyWithoutConductorNestedInput = {
    create?: XOR<ViajesCreateWithoutConductorInput, ViajesUncheckedCreateWithoutConductorInput> | ViajesCreateWithoutConductorInput[] | ViajesUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: ViajesCreateOrConnectWithoutConductorInput | ViajesCreateOrConnectWithoutConductorInput[]
    upsert?: ViajesUpsertWithWhereUniqueWithoutConductorInput | ViajesUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: ViajesCreateManyConductorInputEnvelope
    set?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    disconnect?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    delete?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    connect?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    update?: ViajesUpdateWithWhereUniqueWithoutConductorInput | ViajesUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: ViajesUpdateManyWithWhereWithoutConductorInput | ViajesUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: ViajesScalarWhereInput | ViajesScalarWhereInput[]
  }

  export type PasajerosCreateNestedOneWithoutViajesInput = {
    create?: XOR<PasajerosCreateWithoutViajesInput, PasajerosUncheckedCreateWithoutViajesInput>
    connectOrCreate?: PasajerosCreateOrConnectWithoutViajesInput
    connect?: PasajerosWhereUniqueInput
  }

  export type ConductoresCreateNestedOneWithoutViajesInput = {
    create?: XOR<ConductoresCreateWithoutViajesInput, ConductoresUncheckedCreateWithoutViajesInput>
    connectOrCreate?: ConductoresCreateOrConnectWithoutViajesInput
    connect?: ConductoresWhereUniqueInput
  }

  export type EnumStatusViajesFieldUpdateOperationsInput = {
    set?: $Enums.StatusViajes
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PasajerosUpdateOneRequiredWithoutViajesNestedInput = {
    create?: XOR<PasajerosCreateWithoutViajesInput, PasajerosUncheckedCreateWithoutViajesInput>
    connectOrCreate?: PasajerosCreateOrConnectWithoutViajesInput
    upsert?: PasajerosUpsertWithoutViajesInput
    connect?: PasajerosWhereUniqueInput
    update?: XOR<XOR<PasajerosUpdateToOneWithWhereWithoutViajesInput, PasajerosUpdateWithoutViajesInput>, PasajerosUncheckedUpdateWithoutViajesInput>
  }

  export type ConductoresUpdateOneRequiredWithoutViajesNestedInput = {
    create?: XOR<ConductoresCreateWithoutViajesInput, ConductoresUncheckedCreateWithoutViajesInput>
    connectOrCreate?: ConductoresCreateOrConnectWithoutViajesInput
    upsert?: ConductoresUpsertWithoutViajesInput
    connect?: ConductoresWhereUniqueInput
    update?: XOR<XOR<ConductoresUpdateToOneWithWhereWithoutViajesInput, ConductoresUpdateWithoutViajesInput>, ConductoresUncheckedUpdateWithoutViajesInput>
  }

  export type ViajesCreateNestedManyWithoutPasajeroInput = {
    create?: XOR<ViajesCreateWithoutPasajeroInput, ViajesUncheckedCreateWithoutPasajeroInput> | ViajesCreateWithoutPasajeroInput[] | ViajesUncheckedCreateWithoutPasajeroInput[]
    connectOrCreate?: ViajesCreateOrConnectWithoutPasajeroInput | ViajesCreateOrConnectWithoutPasajeroInput[]
    createMany?: ViajesCreateManyPasajeroInputEnvelope
    connect?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
  }

  export type ViajesUncheckedCreateNestedManyWithoutPasajeroInput = {
    create?: XOR<ViajesCreateWithoutPasajeroInput, ViajesUncheckedCreateWithoutPasajeroInput> | ViajesCreateWithoutPasajeroInput[] | ViajesUncheckedCreateWithoutPasajeroInput[]
    connectOrCreate?: ViajesCreateOrConnectWithoutPasajeroInput | ViajesCreateOrConnectWithoutPasajeroInput[]
    createMany?: ViajesCreateManyPasajeroInputEnvelope
    connect?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
  }

  export type EnumStatusDisponibilidadFieldUpdateOperationsInput = {
    set?: $Enums.StatusDisponibilidad
  }

  export type ViajesUpdateManyWithoutPasajeroNestedInput = {
    create?: XOR<ViajesCreateWithoutPasajeroInput, ViajesUncheckedCreateWithoutPasajeroInput> | ViajesCreateWithoutPasajeroInput[] | ViajesUncheckedCreateWithoutPasajeroInput[]
    connectOrCreate?: ViajesCreateOrConnectWithoutPasajeroInput | ViajesCreateOrConnectWithoutPasajeroInput[]
    upsert?: ViajesUpsertWithWhereUniqueWithoutPasajeroInput | ViajesUpsertWithWhereUniqueWithoutPasajeroInput[]
    createMany?: ViajesCreateManyPasajeroInputEnvelope
    set?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    disconnect?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    delete?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    connect?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    update?: ViajesUpdateWithWhereUniqueWithoutPasajeroInput | ViajesUpdateWithWhereUniqueWithoutPasajeroInput[]
    updateMany?: ViajesUpdateManyWithWhereWithoutPasajeroInput | ViajesUpdateManyWithWhereWithoutPasajeroInput[]
    deleteMany?: ViajesScalarWhereInput | ViajesScalarWhereInput[]
  }

  export type ViajesUncheckedUpdateManyWithoutPasajeroNestedInput = {
    create?: XOR<ViajesCreateWithoutPasajeroInput, ViajesUncheckedCreateWithoutPasajeroInput> | ViajesCreateWithoutPasajeroInput[] | ViajesUncheckedCreateWithoutPasajeroInput[]
    connectOrCreate?: ViajesCreateOrConnectWithoutPasajeroInput | ViajesCreateOrConnectWithoutPasajeroInput[]
    upsert?: ViajesUpsertWithWhereUniqueWithoutPasajeroInput | ViajesUpsertWithWhereUniqueWithoutPasajeroInput[]
    createMany?: ViajesCreateManyPasajeroInputEnvelope
    set?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    disconnect?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    delete?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    connect?: ViajesWhereUniqueInput | ViajesWhereUniqueInput[]
    update?: ViajesUpdateWithWhereUniqueWithoutPasajeroInput | ViajesUpdateWithWhereUniqueWithoutPasajeroInput[]
    updateMany?: ViajesUpdateManyWithWhereWithoutPasajeroInput | ViajesUpdateManyWithWhereWithoutPasajeroInput[]
    deleteMany?: ViajesScalarWhereInput | ViajesScalarWhereInput[]
  }

  export type ConductoresCreateNestedManyWithoutDisponibilidadInput = {
    create?: XOR<ConductoresCreateWithoutDisponibilidadInput, ConductoresUncheckedCreateWithoutDisponibilidadInput> | ConductoresCreateWithoutDisponibilidadInput[] | ConductoresUncheckedCreateWithoutDisponibilidadInput[]
    connectOrCreate?: ConductoresCreateOrConnectWithoutDisponibilidadInput | ConductoresCreateOrConnectWithoutDisponibilidadInput[]
    createMany?: ConductoresCreateManyDisponibilidadInputEnvelope
    connect?: ConductoresWhereUniqueInput | ConductoresWhereUniqueInput[]
  }

  export type ConductoresUncheckedCreateNestedManyWithoutDisponibilidadInput = {
    create?: XOR<ConductoresCreateWithoutDisponibilidadInput, ConductoresUncheckedCreateWithoutDisponibilidadInput> | ConductoresCreateWithoutDisponibilidadInput[] | ConductoresUncheckedCreateWithoutDisponibilidadInput[]
    connectOrCreate?: ConductoresCreateOrConnectWithoutDisponibilidadInput | ConductoresCreateOrConnectWithoutDisponibilidadInput[]
    createMany?: ConductoresCreateManyDisponibilidadInputEnvelope
    connect?: ConductoresWhereUniqueInput | ConductoresWhereUniqueInput[]
  }

  export type ConductoresUpdateManyWithoutDisponibilidadNestedInput = {
    create?: XOR<ConductoresCreateWithoutDisponibilidadInput, ConductoresUncheckedCreateWithoutDisponibilidadInput> | ConductoresCreateWithoutDisponibilidadInput[] | ConductoresUncheckedCreateWithoutDisponibilidadInput[]
    connectOrCreate?: ConductoresCreateOrConnectWithoutDisponibilidadInput | ConductoresCreateOrConnectWithoutDisponibilidadInput[]
    upsert?: ConductoresUpsertWithWhereUniqueWithoutDisponibilidadInput | ConductoresUpsertWithWhereUniqueWithoutDisponibilidadInput[]
    createMany?: ConductoresCreateManyDisponibilidadInputEnvelope
    set?: ConductoresWhereUniqueInput | ConductoresWhereUniqueInput[]
    disconnect?: ConductoresWhereUniqueInput | ConductoresWhereUniqueInput[]
    delete?: ConductoresWhereUniqueInput | ConductoresWhereUniqueInput[]
    connect?: ConductoresWhereUniqueInput | ConductoresWhereUniqueInput[]
    update?: ConductoresUpdateWithWhereUniqueWithoutDisponibilidadInput | ConductoresUpdateWithWhereUniqueWithoutDisponibilidadInput[]
    updateMany?: ConductoresUpdateManyWithWhereWithoutDisponibilidadInput | ConductoresUpdateManyWithWhereWithoutDisponibilidadInput[]
    deleteMany?: ConductoresScalarWhereInput | ConductoresScalarWhereInput[]
  }

  export type ConductoresUncheckedUpdateManyWithoutDisponibilidadNestedInput = {
    create?: XOR<ConductoresCreateWithoutDisponibilidadInput, ConductoresUncheckedCreateWithoutDisponibilidadInput> | ConductoresCreateWithoutDisponibilidadInput[] | ConductoresUncheckedCreateWithoutDisponibilidadInput[]
    connectOrCreate?: ConductoresCreateOrConnectWithoutDisponibilidadInput | ConductoresCreateOrConnectWithoutDisponibilidadInput[]
    upsert?: ConductoresUpsertWithWhereUniqueWithoutDisponibilidadInput | ConductoresUpsertWithWhereUniqueWithoutDisponibilidadInput[]
    createMany?: ConductoresCreateManyDisponibilidadInputEnvelope
    set?: ConductoresWhereUniqueInput | ConductoresWhereUniqueInput[]
    disconnect?: ConductoresWhereUniqueInput | ConductoresWhereUniqueInput[]
    delete?: ConductoresWhereUniqueInput | ConductoresWhereUniqueInput[]
    connect?: ConductoresWhereUniqueInput | ConductoresWhereUniqueInput[]
    update?: ConductoresUpdateWithWhereUniqueWithoutDisponibilidadInput | ConductoresUpdateWithWhereUniqueWithoutDisponibilidadInput[]
    updateMany?: ConductoresUpdateManyWithWhereWithoutDisponibilidadInput | ConductoresUpdateManyWithWhereWithoutDisponibilidadInput[]
    deleteMany?: ConductoresScalarWhereInput | ConductoresScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusViajesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusViajes | EnumStatusViajesFieldRefInput<$PrismaModel>
    in?: $Enums.StatusViajes[] | ListEnumStatusViajesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusViajes[] | ListEnumStatusViajesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusViajesFilter<$PrismaModel> | $Enums.StatusViajes
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumStatusViajesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusViajes | EnumStatusViajesFieldRefInput<$PrismaModel>
    in?: $Enums.StatusViajes[] | ListEnumStatusViajesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusViajes[] | ListEnumStatusViajesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusViajesWithAggregatesFilter<$PrismaModel> | $Enums.StatusViajes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusViajesFilter<$PrismaModel>
    _max?: NestedEnumStatusViajesFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumStatusDisponibilidadFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDisponibilidad | EnumStatusDisponibilidadFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDisponibilidad[] | ListEnumStatusDisponibilidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusDisponibilidad[] | ListEnumStatusDisponibilidadFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusDisponibilidadFilter<$PrismaModel> | $Enums.StatusDisponibilidad
  }

  export type NestedEnumStatusDisponibilidadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusDisponibilidad | EnumStatusDisponibilidadFieldRefInput<$PrismaModel>
    in?: $Enums.StatusDisponibilidad[] | ListEnumStatusDisponibilidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusDisponibilidad[] | ListEnumStatusDisponibilidadFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusDisponibilidadWithAggregatesFilter<$PrismaModel> | $Enums.StatusDisponibilidad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusDisponibilidadFilter<$PrismaModel>
    _max?: NestedEnumStatusDisponibilidadFilter<$PrismaModel>
  }

  export type DisponibilidadCreateWithoutConductoresInput = {
    descripcion: string
  }

  export type DisponibilidadUncheckedCreateWithoutConductoresInput = {
    id?: number
    descripcion: string
  }

  export type DisponibilidadCreateOrConnectWithoutConductoresInput = {
    where: DisponibilidadWhereUniqueInput
    create: XOR<DisponibilidadCreateWithoutConductoresInput, DisponibilidadUncheckedCreateWithoutConductoresInput>
  }

  export type ViajesCreateWithoutConductorInput = {
    status?: $Enums.StatusViajes
    latitudDesde: Decimal | DecimalJsLike | number | string
    longitudDesde: Decimal | DecimalJsLike | number | string
    latitudHasta: Decimal | DecimalJsLike | number | string
    longitudHasta: Decimal | DecimalJsLike | number | string
    pasajero: PasajerosCreateNestedOneWithoutViajesInput
  }

  export type ViajesUncheckedCreateWithoutConductorInput = {
    id?: number
    pasajeroId: number
    status?: $Enums.StatusViajes
    latitudDesde: Decimal | DecimalJsLike | number | string
    longitudDesde: Decimal | DecimalJsLike | number | string
    latitudHasta: Decimal | DecimalJsLike | number | string
    longitudHasta: Decimal | DecimalJsLike | number | string
  }

  export type ViajesCreateOrConnectWithoutConductorInput = {
    where: ViajesWhereUniqueInput
    create: XOR<ViajesCreateWithoutConductorInput, ViajesUncheckedCreateWithoutConductorInput>
  }

  export type ViajesCreateManyConductorInputEnvelope = {
    data: ViajesCreateManyConductorInput | ViajesCreateManyConductorInput[]
    skipDuplicates?: boolean
  }

  export type DisponibilidadUpsertWithoutConductoresInput = {
    update: XOR<DisponibilidadUpdateWithoutConductoresInput, DisponibilidadUncheckedUpdateWithoutConductoresInput>
    create: XOR<DisponibilidadCreateWithoutConductoresInput, DisponibilidadUncheckedCreateWithoutConductoresInput>
    where?: DisponibilidadWhereInput
  }

  export type DisponibilidadUpdateToOneWithWhereWithoutConductoresInput = {
    where?: DisponibilidadWhereInput
    data: XOR<DisponibilidadUpdateWithoutConductoresInput, DisponibilidadUncheckedUpdateWithoutConductoresInput>
  }

  export type DisponibilidadUpdateWithoutConductoresInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type DisponibilidadUncheckedUpdateWithoutConductoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type ViajesUpsertWithWhereUniqueWithoutConductorInput = {
    where: ViajesWhereUniqueInput
    update: XOR<ViajesUpdateWithoutConductorInput, ViajesUncheckedUpdateWithoutConductorInput>
    create: XOR<ViajesCreateWithoutConductorInput, ViajesUncheckedCreateWithoutConductorInput>
  }

  export type ViajesUpdateWithWhereUniqueWithoutConductorInput = {
    where: ViajesWhereUniqueInput
    data: XOR<ViajesUpdateWithoutConductorInput, ViajesUncheckedUpdateWithoutConductorInput>
  }

  export type ViajesUpdateManyWithWhereWithoutConductorInput = {
    where: ViajesScalarWhereInput
    data: XOR<ViajesUpdateManyMutationInput, ViajesUncheckedUpdateManyWithoutConductorInput>
  }

  export type ViajesScalarWhereInput = {
    AND?: ViajesScalarWhereInput | ViajesScalarWhereInput[]
    OR?: ViajesScalarWhereInput[]
    NOT?: ViajesScalarWhereInput | ViajesScalarWhereInput[]
    id?: IntFilter<"Viajes"> | number
    pasajeroId?: IntFilter<"Viajes"> | number
    conductorId?: IntFilter<"Viajes"> | number
    status?: EnumStatusViajesFilter<"Viajes"> | $Enums.StatusViajes
    latitudDesde?: DecimalFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
    longitudDesde?: DecimalFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
    latitudHasta?: DecimalFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
    longitudHasta?: DecimalFilter<"Viajes"> | Decimal | DecimalJsLike | number | string
  }

  export type PasajerosCreateWithoutViajesInput = {
    nombre: string
    apellido: string
    status?: $Enums.StatusDisponibilidad
  }

  export type PasajerosUncheckedCreateWithoutViajesInput = {
    id?: number
    nombre: string
    apellido: string
    status?: $Enums.StatusDisponibilidad
  }

  export type PasajerosCreateOrConnectWithoutViajesInput = {
    where: PasajerosWhereUniqueInput
    create: XOR<PasajerosCreateWithoutViajesInput, PasajerosUncheckedCreateWithoutViajesInput>
  }

  export type ConductoresCreateWithoutViajesInput = {
    nombre: string
    apellido: string
    ubicacionLatitud?: Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: Decimal | DecimalJsLike | number | string | null
    disponibilidad: DisponibilidadCreateNestedOneWithoutConductoresInput
  }

  export type ConductoresUncheckedCreateWithoutViajesInput = {
    id?: number
    nombre: string
    apellido: string
    disponibilidadId: number
    ubicacionLatitud?: Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: Decimal | DecimalJsLike | number | string | null
  }

  export type ConductoresCreateOrConnectWithoutViajesInput = {
    where: ConductoresWhereUniqueInput
    create: XOR<ConductoresCreateWithoutViajesInput, ConductoresUncheckedCreateWithoutViajesInput>
  }

  export type PasajerosUpsertWithoutViajesInput = {
    update: XOR<PasajerosUpdateWithoutViajesInput, PasajerosUncheckedUpdateWithoutViajesInput>
    create: XOR<PasajerosCreateWithoutViajesInput, PasajerosUncheckedCreateWithoutViajesInput>
    where?: PasajerosWhereInput
  }

  export type PasajerosUpdateToOneWithWhereWithoutViajesInput = {
    where?: PasajerosWhereInput
    data: XOR<PasajerosUpdateWithoutViajesInput, PasajerosUncheckedUpdateWithoutViajesInput>
  }

  export type PasajerosUpdateWithoutViajesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDisponibilidadFieldUpdateOperationsInput | $Enums.StatusDisponibilidad
  }

  export type PasajerosUncheckedUpdateWithoutViajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusDisponibilidadFieldUpdateOperationsInput | $Enums.StatusDisponibilidad
  }

  export type ConductoresUpsertWithoutViajesInput = {
    update: XOR<ConductoresUpdateWithoutViajesInput, ConductoresUncheckedUpdateWithoutViajesInput>
    create: XOR<ConductoresCreateWithoutViajesInput, ConductoresUncheckedCreateWithoutViajesInput>
    where?: ConductoresWhereInput
  }

  export type ConductoresUpdateToOneWithWhereWithoutViajesInput = {
    where?: ConductoresWhereInput
    data: XOR<ConductoresUpdateWithoutViajesInput, ConductoresUncheckedUpdateWithoutViajesInput>
  }

  export type ConductoresUpdateWithoutViajesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    ubicacionLatitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponibilidad?: DisponibilidadUpdateOneRequiredWithoutConductoresNestedInput
  }

  export type ConductoresUncheckedUpdateWithoutViajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    disponibilidadId?: IntFieldUpdateOperationsInput | number
    ubicacionLatitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ViajesCreateWithoutPasajeroInput = {
    status?: $Enums.StatusViajes
    latitudDesde: Decimal | DecimalJsLike | number | string
    longitudDesde: Decimal | DecimalJsLike | number | string
    latitudHasta: Decimal | DecimalJsLike | number | string
    longitudHasta: Decimal | DecimalJsLike | number | string
    conductor: ConductoresCreateNestedOneWithoutViajesInput
  }

  export type ViajesUncheckedCreateWithoutPasajeroInput = {
    id?: number
    conductorId: number
    status?: $Enums.StatusViajes
    latitudDesde: Decimal | DecimalJsLike | number | string
    longitudDesde: Decimal | DecimalJsLike | number | string
    latitudHasta: Decimal | DecimalJsLike | number | string
    longitudHasta: Decimal | DecimalJsLike | number | string
  }

  export type ViajesCreateOrConnectWithoutPasajeroInput = {
    where: ViajesWhereUniqueInput
    create: XOR<ViajesCreateWithoutPasajeroInput, ViajesUncheckedCreateWithoutPasajeroInput>
  }

  export type ViajesCreateManyPasajeroInputEnvelope = {
    data: ViajesCreateManyPasajeroInput | ViajesCreateManyPasajeroInput[]
    skipDuplicates?: boolean
  }

  export type ViajesUpsertWithWhereUniqueWithoutPasajeroInput = {
    where: ViajesWhereUniqueInput
    update: XOR<ViajesUpdateWithoutPasajeroInput, ViajesUncheckedUpdateWithoutPasajeroInput>
    create: XOR<ViajesCreateWithoutPasajeroInput, ViajesUncheckedCreateWithoutPasajeroInput>
  }

  export type ViajesUpdateWithWhereUniqueWithoutPasajeroInput = {
    where: ViajesWhereUniqueInput
    data: XOR<ViajesUpdateWithoutPasajeroInput, ViajesUncheckedUpdateWithoutPasajeroInput>
  }

  export type ViajesUpdateManyWithWhereWithoutPasajeroInput = {
    where: ViajesScalarWhereInput
    data: XOR<ViajesUpdateManyMutationInput, ViajesUncheckedUpdateManyWithoutPasajeroInput>
  }

  export type ConductoresCreateWithoutDisponibilidadInput = {
    nombre: string
    apellido: string
    ubicacionLatitud?: Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: Decimal | DecimalJsLike | number | string | null
    Viajes?: ViajesCreateNestedManyWithoutConductorInput
  }

  export type ConductoresUncheckedCreateWithoutDisponibilidadInput = {
    id?: number
    nombre: string
    apellido: string
    ubicacionLatitud?: Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: Decimal | DecimalJsLike | number | string | null
    Viajes?: ViajesUncheckedCreateNestedManyWithoutConductorInput
  }

  export type ConductoresCreateOrConnectWithoutDisponibilidadInput = {
    where: ConductoresWhereUniqueInput
    create: XOR<ConductoresCreateWithoutDisponibilidadInput, ConductoresUncheckedCreateWithoutDisponibilidadInput>
  }

  export type ConductoresCreateManyDisponibilidadInputEnvelope = {
    data: ConductoresCreateManyDisponibilidadInput | ConductoresCreateManyDisponibilidadInput[]
    skipDuplicates?: boolean
  }

  export type ConductoresUpsertWithWhereUniqueWithoutDisponibilidadInput = {
    where: ConductoresWhereUniqueInput
    update: XOR<ConductoresUpdateWithoutDisponibilidadInput, ConductoresUncheckedUpdateWithoutDisponibilidadInput>
    create: XOR<ConductoresCreateWithoutDisponibilidadInput, ConductoresUncheckedCreateWithoutDisponibilidadInput>
  }

  export type ConductoresUpdateWithWhereUniqueWithoutDisponibilidadInput = {
    where: ConductoresWhereUniqueInput
    data: XOR<ConductoresUpdateWithoutDisponibilidadInput, ConductoresUncheckedUpdateWithoutDisponibilidadInput>
  }

  export type ConductoresUpdateManyWithWhereWithoutDisponibilidadInput = {
    where: ConductoresScalarWhereInput
    data: XOR<ConductoresUpdateManyMutationInput, ConductoresUncheckedUpdateManyWithoutDisponibilidadInput>
  }

  export type ConductoresScalarWhereInput = {
    AND?: ConductoresScalarWhereInput | ConductoresScalarWhereInput[]
    OR?: ConductoresScalarWhereInput[]
    NOT?: ConductoresScalarWhereInput | ConductoresScalarWhereInput[]
    id?: IntFilter<"Conductores"> | number
    nombre?: StringFilter<"Conductores"> | string
    apellido?: StringFilter<"Conductores"> | string
    disponibilidadId?: IntFilter<"Conductores"> | number
    ubicacionLatitud?: DecimalNullableFilter<"Conductores"> | Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: DecimalNullableFilter<"Conductores"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ViajesCreateManyConductorInput = {
    id?: number
    pasajeroId: number
    status?: $Enums.StatusViajes
    latitudDesde: Decimal | DecimalJsLike | number | string
    longitudDesde: Decimal | DecimalJsLike | number | string
    latitudHasta: Decimal | DecimalJsLike | number | string
    longitudHasta: Decimal | DecimalJsLike | number | string
  }

  export type ViajesUpdateWithoutConductorInput = {
    status?: EnumStatusViajesFieldUpdateOperationsInput | $Enums.StatusViajes
    latitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pasajero?: PasajerosUpdateOneRequiredWithoutViajesNestedInput
  }

  export type ViajesUncheckedUpdateWithoutConductorInput = {
    id?: IntFieldUpdateOperationsInput | number
    pasajeroId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusViajesFieldUpdateOperationsInput | $Enums.StatusViajes
    latitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ViajesUncheckedUpdateManyWithoutConductorInput = {
    id?: IntFieldUpdateOperationsInput | number
    pasajeroId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusViajesFieldUpdateOperationsInput | $Enums.StatusViajes
    latitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ViajesCreateManyPasajeroInput = {
    id?: number
    conductorId: number
    status?: $Enums.StatusViajes
    latitudDesde: Decimal | DecimalJsLike | number | string
    longitudDesde: Decimal | DecimalJsLike | number | string
    latitudHasta: Decimal | DecimalJsLike | number | string
    longitudHasta: Decimal | DecimalJsLike | number | string
  }

  export type ViajesUpdateWithoutPasajeroInput = {
    status?: EnumStatusViajesFieldUpdateOperationsInput | $Enums.StatusViajes
    latitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    conductor?: ConductoresUpdateOneRequiredWithoutViajesNestedInput
  }

  export type ViajesUncheckedUpdateWithoutPasajeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusViajesFieldUpdateOperationsInput | $Enums.StatusViajes
    latitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ViajesUncheckedUpdateManyWithoutPasajeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusViajesFieldUpdateOperationsInput | $Enums.StatusViajes
    latitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudDesde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    latitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitudHasta?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ConductoresCreateManyDisponibilidadInput = {
    id?: number
    nombre: string
    apellido: string
    ubicacionLatitud?: Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: Decimal | DecimalJsLike | number | string | null
  }

  export type ConductoresUpdateWithoutDisponibilidadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    ubicacionLatitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Viajes?: ViajesUpdateManyWithoutConductorNestedInput
  }

  export type ConductoresUncheckedUpdateWithoutDisponibilidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    ubicacionLatitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Viajes?: ViajesUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type ConductoresUncheckedUpdateManyWithoutDisponibilidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    ubicacionLatitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ubicacionLongitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}