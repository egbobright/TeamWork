//cloudinary 638333538773396
//cloudinary secret = 0rptyemXkfdMAa4HDqCQTG4frKU
// cloudinary CLOUDINARY_URL=cloudinary://638333538773396:0rptyemXkfdMAa4HDqCQTG4frKU@brightgbo


const promise = require('bluebird');
const options = {
  promiseLib : promise
}
const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/teamwork';
const db = pgp(connectionString);

//post function for creating a user account
const  createNewUser = (req, res, next) =>{
     db.none('INSERT INTO employees (staff_id, first_name, last_name,email, username, phone_no, password) VALUES (${staff_id}, ${first_name}, ${last_name}, ${email}, ${username}, ${phone_no},${password})', req.body)
    .then(()=>{
      res.status(201).json({
        status:'success',
        message:'new employee account created'
      });
    })
    .catch((error)=>{
       return next(error)
    })
  };

  //post request handler/function for a new article
const createNewArticle =(req, res, next)=>{
     db.none('INSERT INTO articles (username, article_id, title, content, date_created, date_updated, date_deleted, time_interval) VALUES(${username},${articleid}, ${title},${content},${date_created},${date_updated},${date_deleted},${time_interval})', req.body)
     .then(()=>{
       res.status(201).json({
         status:'success',
         message:'new article created'
       })
     }).catch((error)=>{
        return next(error);
     })
};

//post request handler/function for a new gif
const postNewGif = (req, res, next) =>{
     db.none('INSERT INTO gifs (username, content, date_created,date_deleted, time_interval)  VALUES(${username}, ${content}, ${date_created}, ${date_deleted},${time_interval})', req.body)
     .then(()=>{
       res.status(201).json({
         status:success,
         message:'a new gif successfully added'
       })
     }).catch((error)=>{
       return next(error);
     })
}

//post request handler/function for a comment on article
const createArticleComment =(req,res,next)=>{
  db.none('INSERT INTO article_comments(content,date_created,date_updated) VALUES (${content},${date_created},${date_updated})', req.body)
  .then(()=>{
    res.status(201).json({
      status:'success',
      message:'new article comment created'
    })
  }).catch((error)=>{
    return next(error);
  })
};

//post request handler/function for a comment on a gif
const createGifComment =(req,res,next)=>{
  db.none('INSERT INTO gif_comments (content,date_created,date_updated) VALUES (${content},${date_created},${date_updated})', req.body)
  .then(()=>{
    res.status(201).json({
      status:'success',
      message:'new gif comment created'
    })
  }).catch((error)=>{
    return next(error);
  })
};

//get request handler/function for getting a single article
const getSingleArticle = (req, res, next)=>{
  db.one('SELECT FROM articles WHERE ID =$1',req.params.id)
  .then((data)=>{
    res.status(200).json({
      status:'success',
      data:data,
      message:'A single article successfully gotten'
    })
  }).catch((error)=>{
       next(error);
  })
};

//get request handler/function for getting a single gif
const getSingleGif = (req, res, next)=>{
  db.one('SELECT FROM gifs WHERE ID =$1',req.params.id)
  .then((data)=>{
    res.status(200).json({
      status:'success',
      data:data,
      message:'A single gif successfully gotten'
    })
  }).catch((error)=>{
       next(error);
  })
};


const updateASingleArticle =(req, res, next)=>{

};

const deleteASingleArticle =(req, res, next)=>{
  db.one('DELETE ',req.params.id)
  .then(()=>{
    res.status(202).json({
      status:'success',
      message:'Article successfully deleted'
    })
  }).catch((error)=>{
    return next(error);
  })
};

const deleteASingleGif =(req, res, next)=>{
      db.one('DELETE ',req.params.id)
      .then(()=>{
        res.status(202).json({
          status:'success',
          message:'Gif successfully deleted'
        })
      }).catch((error)=>{
        return next(error);
      })
};

const getAllFeed =(req, res, next)=>{
     db.many('SELECT articles.title, articles.content, gif.content FROM articles INNER JOIN gifs ON articles.username = gif.username',req.body)
     .then((data)=>{
       res.status(200).json({
         status:'success',
         data:data,
         message:'all feeds retrieved'
       })
     })
}
module.exports ={
    getAllFeed:getAllFeed,
    getSingleArticle:getSingleArticle,
    getSingleGif:getSingleGif,
    createNewUser:createNewUser,
    createNewArticle:createNewArticle,
    postNewGif:postNewGif,
    createArticleComment:createArticleComment,
    createGifComment:createGifComment,
    updateASingleArticle:updateASingleArticle,
    deleteASingleArticle:deleteASingleArticle,
    deleteASingleGif:deleteASingleGif
}
