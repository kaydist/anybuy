import React from 'react'
import Image from 'next/image'
import ReactStars from 'react-rating-stars-component';


function ReviewCard({review, star}) {
    return (
        <div className="card w-full p-8">
            <div className="flex flex-row gap-8">
                <div className="w-16 h-16 rounded-full relative">
                    <Image src={review.userImage} alt="" layout="fill" />
                </div>
                <div>
                    <p className="font-extrabold text-lg">{review.userName}</p>
                    <div className="flex items-center">
                        <ReactStars 
                        count= {5}
                        value={Number(review.rating)}
                        char= {star}
                        isHalf= {false}
                        edit={false}
                        activeColor= '#FF9315'
                        /> 
                        <p className="ml-3">{review.rating}/5 rating</p>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <p>
                {review.detail} 
                </p>
            </div>
        </div>
    )
}

export default ReviewCard
