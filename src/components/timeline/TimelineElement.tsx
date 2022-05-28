import { VerticalTimelineElement }  from 'react-vertical-timeline-component';


const Icon = (prop : {logo: any}) => {
    return (
        <div className='flex justify-center'>
            <img
                id="company-logo"
                src={prop.logo}
                alt="logo"
            />
        </div>
    )
    
}

const TimelineElement = (prop : {description: any}) => {

    let date: string = `${prop.description.startDate} - ${prop.description.endDate}`;
    let bgColor: string = prop.description.color;

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: bgColor, color: '#fff' }}
            contentArrowStyle={{ borderRight: `7px solid  ${bgColor}` }}
            date={date}
            iconStyle={{ background: 'white', color: '#fff', border: `none`}}
            icon={<Icon logo={prop.description.logo}/>}
        >
            <h3 className="vertical-timeline-element-title text-xl font-bold">{prop.description.company}</h3>
            <h4 className="vertical-timeline-element-subtitle font-bold font-italic">{prop.description.position}</h4>
            <div className='text-sm pt-2'>{prop.description.description}</div>
            <ul className="list-disc">
            {prop.description.bulletPoints.map((el:String) => {
                return (
                    <li className='ml-6 text-sm'>{el}</li>
                )
            })}
            </ul>
        </VerticalTimelineElement>
    )
}




export default TimelineElement;