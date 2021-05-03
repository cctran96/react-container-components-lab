import React from 'react'

const MovieReview = props => {
    const list = props.reviews.map((review, i)=> {
        return (
            <li key={i} className='review'>
                <h3>{review.display_title}</h3>
                <p>{review.summary_short}</p>
            </li>
        )
    })
    return (
        <ul className='review-list'>
            {list}
        </ul>
    )
}

export default MovieReview