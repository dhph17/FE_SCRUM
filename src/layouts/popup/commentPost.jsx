import PropTypes from "prop-types";
import { useEffect, useState } from 'react'
import {
    FaCommentAlt,
    FaCaretUp,
    FaCaretDown
} from "react-icons/fa";
import avatar from "../../assets/image/User.png";
import {
    IoIosSend,
    IoMdClose
} from "react-icons/io";

import { CommentProvider } from '../provider/commentProvider';
import CommentPart from '../comment/commentPart';

const CommentSection = ({ id, onClose }) => {
    const sorts = ['Mới nhất', 'Cũ nhất']
    const [valueSort, setValueSort] = useState('Mới nhất')
    const [isClickSort, setIsClickSort] = useState(false)
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPage, setTotalPage] = useState(100)
    const [totalComment, setTotalCmt] = useState()

    const handleClickSort = () => {
        setIsClickSort(!isClickSort)
    }

    const handleValueSort = (sort) => {
        setValueSort(sort)
        setIsClickSort(!isClickSort)
    }

    const fetchComments = async () => {
        setLoading(true);
        const response = await fetchApiData(`/api/songs/comment/${id}`, 'GET', null, null, { page: page })
        if (response.success) {
            const data = await response.data;
            setComments(prevComments => [...prevComments, ...data.comments]);
            setPage(prevPage => prevPage + 1);
            setTotalPage(data.totalPage)
            setTotalCmt(data.totalComment)
        }
        setLoading(false);
    };

    useEffect(() => {
        setComments([])
        setPage(1)
        fetchComments(); // Fetch first page data
    }, [id]);

    // const handleScroll = (event) => {
    //     const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    //     if (scrollHeight - scrollTop <= clientHeight + 50 && !loading) {
    //         if (page <= totalPage) {
    //             fetchComments()
    //         }
    //     }
    // };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 shadow-md"
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className='w-[40%] p-3 bg-white'>
                <div className='flex justify-between mb-2 items-end'>
                    <div className='flex items-center text-primaryColorGray'>
                        <FaCommentAlt />
                        <p className='ml-2'>{totalComment} Comment</p>
                    </div>
                    <div className='relative'>
                        <button
                            className='cursor-pointer w-[12rem] text-[0.9rem] flex justify-end items-center border-2 border-black p-2 transition duration-300 rounded-md'
                            onClick={handleClickSort}
                        >
                            Sắp xếp theo: {valueSort}
                            {
                                isClickSort ? (
                                    <FaCaretUp className='ml-2' />
                                ) : (
                                    <FaCaretDown className='ml-2' />
                                )
                            }
                        </button>
                        {
                            isClickSort && (
                                <div className='absolute mt-2 left-[40%] bg-gray-50 w-[80px] z-10 rounded-lg'>
                                    <ul>
                                        {sorts.map((sort, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    onClick={() => handleValueSort(sort)}
                                                    className='cursor-pointer text-[0.9rem] text-end p-2 hover:text-primaryColorPink'
                                                >
                                                    {sort}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="w-full h-[0.125rem] bg-gray-500 my-5">

                </div>
                <div className="min-h-[120px] max-h-[600px] overflow-auto pr-4 scrollbar-thin scrollbar-thumb-transparent/30 scrollbar-track-transparent" onScroll={handleScroll}>
                    {comments?.map((comment, index) => (
                        <div key={index}>
                            <CommentProvider>
                                <CommentPart data={comment} />
                            </CommentProvider>
                        </div>
                    ))}
                    {loading && <p>Loading more comments...</p>}
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <div className='w-[100%] mr-2 flex'>
                        <div className='w-[50px] mr-2 flex'>
                            <img
                                src={avatar}
                                alt="avatar"
                                className="rounded-full w-[40px] h-[40px] mr-3"
                            />
                        </div>

                        <div className='relative w-[88%]'>
                            <input
                                type="text"
                                className='w-full py-2 bg-transparent border-2 border-custom_gray text-[0.9rem] rounded-3xl pl-3 pr-10 focus:border-black'
                                placeholder='Write a comment'
                            />
                            <IoMdClose
                                className='w-6 h-6 absolute right-3 top-2 cursor-pointer'
                            />
                        </div>
                    </div>

                    <div className='border-2 p-2 rounded-full bg-white text-custom_gray hover:text-black hover:border-black transition-all duration-300 cursor-pointer'>
                        <IoIosSend />
                    </div>
                </div>
            </div>
        </div>

    )
}

CommentSection.propTypes = {
    id: PropTypes.string,
    onClose: PropTypes.func
};

export default CommentSection;
