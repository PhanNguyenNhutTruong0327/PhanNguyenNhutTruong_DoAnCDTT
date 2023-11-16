import { useEffect, useState } from "react";
import ratingservices from "../../services/RatingServices";

function Star_rating(product_id,user_id) {
    const [selectedRating, setSelectedRating] = useState(0);
    const [comment,setComment] = useState('');
    const [starCount,setCountStart] = useState(0);
    useEffect(()=>{
        fetchStarCount();
    },[]);

    const handleRatingChange = (rating) =>{
        setSelectedRating(rating);
    }
    const handleCommentChange = (e) =>{
        setComment(e.target.value);
    }
    const handleSubmitRating = () => {
        if(start === 0){
            alert('Vui lòng đánh giá số sao !');
            return;
        }
    }
    const ratingData = {
        product_id:product_id,
        user_id:user_id,
        number_rating:number_rating,
        comment:comment
    };

    

    return ( 
        <h1></h1>
     );
}

export default Star_rating;