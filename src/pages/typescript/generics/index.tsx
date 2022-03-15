import React from 'react'

const Generics = () => <div> 泛型 - 见tsx示例</div>

export default Generics

export type GetPromiseTYpe<T> = T extends Promise<infer R> ? R : never

export type ReplaceStr<
  Str extends string,
  Target extends string,
  To extends string,
> = Str extends `${infer Prefix}${Target}${infer Rest}` ? ReplaceStr<`${Prefix}${To}${Rest}`, Target, To> : Str

export type StartWith<T extends string, Str extends string> = T extends `${Str}${string}` ? true : false

export type UnShift<T extends unknown[], Othert> = [Othert, ...T]

// 合并数组
export type Zip<T extends unknown[], U extends unknown[]> = T extends [infer First, ...infer Last]
  ? U extends [infer L_First, ...infer L_Last]
    ? [[First, L_First], ...Zip<Last, L_Last>]
    : []
  : []

// 首字母大写
export type TransformCapitalizeStr<T extends string> = T extends `${infer R}${infer Rest}`
  ? `${Uppercase<R>}${Rest}`
  : T

// 驼峰转换
export type CamelCase<T extends string> = T extends `${infer First}_${infer Right}${infer Last}`
  ? CamelCase<`${First}${Uppercase<Right>}${Last}`>
  : T

// 删除指定字符串
export type DropStr<Str extends string, SubStr extends string> = Str extends `${infer R}${SubStr}${infer Last}`
  ? DropStr<`${R}${Last}`, subStr>
  : Str

// 函数增加形参
export const fn = (a: number, b: number) => a + b
export type AppendArgument<T extends (...args: unknown[]) => unknown, NewArg> = T extends (...args: infer R) => infer U
  ? (...args: [...R, NewArg]) => U
  : never

// 转换对象的KEY
export type UppperCaseObj<T extends object> = {
  [Key in keyof T as Uppercase<Key & string>]: T[Key]
}

// 联合类型直接取值
export type LeviRecord<Key extends any, T> = {
  [p in Key]: T
}

// 只读 在前面加readonly
export type LeviReadOnly<T extends object> = {
  readonly [Key in keyof T]: T[Key]
}

// 选填 在前面加 ?
export type LeviPartial<T extends object> = {
  [Key in keyof T]?: T[Key]
}

// 必填，在？在前面加 -
export type LeviRequired<T extends object> = {
  [Key in keyof T]-?: T[Key]
}

// 去掉readonly 在前面加 -
export type LeviRemoveOnly<T extends object> = {
  -readonly [Key in keyof T]: T[Key]
}

// 过滤不相关value值
export type FilterValueByType<T extends object, Filter extends unknown> = {
  [Key in keyof T as T[Key] extends Filter ? Key : never]: T[Key]
}

// 获取Promise嵌套的值
export type GetNestedPromseType<T> = T extends Promise<infer R> ? GetNestedPromseType<R> : T

const fna = Promise.resolve(Promise.resolve(Promise.resolve(1)))
export type Levi = GetNestedPromseType<typeof fna>
