import React, { useState } from'react';
import MyTitle from './MyTitle';
import Sidebar from './Sidebar';

// 可切换图片的组件
const ImageComponent = () => {
    const imageSets = [
        [
            'https://th.bing.com/th/id/OIP.fBhkOBQi1E7QGXGcuq7whQAAAA?w=186&h=270&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            'https://th.bing.com/th/id/OIP.cPTyac6OXMVxtWOFCikoJAAAAA?w=186&h=270&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            'https://th.bing.com/th/id/OIP.m9IJ_CDTMvO-OQFf0FeglgAAAA?w=201&h=292&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            '天杯龙'
        ],
        [
            'https://p2.ssl.qhimgs1.com/sdr/400__/t04e693cc46283be678.jpg',
            'https://th.bing.com/th/id/OIP.TgAGn1dlDj4rWM81wHKYlgAAAA?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            'https://p0.ssl.qhimgs1.com/sdr/400__/t040e7ad59449efac30.jpg',
            '刻魔'
        ],
        [
            'https://p0.ssl.qhimgs1.com/sdr/400__/t04dfb85799d5754eba.jpg',
            'https://p1.ssl.qhimgs1.com/sdr/400__/t047648e35c1a0a3d17.jpg',
            'https://th.bing.com/th/id/OIP.1rHOjg9HyGB_O_4QfRlcnAAAAA?w=156&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            '珠泪哀歌'
        ],
        [
            'https://th.bing.com/th/id/OIP.Oxl2kkCp1lUd3YvmckoexwAAAA?w=155&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            'https://th.bing.com/th/id/OIP.QHmLYvyN_66WJjw18EDgXAHaKx?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            'https://th.bing.com/th/id/OIP.NAiy268Mv0RAMEJxkzDXywAAAA?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            '尤贝尔'
        ],
        [
            'https://th.bing.com/th/id/OIP.Est_MjWqR-WqgKQYNifEJAHaKw?w=156&h=201&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            'https://th.bing.com/th/id/OIP.0GASDSz2nvcUPOT1ZYIqNAHaHY?w=220&h=219&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            'https://th.bing.com/th/id/OIP.I_6ZQtpgRhmys4qV9ohDowHaHR?w=219&h=215&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            '码丽丝'
        ]
    ];

    const [currentIndices, setCurrentIndices] = useState(
        new Array(imageSets.length).fill(0)
    );

    const handleImageClick = (index: number) => {
        setCurrentIndices((prevIndices) => {
            const newIndices = [...prevIndices];
            newIndices[index] = (newIndices[index] + 1) % (imageSets[index].length - 1);
            return newIndices;
        });
    };

    return (
        <div className="flex flex-wrap justify-center gap-4 p-4 bg-white">
            {imageSets.map((images, index) => (
                <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() => handleImageClick(index)}
                >
                    <img
                        src={images[currentIndices[index]]}
                        alt={`示例图片 ${index + 1}`}
                        className="w-64 h-64 object-cover"
                    />
                    <p className="text-center mt-2">{images[images.length - 1]}</p>
                </div>
            ))}
        </div>
    );
};

const SysPage2 = () => {
    const sidebarTitle = "左侧栏标题";
    const menuItems = [
        { label: "首页", link: "#home" },
        { label: "关于我们", link: "#about" },
        { label: "服务", link: "#services" },
        { label: "联系我们", link: "#contact" }
    ];

    const mainContent = (
        <div className="flex-1 bg-gray-100 p-4 overflow-auto">
            <h2 className="text-2xl font-bold mb-4">《游戏王近两年的主流卡组》</h2>
            <p className="mb-4">
  
            </p>
            <ImageComponent />
        </div>
    );

    return (
        <div className="h-screen flex flex-col">
            <MyTitle />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar title={sidebarTitle} menuItems={menuItems} />
                {mainContent}
            </div>
        </div>
    );
};

export default SysPage2;
    