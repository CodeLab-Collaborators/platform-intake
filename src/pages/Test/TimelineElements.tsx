import React from 'react'
import moment from 'moment'
import "./style.css"

const data = [
    {
        text: 'You are given just 4mins to Answer all 10 questions!',
        date: moment(Date.now()).format('LLLL'),
        category: {
            tag: 'Very Important',
            color: '#521379'
        },
        link: {
            url:
                'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
            text: 'Read more'
        }
    },
    {
        text: 'Click Submit after you are done.',
        date: moment(Date.now()).format('LLLL'),
        category: {
            tag: 'Very Important',
            color: '#521379'
        },
        link: {
            url:
                'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
            text: 'Read more'
        }
    },
    {
        text: 'Make sure you Submit before the time Elapsed.',
        date: moment(Date.now()).format('LLLL'),
        category: {
            tag: 'Very Important',
            color: '#521379'
        },
        link: {
            url:
                'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
            text: 'Read more'
        }
    },

]


const TimelineItem = () => (
    <div>
        {data.map((el: any, i: number) => (
            <div className="timeline-item">
                <div className="timeline-item-content">
                    <span className="tag" style={{ background: el.category.color }}>
                        {el.category.tag}
                    </span>
                    <time>{el.date}</time>
                    <br />
                    <p style={{ lineHeight: "1.2" }} >{el.text}</p>
                    {/* {el.link && (
                        <a
                            href={el.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {el.link.text}
                        </a>
                    )} */}
                    <span className="circle" >{i + 1}</span>
                </div>
            </div>
        ))}
    </div>
);

const TimelineElements = () => {
    return (
        <div>
            <TimelineItem />
        </div>
    )
}

export default TimelineElements