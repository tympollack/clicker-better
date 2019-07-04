exports.buildingObjects = {
    pickaxe: {
        name: 'Pickaxe',
        verb: 'Harvest',
        amount: 1,
        efficiency: 1,
        produces: {},
        cost: {
            wood: .1,
            iron: .1
        },
        drain: {},
        size: {
            length: 0,
            width: 0,
            logistics: 0
        },
        group: 'manualObject'
    },
    handProcessor: {
        name: 'Hand Unit Processor',
        verb: 'Harvest',
        amount: 0,
        efficiency: 1,
        produces: {
            cog: 0,
            pipe: 0,
            wire: 0,
            rod: 0,
            greenChip: 0
        },
        cost: {
            ironPlate: 15,
            copperPlate: 15
        },
        drain: {},
        size: {
            length: 0,
            width: 0,
            logistics: 0
        },
        group: 'manualObject'
    },
    explore: {
        name: 'Discover Land',
        verb: 'Discover',
        amount: 0,
        efficiency: 1000,
        produces: {},
        cost: {
            wood: .1,
            iron: .1,
            coal: .1
        },
        drain: {},
        size: {
            length: 0,
            width: 0,
            logistics: 0
        },
        group: 'manualObject'
    },
    restoreLand: {
        name: 'Restore Land',
        verb: 'Restore',
        amount: 0,
        efficiency: 1,
        produces: {},
        cost: {
            wood: .1,
            iron: .1,
            stone: 1
        },
        drain: {},
        size: {
            length: 0,
            width: 0,
            logistics: 0
        },
        group: 'manualObject'
    },
    waterLandfill: {
        name: 'Fill in Water',
        verb: 'Fill',
        amount: 0,
        efficiency: 1,
        produces: {},
        cost: {
            wood: .1,
            iron: .1,
            stone: 10
        },
        drain: {},
        size: {
            length: 0,
            width: 0,
            logistics: 0
        },
        group: 'manualObject'
    },
    woodChipper: {
        name: 'Wood Chipper',
        verb: 'Cut wood',
        period: 2,
        amount: 0,
        efficiency: 1,
        produces: {
            wood: 1
        },
        cost: {
            ironPlate: 1,
            cog: 3,
            wire: 2
        },
        drain: {
            coal: .1
        },
        size: {
            length: 1,
            width: 1,
            logistics: 1
        },
        waste: .01,
        pollution: 1,
        group: 'misc'
    },
    radarTowerSmall: {
        name: 'Radar Tower - Small',
        verb: 'Discover',
        period: 1,
        amount: 0,
        efficiency: 30,
        produces: {},
        cost: {
            ironPlate: 250,
            cog: 125,
            wire: 150,
            greenChip: 50
        },
        drain: {
            electricity: 35
        },
        size: {
            length: 2,
            width: 2,
            logistics: 0
        },
        waste: 0,
        pollution: 0,
        group: 'misc'
    },
    excavator1: {
        name: 'Excavator 1',
        verb: 'Restore',
        period: 1,
        amount: 0,
        efficiency: .01,
        produces: {},
        cost: {
            ironPlate: 50,
            steel: 15,
            cog: 25,
            wire: 25,
            greenChip: 10
        },
        drain: {
            coal: .1,
            stone: .2
        },
        size: {
            length: 0,
            width: 0,
            logistics: 0
        },
        waste: .01,
        pollution: 5,
        group: 'misc'
    },
    storageCrateWood: {
        name: 'Storage Crate - Wood',
        verb: 'store',
        period: 0,
        amount: 1,
        efficiency: 2000,
        produces: {},
        cost: {
            wood: 8
        },
        drain: {},
        size: {
            length: 1,
            width: 1,
            logistics: 0
        },
        waste: 0,
        pollution: 0,
        group: 'storage'
    },
    storageCrateIron: {
        name: 'Storage Crate - Iron',
        verb: 'store',
        period: 0,
        amount: 0,
        efficiency: 4000,
        produces: {},
        cost: {
            ironPlate: 8
        },
        drain: {},
        size: {
            length: 1,
            width: 1,
            logistics: 0
        },
        waste: 0,
        pollution: 0,
        group: 'storage'
    },
    storageCrateSteel: {
        name: 'Storage Crate - Steel',
        verb: 'store',
        period: 0,
        amount: 0,
        efficiency: 8000,
        produces: {},
        cost: {
            steel: 8
        },
        drain: {},
        size: {
            length: 1,
            width: 2,
            logistics: 0
        },
        waste: 0,
        pollution: 0,
        group: 'storage'
    },
    storageShed: {
        name: 'Storage Shed',
        verb: 'store',
        period: 0,
        amount: 0,
        efficiency: 64000,
        produces: {},
        cost: {
            wood: 50,
            rod: 5,
            concrete: 2
        },
        drain: {},
        size: {
            length: 2,
            width: 2,
            logistics: 0
        },
        waste: 0,
        pollution: 0,
        group: 'storage'
    },
    storageUnit: {
        name: 'Storage Unit',
        verb: 'store',
        period: 0,
        amount: 0,
        efficiency: 256000,
        produces: {},
        cost: {
            ironPlate: 75,
            rod: 100,
            concrete: 200,
            steel: 25
        },
        drain: {},
        size: {
            length: 5,
            width: 5,
            logistics: 0
        },
        waste: 0,
        pollution: 0,
        group: 'storage'
    },
    storageWarehouse: {
        name: 'Warehouse',
        verb: 'store',
        period: 0,
        amount: 0,
        efficiency: 1024000,
        produces: {},
        cost: {
            ironPlate: 75,
            rod: 100,
            concrete: 200,
            steel: 25
        },
        drain: {},
        size: {
            length: 12,
            width: 6,
            logistics: 0
        },
        waste: 0,
        pollution: 0,
        group: 'storage'
    },
    coalDrillCoal: {
        name: 'Coal-powered Drill - Coal',
        verb: 'Harvest coal',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            coal: 1
        },
        cost: {
            ironPlate: 10,
            stone: 5
        },
        drain: {
            coal: .1
        },
        size: {
            length: 2,
            width: 2,
            logistics: 2
        },
        waste: .05,
        pollution: 10,
        group: 'harvesting'
    },
    coalDrillIron: {
        name: 'Coal-powered Drill - Iron',
        verb: 'Harvest iron',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            iron: 1
        },
        cost: {
            ironPlate: 10,
            stone: 5
        },
        drain: {
            coal: .1
        },
        size: {
            length: 2,
            width: 2,
            logistics: 4
        },
        waste: .05,
        pollution: 10,
        group: 'harvesting'
    },
    coalDrillCopper: {
        name: 'Coal-powered Drill - Copper',
        verb: 'Harvest copper',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            copper: 1
        },
        cost: {
            ironPlate: 10,
            stone: 5
        },
        drain: {
            coal: .1
        },
        size: {
            length: 2,
            width: 2,
            logistics: 4
        },
        waste: .05,
        pollution: 10,
        group: 'harvesting'
    },
    coalDrillStone: {
        name: 'Coal-powered Drill - Stone',
        verb: 'Harvest stone',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            stone: 1
        },
        cost: {
            ironPlate: 10,
            stone: 5
        },
        drain: {
            coal: .1
        },
        size: {
            length: 2,
            width: 2,
            logistics: 4
        },
        waste: .05,
        pollution: 10,
        group: 'harvesting'
    },
    electricDrillCoal: {
        name: 'Electric Drill - Coal',
        verb: 'Harvest coal faster',
        period: 2,
        amount: 0,
        efficiency: 1,
        produces: {
            coal: 5
        },
        cost: {
            ironPlate: 250,
            cog: 125,
            greenChip: 50
        },
        drain: {
            electricity: 10
        },
        size: {
            length: 3,
            width: 3,
            logistics: 3
        },
        waste: .075,
        pollution: 5,
        group: 'harvesting'
    },
    electricDrillIron: {
        name: 'Electric Drill - Iron',
        verb: 'Harvest iron faster',
        period: 2,
        amount: 0,
        efficiency: 1,
        produces: {
            iron: 5
        },
        cost: {
            ironPlate: 250,
            cog: 125,
            greenChip: 50
        },
        drain: {
            electricity: 10
        },
        size: {
            length: 3,
            width: 3,
            logistics: 3
        },
        waste: .075,
        pollution: 5,
        group: 'harvesting'
    },
    electricDrillCopper: {
        name: 'Electric Drill - Copper',
        verb: 'Harvest copper faster',
        period: 2,
        amount: 0,
        efficiency: 1,
        produces: {
            copper: 5
        },
        cost: {
            ironPlate: 250,
            cog: 125,
            greenChip: 50
        },
        drain: {
            electricity: 10
        },
        size: {
            length: 3,
            width: 3,
            logistics: 3
        },
        waste: .075,
        pollution: 5,
        group: 'harvesting'
    },
    electricDrillStone: {
        name: 'Electric Drill - Stone',
        verb: 'Harvest stone faster',
        period: 2,
        amount: 0,
        efficiency: 1,
        produces: {
            stone: 5
        },
        cost: {
            ironPlate: 250,
            cog: 125,
            greenChip: 50
        },
        drain: {
            electricity: 10
        },
        size: {
            length: 3,
            width: 3,
            logistics: 3
        },
        waste: .075,
        pollution: 5,
        group: 'harvesting'
    },
    miningRobotCoal: {
        name: 'Mining Robot - Coal',
        verb: 'harvest',
        period: 10,
        amount: 0,
        efficiency: 1,
        produces: {
            coal: 35
        },
        cost: {
            robotBody: 1,
            greenChip: 2
        },
        drain: {
            electricity: 5,
            robotSpace: 1
        },
        size: {
            length: 0,
            width: 0,
            logistics: 0
        },
        waste: .025,
        pollution: 1,
        group: 'robotics'
    },
    miningRobotIron: {
        name: 'Mining Robot - Iron',
        verb: 'harvest',
        period: 10,
        amount: 0,
        efficiency: 1,
        produces: {
            iron: 35
        },
        cost: {
            robotBody: 1,
            greenChip: 2
        },
        drain: {
            electricity: 5,
            robotSpace: 1
        },
        size: {
            length: 0,
            width: 0,
            logistics: 0
        },
        waste: .025,
        pollution: 1,
        group: 'robotics'
    },
    miningRobotCopper: {
        name: 'Mining Robot - Copper',
        verb: 'harvest',
        period: 10,
        amount: 0,
        efficiency: 1,
        produces: {
            copper: 35
        },
        cost: {
            robotBody: 1,
            greenChip: 2
        },
        drain: {
            electricity: 5,
            robotSpace: 1
        },
        size: {
            length: 0,
            width: 0,
            logistics: 0
        },
        waste: .025,
        pollution: 1,
        group: 'robotics'
    },
    miningRobotStone: {
        name: 'Mining Robot - Stone',
        verb: 'harvest',
        period: 10,
        amount: 0,
        efficiency: 1,
        produces: {
            stone: 35
        },
        cost: {
            robotBody: 1,
            greenChip: 2
        },
        drain: {
            electricity: 5,
            robotSpace: 1
        },
        size: {
            length: 0,
            width: 0,
            logistics: 0
        },
        waste: .025,
        pollution: 1,
        group: 'robotics'
    },
    miningRobotUranium: {
        name: 'Mining Robot - Uranium',
        verb: 'harvest',
        period: 10,
        amount: 0,
        efficiency: 1,
        produces: {
            uranium: 35
        },
        cost: {
            robotBody: 1,
            greenChip: 2
        },
        drain: {
            electricity: 5,
            robotSpace: 1
        },
        size: {
            length: 0,
            width: 0,
            logistics: 0
        },
        waste: .025,
        pollution: 1,
        group: 'robotics'
    },
    smelterIron: {
        name: 'Iron Smelter',
        verb: 'smelt',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            ironPlate: 1
        },
        cost: {
            stone: 5
        },
        drain: {
            iron: 1,
            coal: .2
        },
        size: {
            length: 2,
            width: 2,
            logistics: 4
        },
        waste: .1,
        pollution: 20,
        group: 'smelting'
    },
    smelterCopper: {
        name: 'Copper Smelter',
        verb: 'smelt',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            copperPlate: 1
        },
        cost: {
            stone: 5
        },
        drain: {
            coal: .2,
            copper: 1
        },
        size: {
            length: 2,
            width: 2,
            logistics: 4
        },
        waste: .1,
        pollution: 20,
        group: 'smelting'
    },
    smelterStone: {
        name: 'Stone Smelter',
        verb: 'smelt',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            brick: 1
        },
        cost: {
            stone: 5
        },
        drain: {
            coal: .2,
            stone: 2
        },
        size: {
            length: 2,
            width: 2,
            logistics: 4
        },
        waste: .1,
        pollution: 20,
        group: 'smelting'
    },
    smelterSteel: {
        name: 'Steel Smelter',
        verb: 'smelt',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            steel: 1
        },
        cost: {
            stone: 5
        },
        drain: {
            coal: .2,
            ironPlate: 5
        },
        size: {
            length: 2,
            width: 2,
            logistics: 4
        },
        waste: .1,
        pollution: 20,
        group: 'smelting'
    },
    advancedSmelterIron: {
        name: 'Advanced Iron Smelter',
        verb: 'smelt',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            ironPlate: 2
        },
        cost: {
            brick: 10,
            steel: 5
        },
        drain: {
            coal: .5,
            iron: 2
        },
        size: {
            length: 2,
            width: 2,
            logistics: 4
        },
        waste: .2,
        pollution: 40,
        group: 'smelting'
    },
    advancedSmelterCopper: {
        name: 'Advanced Copper Smelter',
        verb: 'smelt',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            copperPlate: 2
        },
        cost: {
            brick: 10,
            steel: 5
        },
        drain: {
            coal: .5,
            copper: 2
        },
        size: {
            length: 2,
            width: 2,
            logistics: 4
        },
        waste: .2,
        pollution: 40,
        group: 'smelting'
    },
    advancedSmelterStone: {
        name: 'Advanced Stone Smelter',
        verb: 'smelt',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            brick: 2
        },
        cost: {
            brick: 10,
            steel: 5
        },
        drain: {
            coal: .5,
            stone: 4
        },
        size: {
            length: 2,
            width: 2,
            logistics: 4
        },
        waste: .2,
        pollution: 40,
        group: 'smelting'
    },
    advancedSmelterSteel: {
        name: 'Advanced Steel Smelter',
        verb: 'smelt',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            steel: 2
        },
        cost: {
            brick: 10,
            steel: 5
        },
        drain: {
            coal: .5,
            ironPlate: 10
        },
        size: {
            length: 2,
            width: 2,
            logistics: 4
        },
        waste: .2,
        pollution: 40,
        group: 'smelting'
    },
    electricSmelterIron: {
        name: 'Electric Iron Smelter',
        verb: 'smelt',
        period: 2,
        amount: 0,
        efficiency: 1,
        produces: {
            ironPlate: 5
        },
        cost: {
            brick: 10,
            steel: 10,
            redChip: 5
        },
        drain: {
            electricity: 20,
            iron: 3
        },
        size: {
            length: 3,
            width: 3,
            logistics: 6
        },
        waste: .25,
        pollution: 10,
        group: 'smelting'
    },
    electricSmelterCopper: {
        name: 'Electric Copper Smelter',
        verb: 'smelt',
        period: 2,
        amount: 0,
        efficiency: 1,
        produces: {
            copperPlate: 5
        },
        cost: {
            brick: 10,
            steel: 10,
            redChip: 5
        },
        drain: {
            electricity: 20,
            copper: 3
        },
        size: {
            length: 3,
            width: 3,
            logistics: 6
        },
        waste: .25,
        pollution: 10,
        group: 'smelting'
    },
    electricSmelterStone: {
        name: 'Electric Stone Smelter',
        verb: 'smelt',
        period: 2,
        amount: 0,
        efficiency: 1,
        produces: {
            brick: 5
        },
        cost: {
            brick: 10,
            steel: 10,
            redChip: 5
        },
        drain: {
            electricity: 20,
            stone: 6
        },
        size: {
            length: 3,
            width: 3,
            logistics: 6
        },
        waste: .25,
        pollution: 10,
        group: 'smelting'
    },
    electricSmelterSteel: {
        name: 'Electric Steel Smelter',
        verb: 'smelt',
        period: 2,
        amount: 0,
        efficiency: 1,
        produces: {
            steel: 5
        },
        cost: {
            brick: 10,
            steel: 10,
            redChip: 5
        },
        drain: {
            electricity: 20,
            ironPlate: 15
        },
        size: {
            length: 3,
            width: 3,
            logistics: 6
        },
        waste: .25,
        pollution: 10,
        group: 'smelting'
    },
    steamEngine: {
        name: 'Steam Engine',
        verb: 'produce',
        period: 0,
        amount: 0,
        efficiency: 1,
        produces: {
            electricity: 100
        },
        cost: {
            ironPlate: 10,
            cog: 9,
            pipe: 10,
            stone: 5,
            greenChip: 2
        },
        drain: {
            coal: 1
        },
        size: {
            length: 7,
            width: 3,
            logistics: 2
        },
        waste: 0,
        pollution: 80,
        group: 'electricity'
    },
    solarPanel: {
        name: 'Solar Panel',
        verb: 'produce',
        period: 0,
        amount: 0,
        efficiency: 1,
        produces: {
            electricity: 42
        },
        cost: {
            greenChip: 15,
            steel: 5,
            copperPlate: 5,
            battery: 5,
            ironPlate: 2
        },
        drain: {},
        size: {
            length: 4,
            width: 3,
            logistics: 0
        },
        waste: 0,
        pollution: 0,
        group: 'electricity'
    },
    oilPump: {
        name: 'Oil Pump',
        verb: 'harvest',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            oil: 10
        },
        cost: {
            greenChip: 5,
            steel: 5,
            cog: 10,
            pipe: 20
        },
        drain: {
            electricity: 10
        },
        size: {
            length: 3,
            width: 3,
            logistics: 1
        },
        waste: 0,
        pollution: 30,
        group: 'liquid'
    },
    waterPump: {
        name: 'Water Pump',
        verb: 'harvest',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            water: 10
        },
        cost: {
            greenChip: 2,
            cog: 5,
            pipe: 15
        },
        drain: {
            electricity: 5
        },
        size: {
            length: 3,
            width: 1,
            logistics: 1
        },
        waste: 0,
        pollution: 0,
        group: 'liquid'
    },
    oilRefinery: {
        name: 'Oil Refinery',
        verb: 'refine',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            lightOil: 6,
            petroleum: 4
        },
        cost: {
            greenChip: 10,
            cog: 10,
            pipe: 30,
            steel: 15,
            brick: 10
        },
        drain: {
            electricity: 35,
            oil: 10
        },
        size: {
            length: 5,
            width: 5,
            logistics: 3
        },
        waste: .05,
        pollution: 50,
        group: 'liquid'
    },
    lightOilCrackingChemicalPlant: {
        name: 'Light Oil to Petroleum',
        verb: 'refine',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            petroleum: 2
        },
        cost: {
            greenChip: 5,
            cog: 5,
            pipe: 10,
            steel: 5
        },
        drain: {
            electricity: 25,
            water: 6,
            lightOil: 7
        },
        size: {
            length: 3,
            width: 3,
            logistics: 3
        },
        waste: .03,
        pollution: 50,
        group: 'liquid'
    },
    sulfurChemicalPlant: {
        name: 'Sulfur Chemical Plant',
        verb: 'refine',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            sulfur: 2
        },
        cost: {
            greenChip: 5,
            cog: 5,
            pipe: 10,
            steel: 5
        },
        drain: {
            electricity: 25,
            water: 3,
            petroleum: 3
        },
        size: {
            length: 3,
            width: 3,
            logistics: 5
        },
        waste: .03,
        pollution: 50,
        group: 'liquid'
    },
    sulfuricAcidChemicalPlant: {
        name: 'Sulfuric Acid Chemical Plant',
        verb: 'refine',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            sulfuricAcid: 5
        },
        cost: {
            greenChip: 5,
            cog: 5,
            pipe: 10,
            steel: 5
        },
        drain: {
            electricity: 25,
            sulfur: 5,
            ironPlate: 1,
            water: 10
        },
        size: {
            length: 3,
            width: 3,
            logistics: 8
        },
        waste: .03,
        pollution: 50,
        group: 'liquid'
    },
    plasticChemicalPlant: {
        name: 'Plastic Chemical Plant',
        verb: 'refine',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            plastic: 2
        },
        cost: {
            greenChip: 5,
            cog: 5,
            pipe: 10,
            steel: 5
        },
        drain: {
            electricity: 25,
            coal: 1,
            petroleum: 2
        },
        size: {
            length: 3,
            width: 3,
            logistics: 7
        },
        waste: .03,
        pollution: 50,
        group: 'liquid'
    },
    batteryChemicalPlant: {
        name: 'Battery Chemical Plant',
        verb: 'refine',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            battery: 1
        },
        cost: {
            greenChip: 5,
            cog: 5,
            pipe: 10,
            steel: 5
        },
        drain: {
            electricity: 25,
            ironPlate: 1,
            copperPlate: 1,
            sulfuricAcid: 2
        },
        size: {
            length: 3,
            width: 3,
            logistics: 7
        },
        waste: .03,
        pollution: 50,
        group: 'liquid'
    },
    solidFuelLightOilChemicalPlant: {
        name: 'Solid Fuel Chemical Plant - from light oil',
        verb: 'refine',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            solidFuel: 1
        },
        cost: {
            greenChip: 5,
            cog: 5,
            pipe: 10,
            steel: 5
        },
        drain: {
            electricity: 25,
            lightOil: 3
        },
        size: {
            length: 3,
            width: 3,
            logistics: 4
        },
        waste: .03,
        pollution: 50,
        group: 'liquid'
    },
    solidFuelPetroleumChemicalPlant: {
        name: 'Solid Fuel Chemical Plant - from petroleum',
        verb: 'refine',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            solidFuel: 1
        },
        cost: {
            greenChip: 5,
            cog: 5,
            pipe: 10,
            steel: 5
        },
        drain: {
            electricity: 25,
            petroleum: 2
        },
        size: {
            length: 3,
            width: 3,
            logistics: 4
        },
        waste: .03,
        pollution: 50,
        group: 'liquid'
    },
    explosivesChemicalPlant: {
        name: 'Explosives Chemical Plant',
        verb: 'refine',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            explosives: 1
        },
        cost: {
            greenChip: 5,
            cog: 5,
            pipe: 10,
            steel: 5
        },
        drain: {
            electricity: 25,
            sulfur: 1,
            coal: 1,
            water: 1
        },
        size: {
            length: 3,
            width: 3,
            logistics: 7
        },
        waste: .03,
        pollution: 50,
        group: 'liquid'
    },
    cogAssembler: {
        name: 'Cog Assembler',
        verb: 'produce',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            cog: 1
        },
        cost: {
            ironPlate: 30,
            cog: 20,
            rod: 10,
            greenChip: 10
        },
        drain: {
            ironPlate: 1,
            electricity: 10
        },
        size: {
            length: 3,
            width: 3,
            logistics: 6
        },
        waste: .01,
        pollution: 30,
        group: 'production'
    },
    rodAssembler: {
        name: 'Iron Rod Assembler',
        verb: 'produce',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            rod: 1
        },
        cost: {
            ironPlate: 30,
            cog: 20,
            rod: 10,
            greenChip: 10
        },
        drain: {
            ironPlate: 1,
            electricity: 10
        },
        size: {
            length: 3,
            width: 3,
            logistics: 6
        },
        waste: .01,
        pollution: 30,
        group: 'production'
    },
    pipeAssembler: {
        name: 'Pipe Assembler',
        verb: 'produce',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            pipe: 1
        },
        cost: {
            ironPlate: 30,
            cog: 20,
            rod: 10,
            greenChip: 10
        },
        drain: {
            ironPlate: 1,
            electricity: 10
        },
        size: {
            length: 3,
            width: 3,
            logistics: 6
        },
        waste: .01,
        pollution: 30,
        group: 'production'
    },
    wireAssembler: {
        name: 'Wire Assembler',
        verb: 'produce',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            wire: 1
        },
        cost: {
            ironPlate: 30,
            cog: 20,
            rod: 10,
            greenChip: 10
        },
        drain: {
            copperPlate: 1,
            electricity: 10
        },
        size: {
            length: 3,
            width: 3,
            logistics: 6
        },
        waste: .01,
        pollution: 30,
        group: 'production'
    },
    greenChipAssembler: {
        name: 'Green Chip Assembler',
        verb: 'produce',
        period: 2,
        amount: 0,
        efficiency: 1,
        produces: {
            greenChip: 1
        },
        cost: {
            ironPlate: 30,
            cog: 20,
            rod: 10,
            greenChip: 10
        },
        drain: {
            wire: 3,
            ironPlate: 1,
            electricity: 10
        },
        size: {
            length: 3,
            width: 3,
            logistics: 6
        },
        waste: .01,
        pollution: 30,
        group: 'production'
    },
    concreteAssembler: {
        name: 'Concrete Assembler',
        verb: 'produce',
        period: 3,
        amount: 0,
        efficiency: 1,
        produces: {
            concrete: 1
        },
        cost: {
            ironPlate: 60,
            cog: 40,
            rod: 20,
            greenChip: 20
        },
        drain: {
            brick: 5,
            iron: 1,
            water: 10,
            electricity: 20
        },
        size: {
            length: 3,
            width: 3,
            logistics: 7
        },
        waste: .02,
        pollution: 50,
        group: 'production'
    },
    engineAssembler: {
        name: 'Engine Assembler',
        verb: 'produce',
        period: 3,
        amount: 0,
        efficiency: 1,
        produces: {
            engine: 1
        },
        cost: {
            ironPlate: 60,
            cog: 40,
            rod: 20,
            greenChip: 20
        },
        drain: {
            electricity: 20,
            cog: 1,
            steel: 1,
            pipe: 2
        },
        size: {
            length: 3,
            width: 3,
            logistics: 9
        },
        waste: .02,
        pollution: 50,
        group: 'production'
    },
    redChipAssembler: {
        name: 'Red Chip Assembler',
        verb: 'produce',
        period: 3,
        amount: 0,
        efficiency: 1,
        produces: {
            redChip: 1
        },
        cost: {
            ironPlate: 60,
            cog: 40,
            rod: 20,
            greenChip: 20
        },
        drain: {
            electricity: 20,
            greenChip: 2,
            wire: 4,
            plastic: 2
        },
        size: {
            length: 3,
            width: 3,
            logistics: 9
        },
        waste: .02,
        pollution: 50,
        group: 'production'
    },
    electricEngineAssmebler: {
        name: 'Electric Engine Assembler',
        verb: 'produce',
        period: 5,
        amount: 0,
        efficiency: 1,
        produces: {
            electricEngine: 1
        },
        cost: {
            ironPlate: 120,
            cog: 80,
            rod: 40,
            greenChip: 60,
            redChip: 20
        },
        drain: {
            electricity: 25,
            lightOil: 15,
            engine: 1,
            greenChip: 2
        },
        size: {
            length: 3,
            width: 3,
            logistics: 7
        },
        waste: .04,
        pollution: 70,
        group: 'production'
    },
    purpleChipAssembler: {
        name: 'Purple Chip Assembler',
        verb: 'produce',
        period: 5,
        amount: 0,
        efficiency: 1,
        produces: {
            purpleChip: 1
        },
        cost: {
            ironPlate: 120,
            cog: 80,
            rod: 40,
            greenChip: 60,
            redChip: 20
        },
        drain: {
            electricity: 25,
            greenChip: 20,
            redChip: 2,
            sulfuricAcid: 5
        },
        size: {
            length: 3,
            width: 3,
            logistics: 9
        },
        waste: .04,
        pollution: 50,
        group: 'production'
    },
    robotBodyAssembler: {
        name: 'Robot Body Assembler',
        verb: 'produce',
        period: 5,
        amount: 0,
        efficiency: 1,
        produces: {
            robotBody: 1
        },
        cost: {
            ironPlate: 120,
            cog: 80,
            rod: 40,
            greenChip: 60,
            redChip: 20
        },
        drain: {
            electricity: 25,
            electricEngine: 1,
            battery: 2,
            steel: 1,
            greenChip: 3
        },
        size: {
            length: 3,
            width: 3,
            logistics: 9
        },
        waste: .04,
        pollution: 70,
        group: 'production'
    },
    roboticsFacility: {
        name: 'Robotics Facility',
        verb: 'robot housing',
        period: 0,
        amount: 0,
        efficiency: 1,
        produces: {
            robotSpace: 8
        },
        cost: {
            steel: 45,
            cog: 45,
            redChip: 45
        },
        drain: {
            electricity: 100
        },
        size: {
            length: 4,
            width: 4,
            logistics: 0
        },
        waste: 0,
        pollution: 5,
        group: 'robotics'
    },
    logisticsRobot: {
        name: 'Logistics Robot',
        verb: 'produce',
        period: 0,
        amount: 0,
        efficiency: 25,
        produces: {},
        cost: {
            robotBody: 1,
            redChip: 2
        },
        drain: {
            electricity: 5,
            robotSpace: 1
        },
        size: {
            length: 0,
            width: 0,
            logistics: 0
        },
        waste: 0,
        pollution: 0,
        group: 'robotics'
    },
    recyclerRobot: {
        name: 'Recycler Robot',
        verb: 'produce',
        period: 0,
        amount: 0,
        efficiency: 10,
        produces: {},
        cost: {
            robotBody: 1,
            purpleChip: 1
        },
        drain: {
            electricity: 5,
            robotSpace: 1
        },
        size: {
            length: 0,
            width: 0,
            logistics: 0
        },
        waste: 0,
        pollution: 0,
        group: 'robotics'
    },
    airScrubberRobot: {
        name: 'Air Scubber Robot',
        verb: 'produce',
        period: 0,
        amount: 0,
        efficiency: 10,
        produces: {},
        cost: {
            robotBody: 1,
            purpleChip: 1
        },
        drain: {
            electricity: 5,
            robotSpace: 1
        },
        size: {
            length: 0,
            width: 0,
            logistics: 0
        },
        waste: 0,
        pollution: 0,
        group: 'robotics'
    },
    researchLab1: {
        name: 'Research Lab 1',
        verb: 'research',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            science1: 1
        },
        cost: {
            ironPlate: 4,
            cog: 15,
            greenChip: 10
        },
        drain: {
            electricity: 10,
            copperPlate: 1,
            cog: 1
        },
        size: {
            length: 3,
            width: 3,
            logistics: 3
        },
        waste: .02,
        pollution: 0,
        group: 'research'
    },
    researchLab2: {
        name: 'Research Lab 2',
        verb: 'research',
        period: 1,
        amount: 0,
        efficiency: 1,
        produces: {
            science2: 1
        },
        cost: {
            ironPlate: 4,
            cog: 15,
            greenChip: 10
        },
        drain: {
            electricity: 10,
            ironPlate: 2,
            cog: 2,
            greenChip: 1
        },
        size: {
            length: 3,
            width: 3,
            logistics: 6
        },
        waste: .05,
        pollution: 0,
        group: 'research'
    },
    researchLab3: {
        name: 'Research Lab 3',
        verb: 'research',
        period: 2,
        amount: 0,
        efficiency: 1,
        produces: {
            science3: 1
        },
        cost: {
            ironPlate: 4,
            cog: 15,
            greenChip: 10
        },
        drain: {
            electricity: 10,
            redChip: 1,
            engine: 1,
            greenChip: 3,
            cog: 5,
            ironPlate: 10
        },
        size: {
            length: 3,
            width: 3,
            logistics: 9
        },
        waste: .1,
        pollution: 0,
        group: 'research'
    },
    researchLab4: {
        name: 'Research Lab 4',
        verb: 'research',
        period: 2,
        amount: 0,
        efficiency: 1,
        produces: {
            science4: 2
        },
        cost: {
            ironPlate: 4,
            cog: 15,
            greenChip: 10
        },
        drain: {
            electricity: 10,
            ironPlate: 30,
            cog: 10,
            coal: 10,
            copperPlate: 15,
            steel: 1,
            explosives: 1
        },
        size: {
            length: 3,
            width: 3,
            logistics: 9
        },
        waste: .33,
        pollution: 0,
        group: 'research'
    },
    researchLab5: {
        name: 'Research Lab 5',
        verb: 'research',
        period: 3,
        amount: 0,
        efficiency: 1,
        produces: {
            science5: 2
        },
        cost: {
            ironPlate: 4,
            cog: 15,
            greenChip: 10
        },
        drain: {
            electricity: 10,
            electricEngine: 1,
            greenChip: 3,
            redChip: 5,
            steel: 10,
            ironPlate: 10,
            brick: 10,
            cog: 5
        },
        size: {
            length: 3,
            width: 3,
            logistics: 12
        },
        waste: .15,
        pollution: 0,
        group: 'research'
    },
    researchLab6: {
        name: 'Research Lab 6',
        verb: 'research',
        period: 3,
        amount: 0,
        efficiency: 1,
        produces: {
            science6: 2
        },
        cost: {
            ironPlate: 4,
            cog: 15,
            greenChip: 10
        },
        drain: {
            electricity: 10,
            copper: 30,
            battery: 1,
            purpleChip: 3,
            greenChip: 5,
            redChip: 5
        },
        size: {
            length: 3,
            width: 3,
            logistics: 9
        },
        waste: .15,
        pollution: 0,
        group: 'research'
    }
}