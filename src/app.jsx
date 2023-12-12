import { useEffect, useState } from 'preact/hooks'
import output from './styles/app.css?inline'
import lightTheme from './styles/lightTheme.css?inline'
import darkTheme from './styles/darkTheme.css?inline'
import Tab from './components/tab'
import Item from './components/item'

export function App({ globalsvcpage, reqapidomain, dark }) {
  const [shopData, setShopData] = useState(null)
  const [page, setPage] = useState(1)
  const itemLength = 9
  const pageLength = shopData ? shopData.length / itemLength : 1
  const reqDomain = reqapidomain === undefined ? 'https://shop.nate.com' : reqapidomain

  const fetchData = async () => {
    const res = await fetch(`${reqDomain}/shopbox/js/data_shopbox_mobile.json`)
    const json = await res.json()
    setShopData(json)
  }

  const movePage = (page) => {
    if (page === 0) {
      setPage(pageLength)
    } else if (page > pageLength) {
      setPage(1)
    } else {
      setPage(page)
    }
  }

  useEffect(() => {
    if (!globalsvcpage) {
      console.error('[shopBox] globalsvcpage 값을 넣어주세요.\nex) <shop-box globalSvcPage="news"></shop-box>')
    }

    fetchData()
  }, [])
  console.log(dark !== 'false')
  if (!shopData || shopData.length === 0) return null
  return (
    <>
      <style>
        {lightTheme}
        {dark !== 'false' && darkTheme}
        {output}
      </style>
      <div class="app">
        <Tab data={shopData} itemLength={itemLength} page={page} setPage={setPage} />
        <div class="tab_list">
          <div class="section">
            {shopData.slice((page - 1) * itemLength, page * itemLength).map((v, i) => (
              <Item data={v} index={i} globalsvcpage={globalsvcpage} />
            ))}
          </div>
        </div>
        <div class="pages">
          <button type="button" class="btn prev" onClick={() => movePage(page - 1)}>
            <em>이전</em>
          </button>
          <span class="page">
            <b>{page}</b> / {pageLength}
          </span>
          <button type="button" class="btn next" onClick={() => movePage(page + 1)}>
            <em>다음</em>
          </button>
        </div>
      </div>
    </>
  )
}
