const myCartItems: Shop[] = [
    {
        id: "0",
        name: "Apple产品某东自营旗舰店",
        goods: [
            {
                name: "Apple MacBook Pro 16英寸 M1 Max芯片(10核中央处理器 32核图形处理器) 32G 1T 深空灰 笔记本电脑 轻薄本 MK1A3CH/A",
                unitPrice: 26499.00,
                id: "2b3d989dfe2ff391",
                amount: 1,
                description: "【强者的强】M1Pro和M1Max芯片，霸气不封顶，120Hz高刷Mini-LED屏幕，更长续航更多优惠请点击***",
                imageUrl: "./assets/2b3d989dfe2ff391.jpg",
                isSelected: true,
                shopId: "0",
                shopName: "Apple产品某东自营旗舰店",
                stockAmount: 0,
                subname: "M1 MAX芯片(10核) 32GB内存 1TB"
            },
            {
                name: "Apple iPhone 13 Pro Max(A2644) 256GB 远峰蓝色 支持移动联通电信5G",
                unitPrice: 10598.00,
                id: "7dd93d2ffb47f633",
                amount: 1,
                description: "【限时特惠】16-20日购机赠一年期AppleCare+服务！数量有限，赠完即止！选购[快充套装]加9元得20W快充头！更多优惠！查看",
                imageUrl: "./assets/7dd93d2ffb47f633.jpg",
                isSelected: false,
                shopId: '0',
                shopName: 'Apple产品某东自营旗舰店',
                stockAmount: 2,
                subname: "远峰蓝色\n256GB",
            }
        ]
    },
    {
        id: "1",
        name: "兰兴达图书专营店",
        goods: [
            {
                name: "前端技术架构与工程+前端工程化体系设计与实践+前端架构+深入浅出",
                unitPrice: 223.60,
                amount: 1,
                description: "明确业务、架构与工程三者之间的关系是研究前端技术架构和工程化的基本前提：业务为核心出发点，架构聚焦于代码，工程聚焦于流程。在此基础之上，本书进一步剖析并明确架构与工程的子集与集关系。从架构的角度分析一个完整Web项目在前端以及前后端协作层面需要考虑的各项技术要点和解决方案；在业务需求以及应用质量得到保障的基础之上，进一步从工程的角度分析迭代流程中可能阻碍工作效率的各个环节和关键因素，并讲解如何通过技术手段提升团队的规范性和生产效率。",
                stockAmount: 250,
                shopName: "兰兴达图书专营店",
                shopId: "1",
                id: "eb0b8a9aa98e91cb",
                imageUrl: "./assets/eb0b8a9aa98e91cb.png",
                isSelected: false,
            },
        ]
    },
    {
        id: "2",
        name: "人民邮电出版社",
        goods: [
            {
                name: "JavaScript悟道（图灵出品）",
                subname: "JavaScript悟道",
                unitPrice: 83.60,
                amount: 2,
                description: "理解JavaScript的运行与设计逻辑，体会开发大牛道格拉斯的思维方式及代码风格，趣读大量JavaScript奇闻轶事，带您重识JavaScript　团购电话4006186622",
                stockAmount: 3,
                shopName: "人民邮电出版社",
                shopId: "2",
                id: "4c10cd0abf00661e",
                imageUrl: "./assets/4c10cd0abf00661e.jpg",
                isSelected: true,
            },
            {
                name: "JavaScript高级程序设计 第4版(图灵出品）",
                subname: "JavaScript高级程序设计 第4版",
                unitPrice: 108.00,
                amount: 3,
                description: "web前端开发教程，JS\"红宝书\"升级，入门+实战，涵盖ECMAScript，2019，提供教学视频+配套编程环境，可直接在线运行随书代码",
                stockAmount: 2,
                shopName: "人民邮电出版社",
                shopId: "2",
                id: "a3942abebcb6534a",
                imageUrl: "./assets/a3942abebcb6534a.jpg",
                isSelected: false,
            }
        ]
    }
];

export default myCartItems;