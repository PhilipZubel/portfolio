import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import barclays from './../../assets/timeline/barclays.png';


const TimelineElement = (prop : {description: any}) => {

    let date: string = `${prop.description.startDate} - ${prop.description.endDate}`;
    let bgColor: string = prop.description.color;

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: bgColor, color: '#fff' }}
            contentArrowStyle={{ borderRight: `7px solid  ${bgColor}` }}
            date={date}
            iconStyle={{ background: 'white', color: '#fff' }}
            // icon={barclays}
        >
            <h3 className="vertical-timeline-element-title text-xl font-bold">{prop.description.company}</h3>
            <h4 className="vertical-timeline-element-subtitle font-bold font-italic">{prop.description.position}</h4>
            <p>
            {prop.description.description}
            </p>
        </VerticalTimelineElement>
    )
}

export default TimelineElement;