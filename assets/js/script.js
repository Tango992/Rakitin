const cpus = [
    {
        name: "Core i5",
        img: "../assets/images/product/cpu-1.svg",
        desc: "3.5GHz Up To 5.1GHz. 14 Cores 20 Threads",
        price: 5000000
    },
    {
        name: "Core i7",
        img: "../assets/images/product/cpu-2.png",
        desc: "3.4GHz Up To 5.4GHz. 16 Cores 24 Threads",
        price: 6500000
    },
    {
        name: "Core i9",
        img: "../assets/images/product/cpu-3.svg",
        desc: "3.2GHz Up To 6.0GHz. 16 Cores 24 Threads",
        price: 11000000
    },
    {
        name: "Ryzen 5",
        img: "../assets/images/product/cpu-4.webp",
        desc: "4.7Ghz Up To 5.3Ghz. 6 Cores 12 Threads",
        price: 3500000
    },
    {
        name: "Ryzen 7",
        img: "../assets/images/product/cpu-5.webp",
        desc: "4.2GHz Up To 5.0GHz. 8 Cores 16 Threads",
        price: 6800000
    },
    {
        name: "Ryzen 9",
        img: "../assets/images/product/cpu-6.webp",
        desc: "4.2GHz Up To 5.7GHz. 16 Cores 32 Threads",
        price: 11500000
    },
]

const gpus = [
    {
        name: 'RTX 4060',
        img: "../assets/images/product/4060.png",
        desc: "8GB GDDR6 2X (1-Click OC)",
        price: 5250000
    },
    {
        name: 'RTX 4070',
        img: "../assets/images/product/4070.png",
        desc: "12GB GDDR6X EX GAMER (1-Click OC)",
        price: 10500000
    },
    {
        name: 'RTX 4080',
        img: "../assets/images/product/4080.webp",
        desc: "16GB GDDR6X ST (1-Click OC) - TRIPLE FAN",
        price: 22450000
    }
]

const rams = [
    {
        name: '16GB',
        img: "../assets/images/product/ram16.avif",
        desc: "Vengeance Pro PC28800 16GB (2X8GB)",
        price: 1130000
    },
    {
        name: '32GB',
        img: "../assets/images/product/ram32.avif",
        desc: "Vengeance RGB Pro PC25600 32GB (2x16GB)",
        price: 1505000
    },
    {
        name: '64GB',
        img: "../assets/images/product/ram64.webp",
        desc: "Vengeance RGB Pro PC28800 64GB (2X32GB)",
        price: 2815000
    },
]

const ssds = [
    {
        name: '512GB',
        img: "../assets/images/product/ssd512gb.png",
        desc: "970 Evo Plus NVMe 512GB",
        price: 670000
    },
    {
        name: '1TB',
        img: "../assets/images/product/ssd1tb.png",
        desc: "970 Evo Pro NVMe 1TB",
        price: 1124000
    },
    {
        name: '2TB',
        img: "../assets/images/product/ssd2tb.png",
        desc: "990 Pro NVMe PCIe Gen4 2TB",
        price: 3220000
    }
]

const cases = [
    {
        name: 'Cooler Master',
        img: "../assets/images/product/case-coolermaster.png",
        desc: "TD 300 Mesh Black",
        price: 999000
    },
    {
        name: 'Lian Li',
        img: "../assets/images/product/case-lianli.png",
        desc: "O11 Dynamic Mini Snow White Edition",
        price: 1890000
    },
    {
        name: 'DLM',
        img: "../assets/images/product/case-dlm.png",
        desc: "21 Pink Micro-ATX Mesh",
        price: 599000
    },
    {
        name: 'Hyte',
        img: "../assets/images/product/case-hyte.png",
        desc: "Y60 Modern Aesthetic ATX",
        price: 2875000
    },
    {
        name: 'Fractal Design',
        img: "../assets/images/product/case-fractal.png",
        desc: "Pop Air RGB ATX (Black)",
        price: 1299000
    },
    {
        name: 'Jonsbo',
        img: "../assets/images/product/case-jonsbo.png",
        desc: "D31 Mesh STD Micro ATX",
        price: 1790000
    }
]

let spec = {
    cpu: 0,
    gpu: 0,
    ram: 0,
    storage: 0,
    case: 0
}

