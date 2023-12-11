const Tab = ({ data, itemLength, page, setPage }) => {
  const setTab = () => {
    const tabName = {}
    data.forEach(function (v, i) {
      tabName[v.mallname] = { clicklink: v.clicklink, page: (i + 1) / itemLength }
    })
    const tabNameArr = Object.keys(tabName).map((key, i) => {
      return {
        name: key,
        clicklink: key === '쇼핑 트렌드' ? 'https://m.shopping.nate.com' : tabName[key].clicklink,
        page: i === 0 ? 1 : tabName[key].page,
      }
    })
    return tabNameArr
  }

  const activeTab = (name) => {
    return name === data[(page - 1) * itemLength].mallname
  }

  const onClickTab = (value) => {
    if (activeTab(value.name)) {
      window.open(value.clicklink)
    } else {
      setPage(value.page)
    }
  }

  const tab = setTab()

  return (
    <div class="tab">
      {tab.map((v) => (
        <button type="button" class={activeTab(v.name) ? 'active' : ''} onClick={() => onClickTab(v)}>
          {v.name}
        </button>
      ))}
    </div>
  )
}

export default Tab
