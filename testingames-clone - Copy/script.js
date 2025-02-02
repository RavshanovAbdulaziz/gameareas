// O'yinlar ro'yxati URL bilan
const games = {
    new: [
        { name: "Words with Owl", imageUrl: "https://img.gamedistribution.com/f44a159d660b4b9289f9add40a3cd7c0-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/f44a159d660b4b9289f9add40a3cd7c0/" },
        { name: "Drunk Man 3D", imageUrl: "https://img.gamedistribution.com/f5227a5977c84a1d819702f88688ed80-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/f5227a5977c84a1d819702f88688ed80/?gd_sdk_referrer_url=https://gamedistribution.com/games/drunk-man-3d/" },
        { name: "DriftClicker", imageUrl: "https://img.gamedistribution.com/a02de4821afa46c3b69dd95385c314db-200x120.jpg", gameUrl: "https://html5.gamedistribution.com/a02de4821afa46c3b69dd95385c314db/?gd_sdk_referrer_url=https://gamedistribution.com/games/driftclicker/?utm_source=gamedistribution.com&utm_medium=rainbow&utm_campaign=1" },
        { name: "Red Light Green Light", imageUrl: "https://img.gamedistribution.com/788f89d325d840f391139ce0e1212c46-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/788f89d325d840f391139ce0e1212c46/?gd_sdk_referrer_url=https://gamedistribution.com/games/red-light-green-light-2/" },
        { name: "Warfront", imageUrl: "https://img.gamedistribution.com/72cfd8c36ace4b6893390ac0e852dd57-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/72cfd8c36ace4b6893390ac0e852dd57/?gd_sdk_referrer_url=https://gamedistribution.com/games/warfront/" },
        { name: "Sprunki Memory Card Match", imageUrl: "https://img.gamedistribution.com/8a8434cb07b44b5db5596d5538c1afce-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/8a8434cb07b44b5db5596d5538c1afce/?gd_sdk_referrer_url=https://gamedistribution.com/games/sprunki-memory-card-match/" },
        { name: "Soccer Euro Cup 2025", imageUrl: "https://img.gamedistribution.com/608b965aa08644ceabb138d27d8661af-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/608b965aa08644ceabb138d27d8661af/?gd_sdk_referrer_url=https://gamedistribution.com/games/soccer-euro-cup-2025/" },
        { name: "Geometry Vibes", imageUrl: "https://img.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202/?gd_sdk_referrer_url=https://gamedistribution.com/games/geometry-vibes/" },
        { name: "Sprunki Challenge", imageUrl: "https://img.gamedistribution.com/b21ecd2488a5406ab3eee6843fcc1690-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202/?gd_sdk_referrer_url=https://gamedistribution.com/games/geometry-vibes/" },
        { name: "Solitaire Winter", imageUrl: "https://img.gamedistribution.com/41a48516ae924ef884a8b325231ee6a0-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/41a48516ae924ef884a8b325231ee6a0/?gd_sdk_referrer_url=https://gamedistribution.com/games/solitaire-winter/https://html5.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202/?gd_sdk_referrer_url=https://gamedistribution.com/games/geometry-vibes/" },
        { name: "Card Battle", imageUrl: "https://img.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2/?gd_sdk_referrer_url=https://gamedistribution.com/games/card-battle/" },
        { name: "Star Wing", imageUrl: "https://img.gamedistribution.com/66952e35ad404b03b085bc996a952124-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/66952e35ad404b03b085bc996a952124/?gd_sdk_referrer_url=https://gamedistribution.com/games/star-wing/" },
        {name: "Solitaire Story TriPeaks 5", imageUrl: "https://img.gamedistribution.com/819e236bb5354643913af19f7fe12622-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/819e236bb5354643913af19f7fe12622/?gd_sdk_referrer_url=https://gamedistribution.com/games/solitaire-story-tripeaks-5/" },
        {name: "Wonders of Egypt Mahjong", imageUrl: "https://img.gamedistribution.com/e07f57a52e994a4c802e595bc77a788c-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/e07f57a52e994a4c802e595bc77a788c/?gd_sdk_referrer_url=https://gamedistribution.com/games/wonders-of-egypt-mahjong/" },
        {name: "Zombie Idle Defense", imageUrl: "https://img.gamedistribution.com/39d8fb0fc5784ff5a6445e4f84645f6e-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/39d8fb0fc5784ff5a6445e4f84645f6e/?gd_sdk_referrer_url=https://gamedistribution.com/games/zombie-idle-defense/" },
        {name: "Stick Fight The Chaos", imageUrl: "https://img.gamedistribution.com/06cdcc1cd320472ab3f3574d702ff217-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/06cdcc1cd320472ab3f3574d702ff217/?gd_sdk_referrer_url=https://gamedistribution.com/games/stick-fight-the-chaos/" },
        {name: "Wild West Match 2: The Gold Rush", imageUrl: "https://img.gamedistribution.com/f7fbc6f936784b65bf840485739e8641-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/f7fbc6f936784b65bf840485739e8641/?gd_sdk_referrer_url=https://gamedistribution.com/games/wild-west-match-2:-the-gold-rush/" },
        {name: "Stick Man Battle Fighting", imageUrl: "https://img.gamedistribution.com/c3d7483a3e434e8e93559bfde4463dc5-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/c3d7483a3e434e8e93559bfde4463dc5/?gd_sdk_referrer_url=https://gamedistribution.com/games/stick-man-battle-fighting/" },
        {name: "Parking Fury 3D: Beach City 2", imageUrl: "https://img.gamedistribution.com/6ca9e461efb84bfba46b29379378cf78-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/6ca9e461efb84bfba46b29379378cf78/?gd_sdk_referrer_url=https://gamedistribution.com/games/parking-fury-3d:-beach-city-2/" },
        {name: "Block Puzzle - Frozen Jewel", imageUrl: "https://img.gamedistribution.com/5031e968c8ac4af7ac8940ac35518b7c-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/5031e968c8ac4af7ac8940ac35518b7c/?gd_sdk_referrer_url=https://gamedistribution.com/games/block-puzzle-frozen-jewel/" },
        {name: "Elevator Fight", imageUrl: "https://img.gamedistribution.com/cf5bab9afce444d9bf00b672069e5653-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/cf5bab9afce444d9bf00b672069e5653/?gd_sdk_referrer_url=https://gamedistribution.com/games/elevator-fight/#iss=https%3A%2F%2Fidp.azerionconnect.com%2Fauth%2Frealms%2Fazerion" },
        {name: "Athena Match", imageUrl: "https://img.gamedistribution.com/084eb49bc3144485a8a15c3587bfb39f-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/084eb49bc3144485a8a15c3587bfb39f/?gd_sdk_referrer_url=https://gamedistribution.com/games/athena-match/" },
        {name: "Hero Fight Clash", imageUrl: "https://img.gamedistribution.com/b60e3a97ac674e939f2ad04e3a590714-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/b60e3a97ac674e939f2ad04e3a590714/?gd_sdk_referrer_url=https://gamedistribution.com/games/hero-fight-clash/" },
        {name: "Mr Bullet: Stealth Ninja Killstreak", imageUrl: "https://img.gamedistribution.com/5c3bbdcd66684b69aa7cb06ad3b7ccf3-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/5c3bbdcd66684b69aa7cb06ad3b7ccf3/?gd_sdk_referrer_url=https://gamedistribution.com/games/mr-bullet:-stealth-ninja-killstreak/" },
        {name: "Drift Donut", imageUrl: "https://img.gamedistribution.com/f607d2f790ab400e95203e720e8061c1-1280x720.jpg", gameUrl: "https://html5.gamedistribution.com/f607d2f790ab400e95203e720e8061c1/?gd_sdk_referrer_url=https://gamedistribution.com/games/drift-donut/" },
        {name: "WorldCraft 3", imageUrl: "https://img.gamedistribution.com/a7c2f298ce5a4c6ea595b1f58cf5dc2a-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/a7c2f298ce5a4c6ea595b1f58cf5dc2a/?gd_sdk_referrer_url=https://gamedistribution.com/games/worldcraft-3/" },
        {name: "Warfare 1942 - online shooter", imageUrl: "https://img.gamedistribution.com/8cc62e5427cf443dab15634e5dfe7937-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/8cc62e5427cf443dab15634e5dfe7937/?gd_sdk_referrer_url=https://gamedistribution.com/games/warfare-1942-online-shooter/" },
        {name: "WarfareMadness Cars Destroy", imageUrl: "https://img.gamedistribution.com/2f5c17b7d11f449c9224f09041d1c312-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/2f5c17b7d11f449c9224f09041d1c312/?gd_sdk_referrer_url=https://gamedistribution.com/games/madness-cars-destroy/" },
        {name: "Daily Wordler", imageUrl: "https://img.gamedistribution.com/76696a6dfa6446feb73cf1fa6ecef4d1-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/76696a6dfa6446feb73cf1fa6ecef4d1/?gd_sdk_referrer_url=https://gamedistribution.com/games/daily-wordler/" },
        {name: "Card Battle", imageUrl: "https://img.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2/?gd_sdk_referrer_url=https://gamedistribution.com/games/card-battle/" },
        {name: "Noob in Geometry Dash", imageUrl: "https://img.gamedistribution.com/4d0faf326d03466baf7c0987d612c1a4-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/4d0faf326d03466baf7c0987d612c1a4/?gd_sdk_referrer_url=https://gamedistribution.com/games/noob-in-geometry-dash/" },
        {name: "Crazy Descent", imageUrl: "https://img.gamedistribution.com/d7352091e1f643ffa8370abcaeadd22d-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/d7352091e1f643ffa8370abcaeadd22d/?gd_sdk_referrer_url=https://gamedistribution.com/games/crazy-descent/" },
        {name: "Helix Crush", imageUrl: "https://img.gamedistribution.com/1900ce5bb7d344e3b12600f136c0a723-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/1900ce5bb7d344e3b12600f136c0a723/?gd_sdk_referrer_url=https://gamedistribution.com/games/helix-crush/" },
        {name: "Extreme Real Car Driving 2025", imageUrl: "https://img.gamedistribution.com/79c7a49fba6441a8899c011b1ea8b6e0-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/79c7a49fba6441a8899c011b1ea8b6e0/?gd_sdk_referrer_url=https://gamedistribution.com/games/extreme-real-car-driving-2025/" },
        {name: "WormsArena.io", imageUrl: "https://img.gamedistribution.com/de5f668c21a7489ebc62f932efb75f78-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/de5f668c21a7489ebc62f932efb75f78/?gd_sdk_referrer_url=https://gamedistribution.com/games/wormsarena.io" },
        {name: "Moto Road Rash 3D 2", imageUrl: "https://img.gamedistribution.com/0d6c422de82f4f6b832697ed1da3c0b7-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/0d6c422de82f4f6b832697ed1da3c0b7/?gd_sdk_referrer_url=https://gamedistribution.com/games/moto-road-rash-3d-2/" },
        {name: "Soccer Dash", imageUrl: "https://img.gamedistribution.com/5772350f4ea345959c4e56a24d94ee42-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/5772350f4ea345959c4e56a24d94ee42/?gd_sdk_referrer_url=https://gamedistribution.com/games/soccer-dash/" },
        {name: "Going Balls Adventure 2", imageUrl: "https://img.gamedistribution.com/a58f4f4fa6c34f21ad728e90c53ee7d4-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/a58f4f4fa6c34f21ad728e90c53ee7d4/?gd_sdk_referrer_url=https://gamedistribution.com/games/going-balls-adventure-2/" },
        {name: "Parking Fury 3D: Night City", imageUrl: "https://img.gamedistribution.com/13d99dac275842e1a64a13332962fbd1-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/13d99dac275842e1a64a13332962fbd1/?gd_sdk_referrer_url=https://gamedistribution.com/games/parking-fury-3d:-night-city/" },
        {name: "City Ambulance Car Driving", imageUrl: "https://img.gamedistribution.com/3c12886c8c5341e08b0f69da5120f17e-512x512.jpeg", gameUrl: "https://html5.gamedistribution.com/3c12886c8c5341e08b0f69da5120f17e/?gd_sdk_referrer_url=https://gamedistribution.com/games/city-ambulance-car-driving/" },
        {name: "Supermarket Manager Simulator", imageUrl: "https://img.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed/?gd_sdk_referrer_url=https://gamedistribution.com/games/supermarket-manager-simulator/" }
    ],  
    hot: [
        { name: "Words with Owl", imageUrl: "https://img.gamedistribution.com/f44a159d660b4b9289f9add40a3cd7c0-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/f44a159d660b4b9289f9add40a3cd7c0/" },
        { name: "Drunk Man 3D", imageUrl: "https://img.gamedistribution.com/f5227a5977c84a1d819702f88688ed80-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/f5227a5977c84a1d819702f88688ed80/?gd_sdk_referrer_url=https://gamedistribution.com/games/drunk-man-3d/" },
        { name: "DriftClicker", imageUrl: "https://img.gamedistribution.com/a02de4821afa46c3b69dd95385c314db-200x120.jpg", gameUrl: "https://html5.gamedistribution.com/a02de4821afa46c3b69dd95385c314db/?gd_sdk_referrer_url=https://gamedistribution.com/games/driftclicker/?utm_source=gamedistribution.com&utm_medium=rainbow&utm_campaign=1" },
        { name: "Red Light Green Light", imageUrl: "https://img.gamedistribution.com/788f89d325d840f391139ce0e1212c46-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/788f89d325d840f391139ce0e1212c46/?gd_sdk_referrer_url=https://gamedistribution.com/games/red-light-green-light-2/" },
        { name: "Warfront", imageUrl: "https://img.gamedistribution.com/72cfd8c36ace4b6893390ac0e852dd57-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/72cfd8c36ace4b6893390ac0e852dd57/?gd_sdk_referrer_url=https://gamedistribution.com/games/warfront/" },
        { name: "Sprunki Memory Card Match", imageUrl: "https://img.gamedistribution.com/8a8434cb07b44b5db5596d5538c1afce-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/8a8434cb07b44b5db5596d5538c1afce/?gd_sdk_referrer_url=https://gamedistribution.com/games/sprunki-memory-card-match/" },
        { name: "Soccer Euro Cup 2025", imageUrl: "https://img.gamedistribution.com/608b965aa08644ceabb138d27d8661af-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/608b965aa08644ceabb138d27d8661af/?gd_sdk_referrer_url=https://gamedistribution.com/games/soccer-euro-cup-2025/" },
        { name: "Geometry Vibes", imageUrl: "https://img.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202/?gd_sdk_referrer_url=https://gamedistribution.com/games/geometry-vibes/" },
        { name: "Sprunki Challenge", imageUrl: "https://img.gamedistribution.com/b21ecd2488a5406ab3eee6843fcc1690-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202/?gd_sdk_referrer_url=https://gamedistribution.com/games/geometry-vibes/" },
        { name: "Solitaire Winter", imageUrl: "https://img.gamedistribution.com/41a48516ae924ef884a8b325231ee6a0-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/41a48516ae924ef884a8b325231ee6a0/?gd_sdk_referrer_url=https://gamedistribution.com/games/solitaire-winter/https://html5.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202/?gd_sdk_referrer_url=https://gamedistribution.com/games/geometry-vibes/" },
        { name: "Card Battle", imageUrl: "https://img.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2/?gd_sdk_referrer_url=https://gamedistribution.com/games/card-battle/" },
        { name: "Star Wing", imageUrl: "https://img.gamedistribution.com/66952e35ad404b03b085bc996a952124-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/66952e35ad404b03b085bc996a952124/?gd_sdk_referrer_url=https://gamedistribution.com/games/star-wing/" },
        {name: "Solitaire Story TriPeaks 5", imageUrl: "https://img.gamedistribution.com/819e236bb5354643913af19f7fe12622-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/819e236bb5354643913af19f7fe12622/?gd_sdk_referrer_url=https://gamedistribution.com/games/solitaire-story-tripeaks-5/" },
        {name: "Wonders of Egypt Mahjong", imageUrl: "https://img.gamedistribution.com/e07f57a52e994a4c802e595bc77a788c-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/e07f57a52e994a4c802e595bc77a788c/?gd_sdk_referrer_url=https://gamedistribution.com/games/wonders-of-egypt-mahjong/" },
        {name: "Zombie Idle Defense", imageUrl: "https://img.gamedistribution.com/39d8fb0fc5784ff5a6445e4f84645f6e-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/39d8fb0fc5784ff5a6445e4f84645f6e/?gd_sdk_referrer_url=https://gamedistribution.com/games/zombie-idle-defense/" },
        {name: "Stick Fight The Chaos", imageUrl: "https://img.gamedistribution.com/06cdcc1cd320472ab3f3574d702ff217-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/06cdcc1cd320472ab3f3574d702ff217/?gd_sdk_referrer_url=https://gamedistribution.com/games/stick-fight-the-chaos/" },
        {name: "Wild West Match 2: The Gold Rush", imageUrl: "https://img.gamedistribution.com/f7fbc6f936784b65bf840485739e8641-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/f7fbc6f936784b65bf840485739e8641/?gd_sdk_referrer_url=https://gamedistribution.com/games/wild-west-match-2:-the-gold-rush/" },
        {name: "Stick Man Battle Fighting", imageUrl: "https://img.gamedistribution.com/c3d7483a3e434e8e93559bfde4463dc5-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/c3d7483a3e434e8e93559bfde4463dc5/?gd_sdk_referrer_url=https://gamedistribution.com/games/stick-man-battle-fighting/" },
        {name: "Parking Fury 3D: Beach City 2", imageUrl: "https://img.gamedistribution.com/6ca9e461efb84bfba46b29379378cf78-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/6ca9e461efb84bfba46b29379378cf78/?gd_sdk_referrer_url=https://gamedistribution.com/games/parking-fury-3d:-beach-city-2/" },
        {name: "Block Puzzle - Frozen Jewel", imageUrl: "https://img.gamedistribution.com/5031e968c8ac4af7ac8940ac35518b7c-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/5031e968c8ac4af7ac8940ac35518b7c/?gd_sdk_referrer_url=https://gamedistribution.com/games/block-puzzle-frozen-jewel/" },
        {name: "Elevator Fight", imageUrl: "https://img.gamedistribution.com/cf5bab9afce444d9bf00b672069e5653-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/cf5bab9afce444d9bf00b672069e5653/?gd_sdk_referrer_url=https://gamedistribution.com/games/elevator-fight/#iss=https%3A%2F%2Fidp.azerionconnect.com%2Fauth%2Frealms%2Fazerion" },
        {name: "Athena Match", imageUrl: "https://img.gamedistribution.com/084eb49bc3144485a8a15c3587bfb39f-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/084eb49bc3144485a8a15c3587bfb39f/?gd_sdk_referrer_url=https://gamedistribution.com/games/athena-match/" },
        {name: "Hero Fight Clash", imageUrl: "https://img.gamedistribution.com/b60e3a97ac674e939f2ad04e3a590714-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/b60e3a97ac674e939f2ad04e3a590714/?gd_sdk_referrer_url=https://gamedistribution.com/games/hero-fight-clash/" },
        {name: "Mr Bullet: Stealth Ninja Killstreak", imageUrl: "https://img.gamedistribution.com/5c3bbdcd66684b69aa7cb06ad3b7ccf3-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/5c3bbdcd66684b69aa7cb06ad3b7ccf3/?gd_sdk_referrer_url=https://gamedistribution.com/games/mr-bullet:-stealth-ninja-killstreak/" },
        {name: "Drift Donut", imageUrl: "https://img.gamedistribution.com/f607d2f790ab400e95203e720e8061c1-1280x720.jpg", gameUrl: "https://html5.gamedistribution.com/f607d2f790ab400e95203e720e8061c1/?gd_sdk_referrer_url=https://gamedistribution.com/games/drift-donut/" },
        {name: "WorldCraft 3", imageUrl: "https://img.gamedistribution.com/a7c2f298ce5a4c6ea595b1f58cf5dc2a-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/a7c2f298ce5a4c6ea595b1f58cf5dc2a/?gd_sdk_referrer_url=https://gamedistribution.com/games/worldcraft-3/" },
        {name: "Warfare 1942 - online shooter", imageUrl: "https://img.gamedistribution.com/8cc62e5427cf443dab15634e5dfe7937-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/8cc62e5427cf443dab15634e5dfe7937/?gd_sdk_referrer_url=https://gamedistribution.com/games/warfare-1942-online-shooter/" },
        {name: "WarfareMadness Cars Destroy", imageUrl: "https://img.gamedistribution.com/2f5c17b7d11f449c9224f09041d1c312-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/2f5c17b7d11f449c9224f09041d1c312/?gd_sdk_referrer_url=https://gamedistribution.com/games/madness-cars-destroy/" },
        {name: "Daily Wordler", imageUrl: "https://img.gamedistribution.com/76696a6dfa6446feb73cf1fa6ecef4d1-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/76696a6dfa6446feb73cf1fa6ecef4d1/?gd_sdk_referrer_url=https://gamedistribution.com/games/daily-wordler/" },
        {name: "Card Battle", imageUrl: "https://img.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2/?gd_sdk_referrer_url=https://gamedistribution.com/games/card-battle/" },
        {name: "Noob in Geometry Dash", imageUrl: "https://img.gamedistribution.com/4d0faf326d03466baf7c0987d612c1a4-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/4d0faf326d03466baf7c0987d612c1a4/?gd_sdk_referrer_url=https://gamedistribution.com/games/noob-in-geometry-dash/" },
        {name: "Crazy Descent", imageUrl: "https://img.gamedistribution.com/d7352091e1f643ffa8370abcaeadd22d-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/d7352091e1f643ffa8370abcaeadd22d/?gd_sdk_referrer_url=https://gamedistribution.com/games/crazy-descent/" },
        {name: "Helix Crush", imageUrl: "https://img.gamedistribution.com/1900ce5bb7d344e3b12600f136c0a723-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/1900ce5bb7d344e3b12600f136c0a723/?gd_sdk_referrer_url=https://gamedistribution.com/games/helix-crush/" },
        {name: "Extreme Real Car Driving 2025", imageUrl: "https://img.gamedistribution.com/79c7a49fba6441a8899c011b1ea8b6e0-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/79c7a49fba6441a8899c011b1ea8b6e0/?gd_sdk_referrer_url=https://gamedistribution.com/games/extreme-real-car-driving-2025/" },
        {name: "WormsArena.io", imageUrl: "https://img.gamedistribution.com/de5f668c21a7489ebc62f932efb75f78-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/de5f668c21a7489ebc62f932efb75f78/?gd_sdk_referrer_url=https://gamedistribution.com/games/wormsarena.io" },
        {name: "Moto Road Rash 3D 2", imageUrl: "https://img.gamedistribution.com/0d6c422de82f4f6b832697ed1da3c0b7-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/0d6c422de82f4f6b832697ed1da3c0b7/?gd_sdk_referrer_url=https://gamedistribution.com/games/moto-road-rash-3d-2/" },
        {name: "Soccer Dash", imageUrl: "https://img.gamedistribution.com/5772350f4ea345959c4e56a24d94ee42-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/5772350f4ea345959c4e56a24d94ee42/?gd_sdk_referrer_url=https://gamedistribution.com/games/soccer-dash/" },
        {name: "Going Balls Adventure 2", imageUrl: "https://img.gamedistribution.com/a58f4f4fa6c34f21ad728e90c53ee7d4-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/a58f4f4fa6c34f21ad728e90c53ee7d4/?gd_sdk_referrer_url=https://gamedistribution.com/games/going-balls-adventure-2/" },
        {name: "Parking Fury 3D: Night City", imageUrl: "https://img.gamedistribution.com/13d99dac275842e1a64a13332962fbd1-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/13d99dac275842e1a64a13332962fbd1/?gd_sdk_referrer_url=https://gamedistribution.com/games/parking-fury-3d:-night-city/" },
        {name: "City Ambulance Car Driving", imageUrl: "https://img.gamedistribution.com/3c12886c8c5341e08b0f69da5120f17e-512x512.jpeg", gameUrl: "https://html5.gamedistribution.com/3c12886c8c5341e08b0f69da5120f17e/?gd_sdk_referrer_url=https://gamedistribution.com/games/city-ambulance-car-driving/" },
        {name: "Supermarket Manager Simulator", imageUrl: "https://img.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed/?gd_sdk_referrer_url=https://gamedistribution.com/games/supermarket-manager-simulator/" }
    ],
    best: [
        { name: "Words with Owl", imageUrl: "https://img.gamedistribution.com/f44a159d660b4b9289f9add40a3cd7c0-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/f44a159d660b4b9289f9add40a3cd7c0/" },
        { name: "Drunk Man 3D", imageUrl: "https://img.gamedistribution.com/f5227a5977c84a1d819702f88688ed80-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/f5227a5977c84a1d819702f88688ed80/?gd_sdk_referrer_url=https://gamedistribution.com/games/drunk-man-3d/" },
        { name: "DriftClicker", imageUrl: "https://img.gamedistribution.com/a02de4821afa46c3b69dd95385c314db-200x120.jpg", gameUrl: "https://html5.gamedistribution.com/a02de4821afa46c3b69dd95385c314db/?gd_sdk_referrer_url=https://gamedistribution.com/games/driftclicker/?utm_source=gamedistribution.com&utm_medium=rainbow&utm_campaign=1" },
        { name: "Red Light Green Light", imageUrl: "https://img.gamedistribution.com/788f89d325d840f391139ce0e1212c46-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/788f89d325d840f391139ce0e1212c46/?gd_sdk_referrer_url=https://gamedistribution.com/games/red-light-green-light-2/" },
        { name: "Warfront", imageUrl: "https://img.gamedistribution.com/72cfd8c36ace4b6893390ac0e852dd57-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/72cfd8c36ace4b6893390ac0e852dd57/?gd_sdk_referrer_url=https://gamedistribution.com/games/warfront/" },
        { name: "Sprunki Memory Card Match", imageUrl: "https://img.gamedistribution.com/8a8434cb07b44b5db5596d5538c1afce-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/8a8434cb07b44b5db5596d5538c1afce/?gd_sdk_referrer_url=https://gamedistribution.com/games/sprunki-memory-card-match/" },
        { name: "Soccer Euro Cup 2025", imageUrl: "https://img.gamedistribution.com/608b965aa08644ceabb138d27d8661af-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/608b965aa08644ceabb138d27d8661af/?gd_sdk_referrer_url=https://gamedistribution.com/games/soccer-euro-cup-2025/" },
        { name: "Geometry Vibes", imageUrl: "https://img.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202/?gd_sdk_referrer_url=https://gamedistribution.com/games/geometry-vibes/" },
        { name: "Sprunki Challenge", imageUrl: "https://img.gamedistribution.com/b21ecd2488a5406ab3eee6843fcc1690-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202/?gd_sdk_referrer_url=https://gamedistribution.com/games/geometry-vibes/" },
        { name: "Solitaire Winter", imageUrl: "https://img.gamedistribution.com/41a48516ae924ef884a8b325231ee6a0-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/41a48516ae924ef884a8b325231ee6a0/?gd_sdk_referrer_url=https://gamedistribution.com/games/solitaire-winter/https://html5.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202/?gd_sdk_referrer_url=https://gamedistribution.com/games/geometry-vibes/" },
        { name: "Card Battle", imageUrl: "https://img.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2/?gd_sdk_referrer_url=https://gamedistribution.com/games/card-battle/" },
        { name: "Star Wing", imageUrl: "https://img.gamedistribution.com/66952e35ad404b03b085bc996a952124-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/66952e35ad404b03b085bc996a952124/?gd_sdk_referrer_url=https://gamedistribution.com/games/star-wing/" },
        {name: "Solitaire Story TriPeaks 5", imageUrl: "https://img.gamedistribution.com/819e236bb5354643913af19f7fe12622-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/819e236bb5354643913af19f7fe12622/?gd_sdk_referrer_url=https://gamedistribution.com/games/solitaire-story-tripeaks-5/" },
        {name: "Wonders of Egypt Mahjong", imageUrl: "https://img.gamedistribution.com/e07f57a52e994a4c802e595bc77a788c-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/e07f57a52e994a4c802e595bc77a788c/?gd_sdk_referrer_url=https://gamedistribution.com/games/wonders-of-egypt-mahjong/" },
        {name: "Zombie Idle Defense", imageUrl: "https://img.gamedistribution.com/39d8fb0fc5784ff5a6445e4f84645f6e-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/39d8fb0fc5784ff5a6445e4f84645f6e/?gd_sdk_referrer_url=https://gamedistribution.com/games/zombie-idle-defense/" },
        {name: "Stick Fight The Chaos", imageUrl: "https://img.gamedistribution.com/06cdcc1cd320472ab3f3574d702ff217-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/06cdcc1cd320472ab3f3574d702ff217/?gd_sdk_referrer_url=https://gamedistribution.com/games/stick-fight-the-chaos/" },
        {name: "Wild West Match 2: The Gold Rush", imageUrl: "https://img.gamedistribution.com/f7fbc6f936784b65bf840485739e8641-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/f7fbc6f936784b65bf840485739e8641/?gd_sdk_referrer_url=https://gamedistribution.com/games/wild-west-match-2:-the-gold-rush/" },
        {name: "Stick Man Battle Fighting", imageUrl: "https://img.gamedistribution.com/c3d7483a3e434e8e93559bfde4463dc5-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/c3d7483a3e434e8e93559bfde4463dc5/?gd_sdk_referrer_url=https://gamedistribution.com/games/stick-man-battle-fighting/" },
        {name: "Parking Fury 3D: Beach City 2", imageUrl: "https://img.gamedistribution.com/6ca9e461efb84bfba46b29379378cf78-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/6ca9e461efb84bfba46b29379378cf78/?gd_sdk_referrer_url=https://gamedistribution.com/games/parking-fury-3d:-beach-city-2/" },
        {name: "Block Puzzle - Frozen Jewel", imageUrl: "https://img.gamedistribution.com/5031e968c8ac4af7ac8940ac35518b7c-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/5031e968c8ac4af7ac8940ac35518b7c/?gd_sdk_referrer_url=https://gamedistribution.com/games/block-puzzle-frozen-jewel/" },
        {name: "Elevator Fight", imageUrl: "https://img.gamedistribution.com/cf5bab9afce444d9bf00b672069e5653-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/cf5bab9afce444d9bf00b672069e5653/?gd_sdk_referrer_url=https://gamedistribution.com/games/elevator-fight/#iss=https%3A%2F%2Fidp.azerionconnect.com%2Fauth%2Frealms%2Fazerion" },
        {name: "Athena Match", imageUrl: "https://img.gamedistribution.com/084eb49bc3144485a8a15c3587bfb39f-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/084eb49bc3144485a8a15c3587bfb39f/?gd_sdk_referrer_url=https://gamedistribution.com/games/athena-match/" },
        {name: "Hero Fight Clash", imageUrl: "https://img.gamedistribution.com/b60e3a97ac674e939f2ad04e3a590714-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/b60e3a97ac674e939f2ad04e3a590714/?gd_sdk_referrer_url=https://gamedistribution.com/games/hero-fight-clash/" },
        {name: "Mr Bullet: Stealth Ninja Killstreak", imageUrl: "https://img.gamedistribution.com/5c3bbdcd66684b69aa7cb06ad3b7ccf3-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/5c3bbdcd66684b69aa7cb06ad3b7ccf3/?gd_sdk_referrer_url=https://gamedistribution.com/games/mr-bullet:-stealth-ninja-killstreak/" },
        {name: "Drift Donut", imageUrl: "https://img.gamedistribution.com/f607d2f790ab400e95203e720e8061c1-1280x720.jpg", gameUrl: "https://html5.gamedistribution.com/f607d2f790ab400e95203e720e8061c1/?gd_sdk_referrer_url=https://gamedistribution.com/games/drift-donut/" },
        {name: "WorldCraft 3", imageUrl: "https://img.gamedistribution.com/a7c2f298ce5a4c6ea595b1f58cf5dc2a-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/a7c2f298ce5a4c6ea595b1f58cf5dc2a/?gd_sdk_referrer_url=https://gamedistribution.com/games/worldcraft-3/" },
        {name: "Warfare 1942 - online shooter", imageUrl: "https://img.gamedistribution.com/8cc62e5427cf443dab15634e5dfe7937-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/8cc62e5427cf443dab15634e5dfe7937/?gd_sdk_referrer_url=https://gamedistribution.com/games/warfare-1942-online-shooter/" },
        {name: "WarfareMadness Cars Destroy", imageUrl: "https://img.gamedistribution.com/2f5c17b7d11f449c9224f09041d1c312-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/2f5c17b7d11f449c9224f09041d1c312/?gd_sdk_referrer_url=https://gamedistribution.com/games/madness-cars-destroy/" },
        {name: "Daily Wordler", imageUrl: "https://img.gamedistribution.com/76696a6dfa6446feb73cf1fa6ecef4d1-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/76696a6dfa6446feb73cf1fa6ecef4d1/?gd_sdk_referrer_url=https://gamedistribution.com/games/daily-wordler/" },
        {name: "Card Battle", imageUrl: "https://img.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2/?gd_sdk_referrer_url=https://gamedistribution.com/games/card-battle/" },
        {name: "Noob in Geometry Dash", imageUrl: "https://img.gamedistribution.com/4d0faf326d03466baf7c0987d612c1a4-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/4d0faf326d03466baf7c0987d612c1a4/?gd_sdk_referrer_url=https://gamedistribution.com/games/noob-in-geometry-dash/" },
        {name: "Crazy Descent", imageUrl: "https://img.gamedistribution.com/d7352091e1f643ffa8370abcaeadd22d-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/d7352091e1f643ffa8370abcaeadd22d/?gd_sdk_referrer_url=https://gamedistribution.com/games/crazy-descent/" },
        {name: "Helix Crush", imageUrl: "https://img.gamedistribution.com/1900ce5bb7d344e3b12600f136c0a723-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/1900ce5bb7d344e3b12600f136c0a723/?gd_sdk_referrer_url=https://gamedistribution.com/games/helix-crush/" },
        {name: "Extreme Real Car Driving 2025", imageUrl: "https://img.gamedistribution.com/79c7a49fba6441a8899c011b1ea8b6e0-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/79c7a49fba6441a8899c011b1ea8b6e0/?gd_sdk_referrer_url=https://gamedistribution.com/games/extreme-real-car-driving-2025/" },
        {name: "WormsArena.io", imageUrl: "https://img.gamedistribution.com/de5f668c21a7489ebc62f932efb75f78-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/de5f668c21a7489ebc62f932efb75f78/?gd_sdk_referrer_url=https://gamedistribution.com/games/wormsarena.io" },
        {name: "Moto Road Rash 3D 2", imageUrl: "https://img.gamedistribution.com/0d6c422de82f4f6b832697ed1da3c0b7-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/0d6c422de82f4f6b832697ed1da3c0b7/?gd_sdk_referrer_url=https://gamedistribution.com/games/moto-road-rash-3d-2/" },
        {name: "Soccer Dash", imageUrl: "https://img.gamedistribution.com/5772350f4ea345959c4e56a24d94ee42-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/5772350f4ea345959c4e56a24d94ee42/?gd_sdk_referrer_url=https://gamedistribution.com/games/soccer-dash/" },
        {name: "Going Balls Adventure 2", imageUrl: "https://img.gamedistribution.com/a58f4f4fa6c34f21ad728e90c53ee7d4-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/a58f4f4fa6c34f21ad728e90c53ee7d4/?gd_sdk_referrer_url=https://gamedistribution.com/games/going-balls-adventure-2/" },
        {name: "Parking Fury 3D: Night City", imageUrl: "https://img.gamedistribution.com/13d99dac275842e1a64a13332962fbd1-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/13d99dac275842e1a64a13332962fbd1/?gd_sdk_referrer_url=https://gamedistribution.com/games/parking-fury-3d:-night-city/" },
        {name: "City Ambulance Car Driving", imageUrl: "https://img.gamedistribution.com/3c12886c8c5341e08b0f69da5120f17e-512x512.jpeg", gameUrl: "https://html5.gamedistribution.com/3c12886c8c5341e08b0f69da5120f17e/?gd_sdk_referrer_url=https://gamedistribution.com/games/city-ambulance-car-driving/" },
        {name: "Supermarket Manager Simulator", imageUrl: "https://img.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed/?gd_sdk_referrer_url=https://gamedistribution.com/games/supermarket-manager-simulator/" }
    ],
    exclusive: [
        { name: "Words with Owl", imageUrl: "https://img.gamedistribution.com/f44a159d660b4b9289f9add40a3cd7c0-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/f44a159d660b4b9289f9add40a3cd7c0/" },
        { name: "Drunk Man 3D", imageUrl: "https://img.gamedistribution.com/f5227a5977c84a1d819702f88688ed80-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/f5227a5977c84a1d819702f88688ed80/?gd_sdk_referrer_url=https://gamedistribution.com/games/drunk-man-3d/" },
        { name: "DriftClicker", imageUrl: "https://img.gamedistribution.com/a02de4821afa46c3b69dd95385c314db-200x120.jpg", gameUrl: "https://html5.gamedistribution.com/a02de4821afa46c3b69dd95385c314db/?gd_sdk_referrer_url=https://gamedistribution.com/games/driftclicker/?utm_source=gamedistribution.com&utm_medium=rainbow&utm_campaign=1" },
        { name: "Red Light Green Light", imageUrl: "https://img.gamedistribution.com/788f89d325d840f391139ce0e1212c46-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/788f89d325d840f391139ce0e1212c46/?gd_sdk_referrer_url=https://gamedistribution.com/games/red-light-green-light-2/" },
        { name: "Warfront", imageUrl: "https://img.gamedistribution.com/72cfd8c36ace4b6893390ac0e852dd57-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/72cfd8c36ace4b6893390ac0e852dd57/?gd_sdk_referrer_url=https://gamedistribution.com/games/warfront/" },
        { name: "Sprunki Memory Card Match", imageUrl: "https://img.gamedistribution.com/8a8434cb07b44b5db5596d5538c1afce-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/8a8434cb07b44b5db5596d5538c1afce/?gd_sdk_referrer_url=https://gamedistribution.com/games/sprunki-memory-card-match/" },
        { name: "Soccer Euro Cup 2025", imageUrl: "https://img.gamedistribution.com/608b965aa08644ceabb138d27d8661af-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/608b965aa08644ceabb138d27d8661af/?gd_sdk_referrer_url=https://gamedistribution.com/games/soccer-euro-cup-2025/" },
        { name: "Geometry Vibes", imageUrl: "https://img.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202/?gd_sdk_referrer_url=https://gamedistribution.com/games/geometry-vibes/" },
        { name: "Sprunki Challenge", imageUrl: "https://img.gamedistribution.com/b21ecd2488a5406ab3eee6843fcc1690-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202/?gd_sdk_referrer_url=https://gamedistribution.com/games/geometry-vibes/" },
        { name: "Solitaire Winter", imageUrl: "https://img.gamedistribution.com/41a48516ae924ef884a8b325231ee6a0-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/41a48516ae924ef884a8b325231ee6a0/?gd_sdk_referrer_url=https://gamedistribution.com/games/solitaire-winter/https://html5.gamedistribution.com/b3507beea8bc46638a6d5e7c768a8202/?gd_sdk_referrer_url=https://gamedistribution.com/games/geometry-vibes/" },
        { name: "Card Battle", imageUrl: "https://img.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2/?gd_sdk_referrer_url=https://gamedistribution.com/games/card-battle/" },
        { name: "Star Wing", imageUrl: "https://img.gamedistribution.com/66952e35ad404b03b085bc996a952124-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/66952e35ad404b03b085bc996a952124/?gd_sdk_referrer_url=https://gamedistribution.com/games/star-wing/" },
        {name: "Solitaire Story TriPeaks 5", imageUrl: "https://img.gamedistribution.com/819e236bb5354643913af19f7fe12622-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/819e236bb5354643913af19f7fe12622/?gd_sdk_referrer_url=https://gamedistribution.com/games/solitaire-story-tripeaks-5/" },
        {name: "Wonders of Egypt Mahjong", imageUrl: "https://img.gamedistribution.com/e07f57a52e994a4c802e595bc77a788c-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/e07f57a52e994a4c802e595bc77a788c/?gd_sdk_referrer_url=https://gamedistribution.com/games/wonders-of-egypt-mahjong/" },
        {name: "Zombie Idle Defense", imageUrl: "https://img.gamedistribution.com/39d8fb0fc5784ff5a6445e4f84645f6e-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/39d8fb0fc5784ff5a6445e4f84645f6e/?gd_sdk_referrer_url=https://gamedistribution.com/games/zombie-idle-defense/" },
        {name: "Stick Fight The Chaos", imageUrl: "https://img.gamedistribution.com/06cdcc1cd320472ab3f3574d702ff217-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/06cdcc1cd320472ab3f3574d702ff217/?gd_sdk_referrer_url=https://gamedistribution.com/games/stick-fight-the-chaos/" },
        {name: "Wild West Match 2: The Gold Rush", imageUrl: "https://img.gamedistribution.com/f7fbc6f936784b65bf840485739e8641-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/f7fbc6f936784b65bf840485739e8641/?gd_sdk_referrer_url=https://gamedistribution.com/games/wild-west-match-2:-the-gold-rush/" },
        {name: "Stick Man Battle Fighting", imageUrl: "https://img.gamedistribution.com/c3d7483a3e434e8e93559bfde4463dc5-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/c3d7483a3e434e8e93559bfde4463dc5/?gd_sdk_referrer_url=https://gamedistribution.com/games/stick-man-battle-fighting/" },
        {name: "Parking Fury 3D: Beach City 2", imageUrl: "https://img.gamedistribution.com/6ca9e461efb84bfba46b29379378cf78-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/6ca9e461efb84bfba46b29379378cf78/?gd_sdk_referrer_url=https://gamedistribution.com/games/parking-fury-3d:-beach-city-2/" },
        {name: "Block Puzzle - Frozen Jewel", imageUrl: "https://img.gamedistribution.com/5031e968c8ac4af7ac8940ac35518b7c-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/5031e968c8ac4af7ac8940ac35518b7c/?gd_sdk_referrer_url=https://gamedistribution.com/games/block-puzzle-frozen-jewel/" },
        {name: "Elevator Fight", imageUrl: "https://img.gamedistribution.com/cf5bab9afce444d9bf00b672069e5653-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/cf5bab9afce444d9bf00b672069e5653/?gd_sdk_referrer_url=https://gamedistribution.com/games/elevator-fight/#iss=https%3A%2F%2Fidp.azerionconnect.com%2Fauth%2Frealms%2Fazerion" },
        {name: "Athena Match", imageUrl: "https://img.gamedistribution.com/084eb49bc3144485a8a15c3587bfb39f-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/084eb49bc3144485a8a15c3587bfb39f/?gd_sdk_referrer_url=https://gamedistribution.com/games/athena-match/" },
        {name: "Hero Fight Clash", imageUrl: "https://img.gamedistribution.com/b60e3a97ac674e939f2ad04e3a590714-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/b60e3a97ac674e939f2ad04e3a590714/?gd_sdk_referrer_url=https://gamedistribution.com/games/hero-fight-clash/" },
        {name: "Mr Bullet: Stealth Ninja Killstreak", imageUrl: "https://img.gamedistribution.com/5c3bbdcd66684b69aa7cb06ad3b7ccf3-512x384.jpg", gameUrl: "https://html5.gamedistribution.com/5c3bbdcd66684b69aa7cb06ad3b7ccf3/?gd_sdk_referrer_url=https://gamedistribution.com/games/mr-bullet:-stealth-ninja-killstreak/" },
        {name: "Drift Donut", imageUrl: "https://img.gamedistribution.com/f607d2f790ab400e95203e720e8061c1-1280x720.jpg", gameUrl: "https://html5.gamedistribution.com/f607d2f790ab400e95203e720e8061c1/?gd_sdk_referrer_url=https://gamedistribution.com/games/drift-donut/" },
        {name: "WorldCraft 3", imageUrl: "https://img.gamedistribution.com/a7c2f298ce5a4c6ea595b1f58cf5dc2a-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/a7c2f298ce5a4c6ea595b1f58cf5dc2a/?gd_sdk_referrer_url=https://gamedistribution.com/games/worldcraft-3/" },
        {name: "Warfare 1942 - online shooter", imageUrl: "https://img.gamedistribution.com/8cc62e5427cf443dab15634e5dfe7937-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/8cc62e5427cf443dab15634e5dfe7937/?gd_sdk_referrer_url=https://gamedistribution.com/games/warfare-1942-online-shooter/" },
        {name: "WarfareMadness Cars Destroy", imageUrl: "https://img.gamedistribution.com/2f5c17b7d11f449c9224f09041d1c312-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/2f5c17b7d11f449c9224f09041d1c312/?gd_sdk_referrer_url=https://gamedistribution.com/games/madness-cars-destroy/" },
        {name: "Daily Wordler", imageUrl: "https://img.gamedistribution.com/76696a6dfa6446feb73cf1fa6ecef4d1-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/76696a6dfa6446feb73cf1fa6ecef4d1/?gd_sdk_referrer_url=https://gamedistribution.com/games/daily-wordler/" },
        {name: "Card Battle", imageUrl: "https://img.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/c6db2fdd58c9463e9ef09757da6e3fc2/?gd_sdk_referrer_url=https://gamedistribution.com/games/card-battle/" },
        {name: "Noob in Geometry Dash", imageUrl: "https://img.gamedistribution.com/4d0faf326d03466baf7c0987d612c1a4-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/4d0faf326d03466baf7c0987d612c1a4/?gd_sdk_referrer_url=https://gamedistribution.com/games/noob-in-geometry-dash/" },
        {name: "Crazy Descent", imageUrl: "https://img.gamedistribution.com/d7352091e1f643ffa8370abcaeadd22d-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/d7352091e1f643ffa8370abcaeadd22d/?gd_sdk_referrer_url=https://gamedistribution.com/games/crazy-descent/" },
        {name: "Helix Crush", imageUrl: "https://img.gamedistribution.com/1900ce5bb7d344e3b12600f136c0a723-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/1900ce5bb7d344e3b12600f136c0a723/?gd_sdk_referrer_url=https://gamedistribution.com/games/helix-crush/" },
        {name: "Extreme Real Car Driving 2025", imageUrl: "https://img.gamedistribution.com/79c7a49fba6441a8899c011b1ea8b6e0-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/79c7a49fba6441a8899c011b1ea8b6e0/?gd_sdk_referrer_url=https://gamedistribution.com/games/extreme-real-car-driving-2025/" },
        {name: "WormsArena.io", imageUrl: "https://img.gamedistribution.com/de5f668c21a7489ebc62f932efb75f78-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/de5f668c21a7489ebc62f932efb75f78/?gd_sdk_referrer_url=https://gamedistribution.com/games/wormsarena.io" },
        {name: "Moto Road Rash 3D 2", imageUrl: "https://img.gamedistribution.com/0d6c422de82f4f6b832697ed1da3c0b7-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/0d6c422de82f4f6b832697ed1da3c0b7/?gd_sdk_referrer_url=https://gamedistribution.com/games/moto-road-rash-3d-2/" },
        {name: "Soccer Dash", imageUrl: "https://img.gamedistribution.com/5772350f4ea345959c4e56a24d94ee42-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/5772350f4ea345959c4e56a24d94ee42/?gd_sdk_referrer_url=https://gamedistribution.com/games/soccer-dash/" },
        {name: "Going Balls Adventure 2", imageUrl: "https://img.gamedistribution.com/a58f4f4fa6c34f21ad728e90c53ee7d4-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/a58f4f4fa6c34f21ad728e90c53ee7d4/?gd_sdk_referrer_url=https://gamedistribution.com/games/going-balls-adventure-2/" },
        {name: "Parking Fury 3D: Night City", imageUrl: "https://img.gamedistribution.com/13d99dac275842e1a64a13332962fbd1-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/13d99dac275842e1a64a13332962fbd1/?gd_sdk_referrer_url=https://gamedistribution.com/games/parking-fury-3d:-night-city/" },
        {name: "City Ambulance Car Driving", imageUrl: "https://img.gamedistribution.com/3c12886c8c5341e08b0f69da5120f17e-512x512.jpeg", gameUrl: "https://html5.gamedistribution.com/3c12886c8c5341e08b0f69da5120f17e/?gd_sdk_referrer_url=https://gamedistribution.com/games/city-ambulance-car-driving/" },
        {name: "Supermarket Manager Simulator", imageUrl: "https://img.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed-512x512.jpg", gameUrl: "https://html5.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed/?gd_sdk_referrer_url=https://gamedistribution.com/games/supermarket-manager-simulator/" }
    ]
};

