import { useState } from 'react'
import { useAppContext } from '../../AppProvider';
import PropTypes from "prop-types";
import avatar from "../../assets/image/User.png";
import {
    IoIosSend,
    IoMdClose
} from "react-icons/io";
import Comment from './comment';
import { useAppContext as useCommentContext } from '../provider/commentProvider'
import {
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa";

const CommentPart = ({ data }) => {
    const { id, sessionToken } = useAppContext()
    const { replyStatus, setReplyStatus } = useCommentContext()
    const [childrenCmt, setChildrenCmt] = useState([])
    const [showCmtChild, setShowCmtChild] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const [cmtRemain, setCmtRemain] = useState(data?.comment_children_count ?? 0)
    const [reply, setReplyComment] = useState('')


    const ViewChildrenComment = async (id_parent) => {
        setShowCmtChild(true);
        setIsHidden(true);

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_ENDPOINT}/api/postcomments/${id_parent}/`
            );
            const data = await response.json();
            setChildrenCmt(data)
        } catch (error) {
            console.error(error);
        }
    };

    const handleHidden = () => {
        setChildrenCmt([]);
        setIsHidden(false);
        setShowCmtChild(false);
        setCmtRemain(data.comment_children_count);
    };

    const handPostCmt = async (idPost, idCmt) => {
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
                    comment_parent_id: idCmt,
                    comment: reply
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setChildrenCmt((prevCmt) => [data, ...prevCmt])
                ViewChildrenComment(idCmt)
                setReplyComment('')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Comment dataUser={data?.user} time={data?.created_at} comment={data?.comment || ''} role='parent' />
            {showCmtChild && (
                <div className="">
                    {childrenCmt.length > 0 && (
                        childrenCmt.map((childComment, index) => (
                            <Comment
                                key={childComment.id || index}
                                dataUser={childComment.user}
                                time={childComment.created_at}
                                comment={childComment.comment}
                                role="children"
                            />
                        ))
                    )}
                </div>
            )}
            <div className='flex ml-14 mb-2'>
                {
                    data.comment_children_count > 0 && cmtRemain !== 0 && (
                        <div
                            className='flex items-center cursor-pointer group'
                            onClick={() => ViewChildrenComment(data.comment_id)}
                        >
                            <div className="w-[2rem] h-[0.1rem] bg-gray-400 font-bold mr-3"></div>
                            <p className='text-[0.85rem] text-gray-600 text-nowrap group-hover:underline'>Xem thêm {cmtRemain} câu trả lời</p>
                            <FaChevronDown className='ml-2 w-3 h-3 text-gray-600 mr-5' />
                        </div>
                    )
                }
                {
                    isHidden && (
                        <div
                            className='flex items-center cursor-pointer group'
                            onClick={handleHidden}
                        >
                            <p className='group-hover:underline text-[0.85rem] text-gray-600'>Ẩn</p>
                            <FaChevronUp className='ml-2 w-2 h-2 text-gray-600' />
                        </div>

                    )
                }
            </div>

            {
                replyStatus && (
                    <div className='flex justify-between pl-14 items-center mt-3 mb-7'>
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
                                    placeholder='Thêm bình luận...'
                                    value={reply}
                                    onChange={(e) => setReplyComment(e.target.value)}
                                />
                                <IoMdClose
                                    className='w-6 h-6 absolute right-3 top-2 cursor-pointer'
                                    onClick={() => setReplyStatus(!replyStatus)}
                                />
                            </div>
                        </div>

                        <div className='border-2 p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer'
                            onClick={() => handPostCmt(data.post_id, data.comment_id)}
                        >
                            <IoIosSend />
                        </div>
                    </div>
                )
            }
        </div>

    )
}

CommentPart.propTypes = {
    data: PropTypes.object,
};

export default CommentPart
