import React from 'react'
import PropTypes from 'prop-types'
import BigCalendar from 'react-big-calendar'
import events from '../events'

Event.propTypes = {
  event: PropTypes.array.isRequired,
}

function Event({ event }) {
  return (
    <span>
      <strong>{`${event.start.getHours()}:${event.start.getMinutes()}`}</strong>
      {event.title && ' - ' + event.title}
    </span>
  )
}

EventDay.propTypes = {
  event: PropTypes.array.isRequired,
}

function EventDay({ event }) {
  return (
    <span>
      <em style={{ color: 'magenta' }}>{event.title}</em>
      <p>
        <strong
        >{`${event.start.getHours()}:${event.start.getMinutes()}`}</strong>
      </p>
    </span>
  )
}

let Basic = () => (
  <BigCalendar
    views={['month', 'day_list']}
    drilldownView="day"
    startAccessor="start"
    endAccessor="end"
    popup={true}
    defaultDate={new Date()}
    events={events}
    components={{
      event: Event,
      day_list: {
        event: EventDay,
      },
    }}
  />
)

export default Basic
