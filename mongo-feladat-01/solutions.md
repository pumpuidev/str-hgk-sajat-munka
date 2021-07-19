1.
use videoStore
2.
db.createCollection(...)
3.
db.movies.insertMany(...)
4.
db.movies.updateMany(... $set:...)
5.
db.movies.update(... $push:...)
6.
db.movies.updateMany(... $set: {releaseYear:...}...)
7.
db.movies.updateMany(... $set: { category: { $toUpper: "$category" } } )