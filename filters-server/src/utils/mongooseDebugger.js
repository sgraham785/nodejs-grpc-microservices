export default (err, docs) => {
  if (!err) {
    console.log(JSON.stringify(docs))
    process.exit()
  } else { throw err }
}
