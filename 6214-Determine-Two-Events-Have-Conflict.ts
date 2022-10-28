/**
 * @desc 6214. Determine if Two Events Have Conflict
 * @param event1
 * @param event2
 */
function haveConflict(event1: string[], event2: string[]): boolean {
  const stime1 = event1[0].split(':')
  const shh1 = Number(stime1[0])
  const smm1 = Number(stime1[1])
  console.log(stime1, shh1, smm1)
  const smin1 = shh1 * 60 + smm1

  const etime1 = event1[1].split(':')
  const ehh1 = Number(etime1[0])
  const emm1 = Number(etime1[1])
  const emin1 = ehh1 * 60 + emm1

  const stime2 = event2[0].split(':')
  const shh2 = Number(stime2[0])
  const smm2 = Number(stime2[1])
  const smin2 = shh2 * 60 + smm2

  const etime2 = event2[1].split(':')
  const ehh2 = Number(etime2[0])
  const emm2 = Number(etime2[1])
  const emin2 = ehh2 * 60 + emm2

  console.log(smin1, emin1, smin2, emin2)
  return (
    (smin2 >= smin1 && smin2 <= emin1) ||
    (emin2 >= smin1 && emin2 <= emin1) ||
    (smin1 >= smin2 && smin1 <= emin2) ||
    (emin1 >= smin2 && emin1 <= emin2)
  )
}
console.log(haveConflict(['10:00', '11:00'], ['14:00', '15:00']))
