


import SelectDefault from '../../components/UI/Select';
import LikeCard from '../../components/UI/LikedCard';

const index = () => {
    const liked = JSON.parse(localStorage.getItem("LIKE_COLLECTION"));

    return (
        <section id="liked" className='py-10'>
            <div className="container">
                <h2 className='text-xl font-bold'>Saqlanganlar</h2>
                <div className='w-full flex items-center justify-end pb-5 border-b'>
                    <p className='text-md text-gray-500 mr-3'>Saralash</p>
                    <SelectDefault />
                </div>
                <div className='grid grid-cols-5 my-8'>
                    {
                        liked ? liked.map((item, index) => {
                            return <LikeCard data={item} key={index}/>
                        }) : "No liked products"
                    }
                </div>
            </div>
        </section>
    )
};

export default index;