const router = require("express").Router();

// import any models you plan to use for this data's routes here
const { Comment } = require("../../models");

// Route: find a comment by it's id value **needs review**
  router.get('find-comment/:id', async (req, res) => {
    try {
      const commentData = await Comment.findByPk(req.params.id, {
        include: [{ model: Comment }],
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with that id!' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Route: create a new comment
router.post("/create-comment", async (req, res) => {
    try {
      const commentData = await Comment.create(req.body);
  
      req.session.save(() => {
        req.session.comment_id = commentData.id;
        req.session.text = commentData.text;
        req.session.user_id = comment.user_id;
  
        res.status(200).json(commentData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Route: change/update a comment **needs review**
router.put('/:update-comment/:id', async (req, res) => {
    try {
        const commentData = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
    } catch (err) {
        res.status(400).json(err);
      }
    });


  // Route: delete a comment
router.delete("/delete-comment/:id", async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {id:req.params.id},
      });
      res.status(200)
  
    } catch (err) {
      res.status(404).json(err);
    }
  });