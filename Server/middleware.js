// module.exports= verifyToken = (req, res, next) => {
//   const { authorization } = req.headers;
//   //authorization === Bearer ewefwegwrherhe
//   if (!authorization) {
//     return res.status(401).json({ error: 'you must be logged in' });
//   }
//   const token = authorization.replace('Bearer ', '');
//   jwt.verify(token, JWT_SECRET, (err, payload) => {
//     if (err) {
//       return res.status(401).json({ error: 'you must be logged in' });
//     }

//     const { _id } = payload;
//     UserMOdel.findById(_id).then((userdata) => {
//       req.user = userdata;
//       next();
//     });
//   });
// };
// // app.get('/protected', verifyToken, (req, res) => {
// //   res.send('ok middlware');
// // });
// below middlware starts
// const verifyToken = (req, res, next) => {
//   const { authorization } = req.headers;
//   //authorization === Bearer ewefwegwrherhe
//   if (!authorization) {
//     return res.status(401).json({ error: 'you must be logged in' });
//   }
//   const token = authorization.replace('Bearer ', '');
//   jwt.verify(token, JWT_SECRET, (err, payload) => {
//     if (err) {
//       return res.status(401).json({ error: 'you must be logged in' });
//     }

//     const { _id } = payload;
//     UserMOdel.findById(_id).then((userdata) => {
//       req.user = userdata;
//       next();
//     });
//   });
// };
// // middlware ends
// app.get('/protected', verifyToken, (req, res) => {
//   res.send('ok middlware');
// });
