1.
use videoStore

2.
use videoStore
db.directors.insertOne({...})

3.
db.directors.insertOne(...)

4.
db.directors.find().forEach(... $push: ... $each: ... );

5.
db.directors.find().pretty()

6.
db.movies.updateMany({},
    { $unset: { director : "" } }
    )

7.
db.movies.find({
    releaseYear: {$lt: ...}
    })
db.movies.find({
    releaseYear: {$gt: ...}
    })

8.
db.movies.find({
    $and: [{ releaseYear: {$lt: ...} }, { releaseYear: {$gt: ...} }]
    })

9.
db.movies.find({ 
    releaseYear: { $gt: ....., $lt: ..... }, 
    category: "......" 
    })

10.
db.movies.find({
    category: { $ne: "..." }
    })