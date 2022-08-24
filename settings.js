const collectionInfo = {
    name: "SOLSWIPE",
    title: "{name}",
    date: "25.08.2022",
    socialMedia: {
        discord: "https://discord.com/",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "1.gif",
        favicon: "logo.jpg",
    },
    background: {
        type: "video",
        image: "",
        video: "1.mp4",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 1.25,
    totalSupply: 4444,
    toFixed: 1,
    minUnits: 1,
    maxUnits: 2,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.2,
    maxTransfer: 10,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);