// O'yinlarni render qilish
const renderGames = (category) => {
    const gameContainer = document.getElementById("game-cards-container");
    gameContainer.innerHTML = ''; // Kartalarni tozalash

    games[category].forEach(game => {
        const card = document.createElement("div");
        card.classList.add("game-card");
        card.setAttribute("data-game-url", game.gameUrl);

        const gameImage = document.createElement("img");
        gameImage.src = game.imageUrl;

        const gameName = document.createElement("div");
        gameName.classList.add("game-name");
        gameName.innerText = game.name;

        card.appendChild(gameImage);
        card.appendChild(gameName);
        gameContainer.appendChild(card);

        // O'yin ochish
        card.addEventListener("click", () => openGame(game.gameUrl));
    });
};

// O'yinni iframe orqali ochish
const openGame = (url) => {
    const iframeWrapper = document.getElementById("gameFrameWrapper");
    const iframe = document.getElementById("gameFrame");

    iframe.src = url;
    iframeWrapper.style.display = "flex"; // Ko'rsatish

    // Yopish tugmasi ishlashi
    document.getElementById("closeGame").onclick = () => {
        iframeWrapper.style.display = "none";
        iframe.src = ""; // Iframe-ni tozalash
    };

    // Fullscreen tugmasi ishlashi
    document.getElementById("fullscreenToggle").onclick = () => {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen(); // Iframe-ni fullscreen qilish
        } else if (iframe.mozRequestFullScreen) { // Firefox
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { // IE/Edge
            iframe.msRequestFullscreen();
        }
    };
};

// Navbar tugmalariga event listener qo'shish
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const category = e.target.getAttribute("data-category");
        renderGames(category);
    });
});

// Dastlabki kategoriya
renderGames('new');



const themeToggle = document.getElementById("themeToggle");

// LocalStorage dan saqlangan rejimni olish
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️"; // Tugma ikonkasini o‘zgartiramiz
}

// Tugmachani bosganda rejimni almashtirish
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️"; // Kunduzgi rejimga o‘tish tugmachasi
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙"; // Tungi rejimga o‘tish tugmachasi
    }
});
