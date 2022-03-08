import Image from 'next/image'

export const Star=()=>{
    return(
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="#C4C4C4">
            <path d="M4.95275 1.59459C5.2521 0.673281 6.55551 0.673281 6.85487 1.59459L7.35734 3.14105C7.49121 3.55307 7.87517 3.83203 8.3084 3.83203H9.93444C10.9032 3.83203 11.3059 5.07165 10.5222 5.64105L9.20673 6.59681C8.85624 6.85146 8.70958 7.30282 8.84346 7.71485L9.34593 9.2613C9.64528 10.1826 8.5908 10.9487 7.80709 10.3793L6.49159 9.42357C6.14111 9.16893 5.66651 9.16893 5.31602 9.42357L4.00053 10.3793C3.21681 10.9487 2.16233 10.1826 2.46169 9.2613L2.96416 7.71485C3.09804 7.30282 2.95138 6.85146 2.60089 6.59681L1.2854 5.64105C0.501681 5.07165 0.904457 3.83203 1.87318 3.83203H3.49922C3.93245 3.83203 4.3164 3.55307 4.45028 3.14105L4.95275 1.59459Z"/>
            </g>
        </svg>
    )
}

function ReviewCard({review}) {
    return (
        <div className="card w-full p-8">
            <div className="flex flex-row gap-8">
                <div className="w-16 h-16 rounded-full relative">
                    <Image src={review.userImage} alt="" layout="fill" />
                </div>
                <div>
                    <p className="font-extrabold text-lg">{review.userName}</p>
                    <div className="flex items-center">
                        <span><Star /></span>
                        <span><Star /></span>
                        <span><Star /></span>
                        <span><Star /></span>
                        <span><Star /></span>
                        <span><Star /></span>

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
