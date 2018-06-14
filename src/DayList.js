import PropTypes from 'prop-types'
import React from 'react'

import dates from './utils/dates'
import { navigate } from './utils/constants'
import localizer from './localizer'
import { inRange, sortEvents } from './utils/eventLevels'

class DayList extends React.Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    events: PropTypes.array.isRequired,
    components: PropTypes.object.isRequired,
  }

  render() {
    let { date, events, components } = this.props
    let range = DayList.range(date)
    let EventComponents = []
    let start = range[0],
      end = range[range.length - 1]

    let CustomEventComponent = components.event
    events.sort((a, b) => sortEvents(a, b, this.props))
    events.forEach(event => {
      if (inRange(event, start, end, this.props)) {
        EventComponents.push(
          CustomEventComponent ? (
            <CustomEventComponent key={event.id} event={event} />
          ) : (
            <div key={event.id}>{'USE CUSTOM COMPONENT FOR YOUR EVENTS'}</div>
          )
        )
      }
    })

    return <div className="rbc-day-list-view">{EventComponents}</div>
  }
}

DayList.range = date => {
  return [dates.startOf(date, 'day')]
}

DayList.navigate = (date, action) => {
  switch (action) {
    case navigate.PREVIOUS:
      return dates.add(date, -1, 'day')

    case navigate.NEXT:
      return dates.add(date, 1, 'day')

    default:
      return date
  }
}

DayList.title = (date, { formats, culture }) =>
  localizer.format(date, formats.dayHeaderFormat, culture)

export default DayList
