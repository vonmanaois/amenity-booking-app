
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Amenity
 * 
 */
export type Amenity = $Result.DefaultSelection<Prisma.$AmenityPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model BlackoutDate
 * 
 */
export type BlackoutDate = $Result.DefaultSelection<Prisma.$BlackoutDatePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  RESIDENT: 'RESIDENT',
  STAFF: 'STAFF',
  SUPERUSER: 'SUPERUSER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AmenityType: {
  PARTY_ROOM: 'PARTY_ROOM',
  MEETING_ROOM: 'MEETING_ROOM',
  GYM: 'GYM',
  COURT: 'COURT',
  OTHER: 'OTHER'
};

export type AmenityType = (typeof AmenityType)[keyof typeof AmenityType]


export const AmenityStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  MAINTENANCE: 'MAINTENANCE'
};

export type AmenityStatus = (typeof AmenityStatus)[keyof typeof AmenityStatus]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  REJECTED: 'REJECTED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AmenityType = $Enums.AmenityType

export const AmenityType: typeof $Enums.AmenityType

export type AmenityStatus = $Enums.AmenityStatus

export const AmenityStatus: typeof $Enums.AmenityStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amenity`: Exposes CRUD operations for the **Amenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amenities
    * const amenities = await prisma.amenity.findMany()
    * ```
    */
  get amenity(): Prisma.AmenityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blackoutDate`: Exposes CRUD operations for the **BlackoutDate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlackoutDates
    * const blackoutDates = await prisma.blackoutDate.findMany()
    * ```
    */
  get blackoutDate(): Prisma.BlackoutDateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    User: 'User',
    Amenity: 'Amenity',
    Booking: 'Booking',
    BlackoutDate: 'BlackoutDate',
    AuditLog: 'AuditLog'
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
      modelProps: "user" | "amenity" | "booking" | "blackoutDate" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Amenity: {
        payload: Prisma.$AmenityPayload<ExtArgs>
        fields: Prisma.AmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findFirst: {
            args: Prisma.AmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findMany: {
            args: Prisma.AmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          create: {
            args: Prisma.AmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          createMany: {
            args: Prisma.AmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmenityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          delete: {
            args: Prisma.AmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          update: {
            args: Prisma.AmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          deleteMany: {
            args: Prisma.AmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmenityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          upsert: {
            args: Prisma.AmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          aggregate: {
            args: Prisma.AmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmenity>
          }
          groupBy: {
            args: Prisma.AmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmenityCountArgs<ExtArgs>
            result: $Utils.Optional<AmenityCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      BlackoutDate: {
        payload: Prisma.$BlackoutDatePayload<ExtArgs>
        fields: Prisma.BlackoutDateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlackoutDateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackoutDatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlackoutDateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackoutDatePayload>
          }
          findFirst: {
            args: Prisma.BlackoutDateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackoutDatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlackoutDateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackoutDatePayload>
          }
          findMany: {
            args: Prisma.BlackoutDateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackoutDatePayload>[]
          }
          create: {
            args: Prisma.BlackoutDateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackoutDatePayload>
          }
          createMany: {
            args: Prisma.BlackoutDateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlackoutDateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackoutDatePayload>[]
          }
          delete: {
            args: Prisma.BlackoutDateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackoutDatePayload>
          }
          update: {
            args: Prisma.BlackoutDateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackoutDatePayload>
          }
          deleteMany: {
            args: Prisma.BlackoutDateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlackoutDateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlackoutDateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackoutDatePayload>[]
          }
          upsert: {
            args: Prisma.BlackoutDateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlackoutDatePayload>
          }
          aggregate: {
            args: Prisma.BlackoutDateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlackoutDate>
          }
          groupBy: {
            args: Prisma.BlackoutDateGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlackoutDateGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlackoutDateCountArgs<ExtArgs>
            result: $Utils.Optional<BlackoutDateCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    amenity?: AmenityOmit
    booking?: BookingOmit
    blackoutDate?: BlackoutDateOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
    approvedBookings: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    approvedBookings?: boolean | UserCountOutputTypeCountApprovedBookingsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovedBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type AmenityCountOutputType
   */

  export type AmenityCountOutputType = {
    bookings: number
    blackoutDates: number
  }

  export type AmenityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | AmenityCountOutputTypeCountBookingsArgs
    blackoutDates?: boolean | AmenityCountOutputTypeCountBlackoutDatesArgs
  }

  // Custom InputTypes
  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityCountOutputType
     */
    select?: AmenityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeCountBlackoutDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlackoutDateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phone: string | null
    role: $Enums.UserRole | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phone: string | null
    role: $Enums.UserRole | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    phone: number
    role: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    role?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    role?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    role?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    phone: string | null
    role: $Enums.UserRole
    passwordHash: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    approvedBookings?: boolean | User$approvedBookingsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "phone" | "role" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    approvedBookings?: boolean | User$approvedBookingsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      approvedBookings: Prisma.$BookingPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      phone: string | null
      role: $Enums.UserRole
      passwordHash: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvedBookings<T extends User$approvedBookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.approvedBookings
   */
  export type User$approvedBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Amenity
   */

  export type AggregateAmenity = {
    _count: AmenityCountAggregateOutputType | null
    _avg: AmenityAvgAggregateOutputType | null
    _sum: AmenitySumAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  export type AmenityAvgAggregateOutputType = {
    capacity: number | null
    slotDurationMinutes: number | null
    maxAdvanceDays: number | null
    maxBookingDurationMinutes: number | null
    cancellationCutoffHours: number | null
  }

  export type AmenitySumAggregateOutputType = {
    capacity: number | null
    slotDurationMinutes: number | null
    maxAdvanceDays: number | null
    maxBookingDurationMinutes: number | null
    cancellationCutoffHours: number | null
  }

  export type AmenityMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    type: $Enums.AmenityType | null
    description: string | null
    imageUrl: string | null
    location: string | null
    capacity: number | null
    slotDurationMinutes: number | null
    openTime: string | null
    closeTime: string | null
    rules: string | null
    status: $Enums.AmenityStatus | null
    requiresApproval: boolean | null
    maxAdvanceDays: number | null
    maxBookingDurationMinutes: number | null
    cancellationCutoffHours: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AmenityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    type: $Enums.AmenityType | null
    description: string | null
    imageUrl: string | null
    location: string | null
    capacity: number | null
    slotDurationMinutes: number | null
    openTime: string | null
    closeTime: string | null
    rules: string | null
    status: $Enums.AmenityStatus | null
    requiresApproval: boolean | null
    maxAdvanceDays: number | null
    maxBookingDurationMinutes: number | null
    cancellationCutoffHours: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AmenityCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    type: number
    description: number
    imageUrl: number
    location: number
    capacity: number
    slotDurationMinutes: number
    openTime: number
    closeTime: number
    rules: number
    status: number
    requiresApproval: number
    maxAdvanceDays: number
    maxBookingDurationMinutes: number
    cancellationCutoffHours: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AmenityAvgAggregateInputType = {
    capacity?: true
    slotDurationMinutes?: true
    maxAdvanceDays?: true
    maxBookingDurationMinutes?: true
    cancellationCutoffHours?: true
  }

  export type AmenitySumAggregateInputType = {
    capacity?: true
    slotDurationMinutes?: true
    maxAdvanceDays?: true
    maxBookingDurationMinutes?: true
    cancellationCutoffHours?: true
  }

  export type AmenityMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
    description?: true
    imageUrl?: true
    location?: true
    capacity?: true
    slotDurationMinutes?: true
    openTime?: true
    closeTime?: true
    rules?: true
    status?: true
    requiresApproval?: true
    maxAdvanceDays?: true
    maxBookingDurationMinutes?: true
    cancellationCutoffHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AmenityMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
    description?: true
    imageUrl?: true
    location?: true
    capacity?: true
    slotDurationMinutes?: true
    openTime?: true
    closeTime?: true
    rules?: true
    status?: true
    requiresApproval?: true
    maxAdvanceDays?: true
    maxBookingDurationMinutes?: true
    cancellationCutoffHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AmenityCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    type?: true
    description?: true
    imageUrl?: true
    location?: true
    capacity?: true
    slotDurationMinutes?: true
    openTime?: true
    closeTime?: true
    rules?: true
    status?: true
    requiresApproval?: true
    maxAdvanceDays?: true
    maxBookingDurationMinutes?: true
    cancellationCutoffHours?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenity to aggregate.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amenities
    **/
    _count?: true | AmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmenityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmenitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmenityMaxAggregateInputType
  }

  export type GetAmenityAggregateType<T extends AmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmenity[P]>
      : GetScalarType<T[P], AggregateAmenity[P]>
  }




  export type AmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityWhereInput
    orderBy?: AmenityOrderByWithAggregationInput | AmenityOrderByWithAggregationInput[]
    by: AmenityScalarFieldEnum[] | AmenityScalarFieldEnum
    having?: AmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmenityCountAggregateInputType | true
    _avg?: AmenityAvgAggregateInputType
    _sum?: AmenitySumAggregateInputType
    _min?: AmenityMinAggregateInputType
    _max?: AmenityMaxAggregateInputType
  }

  export type AmenityGroupByOutputType = {
    id: string
    name: string
    slug: string
    type: $Enums.AmenityType
    description: string
    imageUrl: string | null
    location: string
    capacity: number
    slotDurationMinutes: number
    openTime: string
    closeTime: string
    rules: string | null
    status: $Enums.AmenityStatus
    requiresApproval: boolean
    maxAdvanceDays: number | null
    maxBookingDurationMinutes: number | null
    cancellationCutoffHours: number | null
    createdAt: Date
    updatedAt: Date
    _count: AmenityCountAggregateOutputType | null
    _avg: AmenityAvgAggregateOutputType | null
    _sum: AmenitySumAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  type GetAmenityGroupByPayload<T extends AmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmenityGroupByOutputType[P]>
            : GetScalarType<T[P], AmenityGroupByOutputType[P]>
        }
      >
    >


  export type AmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    description?: boolean
    imageUrl?: boolean
    location?: boolean
    capacity?: boolean
    slotDurationMinutes?: boolean
    openTime?: boolean
    closeTime?: boolean
    rules?: boolean
    status?: boolean
    requiresApproval?: boolean
    maxAdvanceDays?: boolean
    maxBookingDurationMinutes?: boolean
    cancellationCutoffHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | Amenity$bookingsArgs<ExtArgs>
    blackoutDates?: boolean | Amenity$blackoutDatesArgs<ExtArgs>
    _count?: boolean | AmenityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    description?: boolean
    imageUrl?: boolean
    location?: boolean
    capacity?: boolean
    slotDurationMinutes?: boolean
    openTime?: boolean
    closeTime?: boolean
    rules?: boolean
    status?: boolean
    requiresApproval?: boolean
    maxAdvanceDays?: boolean
    maxBookingDurationMinutes?: boolean
    cancellationCutoffHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    description?: boolean
    imageUrl?: boolean
    location?: boolean
    capacity?: boolean
    slotDurationMinutes?: boolean
    openTime?: boolean
    closeTime?: boolean
    rules?: boolean
    status?: boolean
    requiresApproval?: boolean
    maxAdvanceDays?: boolean
    maxBookingDurationMinutes?: boolean
    cancellationCutoffHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    type?: boolean
    description?: boolean
    imageUrl?: boolean
    location?: boolean
    capacity?: boolean
    slotDurationMinutes?: boolean
    openTime?: boolean
    closeTime?: boolean
    rules?: boolean
    status?: boolean
    requiresApproval?: boolean
    maxAdvanceDays?: boolean
    maxBookingDurationMinutes?: boolean
    cancellationCutoffHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "type" | "description" | "imageUrl" | "location" | "capacity" | "slotDurationMinutes" | "openTime" | "closeTime" | "rules" | "status" | "requiresApproval" | "maxAdvanceDays" | "maxBookingDurationMinutes" | "cancellationCutoffHours" | "createdAt" | "updatedAt", ExtArgs["result"]["amenity"]>
  export type AmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Amenity$bookingsArgs<ExtArgs>
    blackoutDates?: boolean | Amenity$blackoutDatesArgs<ExtArgs>
    _count?: boolean | AmenityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AmenityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AmenityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amenity"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      blackoutDates: Prisma.$BlackoutDatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      type: $Enums.AmenityType
      description: string
      imageUrl: string | null
      location: string
      capacity: number
      slotDurationMinutes: number
      openTime: string
      closeTime: string
      rules: string | null
      status: $Enums.AmenityStatus
      requiresApproval: boolean
      maxAdvanceDays: number | null
      maxBookingDurationMinutes: number | null
      cancellationCutoffHours: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["amenity"]>
    composites: {}
  }

  type AmenityGetPayload<S extends boolean | null | undefined | AmenityDefaultArgs> = $Result.GetResult<Prisma.$AmenityPayload, S>

  type AmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmenityCountAggregateInputType | true
    }

  export interface AmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amenity'], meta: { name: 'Amenity' } }
    /**
     * Find zero or one Amenity that matches the filter.
     * @param {AmenityFindUniqueArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmenityFindUniqueArgs>(args: SelectSubset<T, AmenityFindUniqueArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmenityFindUniqueOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, AmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmenityFindFirstArgs>(args?: SelectSubset<T, AmenityFindFirstArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, AmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amenities
     * const amenities = await prisma.amenity.findMany()
     * 
     * // Get first 10 Amenities
     * const amenities = await prisma.amenity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amenityWithIdOnly = await prisma.amenity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmenityFindManyArgs>(args?: SelectSubset<T, AmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amenity.
     * @param {AmenityCreateArgs} args - Arguments to create a Amenity.
     * @example
     * // Create one Amenity
     * const Amenity = await prisma.amenity.create({
     *   data: {
     *     // ... data to create a Amenity
     *   }
     * })
     * 
     */
    create<T extends AmenityCreateArgs>(args: SelectSubset<T, AmenityCreateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amenities.
     * @param {AmenityCreateManyArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmenityCreateManyArgs>(args?: SelectSubset<T, AmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Amenities and returns the data saved in the database.
     * @param {AmenityCreateManyAndReturnArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Amenities and only return the `id`
     * const amenityWithIdOnly = await prisma.amenity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmenityCreateManyAndReturnArgs>(args?: SelectSubset<T, AmenityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Amenity.
     * @param {AmenityDeleteArgs} args - Arguments to delete one Amenity.
     * @example
     * // Delete one Amenity
     * const Amenity = await prisma.amenity.delete({
     *   where: {
     *     // ... filter to delete one Amenity
     *   }
     * })
     * 
     */
    delete<T extends AmenityDeleteArgs>(args: SelectSubset<T, AmenityDeleteArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amenity.
     * @param {AmenityUpdateArgs} args - Arguments to update one Amenity.
     * @example
     * // Update one Amenity
     * const amenity = await prisma.amenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmenityUpdateArgs>(args: SelectSubset<T, AmenityUpdateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amenities.
     * @param {AmenityDeleteManyArgs} args - Arguments to filter Amenities to delete.
     * @example
     * // Delete a few Amenities
     * const { count } = await prisma.amenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmenityDeleteManyArgs>(args?: SelectSubset<T, AmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmenityUpdateManyArgs>(args: SelectSubset<T, AmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities and returns the data updated in the database.
     * @param {AmenityUpdateManyAndReturnArgs} args - Arguments to update many Amenities.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Amenities and only return the `id`
     * const amenityWithIdOnly = await prisma.amenity.updateManyAndReturn({
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
    updateManyAndReturn<T extends AmenityUpdateManyAndReturnArgs>(args: SelectSubset<T, AmenityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Amenity.
     * @param {AmenityUpsertArgs} args - Arguments to update or create a Amenity.
     * @example
     * // Update or create a Amenity
     * const amenity = await prisma.amenity.upsert({
     *   create: {
     *     // ... data to create a Amenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amenity we want to update
     *   }
     * })
     */
    upsert<T extends AmenityUpsertArgs>(args: SelectSubset<T, AmenityUpsertArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityCountArgs} args - Arguments to filter Amenities to count.
     * @example
     * // Count the number of Amenities
     * const count = await prisma.amenity.count({
     *   where: {
     *     // ... the filter for the Amenities we want to count
     *   }
     * })
    **/
    count<T extends AmenityCountArgs>(
      args?: Subset<T, AmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmenityAggregateArgs>(args: Subset<T, AmenityAggregateArgs>): Prisma.PrismaPromise<GetAmenityAggregateType<T>>

    /**
     * Group by Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityGroupByArgs} args - Group by arguments.
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
      T extends AmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmenityGroupByArgs['orderBy'] }
        : { orderBy?: AmenityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amenity model
   */
  readonly fields: AmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Amenity$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Amenity$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blackoutDates<T extends Amenity$blackoutDatesArgs<ExtArgs> = {}>(args?: Subset<T, Amenity$blackoutDatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlackoutDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Amenity model
   */
  interface AmenityFieldRefs {
    readonly id: FieldRef<"Amenity", 'String'>
    readonly name: FieldRef<"Amenity", 'String'>
    readonly slug: FieldRef<"Amenity", 'String'>
    readonly type: FieldRef<"Amenity", 'AmenityType'>
    readonly description: FieldRef<"Amenity", 'String'>
    readonly imageUrl: FieldRef<"Amenity", 'String'>
    readonly location: FieldRef<"Amenity", 'String'>
    readonly capacity: FieldRef<"Amenity", 'Int'>
    readonly slotDurationMinutes: FieldRef<"Amenity", 'Int'>
    readonly openTime: FieldRef<"Amenity", 'String'>
    readonly closeTime: FieldRef<"Amenity", 'String'>
    readonly rules: FieldRef<"Amenity", 'String'>
    readonly status: FieldRef<"Amenity", 'AmenityStatus'>
    readonly requiresApproval: FieldRef<"Amenity", 'Boolean'>
    readonly maxAdvanceDays: FieldRef<"Amenity", 'Int'>
    readonly maxBookingDurationMinutes: FieldRef<"Amenity", 'Int'>
    readonly cancellationCutoffHours: FieldRef<"Amenity", 'Int'>
    readonly createdAt: FieldRef<"Amenity", 'DateTime'>
    readonly updatedAt: FieldRef<"Amenity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Amenity findUnique
   */
  export type AmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findUniqueOrThrow
   */
  export type AmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findFirst
   */
  export type AmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findFirstOrThrow
   */
  export type AmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findMany
   */
  export type AmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenities to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity create
   */
  export type AmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a Amenity.
     */
    data: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
  }

  /**
   * Amenity createMany
   */
  export type AmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amenity createManyAndReturn
   */
  export type AmenityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amenity update
   */
  export type AmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a Amenity.
     */
    data: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
    /**
     * Choose, which Amenity to update.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity updateMany
   */
  export type AmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
  }

  /**
   * Amenity updateManyAndReturn
   */
  export type AmenityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
  }

  /**
   * Amenity upsert
   */
  export type AmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the Amenity to update in case it exists.
     */
    where: AmenityWhereUniqueInput
    /**
     * In case the Amenity found by the `where` argument doesn't exist, create a new Amenity with this data.
     */
    create: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
    /**
     * In case the Amenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
  }

  /**
   * Amenity delete
   */
  export type AmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter which Amenity to delete.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity deleteMany
   */
  export type AmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenities to delete
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to delete.
     */
    limit?: number
  }

  /**
   * Amenity.bookings
   */
  export type Amenity$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Amenity.blackoutDates
   */
  export type Amenity$blackoutDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackoutDate
     */
    select?: BlackoutDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackoutDate
     */
    omit?: BlackoutDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlackoutDateInclude<ExtArgs> | null
    where?: BlackoutDateWhereInput
    orderBy?: BlackoutDateOrderByWithRelationInput | BlackoutDateOrderByWithRelationInput[]
    cursor?: BlackoutDateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlackoutDateScalarFieldEnum | BlackoutDateScalarFieldEnum[]
  }

  /**
   * Amenity without action
   */
  export type AmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    guestCount: number | null
  }

  export type BookingSumAggregateOutputType = {
    guestCount: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    residentId: string | null
    amenityId: string | null
    approvedById: string | null
    startAt: Date | null
    endAt: Date | null
    guestCount: number | null
    status: $Enums.BookingStatus | null
    notes: string | null
    eventTitle: string | null
    eventDetails: string | null
    approvedAt: Date | null
    cancelledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    residentId: string | null
    amenityId: string | null
    approvedById: string | null
    startAt: Date | null
    endAt: Date | null
    guestCount: number | null
    status: $Enums.BookingStatus | null
    notes: string | null
    eventTitle: string | null
    eventDetails: string | null
    approvedAt: Date | null
    cancelledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    residentId: number
    amenityId: number
    approvedById: number
    startAt: number
    endAt: number
    guestCount: number
    status: number
    notes: number
    eventTitle: number
    eventDetails: number
    approvedAt: number
    cancelledAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    guestCount?: true
  }

  export type BookingSumAggregateInputType = {
    guestCount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    residentId?: true
    amenityId?: true
    approvedById?: true
    startAt?: true
    endAt?: true
    guestCount?: true
    status?: true
    notes?: true
    eventTitle?: true
    eventDetails?: true
    approvedAt?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    residentId?: true
    amenityId?: true
    approvedById?: true
    startAt?: true
    endAt?: true
    guestCount?: true
    status?: true
    notes?: true
    eventTitle?: true
    eventDetails?: true
    approvedAt?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    residentId?: true
    amenityId?: true
    approvedById?: true
    startAt?: true
    endAt?: true
    guestCount?: true
    status?: true
    notes?: true
    eventTitle?: true
    eventDetails?: true
    approvedAt?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    residentId: string
    amenityId: string
    approvedById: string | null
    startAt: Date
    endAt: Date
    guestCount: number | null
    status: $Enums.BookingStatus
    notes: string | null
    eventTitle: string | null
    eventDetails: string | null
    approvedAt: Date | null
    cancelledAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    amenityId?: boolean
    approvedById?: boolean
    startAt?: boolean
    endAt?: boolean
    guestCount?: boolean
    status?: boolean
    notes?: boolean
    eventTitle?: boolean
    eventDetails?: boolean
    approvedAt?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resident?: boolean | UserDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
    approvedBy?: boolean | Booking$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    amenityId?: boolean
    approvedById?: boolean
    startAt?: boolean
    endAt?: boolean
    guestCount?: boolean
    status?: boolean
    notes?: boolean
    eventTitle?: boolean
    eventDetails?: boolean
    approvedAt?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resident?: boolean | UserDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
    approvedBy?: boolean | Booking$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    amenityId?: boolean
    approvedById?: boolean
    startAt?: boolean
    endAt?: boolean
    guestCount?: boolean
    status?: boolean
    notes?: boolean
    eventTitle?: boolean
    eventDetails?: boolean
    approvedAt?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resident?: boolean | UserDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
    approvedBy?: boolean | Booking$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    residentId?: boolean
    amenityId?: boolean
    approvedById?: boolean
    startAt?: boolean
    endAt?: boolean
    guestCount?: boolean
    status?: boolean
    notes?: boolean
    eventTitle?: boolean
    eventDetails?: boolean
    approvedAt?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "residentId" | "amenityId" | "approvedById" | "startAt" | "endAt" | "guestCount" | "status" | "notes" | "eventTitle" | "eventDetails" | "approvedAt" | "cancelledAt" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | UserDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
    approvedBy?: boolean | Booking$approvedByArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | UserDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
    approvedBy?: boolean | Booking$approvedByArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | UserDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
    approvedBy?: boolean | Booking$approvedByArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      resident: Prisma.$UserPayload<ExtArgs>
      amenity: Prisma.$AmenityPayload<ExtArgs>
      approvedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      residentId: string
      amenityId: string
      approvedById: string | null
      startAt: Date
      endAt: Date
      guestCount: number | null
      status: $Enums.BookingStatus
      notes: string | null
      eventTitle: string | null
      eventDetails: string | null
      approvedAt: Date | null
      cancelledAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resident<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    amenity<T extends AmenityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AmenityDefaultArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvedBy<T extends Booking$approvedByArgs<ExtArgs> = {}>(args?: Subset<T, Booking$approvedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly residentId: FieldRef<"Booking", 'String'>
    readonly amenityId: FieldRef<"Booking", 'String'>
    readonly approvedById: FieldRef<"Booking", 'String'>
    readonly startAt: FieldRef<"Booking", 'DateTime'>
    readonly endAt: FieldRef<"Booking", 'DateTime'>
    readonly guestCount: FieldRef<"Booking", 'Int'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly notes: FieldRef<"Booking", 'String'>
    readonly eventTitle: FieldRef<"Booking", 'String'>
    readonly eventDetails: FieldRef<"Booking", 'String'>
    readonly approvedAt: FieldRef<"Booking", 'DateTime'>
    readonly cancelledAt: FieldRef<"Booking", 'DateTime'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.approvedBy
   */
  export type Booking$approvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model BlackoutDate
   */

  export type AggregateBlackoutDate = {
    _count: BlackoutDateCountAggregateOutputType | null
    _min: BlackoutDateMinAggregateOutputType | null
    _max: BlackoutDateMaxAggregateOutputType | null
  }

  export type BlackoutDateMinAggregateOutputType = {
    id: string | null
    amenityId: string | null
    startAt: Date | null
    endAt: Date | null
    reason: string | null
    allDay: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlackoutDateMaxAggregateOutputType = {
    id: string | null
    amenityId: string | null
    startAt: Date | null
    endAt: Date | null
    reason: string | null
    allDay: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlackoutDateCountAggregateOutputType = {
    id: number
    amenityId: number
    startAt: number
    endAt: number
    reason: number
    allDay: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlackoutDateMinAggregateInputType = {
    id?: true
    amenityId?: true
    startAt?: true
    endAt?: true
    reason?: true
    allDay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlackoutDateMaxAggregateInputType = {
    id?: true
    amenityId?: true
    startAt?: true
    endAt?: true
    reason?: true
    allDay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlackoutDateCountAggregateInputType = {
    id?: true
    amenityId?: true
    startAt?: true
    endAt?: true
    reason?: true
    allDay?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlackoutDateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlackoutDate to aggregate.
     */
    where?: BlackoutDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackoutDates to fetch.
     */
    orderBy?: BlackoutDateOrderByWithRelationInput | BlackoutDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlackoutDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackoutDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackoutDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlackoutDates
    **/
    _count?: true | BlackoutDateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlackoutDateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlackoutDateMaxAggregateInputType
  }

  export type GetBlackoutDateAggregateType<T extends BlackoutDateAggregateArgs> = {
        [P in keyof T & keyof AggregateBlackoutDate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlackoutDate[P]>
      : GetScalarType<T[P], AggregateBlackoutDate[P]>
  }




  export type BlackoutDateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlackoutDateWhereInput
    orderBy?: BlackoutDateOrderByWithAggregationInput | BlackoutDateOrderByWithAggregationInput[]
    by: BlackoutDateScalarFieldEnum[] | BlackoutDateScalarFieldEnum
    having?: BlackoutDateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlackoutDateCountAggregateInputType | true
    _min?: BlackoutDateMinAggregateInputType
    _max?: BlackoutDateMaxAggregateInputType
  }

  export type BlackoutDateGroupByOutputType = {
    id: string
    amenityId: string
    startAt: Date
    endAt: Date
    reason: string
    allDay: boolean
    createdAt: Date
    updatedAt: Date
    _count: BlackoutDateCountAggregateOutputType | null
    _min: BlackoutDateMinAggregateOutputType | null
    _max: BlackoutDateMaxAggregateOutputType | null
  }

  type GetBlackoutDateGroupByPayload<T extends BlackoutDateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlackoutDateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlackoutDateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlackoutDateGroupByOutputType[P]>
            : GetScalarType<T[P], BlackoutDateGroupByOutputType[P]>
        }
      >
    >


  export type BlackoutDateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amenityId?: boolean
    startAt?: boolean
    endAt?: boolean
    reason?: boolean
    allDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blackoutDate"]>

  export type BlackoutDateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amenityId?: boolean
    startAt?: boolean
    endAt?: boolean
    reason?: boolean
    allDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blackoutDate"]>

  export type BlackoutDateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amenityId?: boolean
    startAt?: boolean
    endAt?: boolean
    reason?: boolean
    allDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blackoutDate"]>

  export type BlackoutDateSelectScalar = {
    id?: boolean
    amenityId?: boolean
    startAt?: boolean
    endAt?: boolean
    reason?: boolean
    allDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlackoutDateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amenityId" | "startAt" | "endAt" | "reason" | "allDay" | "createdAt" | "updatedAt", ExtArgs["result"]["blackoutDate"]>
  export type BlackoutDateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }
  export type BlackoutDateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }
  export type BlackoutDateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }

  export type $BlackoutDatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlackoutDate"
    objects: {
      amenity: Prisma.$AmenityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amenityId: string
      startAt: Date
      endAt: Date
      reason: string
      allDay: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blackoutDate"]>
    composites: {}
  }

  type BlackoutDateGetPayload<S extends boolean | null | undefined | BlackoutDateDefaultArgs> = $Result.GetResult<Prisma.$BlackoutDatePayload, S>

  type BlackoutDateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlackoutDateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlackoutDateCountAggregateInputType | true
    }

  export interface BlackoutDateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlackoutDate'], meta: { name: 'BlackoutDate' } }
    /**
     * Find zero or one BlackoutDate that matches the filter.
     * @param {BlackoutDateFindUniqueArgs} args - Arguments to find a BlackoutDate
     * @example
     * // Get one BlackoutDate
     * const blackoutDate = await prisma.blackoutDate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlackoutDateFindUniqueArgs>(args: SelectSubset<T, BlackoutDateFindUniqueArgs<ExtArgs>>): Prisma__BlackoutDateClient<$Result.GetResult<Prisma.$BlackoutDatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlackoutDate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlackoutDateFindUniqueOrThrowArgs} args - Arguments to find a BlackoutDate
     * @example
     * // Get one BlackoutDate
     * const blackoutDate = await prisma.blackoutDate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlackoutDateFindUniqueOrThrowArgs>(args: SelectSubset<T, BlackoutDateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlackoutDateClient<$Result.GetResult<Prisma.$BlackoutDatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlackoutDate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackoutDateFindFirstArgs} args - Arguments to find a BlackoutDate
     * @example
     * // Get one BlackoutDate
     * const blackoutDate = await prisma.blackoutDate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlackoutDateFindFirstArgs>(args?: SelectSubset<T, BlackoutDateFindFirstArgs<ExtArgs>>): Prisma__BlackoutDateClient<$Result.GetResult<Prisma.$BlackoutDatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlackoutDate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackoutDateFindFirstOrThrowArgs} args - Arguments to find a BlackoutDate
     * @example
     * // Get one BlackoutDate
     * const blackoutDate = await prisma.blackoutDate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlackoutDateFindFirstOrThrowArgs>(args?: SelectSubset<T, BlackoutDateFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlackoutDateClient<$Result.GetResult<Prisma.$BlackoutDatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlackoutDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackoutDateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlackoutDates
     * const blackoutDates = await prisma.blackoutDate.findMany()
     * 
     * // Get first 10 BlackoutDates
     * const blackoutDates = await prisma.blackoutDate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blackoutDateWithIdOnly = await prisma.blackoutDate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlackoutDateFindManyArgs>(args?: SelectSubset<T, BlackoutDateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlackoutDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlackoutDate.
     * @param {BlackoutDateCreateArgs} args - Arguments to create a BlackoutDate.
     * @example
     * // Create one BlackoutDate
     * const BlackoutDate = await prisma.blackoutDate.create({
     *   data: {
     *     // ... data to create a BlackoutDate
     *   }
     * })
     * 
     */
    create<T extends BlackoutDateCreateArgs>(args: SelectSubset<T, BlackoutDateCreateArgs<ExtArgs>>): Prisma__BlackoutDateClient<$Result.GetResult<Prisma.$BlackoutDatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlackoutDates.
     * @param {BlackoutDateCreateManyArgs} args - Arguments to create many BlackoutDates.
     * @example
     * // Create many BlackoutDates
     * const blackoutDate = await prisma.blackoutDate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlackoutDateCreateManyArgs>(args?: SelectSubset<T, BlackoutDateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlackoutDates and returns the data saved in the database.
     * @param {BlackoutDateCreateManyAndReturnArgs} args - Arguments to create many BlackoutDates.
     * @example
     * // Create many BlackoutDates
     * const blackoutDate = await prisma.blackoutDate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlackoutDates and only return the `id`
     * const blackoutDateWithIdOnly = await prisma.blackoutDate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlackoutDateCreateManyAndReturnArgs>(args?: SelectSubset<T, BlackoutDateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlackoutDatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlackoutDate.
     * @param {BlackoutDateDeleteArgs} args - Arguments to delete one BlackoutDate.
     * @example
     * // Delete one BlackoutDate
     * const BlackoutDate = await prisma.blackoutDate.delete({
     *   where: {
     *     // ... filter to delete one BlackoutDate
     *   }
     * })
     * 
     */
    delete<T extends BlackoutDateDeleteArgs>(args: SelectSubset<T, BlackoutDateDeleteArgs<ExtArgs>>): Prisma__BlackoutDateClient<$Result.GetResult<Prisma.$BlackoutDatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlackoutDate.
     * @param {BlackoutDateUpdateArgs} args - Arguments to update one BlackoutDate.
     * @example
     * // Update one BlackoutDate
     * const blackoutDate = await prisma.blackoutDate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlackoutDateUpdateArgs>(args: SelectSubset<T, BlackoutDateUpdateArgs<ExtArgs>>): Prisma__BlackoutDateClient<$Result.GetResult<Prisma.$BlackoutDatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlackoutDates.
     * @param {BlackoutDateDeleteManyArgs} args - Arguments to filter BlackoutDates to delete.
     * @example
     * // Delete a few BlackoutDates
     * const { count } = await prisma.blackoutDate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlackoutDateDeleteManyArgs>(args?: SelectSubset<T, BlackoutDateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlackoutDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackoutDateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlackoutDates
     * const blackoutDate = await prisma.blackoutDate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlackoutDateUpdateManyArgs>(args: SelectSubset<T, BlackoutDateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlackoutDates and returns the data updated in the database.
     * @param {BlackoutDateUpdateManyAndReturnArgs} args - Arguments to update many BlackoutDates.
     * @example
     * // Update many BlackoutDates
     * const blackoutDate = await prisma.blackoutDate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlackoutDates and only return the `id`
     * const blackoutDateWithIdOnly = await prisma.blackoutDate.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlackoutDateUpdateManyAndReturnArgs>(args: SelectSubset<T, BlackoutDateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlackoutDatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlackoutDate.
     * @param {BlackoutDateUpsertArgs} args - Arguments to update or create a BlackoutDate.
     * @example
     * // Update or create a BlackoutDate
     * const blackoutDate = await prisma.blackoutDate.upsert({
     *   create: {
     *     // ... data to create a BlackoutDate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlackoutDate we want to update
     *   }
     * })
     */
    upsert<T extends BlackoutDateUpsertArgs>(args: SelectSubset<T, BlackoutDateUpsertArgs<ExtArgs>>): Prisma__BlackoutDateClient<$Result.GetResult<Prisma.$BlackoutDatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlackoutDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackoutDateCountArgs} args - Arguments to filter BlackoutDates to count.
     * @example
     * // Count the number of BlackoutDates
     * const count = await prisma.blackoutDate.count({
     *   where: {
     *     // ... the filter for the BlackoutDates we want to count
     *   }
     * })
    **/
    count<T extends BlackoutDateCountArgs>(
      args?: Subset<T, BlackoutDateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlackoutDateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlackoutDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackoutDateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlackoutDateAggregateArgs>(args: Subset<T, BlackoutDateAggregateArgs>): Prisma.PrismaPromise<GetBlackoutDateAggregateType<T>>

    /**
     * Group by BlackoutDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlackoutDateGroupByArgs} args - Group by arguments.
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
      T extends BlackoutDateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlackoutDateGroupByArgs['orderBy'] }
        : { orderBy?: BlackoutDateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlackoutDateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlackoutDateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlackoutDate model
   */
  readonly fields: BlackoutDateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlackoutDate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlackoutDateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    amenity<T extends AmenityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AmenityDefaultArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BlackoutDate model
   */
  interface BlackoutDateFieldRefs {
    readonly id: FieldRef<"BlackoutDate", 'String'>
    readonly amenityId: FieldRef<"BlackoutDate", 'String'>
    readonly startAt: FieldRef<"BlackoutDate", 'DateTime'>
    readonly endAt: FieldRef<"BlackoutDate", 'DateTime'>
    readonly reason: FieldRef<"BlackoutDate", 'String'>
    readonly allDay: FieldRef<"BlackoutDate", 'Boolean'>
    readonly createdAt: FieldRef<"BlackoutDate", 'DateTime'>
    readonly updatedAt: FieldRef<"BlackoutDate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlackoutDate findUnique
   */
  export type BlackoutDateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackoutDate
     */
    select?: BlackoutDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackoutDate
     */
    omit?: BlackoutDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlackoutDateInclude<ExtArgs> | null
    /**
     * Filter, which BlackoutDate to fetch.
     */
    where: BlackoutDateWhereUniqueInput
  }

  /**
   * BlackoutDate findUniqueOrThrow
   */
  export type BlackoutDateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackoutDate
     */
    select?: BlackoutDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackoutDate
     */
    omit?: BlackoutDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlackoutDateInclude<ExtArgs> | null
    /**
     * Filter, which BlackoutDate to fetch.
     */
    where: BlackoutDateWhereUniqueInput
  }

  /**
   * BlackoutDate findFirst
   */
  export type BlackoutDateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackoutDate
     */
    select?: BlackoutDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackoutDate
     */
    omit?: BlackoutDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlackoutDateInclude<ExtArgs> | null
    /**
     * Filter, which BlackoutDate to fetch.
     */
    where?: BlackoutDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackoutDates to fetch.
     */
    orderBy?: BlackoutDateOrderByWithRelationInput | BlackoutDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlackoutDates.
     */
    cursor?: BlackoutDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackoutDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackoutDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlackoutDates.
     */
    distinct?: BlackoutDateScalarFieldEnum | BlackoutDateScalarFieldEnum[]
  }

  /**
   * BlackoutDate findFirstOrThrow
   */
  export type BlackoutDateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackoutDate
     */
    select?: BlackoutDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackoutDate
     */
    omit?: BlackoutDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlackoutDateInclude<ExtArgs> | null
    /**
     * Filter, which BlackoutDate to fetch.
     */
    where?: BlackoutDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackoutDates to fetch.
     */
    orderBy?: BlackoutDateOrderByWithRelationInput | BlackoutDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlackoutDates.
     */
    cursor?: BlackoutDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackoutDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackoutDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlackoutDates.
     */
    distinct?: BlackoutDateScalarFieldEnum | BlackoutDateScalarFieldEnum[]
  }

  /**
   * BlackoutDate findMany
   */
  export type BlackoutDateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackoutDate
     */
    select?: BlackoutDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackoutDate
     */
    omit?: BlackoutDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlackoutDateInclude<ExtArgs> | null
    /**
     * Filter, which BlackoutDates to fetch.
     */
    where?: BlackoutDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlackoutDates to fetch.
     */
    orderBy?: BlackoutDateOrderByWithRelationInput | BlackoutDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlackoutDates.
     */
    cursor?: BlackoutDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlackoutDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlackoutDates.
     */
    skip?: number
    distinct?: BlackoutDateScalarFieldEnum | BlackoutDateScalarFieldEnum[]
  }

  /**
   * BlackoutDate create
   */
  export type BlackoutDateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackoutDate
     */
    select?: BlackoutDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackoutDate
     */
    omit?: BlackoutDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlackoutDateInclude<ExtArgs> | null
    /**
     * The data needed to create a BlackoutDate.
     */
    data: XOR<BlackoutDateCreateInput, BlackoutDateUncheckedCreateInput>
  }

  /**
   * BlackoutDate createMany
   */
  export type BlackoutDateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlackoutDates.
     */
    data: BlackoutDateCreateManyInput | BlackoutDateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlackoutDate createManyAndReturn
   */
  export type BlackoutDateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackoutDate
     */
    select?: BlackoutDateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlackoutDate
     */
    omit?: BlackoutDateOmit<ExtArgs> | null
    /**
     * The data used to create many BlackoutDates.
     */
    data: BlackoutDateCreateManyInput | BlackoutDateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlackoutDateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlackoutDate update
   */
  export type BlackoutDateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackoutDate
     */
    select?: BlackoutDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackoutDate
     */
    omit?: BlackoutDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlackoutDateInclude<ExtArgs> | null
    /**
     * The data needed to update a BlackoutDate.
     */
    data: XOR<BlackoutDateUpdateInput, BlackoutDateUncheckedUpdateInput>
    /**
     * Choose, which BlackoutDate to update.
     */
    where: BlackoutDateWhereUniqueInput
  }

  /**
   * BlackoutDate updateMany
   */
  export type BlackoutDateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlackoutDates.
     */
    data: XOR<BlackoutDateUpdateManyMutationInput, BlackoutDateUncheckedUpdateManyInput>
    /**
     * Filter which BlackoutDates to update
     */
    where?: BlackoutDateWhereInput
    /**
     * Limit how many BlackoutDates to update.
     */
    limit?: number
  }

  /**
   * BlackoutDate updateManyAndReturn
   */
  export type BlackoutDateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackoutDate
     */
    select?: BlackoutDateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlackoutDate
     */
    omit?: BlackoutDateOmit<ExtArgs> | null
    /**
     * The data used to update BlackoutDates.
     */
    data: XOR<BlackoutDateUpdateManyMutationInput, BlackoutDateUncheckedUpdateManyInput>
    /**
     * Filter which BlackoutDates to update
     */
    where?: BlackoutDateWhereInput
    /**
     * Limit how many BlackoutDates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlackoutDateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlackoutDate upsert
   */
  export type BlackoutDateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackoutDate
     */
    select?: BlackoutDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackoutDate
     */
    omit?: BlackoutDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlackoutDateInclude<ExtArgs> | null
    /**
     * The filter to search for the BlackoutDate to update in case it exists.
     */
    where: BlackoutDateWhereUniqueInput
    /**
     * In case the BlackoutDate found by the `where` argument doesn't exist, create a new BlackoutDate with this data.
     */
    create: XOR<BlackoutDateCreateInput, BlackoutDateUncheckedCreateInput>
    /**
     * In case the BlackoutDate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlackoutDateUpdateInput, BlackoutDateUncheckedUpdateInput>
  }

  /**
   * BlackoutDate delete
   */
  export type BlackoutDateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackoutDate
     */
    select?: BlackoutDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackoutDate
     */
    omit?: BlackoutDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlackoutDateInclude<ExtArgs> | null
    /**
     * Filter which BlackoutDate to delete.
     */
    where: BlackoutDateWhereUniqueInput
  }

  /**
   * BlackoutDate deleteMany
   */
  export type BlackoutDateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlackoutDates to delete
     */
    where?: BlackoutDateWhereInput
    /**
     * Limit how many BlackoutDates to delete.
     */
    limit?: number
  }

  /**
   * BlackoutDate without action
   */
  export type BlackoutDateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlackoutDate
     */
    select?: BlackoutDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlackoutDate
     */
    omit?: BlackoutDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlackoutDateInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    actorUserId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    actorUserId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    actorUserId: number
    action: number
    entityType: number
    entityId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    actorUserId?: true
    action?: true
    entityType?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    actorUserId?: true
    action?: true
    entityType?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    actorUserId?: true
    action?: true
    entityType?: true
    entityId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    actorUserId: string | null
    action: string
    entityType: string
    entityId: string
    metadata: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    actorUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorUserId" | "action" | "entityType" | "entityId" | "metadata" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorUserId: string | null
      action: string
      entityType: string
      entityId: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends AuditLog$actorArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly actorUserId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.actor
   */
  export type AuditLog$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    phone: 'phone',
    role: 'role',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AmenityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    type: 'type',
    description: 'description',
    imageUrl: 'imageUrl',
    location: 'location',
    capacity: 'capacity',
    slotDurationMinutes: 'slotDurationMinutes',
    openTime: 'openTime',
    closeTime: 'closeTime',
    rules: 'rules',
    status: 'status',
    requiresApproval: 'requiresApproval',
    maxAdvanceDays: 'maxAdvanceDays',
    maxBookingDurationMinutes: 'maxBookingDurationMinutes',
    cancellationCutoffHours: 'cancellationCutoffHours',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AmenityScalarFieldEnum = (typeof AmenityScalarFieldEnum)[keyof typeof AmenityScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    residentId: 'residentId',
    amenityId: 'amenityId',
    approvedById: 'approvedById',
    startAt: 'startAt',
    endAt: 'endAt',
    guestCount: 'guestCount',
    status: 'status',
    notes: 'notes',
    eventTitle: 'eventTitle',
    eventDetails: 'eventDetails',
    approvedAt: 'approvedAt',
    cancelledAt: 'cancelledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const BlackoutDateScalarFieldEnum: {
    id: 'id',
    amenityId: 'amenityId',
    startAt: 'startAt',
    endAt: 'endAt',
    reason: 'reason',
    allDay: 'allDay',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlackoutDateScalarFieldEnum = (typeof BlackoutDateScalarFieldEnum)[keyof typeof BlackoutDateScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    actorUserId: 'actorUserId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AmenityType'
   */
  export type EnumAmenityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AmenityType'>
    


  /**
   * Reference to a field of type 'AmenityType[]'
   */
  export type ListEnumAmenityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AmenityType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AmenityStatus'
   */
  export type EnumAmenityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AmenityStatus'>
    


  /**
   * Reference to a field of type 'AmenityStatus[]'
   */
  export type ListEnumAmenityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AmenityStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    passwordHash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
    approvedBookings?: BookingListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    approvedBookings?: BookingOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    passwordHash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
    approvedBookings?: BookingListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AmenityWhereInput = {
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    id?: StringFilter<"Amenity"> | string
    name?: StringFilter<"Amenity"> | string
    slug?: StringFilter<"Amenity"> | string
    type?: EnumAmenityTypeFilter<"Amenity"> | $Enums.AmenityType
    description?: StringFilter<"Amenity"> | string
    imageUrl?: StringNullableFilter<"Amenity"> | string | null
    location?: StringFilter<"Amenity"> | string
    capacity?: IntFilter<"Amenity"> | number
    slotDurationMinutes?: IntFilter<"Amenity"> | number
    openTime?: StringFilter<"Amenity"> | string
    closeTime?: StringFilter<"Amenity"> | string
    rules?: StringNullableFilter<"Amenity"> | string | null
    status?: EnumAmenityStatusFilter<"Amenity"> | $Enums.AmenityStatus
    requiresApproval?: BoolFilter<"Amenity"> | boolean
    maxAdvanceDays?: IntNullableFilter<"Amenity"> | number | null
    maxBookingDurationMinutes?: IntNullableFilter<"Amenity"> | number | null
    cancellationCutoffHours?: IntNullableFilter<"Amenity"> | number | null
    createdAt?: DateTimeFilter<"Amenity"> | Date | string
    updatedAt?: DateTimeFilter<"Amenity"> | Date | string
    bookings?: BookingListRelationFilter
    blackoutDates?: BlackoutDateListRelationFilter
  }

  export type AmenityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    location?: SortOrder
    capacity?: SortOrder
    slotDurationMinutes?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    rules?: SortOrderInput | SortOrder
    status?: SortOrder
    requiresApproval?: SortOrder
    maxAdvanceDays?: SortOrderInput | SortOrder
    maxBookingDurationMinutes?: SortOrderInput | SortOrder
    cancellationCutoffHours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    blackoutDates?: BlackoutDateOrderByRelationAggregateInput
  }

  export type AmenityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    name?: StringFilter<"Amenity"> | string
    type?: EnumAmenityTypeFilter<"Amenity"> | $Enums.AmenityType
    description?: StringFilter<"Amenity"> | string
    imageUrl?: StringNullableFilter<"Amenity"> | string | null
    location?: StringFilter<"Amenity"> | string
    capacity?: IntFilter<"Amenity"> | number
    slotDurationMinutes?: IntFilter<"Amenity"> | number
    openTime?: StringFilter<"Amenity"> | string
    closeTime?: StringFilter<"Amenity"> | string
    rules?: StringNullableFilter<"Amenity"> | string | null
    status?: EnumAmenityStatusFilter<"Amenity"> | $Enums.AmenityStatus
    requiresApproval?: BoolFilter<"Amenity"> | boolean
    maxAdvanceDays?: IntNullableFilter<"Amenity"> | number | null
    maxBookingDurationMinutes?: IntNullableFilter<"Amenity"> | number | null
    cancellationCutoffHours?: IntNullableFilter<"Amenity"> | number | null
    createdAt?: DateTimeFilter<"Amenity"> | Date | string
    updatedAt?: DateTimeFilter<"Amenity"> | Date | string
    bookings?: BookingListRelationFilter
    blackoutDates?: BlackoutDateListRelationFilter
  }, "id" | "slug">

  export type AmenityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    location?: SortOrder
    capacity?: SortOrder
    slotDurationMinutes?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    rules?: SortOrderInput | SortOrder
    status?: SortOrder
    requiresApproval?: SortOrder
    maxAdvanceDays?: SortOrderInput | SortOrder
    maxBookingDurationMinutes?: SortOrderInput | SortOrder
    cancellationCutoffHours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AmenityCountOrderByAggregateInput
    _avg?: AmenityAvgOrderByAggregateInput
    _max?: AmenityMaxOrderByAggregateInput
    _min?: AmenityMinOrderByAggregateInput
    _sum?: AmenitySumOrderByAggregateInput
  }

  export type AmenityScalarWhereWithAggregatesInput = {
    AND?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    OR?: AmenityScalarWhereWithAggregatesInput[]
    NOT?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Amenity"> | string
    name?: StringWithAggregatesFilter<"Amenity"> | string
    slug?: StringWithAggregatesFilter<"Amenity"> | string
    type?: EnumAmenityTypeWithAggregatesFilter<"Amenity"> | $Enums.AmenityType
    description?: StringWithAggregatesFilter<"Amenity"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Amenity"> | string | null
    location?: StringWithAggregatesFilter<"Amenity"> | string
    capacity?: IntWithAggregatesFilter<"Amenity"> | number
    slotDurationMinutes?: IntWithAggregatesFilter<"Amenity"> | number
    openTime?: StringWithAggregatesFilter<"Amenity"> | string
    closeTime?: StringWithAggregatesFilter<"Amenity"> | string
    rules?: StringNullableWithAggregatesFilter<"Amenity"> | string | null
    status?: EnumAmenityStatusWithAggregatesFilter<"Amenity"> | $Enums.AmenityStatus
    requiresApproval?: BoolWithAggregatesFilter<"Amenity"> | boolean
    maxAdvanceDays?: IntNullableWithAggregatesFilter<"Amenity"> | number | null
    maxBookingDurationMinutes?: IntNullableWithAggregatesFilter<"Amenity"> | number | null
    cancellationCutoffHours?: IntNullableWithAggregatesFilter<"Amenity"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Amenity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Amenity"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    residentId?: StringFilter<"Booking"> | string
    amenityId?: StringFilter<"Booking"> | string
    approvedById?: StringNullableFilter<"Booking"> | string | null
    startAt?: DateTimeFilter<"Booking"> | Date | string
    endAt?: DateTimeFilter<"Booking"> | Date | string
    guestCount?: IntNullableFilter<"Booking"> | number | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"Booking"> | string | null
    eventTitle?: StringNullableFilter<"Booking"> | string | null
    eventDetails?: StringNullableFilter<"Booking"> | string | null
    approvedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    resident?: XOR<UserScalarRelationFilter, UserWhereInput>
    amenity?: XOR<AmenityScalarRelationFilter, AmenityWhereInput>
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    residentId?: SortOrder
    amenityId?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    guestCount?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    eventTitle?: SortOrderInput | SortOrder
    eventDetails?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resident?: UserOrderByWithRelationInput
    amenity?: AmenityOrderByWithRelationInput
    approvedBy?: UserOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    residentId?: StringFilter<"Booking"> | string
    amenityId?: StringFilter<"Booking"> | string
    approvedById?: StringNullableFilter<"Booking"> | string | null
    startAt?: DateTimeFilter<"Booking"> | Date | string
    endAt?: DateTimeFilter<"Booking"> | Date | string
    guestCount?: IntNullableFilter<"Booking"> | number | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"Booking"> | string | null
    eventTitle?: StringNullableFilter<"Booking"> | string | null
    eventDetails?: StringNullableFilter<"Booking"> | string | null
    approvedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    resident?: XOR<UserScalarRelationFilter, UserWhereInput>
    amenity?: XOR<AmenityScalarRelationFilter, AmenityWhereInput>
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    residentId?: SortOrder
    amenityId?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    guestCount?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    eventTitle?: SortOrderInput | SortOrder
    eventDetails?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    residentId?: StringWithAggregatesFilter<"Booking"> | string
    amenityId?: StringWithAggregatesFilter<"Booking"> | string
    approvedById?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    startAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    guestCount?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    notes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    eventTitle?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    eventDetails?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type BlackoutDateWhereInput = {
    AND?: BlackoutDateWhereInput | BlackoutDateWhereInput[]
    OR?: BlackoutDateWhereInput[]
    NOT?: BlackoutDateWhereInput | BlackoutDateWhereInput[]
    id?: StringFilter<"BlackoutDate"> | string
    amenityId?: StringFilter<"BlackoutDate"> | string
    startAt?: DateTimeFilter<"BlackoutDate"> | Date | string
    endAt?: DateTimeFilter<"BlackoutDate"> | Date | string
    reason?: StringFilter<"BlackoutDate"> | string
    allDay?: BoolFilter<"BlackoutDate"> | boolean
    createdAt?: DateTimeFilter<"BlackoutDate"> | Date | string
    updatedAt?: DateTimeFilter<"BlackoutDate"> | Date | string
    amenity?: XOR<AmenityScalarRelationFilter, AmenityWhereInput>
  }

  export type BlackoutDateOrderByWithRelationInput = {
    id?: SortOrder
    amenityId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrder
    allDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amenity?: AmenityOrderByWithRelationInput
  }

  export type BlackoutDateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlackoutDateWhereInput | BlackoutDateWhereInput[]
    OR?: BlackoutDateWhereInput[]
    NOT?: BlackoutDateWhereInput | BlackoutDateWhereInput[]
    amenityId?: StringFilter<"BlackoutDate"> | string
    startAt?: DateTimeFilter<"BlackoutDate"> | Date | string
    endAt?: DateTimeFilter<"BlackoutDate"> | Date | string
    reason?: StringFilter<"BlackoutDate"> | string
    allDay?: BoolFilter<"BlackoutDate"> | boolean
    createdAt?: DateTimeFilter<"BlackoutDate"> | Date | string
    updatedAt?: DateTimeFilter<"BlackoutDate"> | Date | string
    amenity?: XOR<AmenityScalarRelationFilter, AmenityWhereInput>
  }, "id">

  export type BlackoutDateOrderByWithAggregationInput = {
    id?: SortOrder
    amenityId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrder
    allDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlackoutDateCountOrderByAggregateInput
    _max?: BlackoutDateMaxOrderByAggregateInput
    _min?: BlackoutDateMinOrderByAggregateInput
  }

  export type BlackoutDateScalarWhereWithAggregatesInput = {
    AND?: BlackoutDateScalarWhereWithAggregatesInput | BlackoutDateScalarWhereWithAggregatesInput[]
    OR?: BlackoutDateScalarWhereWithAggregatesInput[]
    NOT?: BlackoutDateScalarWhereWithAggregatesInput | BlackoutDateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlackoutDate"> | string
    amenityId?: StringWithAggregatesFilter<"BlackoutDate"> | string
    startAt?: DateTimeWithAggregatesFilter<"BlackoutDate"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"BlackoutDate"> | Date | string
    reason?: StringWithAggregatesFilter<"BlackoutDate"> | string
    allDay?: BoolWithAggregatesFilter<"BlackoutDate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BlackoutDate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlackoutDate"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorUserId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorUserId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    actorUserId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorUserId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    actorUserId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutResidentInput
    approvedBookings?: BookingCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutResidentInput
    approvedBookings?: BookingUncheckedCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutResidentNestedInput
    approvedBookings?: BookingUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutResidentNestedInput
    approvedBookings?: BookingUncheckedUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmenityCreateInput = {
    id?: string
    name: string
    slug: string
    type?: $Enums.AmenityType
    description: string
    imageUrl?: string | null
    location: string
    capacity: number
    slotDurationMinutes: number
    openTime: string
    closeTime: string
    rules?: string | null
    status?: $Enums.AmenityStatus
    requiresApproval?: boolean
    maxAdvanceDays?: number | null
    maxBookingDurationMinutes?: number | null
    cancellationCutoffHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutAmenityInput
    blackoutDates?: BlackoutDateCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    type?: $Enums.AmenityType
    description: string
    imageUrl?: string | null
    location: string
    capacity: number
    slotDurationMinutes: number
    openTime: string
    closeTime: string
    rules?: string | null
    status?: $Enums.AmenityStatus
    requiresApproval?: boolean
    maxAdvanceDays?: number | null
    maxBookingDurationMinutes?: number | null
    cancellationCutoffHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutAmenityInput
    blackoutDates?: BlackoutDateUncheckedCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAmenityTypeFieldUpdateOperationsInput | $Enums.AmenityType
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAmenityStatusFieldUpdateOperationsInput | $Enums.AmenityStatus
    requiresApproval?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceDays?: NullableIntFieldUpdateOperationsInput | number | null
    maxBookingDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cancellationCutoffHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutAmenityNestedInput
    blackoutDates?: BlackoutDateUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAmenityTypeFieldUpdateOperationsInput | $Enums.AmenityType
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAmenityStatusFieldUpdateOperationsInput | $Enums.AmenityStatus
    requiresApproval?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceDays?: NullableIntFieldUpdateOperationsInput | number | null
    maxBookingDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cancellationCutoffHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutAmenityNestedInput
    blackoutDates?: BlackoutDateUncheckedUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityCreateManyInput = {
    id?: string
    name: string
    slug: string
    type?: $Enums.AmenityType
    description: string
    imageUrl?: string | null
    location: string
    capacity: number
    slotDurationMinutes: number
    openTime: string
    closeTime: string
    rules?: string | null
    status?: $Enums.AmenityStatus
    requiresApproval?: boolean
    maxAdvanceDays?: number | null
    maxBookingDurationMinutes?: number | null
    cancellationCutoffHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmenityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAmenityTypeFieldUpdateOperationsInput | $Enums.AmenityType
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAmenityStatusFieldUpdateOperationsInput | $Enums.AmenityStatus
    requiresApproval?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceDays?: NullableIntFieldUpdateOperationsInput | number | null
    maxBookingDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cancellationCutoffHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmenityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAmenityTypeFieldUpdateOperationsInput | $Enums.AmenityType
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAmenityStatusFieldUpdateOperationsInput | $Enums.AmenityStatus
    requiresApproval?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceDays?: NullableIntFieldUpdateOperationsInput | number | null
    maxBookingDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cancellationCutoffHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    guestCount?: number | null
    status?: $Enums.BookingStatus
    notes?: string | null
    eventTitle?: string | null
    eventDetails?: string | null
    approvedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resident: UserCreateNestedOneWithoutBookingsInput
    amenity: AmenityCreateNestedOneWithoutBookingsInput
    approvedBy?: UserCreateNestedOneWithoutApprovedBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    residentId: string
    amenityId: string
    approvedById?: string | null
    startAt: Date | string
    endAt: Date | string
    guestCount?: number | null
    status?: $Enums.BookingStatus
    notes?: string | null
    eventTitle?: string | null
    eventDetails?: string | null
    approvedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventTitle?: NullableStringFieldUpdateOperationsInput | string | null
    eventDetails?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: UserUpdateOneRequiredWithoutBookingsNestedInput
    amenity?: AmenityUpdateOneRequiredWithoutBookingsNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    residentId?: StringFieldUpdateOperationsInput | string
    amenityId?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventTitle?: NullableStringFieldUpdateOperationsInput | string | null
    eventDetails?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    residentId: string
    amenityId: string
    approvedById?: string | null
    startAt: Date | string
    endAt: Date | string
    guestCount?: number | null
    status?: $Enums.BookingStatus
    notes?: string | null
    eventTitle?: string | null
    eventDetails?: string | null
    approvedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventTitle?: NullableStringFieldUpdateOperationsInput | string | null
    eventDetails?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    residentId?: StringFieldUpdateOperationsInput | string
    amenityId?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventTitle?: NullableStringFieldUpdateOperationsInput | string | null
    eventDetails?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackoutDateCreateInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    allDay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    amenity: AmenityCreateNestedOneWithoutBlackoutDatesInput
  }

  export type BlackoutDateUncheckedCreateInput = {
    id?: string
    amenityId: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    allDay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlackoutDateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amenity?: AmenityUpdateOneRequiredWithoutBlackoutDatesNestedInput
  }

  export type BlackoutDateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amenityId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackoutDateCreateManyInput = {
    id?: string
    amenityId: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    allDay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlackoutDateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackoutDateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amenityId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    actorUserId?: string | null
    action: string
    entityType: string
    entityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    actorUserId?: string | null
    action: string
    entityType: string
    entityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAmenityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AmenityType | EnumAmenityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AmenityType[] | ListEnumAmenityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AmenityType[] | ListEnumAmenityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAmenityTypeFilter<$PrismaModel> | $Enums.AmenityType
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

  export type EnumAmenityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AmenityStatus | EnumAmenityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AmenityStatus[] | ListEnumAmenityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AmenityStatus[] | ListEnumAmenityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAmenityStatusFilter<$PrismaModel> | $Enums.AmenityStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BlackoutDateListRelationFilter = {
    every?: BlackoutDateWhereInput
    some?: BlackoutDateWhereInput
    none?: BlackoutDateWhereInput
  }

  export type BlackoutDateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AmenityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    slotDurationMinutes?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    rules?: SortOrder
    status?: SortOrder
    requiresApproval?: SortOrder
    maxAdvanceDays?: SortOrder
    maxBookingDurationMinutes?: SortOrder
    cancellationCutoffHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmenityAvgOrderByAggregateInput = {
    capacity?: SortOrder
    slotDurationMinutes?: SortOrder
    maxAdvanceDays?: SortOrder
    maxBookingDurationMinutes?: SortOrder
    cancellationCutoffHours?: SortOrder
  }

  export type AmenityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    slotDurationMinutes?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    rules?: SortOrder
    status?: SortOrder
    requiresApproval?: SortOrder
    maxAdvanceDays?: SortOrder
    maxBookingDurationMinutes?: SortOrder
    cancellationCutoffHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmenityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    slotDurationMinutes?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    rules?: SortOrder
    status?: SortOrder
    requiresApproval?: SortOrder
    maxAdvanceDays?: SortOrder
    maxBookingDurationMinutes?: SortOrder
    cancellationCutoffHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmenitySumOrderByAggregateInput = {
    capacity?: SortOrder
    slotDurationMinutes?: SortOrder
    maxAdvanceDays?: SortOrder
    maxBookingDurationMinutes?: SortOrder
    cancellationCutoffHours?: SortOrder
  }

  export type EnumAmenityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AmenityType | EnumAmenityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AmenityType[] | ListEnumAmenityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AmenityType[] | ListEnumAmenityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAmenityTypeWithAggregatesFilter<$PrismaModel> | $Enums.AmenityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAmenityTypeFilter<$PrismaModel>
    _max?: NestedEnumAmenityTypeFilter<$PrismaModel>
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

  export type EnumAmenityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AmenityStatus | EnumAmenityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AmenityStatus[] | ListEnumAmenityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AmenityStatus[] | ListEnumAmenityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAmenityStatusWithAggregatesFilter<$PrismaModel> | $Enums.AmenityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAmenityStatusFilter<$PrismaModel>
    _max?: NestedEnumAmenityStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AmenityScalarRelationFilter = {
    is?: AmenityWhereInput
    isNot?: AmenityWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    amenityId?: SortOrder
    approvedById?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    guestCount?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    eventTitle?: SortOrder
    eventDetails?: SortOrder
    approvedAt?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    guestCount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    amenityId?: SortOrder
    approvedById?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    guestCount?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    eventTitle?: SortOrder
    eventDetails?: SortOrder
    approvedAt?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    amenityId?: SortOrder
    approvedById?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    guestCount?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    eventTitle?: SortOrder
    eventDetails?: SortOrder
    approvedAt?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    guestCount?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BlackoutDateCountOrderByAggregateInput = {
    id?: SortOrder
    amenityId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrder
    allDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlackoutDateMaxOrderByAggregateInput = {
    id?: SortOrder
    amenityId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrder
    allDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlackoutDateMinOrderByAggregateInput = {
    id?: SortOrder
    amenityId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrder
    allDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BookingCreateNestedManyWithoutResidentInput = {
    create?: XOR<BookingCreateWithoutResidentInput, BookingUncheckedCreateWithoutResidentInput> | BookingCreateWithoutResidentInput[] | BookingUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutResidentInput | BookingCreateOrConnectWithoutResidentInput[]
    createMany?: BookingCreateManyResidentInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<BookingCreateWithoutApprovedByInput, BookingUncheckedCreateWithoutApprovedByInput> | BookingCreateWithoutApprovedByInput[] | BookingUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutApprovedByInput | BookingCreateOrConnectWithoutApprovedByInput[]
    createMany?: BookingCreateManyApprovedByInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutResidentInput = {
    create?: XOR<BookingCreateWithoutResidentInput, BookingUncheckedCreateWithoutResidentInput> | BookingCreateWithoutResidentInput[] | BookingUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutResidentInput | BookingCreateOrConnectWithoutResidentInput[]
    createMany?: BookingCreateManyResidentInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<BookingCreateWithoutApprovedByInput, BookingUncheckedCreateWithoutApprovedByInput> | BookingCreateWithoutApprovedByInput[] | BookingUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutApprovedByInput | BookingCreateOrConnectWithoutApprovedByInput[]
    createMany?: BookingCreateManyApprovedByInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutResidentNestedInput = {
    create?: XOR<BookingCreateWithoutResidentInput, BookingUncheckedCreateWithoutResidentInput> | BookingCreateWithoutResidentInput[] | BookingUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutResidentInput | BookingCreateOrConnectWithoutResidentInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutResidentInput | BookingUpsertWithWhereUniqueWithoutResidentInput[]
    createMany?: BookingCreateManyResidentInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutResidentInput | BookingUpdateWithWhereUniqueWithoutResidentInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutResidentInput | BookingUpdateManyWithWhereWithoutResidentInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<BookingCreateWithoutApprovedByInput, BookingUncheckedCreateWithoutApprovedByInput> | BookingCreateWithoutApprovedByInput[] | BookingUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutApprovedByInput | BookingCreateOrConnectWithoutApprovedByInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutApprovedByInput | BookingUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: BookingCreateManyApprovedByInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutApprovedByInput | BookingUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutApprovedByInput | BookingUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutResidentNestedInput = {
    create?: XOR<BookingCreateWithoutResidentInput, BookingUncheckedCreateWithoutResidentInput> | BookingCreateWithoutResidentInput[] | BookingUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutResidentInput | BookingCreateOrConnectWithoutResidentInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutResidentInput | BookingUpsertWithWhereUniqueWithoutResidentInput[]
    createMany?: BookingCreateManyResidentInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutResidentInput | BookingUpdateWithWhereUniqueWithoutResidentInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutResidentInput | BookingUpdateManyWithWhereWithoutResidentInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<BookingCreateWithoutApprovedByInput, BookingUncheckedCreateWithoutApprovedByInput> | BookingCreateWithoutApprovedByInput[] | BookingUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutApprovedByInput | BookingCreateOrConnectWithoutApprovedByInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutApprovedByInput | BookingUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: BookingCreateManyApprovedByInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutApprovedByInput | BookingUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutApprovedByInput | BookingUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutAmenityInput = {
    create?: XOR<BookingCreateWithoutAmenityInput, BookingUncheckedCreateWithoutAmenityInput> | BookingCreateWithoutAmenityInput[] | BookingUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAmenityInput | BookingCreateOrConnectWithoutAmenityInput[]
    createMany?: BookingCreateManyAmenityInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BlackoutDateCreateNestedManyWithoutAmenityInput = {
    create?: XOR<BlackoutDateCreateWithoutAmenityInput, BlackoutDateUncheckedCreateWithoutAmenityInput> | BlackoutDateCreateWithoutAmenityInput[] | BlackoutDateUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: BlackoutDateCreateOrConnectWithoutAmenityInput | BlackoutDateCreateOrConnectWithoutAmenityInput[]
    createMany?: BlackoutDateCreateManyAmenityInputEnvelope
    connect?: BlackoutDateWhereUniqueInput | BlackoutDateWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutAmenityInput = {
    create?: XOR<BookingCreateWithoutAmenityInput, BookingUncheckedCreateWithoutAmenityInput> | BookingCreateWithoutAmenityInput[] | BookingUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAmenityInput | BookingCreateOrConnectWithoutAmenityInput[]
    createMany?: BookingCreateManyAmenityInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BlackoutDateUncheckedCreateNestedManyWithoutAmenityInput = {
    create?: XOR<BlackoutDateCreateWithoutAmenityInput, BlackoutDateUncheckedCreateWithoutAmenityInput> | BlackoutDateCreateWithoutAmenityInput[] | BlackoutDateUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: BlackoutDateCreateOrConnectWithoutAmenityInput | BlackoutDateCreateOrConnectWithoutAmenityInput[]
    createMany?: BlackoutDateCreateManyAmenityInputEnvelope
    connect?: BlackoutDateWhereUniqueInput | BlackoutDateWhereUniqueInput[]
  }

  export type EnumAmenityTypeFieldUpdateOperationsInput = {
    set?: $Enums.AmenityType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAmenityStatusFieldUpdateOperationsInput = {
    set?: $Enums.AmenityStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingUpdateManyWithoutAmenityNestedInput = {
    create?: XOR<BookingCreateWithoutAmenityInput, BookingUncheckedCreateWithoutAmenityInput> | BookingCreateWithoutAmenityInput[] | BookingUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAmenityInput | BookingCreateOrConnectWithoutAmenityInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutAmenityInput | BookingUpsertWithWhereUniqueWithoutAmenityInput[]
    createMany?: BookingCreateManyAmenityInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutAmenityInput | BookingUpdateWithWhereUniqueWithoutAmenityInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutAmenityInput | BookingUpdateManyWithWhereWithoutAmenityInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BlackoutDateUpdateManyWithoutAmenityNestedInput = {
    create?: XOR<BlackoutDateCreateWithoutAmenityInput, BlackoutDateUncheckedCreateWithoutAmenityInput> | BlackoutDateCreateWithoutAmenityInput[] | BlackoutDateUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: BlackoutDateCreateOrConnectWithoutAmenityInput | BlackoutDateCreateOrConnectWithoutAmenityInput[]
    upsert?: BlackoutDateUpsertWithWhereUniqueWithoutAmenityInput | BlackoutDateUpsertWithWhereUniqueWithoutAmenityInput[]
    createMany?: BlackoutDateCreateManyAmenityInputEnvelope
    set?: BlackoutDateWhereUniqueInput | BlackoutDateWhereUniqueInput[]
    disconnect?: BlackoutDateWhereUniqueInput | BlackoutDateWhereUniqueInput[]
    delete?: BlackoutDateWhereUniqueInput | BlackoutDateWhereUniqueInput[]
    connect?: BlackoutDateWhereUniqueInput | BlackoutDateWhereUniqueInput[]
    update?: BlackoutDateUpdateWithWhereUniqueWithoutAmenityInput | BlackoutDateUpdateWithWhereUniqueWithoutAmenityInput[]
    updateMany?: BlackoutDateUpdateManyWithWhereWithoutAmenityInput | BlackoutDateUpdateManyWithWhereWithoutAmenityInput[]
    deleteMany?: BlackoutDateScalarWhereInput | BlackoutDateScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutAmenityNestedInput = {
    create?: XOR<BookingCreateWithoutAmenityInput, BookingUncheckedCreateWithoutAmenityInput> | BookingCreateWithoutAmenityInput[] | BookingUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAmenityInput | BookingCreateOrConnectWithoutAmenityInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutAmenityInput | BookingUpsertWithWhereUniqueWithoutAmenityInput[]
    createMany?: BookingCreateManyAmenityInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutAmenityInput | BookingUpdateWithWhereUniqueWithoutAmenityInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutAmenityInput | BookingUpdateManyWithWhereWithoutAmenityInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BlackoutDateUncheckedUpdateManyWithoutAmenityNestedInput = {
    create?: XOR<BlackoutDateCreateWithoutAmenityInput, BlackoutDateUncheckedCreateWithoutAmenityInput> | BlackoutDateCreateWithoutAmenityInput[] | BlackoutDateUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: BlackoutDateCreateOrConnectWithoutAmenityInput | BlackoutDateCreateOrConnectWithoutAmenityInput[]
    upsert?: BlackoutDateUpsertWithWhereUniqueWithoutAmenityInput | BlackoutDateUpsertWithWhereUniqueWithoutAmenityInput[]
    createMany?: BlackoutDateCreateManyAmenityInputEnvelope
    set?: BlackoutDateWhereUniqueInput | BlackoutDateWhereUniqueInput[]
    disconnect?: BlackoutDateWhereUniqueInput | BlackoutDateWhereUniqueInput[]
    delete?: BlackoutDateWhereUniqueInput | BlackoutDateWhereUniqueInput[]
    connect?: BlackoutDateWhereUniqueInput | BlackoutDateWhereUniqueInput[]
    update?: BlackoutDateUpdateWithWhereUniqueWithoutAmenityInput | BlackoutDateUpdateWithWhereUniqueWithoutAmenityInput[]
    updateMany?: BlackoutDateUpdateManyWithWhereWithoutAmenityInput | BlackoutDateUpdateManyWithWhereWithoutAmenityInput[]
    deleteMany?: BlackoutDateScalarWhereInput | BlackoutDateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type AmenityCreateNestedOneWithoutBookingsInput = {
    create?: XOR<AmenityCreateWithoutBookingsInput, AmenityUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: AmenityCreateOrConnectWithoutBookingsInput
    connect?: AmenityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovedBookingsInput = {
    create?: XOR<UserCreateWithoutApprovedBookingsInput, UserUncheckedCreateWithoutApprovedBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type AmenityUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<AmenityCreateWithoutBookingsInput, AmenityUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: AmenityCreateOrConnectWithoutBookingsInput
    upsert?: AmenityUpsertWithoutBookingsInput
    connect?: AmenityWhereUniqueInput
    update?: XOR<XOR<AmenityUpdateToOneWithWhereWithoutBookingsInput, AmenityUpdateWithoutBookingsInput>, AmenityUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneWithoutApprovedBookingsNestedInput = {
    create?: XOR<UserCreateWithoutApprovedBookingsInput, UserUncheckedCreateWithoutApprovedBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedBookingsInput
    upsert?: UserUpsertWithoutApprovedBookingsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovedBookingsInput, UserUpdateWithoutApprovedBookingsInput>, UserUncheckedUpdateWithoutApprovedBookingsInput>
  }

  export type AmenityCreateNestedOneWithoutBlackoutDatesInput = {
    create?: XOR<AmenityCreateWithoutBlackoutDatesInput, AmenityUncheckedCreateWithoutBlackoutDatesInput>
    connectOrCreate?: AmenityCreateOrConnectWithoutBlackoutDatesInput
    connect?: AmenityWhereUniqueInput
  }

  export type AmenityUpdateOneRequiredWithoutBlackoutDatesNestedInput = {
    create?: XOR<AmenityCreateWithoutBlackoutDatesInput, AmenityUncheckedCreateWithoutBlackoutDatesInput>
    connectOrCreate?: AmenityCreateOrConnectWithoutBlackoutDatesInput
    upsert?: AmenityUpsertWithoutBlackoutDatesInput
    connect?: AmenityWhereUniqueInput
    update?: XOR<XOR<AmenityUpdateToOneWithWhereWithoutBlackoutDatesInput, AmenityUpdateWithoutBlackoutDatesInput>, AmenityUncheckedUpdateWithoutBlackoutDatesInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAmenityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AmenityType | EnumAmenityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AmenityType[] | ListEnumAmenityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AmenityType[] | ListEnumAmenityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAmenityTypeFilter<$PrismaModel> | $Enums.AmenityType
  }

  export type NestedEnumAmenityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AmenityStatus | EnumAmenityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AmenityStatus[] | ListEnumAmenityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AmenityStatus[] | ListEnumAmenityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAmenityStatusFilter<$PrismaModel> | $Enums.AmenityStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAmenityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AmenityType | EnumAmenityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AmenityType[] | ListEnumAmenityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AmenityType[] | ListEnumAmenityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAmenityTypeWithAggregatesFilter<$PrismaModel> | $Enums.AmenityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAmenityTypeFilter<$PrismaModel>
    _max?: NestedEnumAmenityTypeFilter<$PrismaModel>
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

  export type NestedEnumAmenityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AmenityStatus | EnumAmenityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AmenityStatus[] | ListEnumAmenityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AmenityStatus[] | ListEnumAmenityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAmenityStatusWithAggregatesFilter<$PrismaModel> | $Enums.AmenityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAmenityStatusFilter<$PrismaModel>
    _max?: NestedEnumAmenityStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BookingCreateWithoutResidentInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    guestCount?: number | null
    status?: $Enums.BookingStatus
    notes?: string | null
    eventTitle?: string | null
    eventDetails?: string | null
    approvedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    amenity: AmenityCreateNestedOneWithoutBookingsInput
    approvedBy?: UserCreateNestedOneWithoutApprovedBookingsInput
  }

  export type BookingUncheckedCreateWithoutResidentInput = {
    id?: string
    amenityId: string
    approvedById?: string | null
    startAt: Date | string
    endAt: Date | string
    guestCount?: number | null
    status?: $Enums.BookingStatus
    notes?: string | null
    eventTitle?: string | null
    eventDetails?: string | null
    approvedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutResidentInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutResidentInput, BookingUncheckedCreateWithoutResidentInput>
  }

  export type BookingCreateManyResidentInputEnvelope = {
    data: BookingCreateManyResidentInput | BookingCreateManyResidentInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutApprovedByInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    guestCount?: number | null
    status?: $Enums.BookingStatus
    notes?: string | null
    eventTitle?: string | null
    eventDetails?: string | null
    approvedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resident: UserCreateNestedOneWithoutBookingsInput
    amenity: AmenityCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutApprovedByInput = {
    id?: string
    residentId: string
    amenityId: string
    startAt: Date | string
    endAt: Date | string
    guestCount?: number | null
    status?: $Enums.BookingStatus
    notes?: string | null
    eventTitle?: string | null
    eventDetails?: string | null
    approvedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutApprovedByInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutApprovedByInput, BookingUncheckedCreateWithoutApprovedByInput>
  }

  export type BookingCreateManyApprovedByInputEnvelope = {
    data: BookingCreateManyApprovedByInput | BookingCreateManyApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutActorInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogCreateManyActorInputEnvelope = {
    data: AuditLogCreateManyActorInput | AuditLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutResidentInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutResidentInput, BookingUncheckedUpdateWithoutResidentInput>
    create: XOR<BookingCreateWithoutResidentInput, BookingUncheckedCreateWithoutResidentInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutResidentInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutResidentInput, BookingUncheckedUpdateWithoutResidentInput>
  }

  export type BookingUpdateManyWithWhereWithoutResidentInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutResidentInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    residentId?: StringFilter<"Booking"> | string
    amenityId?: StringFilter<"Booking"> | string
    approvedById?: StringNullableFilter<"Booking"> | string | null
    startAt?: DateTimeFilter<"Booking"> | Date | string
    endAt?: DateTimeFilter<"Booking"> | Date | string
    guestCount?: IntNullableFilter<"Booking"> | number | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"Booking"> | string | null
    eventTitle?: StringNullableFilter<"Booking"> | string | null
    eventDetails?: StringNullableFilter<"Booking"> | string | null
    approvedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutApprovedByInput, BookingUncheckedUpdateWithoutApprovedByInput>
    create: XOR<BookingCreateWithoutApprovedByInput, BookingUncheckedCreateWithoutApprovedByInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutApprovedByInput, BookingUncheckedUpdateWithoutApprovedByInput>
  }

  export type BookingUpdateManyWithWhereWithoutApprovedByInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutApprovedByInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorUserId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type BookingCreateWithoutAmenityInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    guestCount?: number | null
    status?: $Enums.BookingStatus
    notes?: string | null
    eventTitle?: string | null
    eventDetails?: string | null
    approvedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resident: UserCreateNestedOneWithoutBookingsInput
    approvedBy?: UserCreateNestedOneWithoutApprovedBookingsInput
  }

  export type BookingUncheckedCreateWithoutAmenityInput = {
    id?: string
    residentId: string
    approvedById?: string | null
    startAt: Date | string
    endAt: Date | string
    guestCount?: number | null
    status?: $Enums.BookingStatus
    notes?: string | null
    eventTitle?: string | null
    eventDetails?: string | null
    approvedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutAmenityInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutAmenityInput, BookingUncheckedCreateWithoutAmenityInput>
  }

  export type BookingCreateManyAmenityInputEnvelope = {
    data: BookingCreateManyAmenityInput | BookingCreateManyAmenityInput[]
    skipDuplicates?: boolean
  }

  export type BlackoutDateCreateWithoutAmenityInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    allDay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlackoutDateUncheckedCreateWithoutAmenityInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    allDay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlackoutDateCreateOrConnectWithoutAmenityInput = {
    where: BlackoutDateWhereUniqueInput
    create: XOR<BlackoutDateCreateWithoutAmenityInput, BlackoutDateUncheckedCreateWithoutAmenityInput>
  }

  export type BlackoutDateCreateManyAmenityInputEnvelope = {
    data: BlackoutDateCreateManyAmenityInput | BlackoutDateCreateManyAmenityInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutAmenityInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutAmenityInput, BookingUncheckedUpdateWithoutAmenityInput>
    create: XOR<BookingCreateWithoutAmenityInput, BookingUncheckedCreateWithoutAmenityInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutAmenityInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutAmenityInput, BookingUncheckedUpdateWithoutAmenityInput>
  }

  export type BookingUpdateManyWithWhereWithoutAmenityInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutAmenityInput>
  }

  export type BlackoutDateUpsertWithWhereUniqueWithoutAmenityInput = {
    where: BlackoutDateWhereUniqueInput
    update: XOR<BlackoutDateUpdateWithoutAmenityInput, BlackoutDateUncheckedUpdateWithoutAmenityInput>
    create: XOR<BlackoutDateCreateWithoutAmenityInput, BlackoutDateUncheckedCreateWithoutAmenityInput>
  }

  export type BlackoutDateUpdateWithWhereUniqueWithoutAmenityInput = {
    where: BlackoutDateWhereUniqueInput
    data: XOR<BlackoutDateUpdateWithoutAmenityInput, BlackoutDateUncheckedUpdateWithoutAmenityInput>
  }

  export type BlackoutDateUpdateManyWithWhereWithoutAmenityInput = {
    where: BlackoutDateScalarWhereInput
    data: XOR<BlackoutDateUpdateManyMutationInput, BlackoutDateUncheckedUpdateManyWithoutAmenityInput>
  }

  export type BlackoutDateScalarWhereInput = {
    AND?: BlackoutDateScalarWhereInput | BlackoutDateScalarWhereInput[]
    OR?: BlackoutDateScalarWhereInput[]
    NOT?: BlackoutDateScalarWhereInput | BlackoutDateScalarWhereInput[]
    id?: StringFilter<"BlackoutDate"> | string
    amenityId?: StringFilter<"BlackoutDate"> | string
    startAt?: DateTimeFilter<"BlackoutDate"> | Date | string
    endAt?: DateTimeFilter<"BlackoutDate"> | Date | string
    reason?: StringFilter<"BlackoutDate"> | string
    allDay?: BoolFilter<"BlackoutDate"> | boolean
    createdAt?: DateTimeFilter<"BlackoutDate"> | Date | string
    updatedAt?: DateTimeFilter<"BlackoutDate"> | Date | string
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    email: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedBookings?: BookingCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedBookings?: BookingUncheckedCreateNestedManyWithoutApprovedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type AmenityCreateWithoutBookingsInput = {
    id?: string
    name: string
    slug: string
    type?: $Enums.AmenityType
    description: string
    imageUrl?: string | null
    location: string
    capacity: number
    slotDurationMinutes: number
    openTime: string
    closeTime: string
    rules?: string | null
    status?: $Enums.AmenityStatus
    requiresApproval?: boolean
    maxAdvanceDays?: number | null
    maxBookingDurationMinutes?: number | null
    cancellationCutoffHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blackoutDates?: BlackoutDateCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    slug: string
    type?: $Enums.AmenityType
    description: string
    imageUrl?: string | null
    location: string
    capacity: number
    slotDurationMinutes: number
    openTime: string
    closeTime: string
    rules?: string | null
    status?: $Enums.AmenityStatus
    requiresApproval?: boolean
    maxAdvanceDays?: number | null
    maxBookingDurationMinutes?: number | null
    cancellationCutoffHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blackoutDates?: BlackoutDateUncheckedCreateNestedManyWithoutAmenityInput
  }

  export type AmenityCreateOrConnectWithoutBookingsInput = {
    where: AmenityWhereUniqueInput
    create: XOR<AmenityCreateWithoutBookingsInput, AmenityUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutApprovedBookingsInput = {
    id?: string
    email: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutResidentInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutApprovedBookingsInput = {
    id?: string
    email: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutResidentInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutApprovedBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedBookingsInput, UserUncheckedCreateWithoutApprovedBookingsInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedBookings?: BookingUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedBookings?: BookingUncheckedUpdateManyWithoutApprovedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type AmenityUpsertWithoutBookingsInput = {
    update: XOR<AmenityUpdateWithoutBookingsInput, AmenityUncheckedUpdateWithoutBookingsInput>
    create: XOR<AmenityCreateWithoutBookingsInput, AmenityUncheckedCreateWithoutBookingsInput>
    where?: AmenityWhereInput
  }

  export type AmenityUpdateToOneWithWhereWithoutBookingsInput = {
    where?: AmenityWhereInput
    data: XOR<AmenityUpdateWithoutBookingsInput, AmenityUncheckedUpdateWithoutBookingsInput>
  }

  export type AmenityUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAmenityTypeFieldUpdateOperationsInput | $Enums.AmenityType
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAmenityStatusFieldUpdateOperationsInput | $Enums.AmenityStatus
    requiresApproval?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceDays?: NullableIntFieldUpdateOperationsInput | number | null
    maxBookingDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cancellationCutoffHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blackoutDates?: BlackoutDateUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAmenityTypeFieldUpdateOperationsInput | $Enums.AmenityType
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAmenityStatusFieldUpdateOperationsInput | $Enums.AmenityStatus
    requiresApproval?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceDays?: NullableIntFieldUpdateOperationsInput | number | null
    maxBookingDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cancellationCutoffHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blackoutDates?: BlackoutDateUncheckedUpdateManyWithoutAmenityNestedInput
  }

  export type UserUpsertWithoutApprovedBookingsInput = {
    update: XOR<UserUpdateWithoutApprovedBookingsInput, UserUncheckedUpdateWithoutApprovedBookingsInput>
    create: XOR<UserCreateWithoutApprovedBookingsInput, UserUncheckedCreateWithoutApprovedBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovedBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovedBookingsInput, UserUncheckedUpdateWithoutApprovedBookingsInput>
  }

  export type UserUpdateWithoutApprovedBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutResidentNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutResidentNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type AmenityCreateWithoutBlackoutDatesInput = {
    id?: string
    name: string
    slug: string
    type?: $Enums.AmenityType
    description: string
    imageUrl?: string | null
    location: string
    capacity: number
    slotDurationMinutes: number
    openTime: string
    closeTime: string
    rules?: string | null
    status?: $Enums.AmenityStatus
    requiresApproval?: boolean
    maxAdvanceDays?: number | null
    maxBookingDurationMinutes?: number | null
    cancellationCutoffHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUncheckedCreateWithoutBlackoutDatesInput = {
    id?: string
    name: string
    slug: string
    type?: $Enums.AmenityType
    description: string
    imageUrl?: string | null
    location: string
    capacity: number
    slotDurationMinutes: number
    openTime: string
    closeTime: string
    rules?: string | null
    status?: $Enums.AmenityStatus
    requiresApproval?: boolean
    maxAdvanceDays?: number | null
    maxBookingDurationMinutes?: number | null
    cancellationCutoffHours?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutAmenityInput
  }

  export type AmenityCreateOrConnectWithoutBlackoutDatesInput = {
    where: AmenityWhereUniqueInput
    create: XOR<AmenityCreateWithoutBlackoutDatesInput, AmenityUncheckedCreateWithoutBlackoutDatesInput>
  }

  export type AmenityUpsertWithoutBlackoutDatesInput = {
    update: XOR<AmenityUpdateWithoutBlackoutDatesInput, AmenityUncheckedUpdateWithoutBlackoutDatesInput>
    create: XOR<AmenityCreateWithoutBlackoutDatesInput, AmenityUncheckedCreateWithoutBlackoutDatesInput>
    where?: AmenityWhereInput
  }

  export type AmenityUpdateToOneWithWhereWithoutBlackoutDatesInput = {
    where?: AmenityWhereInput
    data: XOR<AmenityUpdateWithoutBlackoutDatesInput, AmenityUncheckedUpdateWithoutBlackoutDatesInput>
  }

  export type AmenityUpdateWithoutBlackoutDatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAmenityTypeFieldUpdateOperationsInput | $Enums.AmenityType
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAmenityStatusFieldUpdateOperationsInput | $Enums.AmenityStatus
    requiresApproval?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceDays?: NullableIntFieldUpdateOperationsInput | number | null
    maxBookingDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cancellationCutoffHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityUncheckedUpdateWithoutBlackoutDatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    type?: EnumAmenityTypeFieldUpdateOperationsInput | $Enums.AmenityType
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAmenityStatusFieldUpdateOperationsInput | $Enums.AmenityStatus
    requiresApproval?: BoolFieldUpdateOperationsInput | boolean
    maxAdvanceDays?: NullableIntFieldUpdateOperationsInput | number | null
    maxBookingDurationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    cancellationCutoffHours?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutAmenityNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutResidentInput
    approvedBookings?: BookingCreateNestedManyWithoutApprovedByInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutResidentInput
    approvedBookings?: BookingUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutResidentNestedInput
    approvedBookings?: BookingUpdateManyWithoutApprovedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutResidentNestedInput
    approvedBookings?: BookingUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type BookingCreateManyResidentInput = {
    id?: string
    amenityId: string
    approvedById?: string | null
    startAt: Date | string
    endAt: Date | string
    guestCount?: number | null
    status?: $Enums.BookingStatus
    notes?: string | null
    eventTitle?: string | null
    eventDetails?: string | null
    approvedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyApprovedByInput = {
    id?: string
    residentId: string
    amenityId: string
    startAt: Date | string
    endAt: Date | string
    guestCount?: number | null
    status?: $Enums.BookingStatus
    notes?: string | null
    eventTitle?: string | null
    eventDetails?: string | null
    approvedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyActorInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutResidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventTitle?: NullableStringFieldUpdateOperationsInput | string | null
    eventDetails?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amenity?: AmenityUpdateOneRequiredWithoutBookingsNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutResidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amenityId?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventTitle?: NullableStringFieldUpdateOperationsInput | string | null
    eventDetails?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutResidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amenityId?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventTitle?: NullableStringFieldUpdateOperationsInput | string | null
    eventDetails?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventTitle?: NullableStringFieldUpdateOperationsInput | string | null
    eventDetails?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: UserUpdateOneRequiredWithoutBookingsNestedInput
    amenity?: AmenityUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    residentId?: StringFieldUpdateOperationsInput | string
    amenityId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventTitle?: NullableStringFieldUpdateOperationsInput | string | null
    eventDetails?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    residentId?: StringFieldUpdateOperationsInput | string
    amenityId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventTitle?: NullableStringFieldUpdateOperationsInput | string | null
    eventDetails?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyAmenityInput = {
    id?: string
    residentId: string
    approvedById?: string | null
    startAt: Date | string
    endAt: Date | string
    guestCount?: number | null
    status?: $Enums.BookingStatus
    notes?: string | null
    eventTitle?: string | null
    eventDetails?: string | null
    approvedAt?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlackoutDateCreateManyAmenityInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    reason: string
    allDay?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutAmenityInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventTitle?: NullableStringFieldUpdateOperationsInput | string | null
    eventDetails?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: UserUpdateOneRequiredWithoutBookingsNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutAmenityInput = {
    id?: StringFieldUpdateOperationsInput | string
    residentId?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventTitle?: NullableStringFieldUpdateOperationsInput | string | null
    eventDetails?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutAmenityInput = {
    id?: StringFieldUpdateOperationsInput | string
    residentId?: StringFieldUpdateOperationsInput | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestCount?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    eventTitle?: NullableStringFieldUpdateOperationsInput | string | null
    eventDetails?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackoutDateUpdateWithoutAmenityInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackoutDateUncheckedUpdateWithoutAmenityInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlackoutDateUncheckedUpdateManyWithoutAmenityInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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