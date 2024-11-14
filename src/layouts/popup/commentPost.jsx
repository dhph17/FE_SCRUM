import PropTypes from "prop-types";
import { useAppContext } from "../../AppProvider";
import { useEffect, useState } from 'react'
import {
    FaCommentAlt,
    // FaCaretUp,
    // FaCaretDown
} from "react-icons/fa";
import ImgAvatar from "../../assets/image/User.png";
import {
    IoIosSend,
    IoMdClose
} from "react-icons/io";

import { CommentProvider } from '../provider/commentProvider';
import CommentPart from '../comment/commentPart';

const CommentSection = ({ idPost, onClose }) => {
    const { id, sessionToken, role } = useAppContext()
    // const sorts = ['Mới nhất', 'Cũ nhất']
    // const [valueSort, setValueSort] = useState('Mới nhất')
    // const [isClickSort, setIsClickSort] = useState(false)
    const [comments, setComments] = useState([]);
    const [totalComment, setTotalCmt] = useState()
    const [reply, setReplyStatus] = useState()
    const [avatar, setAvatar] = useState('');


    // const handleClickSort = () => {
    //     setIsClickSort(!isClickSort)
    // }

    // const handleValueSort = (sort) => {
    //     setValueSort(sort)
    //     setIsClickSort(!isClickSort)
    // }

    useEffect(() => {
        if (role !== 'admin') {
            const fetchData = async () => {
                try {
                    const url = `${import.meta.env.VITE_API_ENDPOINT}/api/${role === 'tutor' ? 'tutors' : 'parents'}/${id}`;
                    const response = await fetch(url);
                    const data = await response.json();
                    setAvatar(data.avatar);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();
        }
    }, [id]);

    const fetchComments = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_ENDPOINT}/api/postcomments/${idPost}/`
            );
            const data = await response.json();
            setComments(data.comments);
            setTotalCmt(data.total_comments)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchComments(); // Fetch first page data
    }, [id]);

    const handPostCmt = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/postcomments/`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${sessionToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    post_id: idPost,
                    user_id: id,
                    comment_parent_id: '',
                    comment: reply
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setComments((prevCmt) => [data, ...prevCmt])
                setReplyStatus('')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 shadow-md z-20"
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className='w-[40%] h-[75%] p-6 bg-white'>
                <div className='flex justify-between items-end'>
                    <div className='flex items-center text-primaryColorGray'>
                        <FaCommentAlt />
                        <p className='ml-2'>{totalComment} Comment</p>
                    </div>
                    {/* <div className='relative'>
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
                    </div> */}
                </div>
                <div className="w-full h-[0.125rem] bg-gray-500 mt-2 mb-5">

                </div>
                <div className="min-h-[120px] h-[77%] overflow-auto pr-4 scrollbar-thin scrollbar-thumb-transparent/30 scrollbar-track-transparent">
                    {comments?.map((comment, index) => (
                        <div key={index}>
                            <CommentProvider>
                                <CommentPart data={comment} avatar={avatar} />
                            </CommentProvider>
                        </div>
                    ))}
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <div className='w-[100%] mr-2 flex'>
                        <div className='w-[50px] mr-2 flex'>
                            <img
                                src={avatar ? `${import.meta.env.VITE_API_ENDPOINT}${avatar}` : ImgAvatar}
                                alt="avatar"
                                className="rounded-full w-[40px] h-[40px] mr-3"
                            />
                        </div>

                        <div className='relative w-[88%]'>
                            <input
                                type="text"
                                className='w-full py-2 bg-transparent border-2 border-custom_gray text-[0.9rem] rounded-3xl pl-3 pr-10 focus:border-black'
                                placeholder='Write a comment'
                                value={reply}
                                onChange={(e) => setReplyStatus(e.target.value)}
                            />
                            <IoMdClose
                                className='w-6 h-6 absolute right-3 top-2 cursor-pointer'
                                onClick={() => setReplyStatus('')}
                            />
                        </div>
                    </div>

                    <div
                        className='border-2 p-2 rounded-full bg-white text-custom_gray hover:text-black hover:border-black transition-all duration-300 cursor-pointer'
                        onClick={handPostCmt}
                    >
                        <IoIosSend />
                    </div>
                </div>
            </div>
        </div>

    )
}

CommentSection.propTypes = {
    idPost: PropTypes.string,
    onClose: PropTypes.func
};

export default CommentSection;
