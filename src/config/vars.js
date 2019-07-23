exports.collections = {}
exports.collections.config = 'config'
exports.collections.planets = 'planets'
exports.collections.users = 'users'

exports.subcollections = {}
exports.subcollections.users = {}
exports.subcollections.users.planets = 'planets'

exports.config = {}
exports.config.buildingObjects = 'buildingObjects'
exports.config.radarObjects = 'radarObjects'
exports.config.excavationObjects = 'excavationObjects'
exports.config.wasteCleaningObjects = 'wasteCleaningObjects'
exports.config.pollutionCleaningObjects = 'pollutionCleaningObjects'

exports.manualResources = ['wood', 'coal', 'iron', 'copper', 'stone']
exports.automatedResources = ['oil', 'uranium', 'water']
exports.manualProducts = ['cog', 'pipe', 'wire', 'rod', 'greenChip']

exports.functions = {}
exports.functions.test = 'test'
exports.functions.resourceClick = 'resourceClick'