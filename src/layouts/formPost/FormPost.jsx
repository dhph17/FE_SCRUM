import PropTypes from 'prop-types';
import { useState } from 'react';

const FormPost = ({ func }) => {
    const [days, setDays] = useState(1);
    const handleDays = (e) => {
        setDays(e.target.value)
    }
    const data = {
        subjects: [
            "Toán",
            "Lý",
            "Hóa",
            "Sinh",
            "Văn",
            "Anh",
            "Tin học",
            "Vẽ",
            "Nhạc cụ",
            "Khác",
        ],
        classesFrom: [
            "Lớp 1",
            "Lớp 2",
            "Lớp 3",
            "Lớp 4",
            "Lớp 5",
            "Lớp 6",
            "Lớp 7",
            "Lớp 8",
            "Lớp 9",
            "Lớp 10",
            "Lớp 11",
            "Lớp 12",
        ],
        fees: [
            "Dưới 20.000đ",
            "20.000đ - 50.000đ",
            "50.000đ - 80.000đ",
            "80.000đ - 100.000đ",
            "Trên 100.000đ",
        ],
        students: ["Dưới 10 học viên", "10-20 học viên", "Trên 20 học viên"],
        sessions: ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"],
        levels: ["Tốt nghiệp THPT", "Sinh viên", "Tốt nghiệp Đại học", "Tốt nghiệp Đại học Sư Phạm"]
    };
    return (
        <div>
            <div className='flex items-center'>
                <svg width="70" height="70" viewBox="0 0 124 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="1" filter="url(#filter0_d_137_1453)">
                        <g filter="url(#filter1_d_137_1453)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M47.5022 21.1185C46.9992 22.1244 46.7402 23.2026 46.7402 24.2915L53.5853 24.2915C53.5853 23.9472 53.6672 23.6063 53.8262 23.2883C53.9853 22.9702 54.2184 22.6812 54.5123 22.4378C54.8062 22.1943 55.1551 22.0012 55.5391 21.8695C55.9231 21.7377 56.3346 21.6699 56.7502 21.6699C57.1659 21.6699 57.5774 21.7377 57.9614 21.8695C58.3454 22.0012 58.6943 22.1943 58.9882 22.4378C59.2821 22.6812 59.5152 22.9702 59.6742 23.2883C59.833 23.6057 59.9149 23.946 59.9152 24.2896H59.9V43.7717H66.76V24.2915H66.7602C66.7602 23.2026 66.5013 22.1245 65.9983 21.1185C65.4952 20.1125 64.7579 19.1985 63.8284 18.4285C62.8989 17.6586 61.7954 17.0478 60.5809 16.6312C59.3664 16.2145 58.0648 16 56.7502 16C55.4357 16 54.134 16.2145 52.9196 16.6312C51.7051 17.0478 50.6016 17.6586 49.6721 18.4285C48.7426 19.1985 48.0053 20.1125 47.5022 21.1185Z" fill="#F1BB45" />
                        </g>
                        <ellipse cx="62" cy="75.0854" rx="42" ry="34.7895" fill="#F1BB45" />
                        <ellipse cx="54.6442" cy="76.9512" rx="4.86441" ry="4.02929" fill="#D9D9D9" />
                        <ellipse cx="90.1188" cy="76.9512" rx="4.86441" ry="4.02929" fill="#D9D9D9" />
                        <path d="M81.2206 80.9795C81.2206 82.7258 80.3831 84.4006 78.8923 85.6354C77.4016 86.8702 75.3797 87.5639 73.2714 87.5639C71.1632 87.5639 69.1413 86.8702 67.6505 85.6354C66.1598 84.4006 65.3223 82.7258 65.3223 80.9795L73.2714 80.9795H81.2206Z" fill="#D9D9D9" />
                        <g filter="url(#filter2_f_137_1453)">
                            <ellipse cx="54.6442" cy="76.9512" rx="4.86441" ry="4.02929" fill="#D9D9D9" />
                        </g>
                        <g filter="url(#filter3_f_137_1453)">
                            <ellipse cx="90.1188" cy="76.9512" rx="4.86441" ry="4.02929" fill="#D9D9D9" />
                        </g>
                        <g filter="url(#filter4_i_137_1453)">
                            <path d="M81.2206 80.9795C81.2206 82.7258 80.3831 84.4006 78.8923 85.6354C77.4016 86.8702 75.3797 87.5639 73.2714 87.5639C71.1632 87.5639 69.1413 86.8702 67.6505 85.6354C66.1598 84.4006 65.3223 82.7258 65.3223 80.9795L73.2714 80.9795H81.2206Z" fill="white" fillOpacity="0.89" />
                        </g>
                        <g filter="url(#filter5_d_137_1453)">
                            <ellipse cx="48.42" cy="29.8847" rx="8.505" ry="7.04487" fill="#F1BB45" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_137_1453" x="0" y="0" width="124" height="133.875" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="10" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_137_1453" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_137_1453" result="shape" />
                        </filter>
                        <filter id="filter1_d_137_1453" x="42.7402" y="16" width="28.02" height="35.7715" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_137_1453" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_137_1453" result="shape" />
                        </filter>
                        <filter id="filter2_f_137_1453" x="45.7798" y="68.9219" width="17.729" height="16.0586" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_137_1453" />
                        </filter>
                        <filter id="filter3_f_137_1453" x="81.2544" y="68.9219" width="17.729" height="16.0586" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_137_1453" />
                        </filter>
                        <filter id="filter4_i_137_1453" x="65.3223" y="80.9795" width="15.8984" height="10.5845" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_137_1453" />
                        </filter>
                        <filter id="filter5_d_137_1453" x="35.915" y="22.8398" width="25.0098" height="22.0898" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_137_1453" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_137_1453" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <p className='font-semibold text-[1.2rem] text-shadow-sm'>{func}</p>
            </div>
            <div>
                <form action="" className='flex flex-col ml-[20vw]'>
                    <div className="form__row flex mb-5 items-center">
                        <label className="form__label min-w-[125px] font-semibold" htmlFor="subject">Môn học:</label>
                        <select className="w-[20vw] shadow-md border-2 border-custom_gray bg-gray-200 rounded-md py-1 px-2 text-[0.9rem] focus:outline-none" id="subject" >
                            {data.subjects.map((subject, index) => (
                                <option key={index} value={subject}>{subject}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form__row flex mb-5">
                        <label className="form__label min-w-[125px] font-semibold" htmlFor="classes">Lớp:</label>
                        <div className="w-[30vw] grid grid-cols-3 justify-self-center">
                            {data.classesFrom.map((classItem, index) => (
                                <div key={index}>
                                    <input type="checkbox" id={index} value={classItem} />
                                    <label htmlFor={index} className="ml-2">{classItem}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="form__row flex mb-5 items-center">
                        <label className="form__label min-w-[125px] font-semibold" htmlFor="levels">Trình độ:</label>
                        <select className="w-[20vw] shadow-md border-2 border-custom_gray bg-gray-200 rounded-md py-1 px-2 text-[0.9rem] focus:outline-none" id="levels" >
                            {data.levels.map((subject, index) => (
                                <option key={index} value={subject}>{subject}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form__row flex mb-5 items-center">
                        <label className="form__label min-w-[125px] font-semibold" htmlFor="studentNumber">Số học viên:</label>
                        <input className="w-[20vw] shadow-md border-2 border-custom_gray bg-gray-200 rounded-md py-1 px-2 text-[0.9rem] focus:outline-none" type='number' min='0' id="studentNumber" />
                    </div>
                    <div className="form__row flex mb-5 items-center">
                        <label className="form__label min-w-[125px] font-semibold" htmlFor="fees">Học phí (/h):</label>
                        <input className="w-[20vw] shadow-md border-2 border-custom_gray bg-gray-200 rounded-md py-1 px-2 text-[0.9rem] focus:outline-none" type='number' min='0' id="studentNumber" />
                    </div>
                    <div className="form__row flex mb-5 items-center">
                        <label className="form__label min-w-[125px] font-semibold" htmlFor="locations">Địa chỉ:</label>
                        <input className="w-[20vw] shadow-md border-2 border-custom_gray bg-gray-200 rounded-md py-1 px-2 text-[0.9rem] focus:outline-none" type='text' id="locations" />
                    </div>
                    <div className="form__row flex mb-5 items-center">
                        <label className="form__label min-w-[125px] font-semibold" htmlFor="days">Số buổi (/tuần:)</label>
                        <input
                            className="w-[20vw] shadow-md border-2 border-custom_gray bg-gray-200 rounded-md py-1 px-2 text-[0.9rem] focus:outline-none"
                            type='number'
                            id="days"
                            onChange={handleDays}
                            min='1'
                        />
                    </div>
                    <div className="form__row flex mb-5">
                        <label className="form__label min-w-[125px] font-semibold" htmlFor="times">Thời gian:</label>
                        <div className='flex flex-col'>
                            {
                                Array.from({ length: days }).map((_, index) => (
                                    <div key={index} className='flex items-center mb-2'>
                                        <select className="w-[8vw] shadow-md border-2 border-gray-300 bg-gray-200 rounded-md py-1 px-2 text-[0.9rem] focus:outline-none" id="levels" >
                                            {data.sessions.map((subject, index) => (
                                                <option key={index} value={subject}>{subject}</option>
                                            ))}
                                        </select>
                                        <div className='bg-black w-5'></div>
                                        <div className="flex items-center space-x-2">
                                            Từ &nbsp;
                                            <input
                                                type="time"
                                                defaultValue="--:--"
                                                className="w-[8rem] py-1 px-3 bg-gray-200 border border-gray-300 rounded-md shadow-md focus:outline-none transition-all duration-150 ease-in-out"
                                                onInput={(e) => e.target.setCustomValidity('')}
                                                onInvalid={(e) => e.target.setCustomValidity('--:--')}
                                            />
                                            &nbsp;đến&nbsp;
                                            <input
                                                type="time"
                                                className="w-[8rem] py-1 px-3 bg-gray-200 border border-gray-300 rounded-md shadow-md focus:outline-none transition-all duration-150 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <div className="form__row flex mb-5">
                        <label className="form__label min-w-[125px] font-semibold" htmlFor="note">Ghi chú:</label>
                        <textarea className="w-[20vw] h-[10vh] shadow-md border-2 border-custom_gray bg-gray-200 rounded-md py-1 px-2 text-[0.9rem] focus:outline-none" type='text' id="note" />
                    </div>
                    <div>
                        <button className='flex bg-custom_darkblue p-2 rounded-lg ml-48'>
                            <p className='font-bold text-white mr-2'>{func}</p>
                            <svg width="24" height="24" viewBox="0 0 54 54" fill="current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 0.75C21.8083 0.75 16.7331 2.28954 12.4163 5.17392C8.0995 8.05831 4.73497 12.158 2.74817 16.9546C0.761374 21.7511 0.241536 27.0291 1.2544 32.1211C2.26726 37.2131 4.76733 41.8904 8.43846 45.5616C12.1096 49.2327 16.7869 51.7328 21.8789 52.7456C26.9709 53.7585 32.2489 53.2386 37.0455 51.2518C41.842 49.265 45.9417 45.9005 48.8261 41.5837C51.7105 37.2669 53.25 32.1918 53.25 27C53.25 20.0381 50.4844 13.3613 45.5616 8.43845C40.6387 3.51562 33.9619 0.75 27 0.75V0.75ZM25.125 40.4625C24.0309 40.8493 23.0831 41.5651 22.4118 42.5118C21.7404 43.4584 21.3783 44.5895 21.375 45.75V48.7688C17.9088 47.8698 14.7072 46.1565 12.0363 43.7712C9.36542 41.386 7.30244 38.3977 6.01881 35.0548C4.73518 31.7118 4.26798 28.1108 4.65605 24.551C5.04412 20.9911 6.27624 17.5753 8.25001 14.5875V23.25C8.25713 24.4073 8.62105 25.5343 9.29215 26.4772C9.96325 27.4201 10.9089 28.133 12 28.5187V30.75C12 32.2418 12.5926 33.6726 13.6475 34.7275C14.7024 35.7824 16.1332 36.375 17.625 36.375H23.25C23.7473 36.375 24.2242 36.5725 24.5758 36.9242C24.9275 37.2758 25.125 37.7527 25.125 38.25V40.4625ZM39.525 45.75C36.7697 42.6705 32.9802 40.7091 28.875 40.2375V38.25C28.875 36.7582 28.2824 35.3274 27.2275 34.2725C26.1726 33.2176 24.7419 32.625 23.25 32.625H17.625C17.1277 32.625 16.6508 32.4275 16.2992 32.0758C15.9476 31.7242 15.75 31.2473 15.75 30.75V28.875H21.375C22.8669 28.875 24.2976 28.2824 25.3525 27.2275C26.4074 26.1726 27 24.7418 27 23.25C27 22.7527 27.1976 22.2758 27.5492 21.9242C27.9008 21.5725 28.3777 21.375 28.875 21.375C31.3614 21.375 33.746 20.3873 35.5041 18.6291C37.2623 16.871 38.25 14.4864 38.25 12V7.5375C41.5679 9.44664 44.3438 12.1707 46.3152 15.452C48.2866 18.7333 49.3882 22.4633 49.5159 26.2891C49.6435 30.1149 48.793 33.9101 47.0447 37.3155C45.2965 40.7209 42.7083 43.6239 39.525 45.75V45.75Z" fill="#D9D9D9" />
                            </svg>

                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

FormPost.propTypes = {
    func: PropTypes.string,
};


export default FormPost