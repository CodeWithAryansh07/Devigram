import PropTypes from 'prop-types';

const TestimonialCard = ({ name, testimonial }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-end text-center">
            <div className="w-full mt-20 h-full bg-[#F6F8ED] rounded-3xl relative flex flex-col items-center justify-start px-5 font-semibold">
                <div className="size-32 rounded-full bg-[#a193f8] absolute -top-16">
                    
                </div>
                <div className="mt-20 text-4xl font-bold uppercase text-[#a193f8] text-nowrap">{name}</div>
                <div className="mt-5 font-medium">&ldquo;{testimonial}&ldquo;</div>
            </div>
        </div>
    )
}

TestimonialCard.propTypes = {
    name: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
};

export default TestimonialCard;