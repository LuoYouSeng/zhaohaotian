import img_1 from './assets/img/1.jpg'
import img_2 from './assets/img/2.jpg'
import img_3 from './assets/img/3.jpg'
import img_5 from './assets/img/5.png'

export default function() {
    return (
        <div className="w-full h-full">
            {/* 进度条 */}
            <div>

            </div>
            <div className="w-full h-full flex py-8 px-20 justify-around">
                <div className='w-2/3'>
                    <div className="text-9xl my-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-400">
                        赵昊天
                    </div>
                    <div className="text-6xl my-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-300" style={{'lineHeight': '6rem'}}>
                        专注玩杯20年
                    </div>
                </div>
                <div className='w-1/3 shadow'>
                    <img src={img_1} className="rounded" />
                </div>
            </div>
            <div className="w-full h-full flex py-8 px-20 justify-around">
                <div className='w-1/3 shadow'>
                    <img src={img_2} className="rounded" />
                </div>
                <div className='w-3/5'>
                    <div className="text-9xl my-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-400">
                        针男人
                    </div>
                    <div className="text-6xl my-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-300" style={{'lineHeight': '6rem'}}>
                        在被双亲发现的状况下，还能坚持到底的 <br/>
                        <span className='font-extralight'>针！ 男！ 人！</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex py-8 px-20 justify-around">
                <div className='w-2/3'>
                    <div className="text-9xl my-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-400">
                        经验丰富
                    </div>
                    <div className="text-6xl my-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-300" style={{'lineHeight': '6rem'}}>
                        对各种类型无比通透，无论是手动或电动、有无外壳，赵昊天都能驾驭
                    </div>
                </div>
                <div className='w-1/3 shadow'>
                    <img src={img_5} className="rounded" />
                </div>
            </div>
        </div>
    )
}