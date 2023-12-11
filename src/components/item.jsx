const item = ({ data, index, globalsvcpage }) => {
  const ndrClickSbox = () => {
    if (!globalsvcpage) return

    const pndrpageid = 'mwsb01'
    const svcpage = globalsvcpage
    const id = `${svcpage}0${index + 1}`

    // 난수삽입 - caching방지
    const tRandom = new Date().getTime()

    const i = new Image()
    i.src = `https://statclick.nate.com/stat/statclick.tiff?cp_url=[click_ndr.nate.com/??ndrpageid=${pndrpageid}&ndrregionid=${id}&rgnparam1=&rgnparam2=&t=${tRandom}]`
  }

  return (
    <div class="item">
      <a href={data.clicklink} target="_blank" onClick={ndrClickSbox}>
        <div class="thumb">
          <img src={data.img} alt="" width="224" height="272" />
        </div>
        <div class="txt" dangerouslySetInnerHTML={{ __html: data.text1 }} />
      </a>
    </div>
  )
}

export default item
