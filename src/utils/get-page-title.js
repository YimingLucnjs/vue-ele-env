import defaultSettings from '@/settings'

const title = defaultSettings.title || '餐饮油烟监测管理系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
