import { useState } from 'react'
import PropTypes from "prop-types";
import avatar from "../../assets/image/User.png";
import {
    IoIosSend,
    IoMdClose
} from "react-icons/io";
import Comment from './comment';
import { useAppContext } from '../provider/commentProvider'
import {
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa";

const CommentPart = ({ data }) => {
    const { replyStatus, setReplyStatus } = useAppContext()
    const [childrenCmt, setChildrenCmt] = useState([])
    const [showCmtChild, setShowCmtChild] = useState(false)
    const [totalPage, setTotalPage] = useState(100)
    const [isHidden, setIsHidden] = useState(false)
    const [page, setPage] = useState(1)
    const [cmtRemain, setCmtRemain] = useState(data?.hasChild ?? 0)

    // const ViewChildrenComment = async () => {
    //     setShowCmtChild(true)
    //     setIsHidden(true)
    //     if (cmtRemain > 0 && page <= totalPage) {
    //         const result = await fetchApiData(
    //             `/api/songs/comment/replies/${data?.id}`,
    //             "GET",
    //             null,
    //             null,
    //             null,
    //             page
    //         );

    //         if (result.success) {
    //             setChildrenCmt(prevComments => [...prevComments, ...result.data.comments]);
    //             setTotalPage(result.data.totalPage)
    //             setPage(prevPage => prevPage + 1)
    //             setCmtRemain((prevCmt) => Math.max(prevCmt - 3, 0));
    //         } else {
    //             console.error("Login error:", result.error);
    //         }
    //     } else {
    //         setCmtRemain(0)
    //     }
    // }


    const handleHidden = () => {
        setIsHidden(false)
        setShowCmtChild(false)
        setCmtRemain(data?.hasChild ?? 0)
    }

    return (
        <div>
            <Comment dataUser={data?.user} time={data?.createdAt} comment={data?.content || ''} role='parent' />
            {showCmtChild && (
                <div className="">
                    {childrenCmt.length > 0 && (
                        childrenCmt.map((childComment, index) => (
                            <Comment
                                key={childComment.id || index}
                                dataUser={childComment.user}
                                time={childComment.createdAt}
                                comment={childComment.content}
                                role="children"
                            />
                        ))
                    )}
                </div>
            )}
            <div className='flex ml-14 mb-5'>
                {
                    (data?.hasChild ?? 0) > 0 && cmtRemain !== 0 && (
                        <div
                            className='flex items-center cursor-pointer group'
                        // onClick={ViewChildrenComment}
                        >
                            <div className="w-[2rem] h-[0.1rem] bg-gray-200 font-bold mr-3"></div>
                            <p className='text-[0.85rem] text-gray-200 text-nowrap group-hover:underline'>Xem thêm {cmtRemain} câu trả lời</p>
                            <FaChevronDown className='ml-2 w-3 h-3 text-gray-200 mr-5' />
                        </div>
                    )
                }
                {
                    isHidden && (
                        <div
                            className='flex items-center cursor-pointer group'
                            onClick={handleHidden}
                        >
                            <p className='group-hover:underline text-[0.85rem] text-gray-200'>Ẩn</p>
                            <FaChevronUp className='ml-2 w-2 h-2 text-gray-200' />
                        </div>

                    )
                }
            </div>

            {
                replyStatus && (
                    <div className='flex justify-between pl-14 items-center my-5 mb-7'>
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
                                    className='w-full py-2 bg-transparent border-2 border-white text-[0.9rem] rounded-3xl pl-3 pr-10 focus:outline-none'
                                    placeholder='Thêm bình luận...'
                                />
                                <IoMdClose
                                    className='w-6 h-6 absolute right-3 top-2 cursor-pointer'
                                    onClick={() => setReplyStatus(!replyStatus)}
                                />
                            </div>
                        </div>

                        <div className='border-2 p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer'>
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
