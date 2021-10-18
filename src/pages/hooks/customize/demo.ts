import { useEffect, useState, useCallback } from 'react'

/**
 * @description 修改页面标题
 * */
export const useDocumentTitle = (context: string) => {
  const [title, setTitle] = useState(context)

  useEffect(() => {
    document.title = title
    return () => {
      document.title = 'levis'
    }
  }, [title])

  const setTitles = useCallback((newTitle: string) => {
    setTitle(newTitle)
  }, [])

  return [setTitles]
}

export const useNums = (count: number) => {
  const [num, setNum] = useState(count)

  const setNumMethods = useCallback((newNum: number) => {
    setTimeout(() => {
      setNum(newNum)
    }, 1000)
  }, [])

  return { num, setNumMethods }
}

/**
 * @description 自定义hook
 * 返回变量级控制变量的相关方法， 不要在其他hooks直接使用当前hooks，不然会报错
 * */
