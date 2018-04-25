import { views } from './utils/constants'
import Month from './Month'
import Day from './Day'
import DayList from './DayList'
import Week from './Week'
import WorkWeek from './WorkWeek'
import Agenda from './Agenda'

const VIEWS = {
  [views.MONTH]: Month,
  [views.WEEK]: Week,
  [views.WORK_WEEK]: WorkWeek,
  [views.DAY]: Day,
  [views.DAY_LIST]: DayList,
  [views.AGENDA]: Agenda,
}

export default VIEWS
