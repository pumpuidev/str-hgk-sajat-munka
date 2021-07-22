1.
use videoStore

2.
db.movies.find({ $or: [ { category: "ACTION" }, { category: "ROMANTIC" }] }).count()

3.
const vmi = db.movies.find({
    category: "FANTASY"}, 
    {"_id":0, "title":1, "category":1}
    )

4.
vmi.forEach(...)

5.
db.movies.find({}, ...sort(...)

6.
db.movies.find({}, ...sort(...)

7.
db.movies.find({}, ...).limit(1)

8.
db.movies.find({}, ...).limit(2)

9.
db.movies.find({"category": "ROMANTIC"}, ...).limit(1).skip(1)

10.
