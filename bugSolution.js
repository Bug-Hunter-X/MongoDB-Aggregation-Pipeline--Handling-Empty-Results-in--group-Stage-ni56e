```javascript
db.users.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $group: { _id: "$city", averageAge: { $avg: "$age" }, count: { $sum: 1 } } },
  { $match: { count: { $gt: 0 } } },
  { $sort: { averageAge: -1 } },
  { $limit: 1 },
  { $project: { _id: 1, averageAge: 1, count: 1, _noMatch: { $cond: [{ $eq: ["$count", 0] }, true, false] } } }
])
```