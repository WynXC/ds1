const collectionInfo = {
    name: "Zakirō",
    title: "{name}",
    date: "21.08.2022",
    socialMedia: {
        discord: "https://discord.com/",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "1.gif",
        favicon: "logo.jpg",
    },
    background: {
        type: "image",
        image: "bg.jpg",
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 1.55,
    totalSupply: 4444,
    toFixed: 2,
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