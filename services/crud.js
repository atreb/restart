/*
in memory data store
automatically adds _id as record identifier
*/

let data = {
  "1512763024773": {
    "_id": "1512763024773",
    "name": "spiderman",
    "city": "Newyork"
  },
  "1512763026322": {
    "_id": "1512763026322",
    "name": "Superman",
    "city": "Metropolis"
  },
  "1512763027585": {
    "_id": "1512763027585",
    "name": "Batman",
    "city": "Gotham"
  }
};

const create = (record, cb) => {
  //return cb(new Error('some error'));
  if (record._id) return cb(new Error('record should not have an _id field'));
  record._id = new Date().getTime();
  data[record._id] = record;
  cb(null, record);
}

const update = (record, cb) => {
  if (!record._id) return cb(new Error('missing record._id'));
  data[record._id] = record;
  cb(null, record);
}

const remove = (_id, cb) => {
  //return cb(new Error('unable to delete record'));
  const record = Object.assign({}, data[_id]);
  delete data[_id];
  cb(null, record);//return deleted record
}

const getAll = (cb) => {
  //return cb(new Error('unable to fetch data'));
  cb(null, Object.keys(data).map(_id => data[_id]));
}

const getById = (id, cb) => {
  if (!data[_id]) return cb(new Error('no record for specified _id'))
  cb(null, data[_id]);
}

export default {
  create,
  update,
  remove,
  getAll,
  getById
}
